import { Experiment } from './types';

export const experiments: Experiment[] = [
  {
    id: 'hero-layout',
    variants: {
      control: 'center',
      variant1: 'left',
      variant2: 'right',
    },
    weights: {
      control: 0.34,
      variant1: 0.33,
      variant2: 0.33,
    },
  },
  {
    id: 'cta-color',
    variants: {
      control: 'primary',
      variant1: 'gradient',
      variant2: 'outline',
    },
  },
  {
    id: 'feature-cards',
    variants: {
      control: 'default',
      variant1: 'modern',
      variant2: 'minimal',
    },
  },
]; 