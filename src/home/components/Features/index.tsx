'use client';

import React from 'react';
import { featuresData } from './data';
import FeatureCard from './FeatureCard';

export default function Features() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{featuresData.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={<feature.icon className="w-full h-full" />}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 