import { Metadata } from 'next';
import { Suspense } from 'react';
import ResultPage from '@/components/assessment/ResultPage';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Page(props: Props) {
  return (
    <Suspense fallback={<div>加载中...</div>}>
      <ResultPage {...props} />
    </Suspense>
  );
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  return {
    title: '测评结果 - AI Love Predictor',
    description: '查看你的爱情测评结果',
  };
} 