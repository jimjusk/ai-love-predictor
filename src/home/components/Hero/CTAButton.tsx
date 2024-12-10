import Link from 'next/link';

export default function CTAButton() {
  return (
    <div className="animate-fade-in-up animation-delay-200">
      <Link
        href="/assessment"
        className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
      >
        开始测评
        <svg 
          className="ml-2 w-5 h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M13 7l5 5m0 0l-5 5m5-5H6" 
          />
        </svg>
      </Link>
    </div>
  );
} 