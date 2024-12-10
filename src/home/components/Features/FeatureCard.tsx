import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function FeatureCard({ title, description, icon }: Feature) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="w-12 h-12 mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
} 