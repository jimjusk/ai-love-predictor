import { Activity } from './types';

export const activities: Activity[] = [
  {
    id: 1,
    title: '新用户专享优惠',
    description: '新注册用户可享受会员服务7天免费体验，更有额外积分奖励。',
    image: '/images/activities/new-user.jpg',
    endTime: '2024-04-30T23:59:59',
    link: '/register',
    discount: '免费体验7天 + 500积分',
  },
  {
    id: 2,
    title: '会员特权升级',
    description: '开通年度会员立享超值优惠，享受一对一情感咨询服务。',
    image: '/images/activities/vip.jpg',
    endTime: '2024-03-31T23:59:59',
    link: '/membership',
    discount: '年费会员8折优惠',
  },
]; 