'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { locales, localeNames, type Locale } from '@/i18n/settings';

export default function LanguageSwitch() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (locale: Locale) => {
    const newPath = pathname.replace(/^\/[a-z-]+/, `/${locale}`);
    router.push(newPath);
  };

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 text-sm">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
        <span>语言</span>
      </button>

      <div className="absolute right-0 mt-2 py-2 w-48 bg-background rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        {locales.map((locale) => (
          <button
            key={locale}
            className="block w-full px-4 py-2 text-sm text-left hover:bg-muted transition-colors"
            onClick={() => handleLanguageChange(locale)}
          >
            {localeNames[locale]}
          </button>
        ))}
      </div>
    </div>
  );
} 