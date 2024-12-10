'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    const body = {
      name: metric.name,
      value: metric.value,
      id: metric.id,
      startTime: metric.startTime,
      label: metric.label,
    };

    // 发送性能指标到分析服务
    console.log('Web Vitals:', body);
  });

  return null;
} 