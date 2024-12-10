import React from 'react';
import type { Feature } from './types';

const BrainIcon = React.memo(function BrainIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
    >
      <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>
  );
});

BrainIcon.displayName = 'BrainIcon';

export const features: Feature[] = [
  {
    title: 'AI 智能分析',
    description: '使用先进的人工智能技术分析你们的匹配程度',
    icon: <BrainIcon className="w-6 h-6" />
  },
  {
    title: '科学评估',
    description: '基于心理学和数据分析的专业评估系统',
    icon: <BrainIcon className="w-6 h-6" />
  },
  {
    title: '即时结果',
    description: '快速获取详细的分析报告和建议',
    icon: <BrainIcon className="w-6 h-6" />
  }
]; 