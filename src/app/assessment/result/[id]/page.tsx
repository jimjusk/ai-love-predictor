import { Suspense } from 'react';
import { PageTransition } from '@/components/ui/PageTransition';
import { getResult } from '@/lib/assessment';
import AssessmentResult from '@/components/assessment/AssessmentResult';

interface ResultPageProps {
  params: {
    id: string;
  };
}

async function ResultPage({ params }: ResultPageProps) {
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