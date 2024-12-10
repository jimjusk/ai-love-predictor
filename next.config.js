const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // 移除 i18n 配置
  // i18n: {
  //   locales: ['zh-CN'],
  //   defaultLocale: 'zh-CN',
  //   localeDetection: false
  // },

  // 使用 redirects 替代 middleware
  async redirects() {
    return [
      {
        source: '/',
        destination: '/zh-CN',
        permanent: true,
      },
    ]
  }
}

module.exports = withPWA(nextConfig)