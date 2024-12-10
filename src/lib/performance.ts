import { captureError } from './sentry';
import { PerformanceMetric, PerformanceThresholds } from '@/home/types/performance';

// 扩展 PerformanceEntry 类型
interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
}

interface NavigationEntry extends PerformanceEntry {
  responseStart: number;
}

const performanceThresholds: PerformanceThresholds = {
  FCP: { good: 1800, poor: 3000 },
  LCP: { good: 2500, poor: 4000 },
  FID: { good: 100, poor: 300 },
  CLS: { good: 0.1, poor: 0.25 },
  TTFB: { good: 800, poor: 1800 },
  TTI: { good: 3800, poor: 7300 },
};

function getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const threshold = performanceThresholds[name];
  if (!threshold) return 'needs-improvement';

  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

export function measurePerformance(name: string, value: number): PerformanceMetric {
  return {
    name,
    value,
    rating: getRating(name, value),
    timestamp: Date.now(),
  };
}

export function reportPerformance(metric: PerformanceMetric) {
  // 这里可以将性能数据发送到分析服务
  console.log('Performance Metric:', metric);

  // 如果性能不佳，记录到 Sentry
  if (metric.rating === 'poor') {
    captureError(new Error(`Poor performance: ${metric.name}`), {
      metric,
      context: {
        url: window.location.href,
        userAgent: navigator.userAgent,
      },
    });
  }
}

export function initPerformanceMonitoring() {
  if (typeof window === 'undefined') return;

  // 监控 FCP
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      if (entry.name === 'first-contentful-paint') {
        reportPerformance(measurePerformance('FCP', entry.startTime));
      }
    }
  }).observe({ entryTypes: ['paint'] });

  // 监控 LCP
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      reportPerformance(measurePerformance('LCP', entry.startTime));
    }
  }).observe({ entryTypes: ['largest-contentful-paint'] });

  // 监控 FID
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      const firstInput = entry as FirstInputEntry;
      reportPerformance(
        measurePerformance('FID', firstInput.processingStart - firstInput.startTime)
      );
    }
  }).observe({ entryTypes: ['first-input'] });

  // 监控 CLS
  let clsValue = 0;
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      const layoutShift = entry as LayoutShiftEntry;
      if (!layoutShift.hadRecentInput) {
        clsValue += layoutShift.value;
        reportPerformance(measurePerformance('CLS', clsValue));
      }
    }
  }).observe({ entryTypes: ['layout-shift'] });

  // 监控 TTFB
  const entries = performance.getEntriesByType('navigation');
  if (entries.length > 0) {
    const navigationEntry = entries[0] as NavigationEntry;
    reportPerformance(measurePerformance('TTFB', navigationEntry.responseStart));
  }
} 