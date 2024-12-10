'use client';

import { useRouter } from 'next/navigation';

export default function CTAButton() {
  const router = useRouter();
  
  const handleClick = () => {
    console.log('Navigating to /zh-CN/assessment...');
    router.push('/zh-CN/assessment');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-block bg-primary text-white px-10 py-3 rounded-lg text-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
    >
      开始预测
    </button>
  );
} 