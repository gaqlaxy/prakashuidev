'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import { List } from '@phosphor-icons/react';
const menuItems = [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'Philosophy', href: '/#philosophy' },
    { label: 'Contact', href: '/#contact' },
];

export default function Navigation() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-[90%] md:max-w-2xl px-6 py-3 rounded-full glass-refraction flex items-center justify-between"
        >
            <div className="flex items-center gap-2">
                <MagneticButton className="p-2 -m-2">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                        <span className="text-white font-bold text-xs">P.</span>
                    </div>
                </MagneticButton>
                <span className="font-medium tracking-tight text-sm hidden sm:block">pixelDperfect</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
                {menuItems.map((item, i) => (
                    <motion.a
                        key={item.label}
                        href={item.href}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="text-sm font-medium text-secondary hover:text-white transition-colors relative group"
                    >
                        {item.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full" />
                    </motion.a>
                ))}
            </div>

            <MagneticButton className="p-2 -m-2">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                    <List size={20} weight="bold" />
                </div>
            </MagneticButton>
        </motion.nav>
    );
}
