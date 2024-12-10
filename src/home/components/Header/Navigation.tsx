'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = {
  'zh-CN': [
    { name: '首页', href: '/zh-CN' },
    { name: '测评中心', href: '/zh-CN/assessment' },
    { name: '成功案例', href: '/zh-CN/cases' },
    { name: '会员服务', href: '/zh-CN/membership' },
  ],
  'en': [
    { name: 'Home', href: '/en' },
    { name: 'Assessment', href: '/en/assessment' },
    { name: 'Success Stories', href: '/en/cases' },
    { name: 'Membership', href: '/en/membership' },
  ],
};

export default function Navigation() {
  const pathname = usePathname();
  const lang = pathname?.startsWith('/en') ? 'en' : 'zh-CN';
  const items = navItems[lang];

  return (
    <nav className="hidden md:flex gap-8">
      {items.map(item => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium hover:text-primary"
        >
          {item.name}
        </Link>
      ))}
      <Link
        href={lang === 'en' ? '/zh-CN' : '/en'}
        className="text-sm font-medium hover:text-primary"
      >
        {lang === 'en' ? '中文' : 'English'}
      </Link>
    </nav>
  );
} 