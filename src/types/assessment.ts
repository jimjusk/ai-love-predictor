export interface AssessmentQuestion {
  id: string;
  type: 'single' | 'multiple' | 'scale' | 'text';
  question: string;
  options?: {
    value: string;
    label: string;
    score?: number;
  }[];
  weight?: number;
}

export interface AssessmentAnswer {
  questionId: string;
  answer: string | string[] | number;
}

export interface AssessmentResult {
  id: string;
  userId: string;
  score: number;
  dimensions: {
    [key: string]: number;  // 各维度得分
  };
  recommendations: {
    title: string;
    description: string;
    score: number;
  }[];
  createdAt: string;
} 