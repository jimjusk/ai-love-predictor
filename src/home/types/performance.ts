export interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
}

export interface PerformanceData {
  FCP: number;  // First Contentful Paint
  LCP: number;  // Largest Contentful Paint
  FID: number;  // First Input Delay
  CLS: number;  // Cumulative Layout Shift
  TTFB: number; // Time to First Byte
  TTI: number;  // Time to Interactive
}

export interface PerformanceThresholds {
  [key: string]: {
    good: number;
    poor: number;
  };
} 