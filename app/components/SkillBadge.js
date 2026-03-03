'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function SkillBadge({ skill, index = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{
        scale: 1.05,
        borderColor: 'rgba(37, 99, 235, 0.6)',
        backgroundColor: 'rgba(37, 99, 235, 0.1)',
        boxShadow: '0 0 30px rgba(37, 99, 235, 0.25)',
      }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
      }}
      viewport={{ once: true }}
      className={cn(
        'text-[10px] font-mono uppercase tracking-widest px-4 py-2 rounded-full border border-white/10 bg-white/2 text-white/80 transition-all duration-300',
        index % 7 === 0 ? 'ring-1 ring-accent/30' : ''
      )}
    >
      {skill}
    </motion.span>
  );
}
