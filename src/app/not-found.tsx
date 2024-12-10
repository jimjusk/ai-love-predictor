'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NotFound() {
  const language = useLanguage();
  
  const content = {
    'zh-CN': {
      title: '页面未找到',
      description: '抱歉，您访问的页面不存在。',
      backHome: '返回首页'
    },
    'en': {
      title: 'Page Not Found',
      description: 'Sorry, the page you are looking for does not exist.',
      backHome: 'Back to Home'
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-rose-50 to-white">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.title}</h2>
        <p className="text-gray-600 mb-8">
          {t.description}
        </p>
        <Link 
          href={`/${language}`}
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          {t.backHome}
        </Link>
      </div>
    </div>
  );
} 