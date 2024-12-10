module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    // 禁用未使用变量的警告
    '@typescript-eslint/no-unused-vars': 'off',
    
    // 允许 any 类型
    '@typescript-eslint/no-explicit-any': 'off',
    
    // 允许未转义的实体
    'react/no-unescaped-entities': 'off',
    
    // 其他规则保持默认
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off'
  },
  parserOptions: {
    project: './tsconfig.json'
  },
  ignorePatterns: [
    // 忽略特定文件
    'src/home/components/Footer/data.tsx'
  ]
} 