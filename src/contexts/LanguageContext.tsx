'use client';

import React, { createContext, useContext } from 'react';
import { usePathname } from 'next/navigation';

export type Language = 'zh-CN' | 'en';

interface LanguageContextType {
  language: Language;
}

const defaultLanguage: Language = 'zh-CN';

const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const language = pathname?.startsWith('/en') ? 'en' : 'zh-CN';

  return (
    <LanguageContext.Provider value={{ language }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): Language {
  const context = useContext(LanguageContext);
  if (!context) {
    console.warn('useLanguage must be used within a LanguageProvider');
    return defaultLanguage;
  }
  return context.language;
} 