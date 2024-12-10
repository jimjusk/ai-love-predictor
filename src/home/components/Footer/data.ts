import { FooterGroup, SocialLink } from './types';
import { socialIcons } from './Icons';

export const footerLinks: FooterGroup[] = [
  {
    title: '关于我们',
    links: [
      { label: '公司介绍', href: '/about' },
      { label: '团队介绍', href: '/team' },
      { label: '联系我们', href: '/contact' },
      { label: '加入我们', href: '/jobs' },
    ],
  },
  {
    title: '帮助中心',
    links: [
      { label: '常见问题', href: '/faq' },
      { label: '用户指南', href: '/guide' },
      { label: '意见反馈', href: '/feedback' },
      { label: '安全中心', href: '/safety' },
    ],
  },
  {
    title: '商务合作',
    links: [
      { label: '品牌合作', href: '/business' },
      { label: '媒体报道', href: '/press' },
      { label: '广告投放', href: '/advertise' },
      { label: '渠道合作', href: '/partner' },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: '微博',
    href: 'https://weibo.com',
    icon: socialIcons.weibo,
  },
  {
    name: '微信',
    href: 'https://weixin.qq.com',
    icon: socialIcons.wechat,
  },
  {
    name: '抖音',
    href: 'https://douyin.com',
    icon: socialIcons.douyin,
  },
  {
    name: '小红书',
    href: 'https://xiaohongshu.com',
    icon: socialIcons.xiaohongshu,
  },
]; 