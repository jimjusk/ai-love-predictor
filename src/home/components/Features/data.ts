import { BrainCircuit, Shield, Users } from 'lucide-react';
import { Feature } from './FeatureCard';

export const features: Feature[] = [
  {
    title: 'AI智能匹配',
    description: '采用先进的深度学习算法，通过多维度分析，为你匹配最合适的伴侣。',
    icon: <BrainCircuit className="w-full h-full" />,
  },
  {
    title: '隐私保护',
    description: '采用军事级加密技术，严格保护用户隐私数据，让你安心使用。',
    icon: <Shield className="w-full h-full" />,
  },
  {
    title: '专业服务',
    description: '配备专业的情感顾问团队，为你提供一对一的咨询服务。',
    icon: <Users className="w-full h-full" />,
  },
]; 