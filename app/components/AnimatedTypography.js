'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function AnimatedTypography({
    text,
    className,
    delay = 0,
    variant = "blur-in"
}) {
    const shouldReduceMotion = useReducedMotion();
    const letters = Array.from(text);

    const variants = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: variant === "blur-in" ? "blur(10px)" : "none"
        },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                delay: delay + i * 0.03,
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        })
    };

    if (shouldReduceMotion) {
        return <span className={className}>{text}</span>;
    }

    return (
        <span className={className}>
            {letters.map((char, i) => (
                <motion.span
                    key={i}
                    custom={i}
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                >
                    {char}
                </motion.span>
            ))}
        </span>
    );
}
