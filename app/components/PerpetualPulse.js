'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PerpetualPulse({
  className = '',
  size = 'sm',
  color = 'emerald-500',
  pulse = true,
}) {
  const sizeMap = {
    xs: 'w-1 h-1',
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-3 h-3',
  };

  if (!pulse) {
    return (
      <div className={`rounded-full ${sizeMap[size]} bg-${color} ${className}`} />
    );
  }

  return (
    <motion.div
      className={`rounded-full bg-${color} ${sizeMap[size]} ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [1, 0.6, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}
