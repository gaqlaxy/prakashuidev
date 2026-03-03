'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export default function MagneticButton({
    children,
    className,
    distance = 0.5,
}) {
    const ref = useRef(null);
    const frameRef = useRef(null);
    const lastPosRef = useRef({ x: 0, y: 0 });
    const shouldReduceMotion = useReducedMotion();
    const [isEnabled, setIsEnabled] = useState(true);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { stiffness: 100, damping: 20, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const media = window.matchMedia('(pointer: coarse)');
        const updateEnabled = () => setIsEnabled(!media.matches && !shouldReduceMotion);
        updateEnabled();
        media.addEventListener('change', updateEnabled);
        return () => media.removeEventListener('change', updateEnabled);
    }, [shouldReduceMotion]);

    const animateTo = () => {
        frameRef.current = null;
        const { x: nextX, y: nextY } = lastPosRef.current;
        x.set(nextX);
        y.set(nextY);
    };

    const handleMouseMove = (e) => {
        if (!isEnabled || !ref.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();

        const centerX = left + width / 2;
        const centerY = top + height / 2;

        lastPosRef.current = {
            x: (clientX - centerX) * distance,
            y: (clientY - centerY) * distance,
        };

        if (frameRef.current == null) {
            frameRef.current = requestAnimationFrame(animateTo);
        }
    };

    const handleMouseLeave = () => {
        if (frameRef.current != null) {
            cancelAnimationFrame(frameRef.current);
            frameRef.current = null;
        }
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                x: isEnabled ? springX : 0,
                y: isEnabled ? springY : 0,
            }}
            className={cn("relative inline-block cursor-pointer", className)}
        >
            {children}
        </motion.div>
    );
}
