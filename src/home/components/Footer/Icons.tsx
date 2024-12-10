import React from 'react';

interface IconProps {
  className?: string;
}

export const WeiboIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.194 14.197c0 3.362-4.53 6.307-9.926 6.307C5.318 20.504 1 17.805 1 14.197c0-3.36 4.318-6.062 9.268-6.062 5.396 0 9.926 2.946 9.926 6.062zM9.268 9.135c-4.386 0-7.937 2.256-7.937 5.062 0 2.805 3.55 5.062 7.937 5.062 4.387 0 7.937-2.257 7.937-5.062 0-2.806-3.55-5.062-7.937-5.062zm8.557-3.568c.66-.66.66-1.73 0-2.39-.658-.658-1.728-.658-2.386 0l-2.039 2.04c-.66.658-.66 1.728 0 2.387.658.66 1.728.66 2.386 0l2.04-2.037z" />
  </svg>
);

export const WechatIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8.5 14.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-.5-7a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6z" />
  </svg>
);

export const DouYinIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-2v5h-2v-5H8v-2h7V6h2v5h2v2z" />
  </svg>
);

export const XiaoHongShuIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

export const socialIcons = {
  weibo: WeiboIcon,
  wechat: WechatIcon,
  douyin: DouYinIcon,
  xiaohongshu: XiaoHongShuIcon,
}; 