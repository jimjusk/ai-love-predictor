'use client';

import { useState, useEffect } from 'react';
import { PerformanceData } from '@/home/types/performance';

export function PerformanceDebug() {
  const [metrics, setMetrics] = useState<PerformanceData>({
    FCP: 0,
    LCP: 0,
    FID: 0,
    CLS: 0,
    TTFB: 0,
    TTI: 0,
  });

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        setMetrics((prev) => ({
          ...prev,
          [entry.name]: entry.startTime,
        }));
      });
    });

    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input'] });

    return () => observer.disconnect();
  }, []);

  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <div className="fixed bottom-4 left-4 p-4 bg-background/80 backdrop-blur-sm rounded-lg shadow-lg z-50">
      <h3 className="text-sm font-semibold mb-2">Performance Metrics</h3>
      <div className="space-y-1 text-xs">
        {Object.entries(metrics).map(([key, value]) => (
          <div key={key} className="flex justify-between gap-4">
            <span className="text-muted-foreground">{key}:</span>
            <span>{value.toFixed(2)}ms</span>
          </div>
        ))}
      </div>
    </div>
  );
} 