import { Language } from '@/contexts/LanguageContext';

export interface Story {
  id: string;
  name: string;
  avatar: string;
  location: string;
  quote: string;
  matchDate: string;
}

interface CasesContent {
  title: string;
  subtitle: string;
  stories: Story[];
}

const casesContent: Record<Language, CasesContent> = {
  'zh-CN': {
    title: '成功案例',
    subtitle: '看看其他用户是如何找到真爱的',
    stories: [
      {
        id: '1',
        name: '小王',
        avatar: '/avatars/user1.jpg',
        location: '北京',
        quote: '通过AI分析，我找到了最适合我的另一半，现在我们已经结婚了。',
        matchDate: '2023年6月',
      },
      {
        id: '2',
        name: '小李',
        avatar: '/avatars/user2.jpg',
        location: '上海',
        quote: '平台的匹配算法非常准确，帮我找到了真正志同道合的伴侣。',
        matchDate: '2023年8月',
      },
    ],
  },
  'en': {
    title: 'Success Stories',
    subtitle: 'See how others found their true love',
    stories: [
      {
        id: '1',
        name: 'John',
        avatar: '/avatars/user1.jpg',
        location: 'New York',
        quote: 'Through AI analysis, I found my perfect match. We are now married.',
        matchDate: 'June 2023',
      },
      {
        id: '2',
        name: 'Sarah',
        avatar: '/avatars/user2.jpg',
        location: 'London',
        quote: 'The matching algorithm is incredibly accurate. I found my soulmate here.',
        matchDate: 'August 2023',
      },
    ],
  },
};

export const getCases = (language: Language) => casesContent[language]; 