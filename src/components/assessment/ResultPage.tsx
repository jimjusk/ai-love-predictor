'use client';

import { useEffect, useState } from 'react';
import { getResult } from '@/lib/assessment';
import type { AssessmentResult } from '@/types/assessment';
import { PageTransition } from '@/components/ui/PageTransition';

interface PageParams {
  id: string;
}

interface SearchParams {
  [key: string]: string | string[] | undefined;
}

interface ResultPageProps {
  params: PageParams;
  searchParams: SearchParams;
}

export default function ResultPage({ params }: ResultPageProps) {
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchResult() {
      try {
        const data = await getResult(params.id);
        setResult(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : '获取结果失败');
      }
    }

    fetchResult();
  }, [params.id]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-500 mb-4">出错了</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">加载中...</h2>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8">测评结果</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">匹配度分析</h2>
            <p className="text-gray-600">{result.analysis}</p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">建议</h2>
            <ul className="list-disc list-inside space-y-2">
              {result.suggestions.map((suggestion, index) => (
                <li key={index} className="text-gray-600">{suggestion}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">匹配指数</h2>
            <div className="flex items-center">
              <div className="text-4xl font-bold text-primary">
                {result.score}%
              </div>
              <div className="ml-4 text-gray-600">
                {result.score >= 80 ? '非常匹配' :
                 result.score >= 60 ? '比较匹配' :
                 result.score >= 40 ? '一般匹配' : '匹配度较低'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
} 