import { useCallback } from 'react';

interface TrackEventParams {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

export function useAnalytics() {
  const trackEvent = useCallback(({ category, action, label, value }: TrackEventParams) => {
    // 这里可以集成实际的分析服务，如百度统计、Google Analytics等
    console.log('Track Event:', {
      category,
      action,
      label,
      value,
      timestamp: new Date().toISOString(),
    });
  }, []);

  const trackPageView = useCallback((path: string) => {
    console.log('Track Page View:', {
      path,
      timestamp: new Date().toISOString(),
    });
  }, []);

  return {
    trackEvent,
    trackPageView,
  };
} 