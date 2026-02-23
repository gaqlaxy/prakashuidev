'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const BentoCard = memo(({
    title,
    description,
    className,
    children,
    tag,
}) => {
    return (
        <div className={cn("group flex flex-col gap-6", className)}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="relative flex-1 overflow-hidden rounded-[2.5rem] bg-white p-8 glass-refraction border-slate-200/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]"
            >
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-transparent to-black/1 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 flex flex-col h-full">
                    {tag && (
                        <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-[10px] font-mono tracking-widest uppercase mb-4 self-start">
                            {tag}
                        </span>
                    )}

                    <div className="flex-1 w-full">
                        {children}
                    </div>
                </div>
            </motion.div>

            <div className="px-4">
                <h3 className="text-xl font-medium tracking-tight text-foreground group-hover:text-accent transition-colors">
                    {title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed max-w-[35ch] mt-2">
                    {description}
                </p>
            </div>
        </div>
    );
});

BentoCard.displayName = 'BentoCard';

export default BentoCard;
