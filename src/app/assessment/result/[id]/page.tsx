import { Metadata } from 'next'
import { getResult } from '@/lib/assessment'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function ResultPage({ params }: Props) {
  const result = await getResult(params.id)
  
  return (
    <div>
      {/* 显示结果的 JSX */}
      <h1>测试结果 {params.id}</h1>
      {/* 其他结果展示 */}
    </div>
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `测试结果 - ${params.id}`,
    description: '你的AI情感预测结果'
  }
} 