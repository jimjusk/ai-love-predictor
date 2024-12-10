import { Metadata } from 'next';
import { Suspense } from 'react';
import ResultPage from '@/components/assessment/ResultPage';
import type { PageProps } from '@/types/page';

export default async function Page(props: PageProps) {
  const resolvedParams = await props.params;
  
  return (
    <Suspense fallback={<div>加载中...</div>}>
      <ResultPage 
        params={resolvedParams}
        searchParams={props.searchParams}
      />
    </Suspense>
  );
}

export async function generateMetadata(
  props: PageProps
): Promise<Metadata> {
  const resolvedParams = await props.params;
  
  return {
    title: `测评结果 ${resolvedParams.id} - AI Love Predictor`,
    description: '查看你的爱情测评结果',
  };
} 