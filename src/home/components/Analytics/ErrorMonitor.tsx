'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import * as Sentry from '@sentry/nextjs';

export function ErrorMonitor() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // 设置用户上下文
    const userId = localStorage.getItem('userId');
    if (userId) {
      Sentry.setUser({ id: userId });
    }

    // 设置路由上下文
    Sentry.setContext('route', {
      pathname,
      query: Object.fromEntries(searchParams.entries()),
    });
  }, [pathname, searchParams]);

  return null;
} 