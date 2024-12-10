import { Metadata } from 'next'
import AssessmentForm from '@/components/assessment/AssessmentForm'
import AnimatedLayout from '@/components/Layout/AnimatedLayout'

export const metadata: Metadata = {
  title: '爱情测试 - AI Love Predictor',
  description: '通过AI分析你们的匹配程度',
}

export default function AssessmentPage() {
  return (
    <AnimatedLayout>
      <AssessmentForm />
    </AnimatedLayout>
  )
} 