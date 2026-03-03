'use client';

import React, { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
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
    tagClassName,
    meta,
    animation = 'default',
    index = 0,
}) => {
    const shouldReduceMotion = useReducedMotion();
    
    const animationClass = {
        shimmer: '',
        pulse: '',
        orbit: '',
        blink: '',
        float: '',
    }[animation] || '';
    
    return (
        <div className={cn("group flex flex-col gap-6", className)}>
            <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
                className={cn("relative flex-1 overflow-hidden rounded-[2.75rem] bg-[#0e1116] p-7 sm:p-8 border border-white/5 shadow-[0_24px_80px_-40px_rgba(8,10,14,0.6)] transition-all hover:shadow-[0_40px_90px_-30px_rgba(8,10,14,0.7)]", animationClass)}
            >
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/0 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 flex flex-col h-full">
                    {tag && (
                        <span className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase mb-4 self-start border border-white/10 text-white/70", tagClassName)}>
                            {tag}
                        </span>
                    )}

                    <div className="flex-1 w-full">
                        {children}
                    </div>
                </div>
            </motion.div>

            <div className="px-4">
                <h3 className="text-2xl font-medium tracking-tight text-zinc-900 group-hover:text-accent transition-colors">
                    {title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed max-w-[35ch] mt-2">
                    {description}
                </p>
                {meta?.length ? (
                    <div className="mt-5 grid grid-cols-3 gap-4 text-[10px] uppercase tracking-[0.25em] text-zinc-400">
                        {meta.map((item) => (
                            <div key={item.label} className="flex flex-col gap-1">
                                <span className="text-[9px] tracking-[0.3em] text-zinc-300/70">{item.label}</span>
                                <span className="text-[11px] tracking-[0.15em] text-zinc-600">{item.value}</span>
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>
        </div>
    );
});

BentoCard.displayName = 'BentoCard';

export default BentoCard;
