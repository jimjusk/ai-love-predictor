import React from 'react';

export default function Schema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AI Love Predictor',
    description: '基于AI深度学习的智能情感匹配系统',
    url: 'https://ailovepredictor.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://ailovepredictor.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
} 