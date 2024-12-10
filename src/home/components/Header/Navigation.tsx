import Link from 'next/link';

const navItems = [
  { name: '首页', href: '/' },
  { name: '测评中心', href: '/assessment' },
  { name: '成功案例', href: '/cases' },
  { name: '会员服务', href: '/membership' },
];

export default function Navigation() {
  return (
    <nav className="hidden md:flex gap-8">
      {navItems.map(item => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium hover:text-primary"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
} 