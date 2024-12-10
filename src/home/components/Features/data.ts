import { BrainCircuit, Shield, Users } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon: typeof BrainCircuit | typeof Shield | typeof Users;
}

export const featuresData = {
  title: '为什么选择我们',
  features: [
    {
      title: 'AI智能匹配',
      description: '采用先进的深度学习算法，通过多维度分析，为你匹配最合适的伴侣。',
      icon: BrainCircuit,
    },
    {
      title: '隐私保护',
      description: '采用军事级加密技术，严格保护用户隐私数据，让你安心使用。',
      icon: Shield,
    },
    {
      title: '专业服务',
      description: '配备专业的情感顾问团队，为你提供一对一的咨询服务。',
      icon: Users,
    },
  ],
} as const; 