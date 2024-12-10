import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // 排除不需要处理的路径
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // 如果不是以 /zh-CN 开头，重定向到中文路由
  if (!pathname.startsWith('/zh-CN')) {
    return NextResponse.redirect(
      new URL(`/zh-CN${pathname === '/' ? '' : pathname}`, request.url)
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // 跳过所有内部路径(_next)和静态文件
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}