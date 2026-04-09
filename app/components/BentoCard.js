'use client';

import React, { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useParallax } from '@/app/lib/hooks';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const cardVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    inView: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 20,
        },
    },
};

const BentoCard = memo(({
    title,
    description,
    className,
    children,
    tag,
    tagClassName,
    meta,
    index = 0,
}) => {
    const shouldReduceMotion = useReducedMotion();
    const { ref, offset } = useParallax(0.3);
    
    return (
        <div className={cn("group flex flex-col gap-6", className)} ref={ref}>
            <motion.div
                initial={shouldReduceMotion ? false : "initial"}
                whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : "inView"}
                variants={!shouldReduceMotion ? cardVariants : undefined}
                viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                transition={!shouldReduceMotion ? undefined : { duration: 0 }}
                className={cn(
                    "relative flex-1 overflow-hidden rounded-2xl p-8 sm:p-10",
                    "bg-white border border-zinc-200/50",
                    "shadow-sm hover:shadow-md transition-all duration-300",
                    "will-change-transform"
                )}
                style={{
                    transform: `translateY(${offset * 0.5}px) scale(${shouldReduceMotion ? 1 : 1.01 * (1 - Math.abs(offset) * 0.0001)})`,
                }}
                whileHover={!shouldReduceMotion ? { 
                    scale: 1.01,
                    y: -4,
                    boxShadow: '0 12px 40px -8px rgba(0, 0, 0, 0.1)',
                } : {}}
            >
                <div className="relative z-10 flex flex-col h-full">
                    {tag && (
                        <span className={cn(
                            "inline-flex items-center gap-2 px-3 py-1 rounded-sm",
                            "text-[9px] font-mono tracking-widest uppercase mb-6 self-start",
                            "border border-zinc-200 bg-zinc-50",
                            "text-zinc-600",
                            tagClassName
                        )}>
                            {tag}
                        </span>
                    )}

                    <div className="flex-1 w-full">
                        {children}
                    </div>
                </div>
            </motion.div>

            {/* Card metadata section */}
            <div className="px-2 space-y-3">
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 leading-snug">
                    {title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed max-w-[50ch]">
                    {description}
                </p>
                {meta?.length ? (
                    <div className="pt-4 grid grid-cols-3 gap-6 text-[9px] uppercase tracking-[0.3em] text-zinc-500 font-semibold border-t border-zinc-100">
                        {meta.map((item) => (
                            <div key={item.label} className="flex flex-col gap-2 pt-4">
                                <span className="text-[8px] tracking-[0.35em] text-zinc-400">{item.label}</span>
                                <span className="text-[11px] tracking-[0.2em] text-zinc-700 font-bold">{item.value}</span>
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
