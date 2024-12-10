import { NextResponse } from 'next/server'

const questions = {
  'en': [
    // 英文问题
    {
      id: 1,
      text: "What's your age?",
      // ... 其他属性
    },
    // ... 更多问题
  ],
  'zh-CN': [
    // 中文问题
    {
      id: 1,
      text: "你的年龄是？",
      // ... 其他属性
    },
    // ... 更多问题
  ]
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const lang = searchParams.get('lang') || 'zh-CN'
  
  return NextResponse.json(questions[lang] || questions['zh-CN'])
} 