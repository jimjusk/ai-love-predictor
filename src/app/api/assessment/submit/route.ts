import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // 生成一个随机ID作为结果ID
    const resultId = Math.random().toString(36).slice(2);
    
    // 返回结果ID
    return NextResponse.json({ 
      id: resultId,
      success: true 
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: '处理失败' },
      { status: 500 }
    );
  }
} 