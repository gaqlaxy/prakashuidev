'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';
import { List, X, ArrowUpRight, GithubLogo, TwitterLogo, LinkedinLogo } from '@phosphor-icons/react';

const menuItems = [
    { label: 'Work', href: '/work', id: '01' },
    { label: 'Services', href: '/services', id: '02' },
    { label: 'Contact', href: '/#contact', id: '03' },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-[90%] md:max-w-2xl px-6 py-3 rounded-full glass-refraction flex items-center justify-between"
            >
                <div className="flex items-center gap-2">
                    <MagneticButton className="p-2 -m-2">
                        <a href="/" className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                            <span className="text-white font-bold text-xs">P.</span>
                        </a>
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
                    <button
                        onClick={() => setIsOpen(true)}
                        className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors ${isOpen ? 'hidden' : 'flex'} md:hidden`}
                    >
                        <List size={20} weight="bold" />
                    </button>
                    <button className="hidden md:flex px-6 py-2 rounded-full bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-colors">
                        Hire Me
                    </button>
                </MagneticButton>
            </motion.nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-100 bg-zinc-950/95 backdrop-blur-2xl flex flex-col p-8 md:p-24"
                    >
                        <div className="absolute inset-0 pixel-grid opacity-10 pointer-events-none" />

                        <div className="flex justify-between items-start relative z-10 mb-24">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                                    <span className="text-white font-bold text-xs">P.</span>
                                </div>
                                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-secondary">Navigation // Menu</span>
                            </div>

                            <MagneticButton>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all group"
                                >
                                    <X size={24} className="group-hover:rotate-90 transition-transform" />
                                </button>
                            </MagneticButton>
                        </div>

                        <div className="flex flex-col gap-6 relative z-10">
                            {menuItems.map((item, i) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1], duration: 0.8 }}
                                    className="group flex items-end gap-6"
                                >
                                    <span className="font-mono text-accent text-sm pb-4 opacity-50">{item.id}</span>
                                    <span className="text-6xl md:text-[10vw] font-medium tracking-tighter leading-none group-hover:italic group-hover:text-zinc-400 transition-all duration-500">
                                        {item.label}
                                    </span>
                                </motion.a>
                            ))}
                        </div>

                        <div className="mt-auto pt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-end gap-12 relative z-10 transition-all">
                            <div className="space-y-6">
                                <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">Social Protocol</p>
                                <div className="flex gap-8">
                                    {[
                                        { icon: <TwitterLogo size={24} />, href: '#' },
                                        { icon: <LinkedinLogo size={24} />, href: '#' },
                                        { icon: <GithubLogo size={24} />, href: '#' }
                                    ].map((social, i) => (
                                        <a key={i} href={social.href} className="text-zinc-400 hover:text-accent transition-colors">
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="text-right hidden md:block">
                                <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-4">Location</p>
                                <p className="text-sm font-light text-zinc-300">
                                    12.9716° N, 77.5946° E <br />
                                    BENGALURU, INDIA
                                </p>
                            </div>

                            <div className="text-right">
                                <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-4">Current Status</p>
                                <div className="flex items-center gap-2 justify-end">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-sm font-light text-zinc-300 uppercase tracking-tighter">Available for projects</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
