import React from 'react';
import { motion } from 'framer-motion';

interface FormErrorProps {
  message: string;
}

export function FormError({ message }: FormErrorProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-1 text-sm text-red-600"
    >
      {message}
    </motion.p>
  );
} 