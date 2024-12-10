import { useCallback, useEffect, useState } from 'react';
import { ExperimentId, ExperimentContext } from '../experiments/types';
import { experiments } from '../experiments/config';

function getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

function generateUserId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export function useExperiment<T>(experimentId: ExperimentId): T {
  const [variant, setVariant] = useState<T | null>(null);

  const getContext = useCallback((): ExperimentContext => {
    let userId = localStorage.getItem('userId');
    if (!userId) {
      userId = generateUserId();
      localStorage.setItem('userId', userId);
    }

    return {
      userId,
      deviceType: getDeviceType(),
      userAgent: navigator.userAgent,
    };
  }, []);

  const assignVariant = useCallback((context: ExperimentContext) => {
    const experiment = experiments.find(e => e.id === experimentId);
    if (!experiment) return null;

    const variantKeys = Object.keys(experiment.variants);
    const weights = experiment.weights || 
      Object.fromEntries(variantKeys.map(key => [key, 1 / variantKeys.length]));

    // 使用用户ID确保同一用户看到相同变体
    const hash = context.userId.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    
    const normalizedHash = (hash >>> 0) / 4294967295; // 转换为0-1之间的数
    
    let accumulator = 0;
    for (const [key, weight] of Object.entries(weights)) {
      accumulator += weight;
      if (normalizedHash <= accumulator) {
        return experiment.variants[key];
      }
    }

    return experiment.variants[variantKeys[0]];
  }, [experimentId]);

  useEffect(() => {
    const context = getContext();
    const selectedVariant = assignVariant(context);
    setVariant(selectedVariant);

    // 记录实验数据
    console.log('Experiment:', {
      experimentId,
      variant: selectedVariant,
      context,
      timestamp: new Date().toISOString(),
    });
  }, [experimentId, assignVariant, getContext]);

  return variant as T;
} 