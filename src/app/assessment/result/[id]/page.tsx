import { Metadata } from 'next';
import { Suspense } from 'react';
import ResultPage from '@/components/assessment/ResultPage';

interface ResultPageProps {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Page({ params, searchParams }: ResultPageProps) {
  return (
    <Suspense fallback={<div>加载中...</div>}>
      <ResultPage params={params} searchParams={searchParams} />
    </Suspense>
  );
}

export async function generateMetadata(
  { params, searchParams }: ResultPageProps
): Promise<Metadata> {
  return {
    title: '测评结果 - AI Love Predictor',
    description: '查看你的爱情测评结果',
  };
} 