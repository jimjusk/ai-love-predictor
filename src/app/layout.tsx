import { inter, notoSansSC } from './fonts';
import { metadata } from './metadata';
import './globals.css';
import { WebVitals } from '@/home/components/Analytics/WebVitals';
import PWAInstallPrompt from '@/home/components/common/PWAInstallPrompt';
// import { initSentry } from '@/lib/sentry';
import { ErrorMonitor } from '@/home/components/Analytics/ErrorMonitor';
import { PerformanceMonitor } from '@/home/components/Analytics/PerformanceMonitor';
import { PerformanceDebug } from '@/home/components/Analytics/PerformanceDebug';
import { AnimatedLayout } from '@/components/Layout/AnimatedLayout';
import { ToastProvider } from '@/contexts/ToastContext';

// 初始化 Sentry
// initSentry();

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="zh-CN" 
      className={`${inter.variable} ${notoSansSC.variable}`}
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FF4785" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="AI Love Predictor" />
        {/* 预加载关键资源 */}
        <link
          rel="preload"
          href="/logo.svg"
          as="image"
          type="image/svg+xml"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
      </head>
      <body>
        <ToastProvider>
            {children}
        </ToastProvider>
      </body>
    </html>
  );
}
