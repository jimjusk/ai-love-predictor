'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useAnalytics } from '@/home/hooks/useAnalytics';
import { ExperimentId } from '@/home/experiments/types';

interface ExperimentTrackerProps {
  experimentId: ExperimentId;
  variant: string;
}

export function ExperimentTracker({ experimentId, variant }: ExperimentTrackerProps) {
  const pathname = usePathname();
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    trackEvent({
      category: 'Experiment',
      action: 'view',
      label: `${experimentId}:${variant}`,
    });
  }, [experimentId, variant, trackEvent]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('[data-experiment-click]')) {
        trackEvent({
          category: 'Experiment',
          action: 'click',
          label: `${experimentId}:${variant}:${target.dataset.experimentClick}`,
        });
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [experimentId, variant, trackEvent]);

  return null;
} 