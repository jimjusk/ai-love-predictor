import { Metadata } from 'next';
import AssessmentForm from '@/components/assessment/AssessmentForm';

export const metadata: Metadata = {
  title: '爱情测评 - AI Love Predictor',
  description: '通过AI分析你的爱情匹配度',
};

export default function AssessmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-slate-100 to-purple-200">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI 爱情测评</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            通过科学的心理测评和AI分析，帮助你更好地了解自己的恋爱倾向和理想伴侣类型。
          </p>
        </div>

        <AssessmentForm />
      </div>
    </div>
  );
} 