// 定义实验ID
export type ExperimentId = 'hero-layout' | 'cta-color' | 'feature-cards';

// 定义可能的变体值类型
export type VariantValue = string | number | boolean | Record<string, unknown>;

// 定义实验接口
export interface Experiment<T extends VariantValue = VariantValue> {
  id: ExperimentId;
  variants: {
    [key: string]: T;
  };
  weights?: {
    [key: string]: number;
  };
}

// 定义实验上下文接口
export interface ExperimentContext {
  userId: string;
  deviceType: 'mobile' | 'tablet' | 'desktop';
  userAgent: string;
}

// 定义具体实验类型
export type HeroLayoutVariant = {
  layout: 'default' | 'alternative';
  showImage: boolean;
};

export type CtaColorVariant = {
  primary: string;
  secondary: string;
};

export type FeatureCardsVariant = {
  layout: 'grid' | 'list';
  cardsPerRow: 2 | 3 | 4;
};

// 使用示例：
/*
const heroExperiment: Experiment<HeroLayoutVariant> = {
  id: 'hero-layout',
  variants: {
    control: { layout: 'default', showImage: true },
    test: { layout: 'alternative', showImage: false }
  },
  weights: {
    control: 0.5,
    test: 0.5
  }
};
*/