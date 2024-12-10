import { AssessmentQuestion, AssessmentAnswer, AssessmentResult } from '@/types/assessment';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getQuestions(): Promise<AssessmentQuestion[]> {
  const response = await fetch(`${API_URL}/assessment/questions`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  if (!response.ok) {
    throw new Error('获取问题失败');
  }

  return response.json();
}

export async function submitAssessment(answers: AssessmentAnswer[]): Promise<AssessmentResult> {
  const response = await fetch(`${API_URL}/assessment/submit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({ answers }),
  });

  if (!response.ok) {
    throw new Error('提交测评失败');
  }

  return response.json();
}

export async function getResult(assessmentId: string): Promise<AssessmentResult> {
  const response = await fetch(`${API_URL}/assessment/result/${assessmentId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  if (!response.ok) {
    throw new Error('获取结果失败');
  }

  return response.json();
} 