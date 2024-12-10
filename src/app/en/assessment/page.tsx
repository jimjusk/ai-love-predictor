import { Metadata } from 'next'
import AssessmentForm from '@/components/assessment/AssessmentForm'
import AnimatedLayout from '@/components/Layout/AnimatedLayout'

export const metadata: Metadata = {
  title: 'Love Test - AI Love Predictor',
  description: 'Analyze your love compatibility with AI',
}

export default function AssessmentPage() {
  return (
    <AnimatedLayout>
      <div className="container mx-auto py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Love Assessment</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Through scientific psychological assessment and AI analysis, we help you better understand your love tendencies and ideal partner type.
          </p>
        </div>

        <AssessmentForm />
      </div>
    </AnimatedLayout>
  )
} 