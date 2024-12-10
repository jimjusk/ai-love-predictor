import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN;

export function initSentry() {
  if (SENTRY_DSN) {
    Sentry.init({
      dsn: SENTRY_DSN,
      tracesSampleRate: 1.0,
      environment: process.env.NODE_ENV,
      beforeSend(event) {
        // 过滤掉不需要的错误
        if (event.exception) {
          const exceptionValue = event.exception.values?.[0]?.value;
          if (exceptionValue?.includes('ResizeObserver loop')) {
            return null;
          }
        }
        return event;
      },
    });
  }
}

export function captureError(error: Error, context?: Record<string, any>) {
  console.error('Error:', error);
  
  if (SENTRY_DSN) {
    Sentry.withScope((scope) => {
      if (context) {
        Object.entries(context).forEach(([key, value]) => {
          scope.setExtra(key, value);
        });
      }
      Sentry.captureException(error);
    });
  }
} 