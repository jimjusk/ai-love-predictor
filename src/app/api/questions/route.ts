import { NextResponse } from 'next/server'

// 定义问题类型
interface Question {
  id: number
  text: string
}

// 定义问题列表
const questions: Question[] = [
  { 
    id: 1, 
    text: '你们平时经常一起做什么活动？' 
  },
  { 
    id: 2, 
    text: '在遇到分歧时，你们通常如何解决？' 
  },
  // ... 其他问题
]

export async function GET() {
  return NextResponse.json(questions)
} 