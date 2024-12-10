import { inter, notoSansSC } from './fonts';
import { metadata } from './metadata';
import './globals.css';
import { ToastProvider } from '@/contexts/ToastContext';
import { LanguageProvider } from '@/contexts/LanguageContext';

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
      <body>
        <ToastProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
