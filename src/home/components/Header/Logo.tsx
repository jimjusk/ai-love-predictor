import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/logo.svg"
        alt="AI Love Predictor"
        width={40}
        height={40}
        className="dark:invert"
      />
      <span className="text-xl font-bold">
        AI Love Predictor
      </span>
    </Link>
  );
} 