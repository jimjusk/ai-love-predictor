import { Suspense } from 'react';
import { PageTransition } from '@/components/ui/PageTransition';
import AssessmentForm from '@/components/assessment/AssessmentForm';

export default function AssessmentPage() {
  return (
    <PageTransition>
      <main>
        <div className="container mx-auto py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">AI 爱情测评</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              通过科学的心理测评和AI分析，帮助你更好地了解自己的恋爱倾向和理想伴侣类型。
            </p>
          </div>

          <Suspense fallback={<div>加载中...</div>}>
            <AssessmentForm />
          </Suspense>
        </div>
      </main>
    </PageTransition>
  );
} 