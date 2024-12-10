export const questions = {
  'zh-CN': [
    {
      id: '1',
      text: '你的年龄是？',
      type: 'single',
      options: [
        { value: '18-25', label: '18-25岁' },
        { value: '26-35', label: '26-35岁' },
        { value: '36-45', label: '36-45岁' },
        { value: '46+', label: '46岁以上' }
      ]
    },
    // ... 其他中文问题
  ],
  'en': [
    {
      id: '1',
      text: 'What is your age?',
      type: 'single',
      options: [
        { value: '18-25', label: '18-25 years' },
        { value: '26-35', label: '26-35 years' },
        { value: '36-45', label: '36-45 years' },
        { value: '46+', label: '46+ years' }
      ]
    },
    // ... 其他英文问题
  ]
};

// 添加类型定义和辅助函数
export type Language = keyof typeof questions;

export const getQuestions = (lang: Language = 'en') => {
  return questions[lang] || questions['en']; // 默认返回英文问题
}; 