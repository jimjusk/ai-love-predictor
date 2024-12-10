import type { Metadata } from 'next'
import { getResult } from '@/lib/assessment'
import type { AssessmentResult } from '@/types/assessment'

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}): Promise<Metadata> {
  const resolvedParams = await params
  
  return {
    title: `测评结果 - ${resolvedParams.id}`,
    description: '查看你的爱情测评结果'
  }
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedParams = await params
  const { id } = resolvedParams
  
  try {
    const result = await getResult(id)
    
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">测评结果</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">匹配度分析</h2>
            <p className="text-gray-600">{result.analysis}</p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">建议</h2>
            <ul className="list-disc list-inside space-y-2">
              {result.suggestions.map((suggestion, index) => (
                <li key={index} className="text-gray-600">{suggestion}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">匹配指数</h2>
            <div className="flex items-center">
              <div className="text-4xl font-bold text-primary">
                {result.score}%
              </div>
              <div className="ml-4 text-gray-600">
                {result.score >= 80 ? '非常匹配' :
                 result.score >= 60 ? '比较匹配' :
                 result.score >= 40 ? '一般匹配' : '匹配度较低'}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">获取结果失败</h1>
        <p className="text-red-500">
          {error instanceof Error ? error.message : '未知错误'}
        </p>
      </div>
    )
  }
} 