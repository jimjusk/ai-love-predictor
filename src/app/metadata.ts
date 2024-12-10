import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Love Predictor - 智能情感匹配平台',
  description: '基于AI深度学习的智能情感匹配系统，帮助你找到最适合的伴侣。多维度分析，精准匹配，隐私保护。',
  keywords: 'AI婚恋,情感匹配,智能配对,婚恋平台,约会交友',
  authors: [{ name: 'AI Love Predictor Team' }],
  openGraph: {
    type: 'website',
    title: 'AI Love Predictor - 智能情感匹配平台',
    description: '基于AI深度学习的智能情感匹配系统，帮助你找到最适合的伴侣。',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Love Predictor - 智能情感匹配平台',
    description: '基于AI深度学习的智能情感匹配系统，帮助你找到最适合的伴侣。',
    images: ['/images/twitter-image.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
  alternates: {
    canonical: 'https://ailovepredictor.com',
  },
}; 