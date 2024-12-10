export type ExperimentId = 'hero-layout' | 'cta-color' | 'feature-cards';

export interface Experiment<T = any> {
  id: ExperimentId;
  variants: {
    [key: string]: T;
  };
  weights?: {
    [key: string]: number;
  };
}

export interface ExperimentContext {
  userId: string;
  deviceType: 'mobile' | 'tablet' | 'desktop';
  userAgent: string;
} 