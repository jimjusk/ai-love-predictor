// 完全删除这个文件，或者禁用它的功能
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: [] // 空数组意味着不匹配任何路径
}