import { useState, useEffect } from 'react';

export type VariantValue = string | number | boolean | object;
export type ExperimentId = string;

interface ExperimentContext {
  userId?: string;
  deviceType?: string;
  userAgent?: string;
}

export function useExperiment<T extends VariantValue>(
  experimentId: ExperimentId,
  defaultValue: T | null = null
) {
  const [variant, setVariant] = useState<T | null>(defaultValue);

  useEffect(() => {
    // 简单的变体分配逻辑
    setVariant(defaultValue);
    
    // 记录实验数据
    console.log('Experiment:', {
      id: experimentId,
      variant: defaultValue
    });
  }, [experimentId, defaultValue]);

  return variant;
} 