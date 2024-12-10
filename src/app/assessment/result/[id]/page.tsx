import { Suspense } from 'react';
import { PageTransition } from '@/components/ui/PageTransition';
import { getResult } from '@/lib/assessment';
import AssessmentResult from '@/components/assessment/AssessmentResult';
import { Metadata } from 'next';

interface ResultPageProps {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

async function ResultPage({ params, searchParams }: ResultPageProps) {
  const result = await getResult(params.id);

  return (
    <PageTransition>
      <main>
        <AssessmentResult result={result} />
      </main>
    </PageTransition>
  );
}

export default function ResultPageWrapper(props: ResultPageProps) {
  return (
    <Suspense fallback={<div>加载中...</div>}>
      <ResultPage {...props} />
    </Suspense>
  );
}

export async function generateMetadata({ 
  params,
  searchParams 
}: ResultPageProps): Promise<Metadata> {
  // ... metadata 代码 ...
} 