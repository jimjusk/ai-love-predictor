import { AssessmentQuestion, AssessmentAnswer, AssessmentResult } from '@/types/assessment';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function submitAssessment(answers: AssessmentAnswer[]): Promise<AssessmentResult> {
  const response = await fetch(`${API_URL}/assessment/submit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ answers }),
  });

  if (!response.ok) {
    throw new Error('提交测评失败');
  }

  return response.json();
}

export async function getResult(id: string) {
  // 获取结果的逻辑
  return {
    id,
    // ... 其他结果数据
  };
} 