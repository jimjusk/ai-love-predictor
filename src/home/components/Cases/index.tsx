'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getCases } from './data';
import UserStory from './UserStory';

export default function Cases() {
  const language = useLanguage();
  const { title, subtitle, stories } = getCases(language);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>
        <UserStory stories={stories} />
      </div>
    </section>
  );
} 