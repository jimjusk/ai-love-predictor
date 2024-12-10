import React from 'react';
import FeatureCard from './FeatureCard';
import { features } from './data';
import { Feature } from './types';

export default function Features() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          为什么选择我们
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature: Feature, index: number) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 