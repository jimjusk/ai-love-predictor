import React from 'react';

interface ExperimentTrackerProps {
  experimentId: string;
  variant: string;
}

/**
 * 实验追踪组件
 * 用于记录和追踪 A/B 测试的变体分配
 */
export default function ExperimentTracker({ 
  experimentId, 
  variant 
}: ExperimentTrackerProps) {
  // 在这里可以添加分析代码，比如发送到 Google Analytics 或其他分析服务
  React.useEffect(() => {
    // 示例：记录实验数据
    console.log('Experiment tracked:', {
      experimentId,
      variant,
      timestamp: new Date().toISOString()
    });
  }, [experimentId, variant]);

  // 渲染一个隐藏的 div 用于数据属性标记
  return (
    <div 
      data-experiment-id={experimentId} 
      data-variant={variant} 
      hidden 
      aria-hidden="true"
    />
  );
} 