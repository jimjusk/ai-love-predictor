const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})({
  webpack: (config, { isServer }) => {
    // 更新 webpack 配置
    if (!config.ignoreWarnings) {
      config.ignoreWarnings = [];
    }
    
    config.ignoreWarnings.push({
      module: /node_modules\/punycode/,
      message: /Package subpath/,
    });

    return config;
  }
});

module.exports = nextConfig;