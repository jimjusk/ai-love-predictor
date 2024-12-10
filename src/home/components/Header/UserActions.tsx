import Link from 'next/link';

export default function UserActions() {
  return (
    <div className="flex items-center gap-4">
      <Link
        href="/login"
        className="text-sm font-medium hover:text-primary"
      >
        登录
      </Link>
      <Link
        href="/register"
        className="text-sm font-medium bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90"
      >
        注册
      </Link>
    </div>
  );
} 