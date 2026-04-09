'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import PageBackground from '../components/PageBackground';
import { Code, Palette, ChartLineUp, Lightning, ArrowUpRight, Cpu, Globe, Infinity } from '@phosphor-icons/react';
import MagneticButton from '../components/MagneticButton';
import Link from 'next/link';

export default function ServicesPage() {
    const services = [
        {
            id: '01',
            title: 'Interface Craft',
            desc: 'Creative UI engineering with Next.js, Framer Motion, and WebGL. Built for clarity, emotion, and polish.',
            details: [
                'Hardware-accelerated layout transitions.',
                'Custom interactive physics engines.',
                'Zero-bloat bundle optimization.',
                'Low-latency interaction models.'
            ],
            icon: <Code size={48} />,
            color: 'accent'
        },
        {
            id: '02',
            title: 'Visual Storytelling',
            desc: 'Designing the narrative flow and interaction rhythm that makes products feel alive.',
            details: [
                'User behavior analysis & mapping.',
                'Conversion-optimized UX architecture.',
                'Rapid specialized prototyping.',
                'Brand-centric design engineering.'
            ],
            icon: <Palette size={48} />,
            color: 'secondary'
        },
        {
            id: '03',
            title: 'Motion Design',
            desc: 'Crafting fluid, tactile interactions that add personality without sacrificing speed.',
            details: [
                'Spring-physics based UI components.',
                'Scroll-driven cinematic orchestration.',
                'Liquid glass and surface materiality.',
                'Gesture-responsive interface logic.'
            ],
            icon: <ChartLineUp size={48} />,
            color: 'accent'
        },
        {
            id: '04',
            title: 'Performance Artistry',
            desc: 'Optimizing vitals, accessibility, and responsiveness while preserving the aesthetic.',
            details: [
                'Core Web Vitals acceleration.',
                'SEO-first semantic engineering.',
                'Universal accessibility compliance.',
                'Edge-ready deployment strategies.'
            ],
            icon: <Lightning size={48} />,
            color: 'secondary'
        }
    ];

    return (
        <main className="relative bg-background text-foreground min-h-dvh">
            <PageBackground />
            <Navigation />

            <section className="pt-48 pb-24 px-6 md:px-24">
                <div className="w-full max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 mb-12"
                    >
                        <span className="w-8 h-px bg-accent" />
                        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent">Creative Protocol // [SERVICES]</span>
                    </motion.div>

                    <h1 className="text-6xl md:text-[10vw] font-medium tracking-tighter leading-[0.85] mb-24 max-w-5xl">
                        Creative <br />
                        <span className="italic font-light text-secondary">Expertise.</span>
                    </h1>

                    <div className="grid grid-cols-1 gap-4">
                        {services.map((service, i) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group border border-white/5 bg-white/2 p-8 md:p-16 rounded-2xl hover:bg-white/5 transition-colors relative overflow-hidden"
                            >
                                <div className="flex flex-col lg:flex-row gap-12 items-start relative z-10">
                                    <div className="lg:w-1/3">
                                        <div className="text-accent font-mono text-sm mb-8">{service.id}</div>
                                        <div className="text-zinc-500 mb-8 group-hover:text-accent transition-colors duration-700">
                                            {service.icon}
                                        </div>
                                        <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-none mb-6">
                                            {service.title}
                                        </h2>
                                        <p className="text-secondary text-xl font-light leading-relaxed">
                                            {service.desc}
                                        </p>
                                    </div>

                                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 lg:pt-16">
                                        {service.details.map((detail, idx) => (
                                            <div key={idx} className="flex gap-4 items-start">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                                                <span className="text-zinc-400 font-light leading-snug">{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Background Accent Gradient */}
                                <div className="absolute top-0 right-0 w-[50%] h-full bg-linear-to-bl from-accent/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy Callout */}
            <section className="py-32 px-6 md:px-24 bg-zinc-950 border-t border-white/5">
                <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center">
                    <h3 className="text-4xl md:text-7xl font-medium tracking-tighter leading-tight mb-12 max-w-4xl">
                        Ready to craft <br />
                        your next <span className="italic font-light text-zinc-500">digital experience?</span>
                    </h3>
                    <MagneticButton>
                        <Link href="/#contact" className="w-48 h-48 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold uppercase tracking-widest hover:scale-110 transition-transform">
                            Let's Talk
                        </Link>
                    </MagneticButton>
                </div>
            </section>

            <footer className="py-12 border-t border-white/5 text-center text-secondary text-[9px] uppercase tracking-[0.4em]">
                Prakash (TM) // Creative UI Engineering
            </footer>
        </main>
    );
}
