import React from 'react';
import Headline from './Headline';
import CTAButton from './CTAButton';
import Background from './Background';
import { useExperiment } from '@/home/hooks/useExperiment';
import ExperimentTracker from '@/components/ExperimentTracker';

type LayoutVariant = 'center' | 'left' | 'right';

export default function Hero() {
  const layout = useExperiment<LayoutVariant>('hero-layout', 'center');

  return (
    <>
      <ExperimentTracker 
        experimentId="hero-layout" 
        variant={layout || 'center'}
      />
      <section className={`relative min-h-[calc(100vh-4rem)] ${
        layout === 'center' ? 'text-center' : 
        layout === 'left' ? 'text-left' :
        'text-right'
      }`}>
        <Background />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <Headline />
          <CTAButton />
        </div>
      </section>
    </>
  );
} 