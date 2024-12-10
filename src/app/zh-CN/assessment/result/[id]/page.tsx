import { Metadata } from 'next';
import { getResult } from '@/lib/assessment';

interface Props {
  params: { id: string };
}

export const metadata: Metadata = {
  title: '测评结果 - AI Love Predictor',
  description: '查看你的爱情测评结果',
};

export default async function ResultPage({ params }: Props) {
  // 模拟结果数据，避免使用 localStorage
  const mockResult = {
    id: params.id,
    score: Math.floor(Math.random() * 100),
    analysis: '根据AI分析，你是一个重视精神契合的人。你期待找到一个能与你分享生活理想、共同成长的伴侣。',
    suggestions: [
      '建议多参加社交活动，扩大社交圈',
      '保持开放的心态，给彼此相处和了解的机会',
      '在交往过程中注意观察对方的价值观是否契合',
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-slate-100 to-purple-200">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">测评结果</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">匹配指数</h2>
            <div className="flex items-center">
              <div className="text-4xl font-bold text-primary">
                {mockResult.score}%
              </div>
              <div className="ml-4 text-gray-600">
                {mockResult.score >= 80 ? '非常匹配' :
                 mockResult.score >= 60 ? '比较匹配' :
                 mockResult.score >= 40 ? '一般匹配' : '匹配度较低'}
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">匹配度分析</h2>
            <p className="text-gray-600">{mockResult.analysis}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">建议</h2>
            <ul className="list-disc list-inside space-y-2">
              {mockResult.suggestions.map((suggestion, index) => (
                <li key={index} className="text-gray-600">{suggestion}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 