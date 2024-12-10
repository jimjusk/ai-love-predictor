import React from 'react';
import { motion } from 'framer-motion';

interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
}

export function Loading({ size = 'medium', text }: LoadingProps) {
  const sizes = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className={`${sizes[size]} border-4 border-primary/30 border-t-primary rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
      {text && (
        <p className="mt-2 text-sm text-gray-500">{text}</p>
      )}
    </div>
  );
} 