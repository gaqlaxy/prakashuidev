'use client';

import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export default function BentoGrid({
    children,
    className,
}) {
    return (
        <div className={cn(
            "grid grid-cols-1 md:grid-cols-12 gap-8 w-full max-w-7xl mx-auto",
            className
        )}>
            {children}
        </div>
    );
}
