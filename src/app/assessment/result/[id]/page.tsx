import { Metadata } from 'next';
import { Suspense } from 'react';
import ResultPage from '@/components/assessment/ResultPage';
import type { PageProps, PageParams } from '@/types/page';

export default async function Page(props: PageProps<PageParams>) {
  return (
    <Suspense fallback={<div>加载中...</div>}>
      <ResultPage {...props} />
    </Suspense>
  );
}

export async function generateMetadata(
  { params }: PageProps<PageParams>
): Promise<Metadata> {
  return {
    title: '测评结果 - AI Love Predictor',
    description: '查看你的爱情测评结果',
  };
} 