import { Language } from '@/contexts/LanguageContext';

export interface Story {
  id: string;
  name: string;
  avatar: string;
  location: string;
  quote: string;
  matchDate: string;
}

export const stories: Story[] = [
  {
    id: '1',
    name: '张先生 & 李女士',
    location: '北京',
    avatar: '/images/stories/couple1.jpg',
    quote: '通过AI匹配,我们发现彼此的三观和生活习惯都很契合。现在我们已经在一起一年了,感谢这个平台让我们相遇。',
    matchDate: '2023年3月匹配成功',
  },
  {
    id: '2',
    name: '王先生 & 陈女士',
    location: '上海',
    avatar: '/images/stories/couple2.jpg',
    quote: '起初我对AI匹配持怀疑态度,但事实证明这个算法真的很准确。我们在三个月前已经领证了。',
    matchDate: '2023年6月匹配成功',
  },
  {
    id: '3',
    name: '刘先生 & 赵女士',
    location: '深圳',
    avatar: '/images/stories/couple3.jpg',
    quote: '平台不仅帮我们匹配,还提供了专业的情感咨询服务,帮助我们更好地了解对方。现在我们已经订婚了。',
    matchDate: '2023年9月匹配成功',
  },
];

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