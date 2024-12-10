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
  score: number;
  analysis: string;
  suggestions: string[];
  createdAt: string;
} 