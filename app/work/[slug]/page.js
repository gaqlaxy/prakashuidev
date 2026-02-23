'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation';
import MagneticButton from '../../components/MagneticButton';
import { ArrowUpRight } from '@phosphor-icons/react';
import { projects } from '../projects';

export default function ProjectDetailPage({ params }) {
    const project = projects.find((item) => item.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="bg-background text-foreground min-h-dvh">
            <div className="fixed inset-0 pixel-grid pointer-events-none opacity-20" />
            <div className="grain-overlay" />
            <Navigation />

            <section className="pt-48 pb-24 px-6 md:px-24">
                <div className="w-full max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 mb-12"
                    >
                        <span className="w-8 h-px bg-accent" />
                        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent">
                            Project Detail // {project.id}
                        </span>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row items-start gap-16">
                        <div className="flex-1">
                            <h1 className="text-6xl md:text-[8vw] font-medium tracking-tighter leading-[0.85] mb-10">
                                {project.title}
                            </h1>
                            <p className="text-secondary text-xl font-light leading-relaxed max-w-2xl">
                                {project.summary}
                            </p>

                            <div className="mt-12 flex flex-wrap gap-3">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[9px] font-mono border border-white/10 px-3 py-1 text-zinc-500 bg-white/2 uppercase tracking-widest"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="w-full lg:w-[360px] border border-white/10 rounded-3xl bg-white/2 p-8">
                            <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent mb-6">Project Meta</div>
                            <div className="space-y-5 text-sm text-secondary">
                                <div className="flex justify-between">
                                    <span className="uppercase tracking-widest text-[9px] text-zinc-500">Category</span>
                                    <span className="text-white/80">{project.category}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="uppercase tracking-widest text-[9px] text-zinc-500">Role</span>
                                    <span className="text-white/80">{project.role}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="uppercase tracking-widest text-[9px] text-zinc-500">Timeline</span>
                                    <span className="text-white/80">{project.timeline}</span>
                                </div>
                                <div className="pt-6 border-t border-white/10">
                                    <div className="uppercase tracking-widest text-[9px] text-zinc-500 mb-3">Stack</div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.stack.map((item) => (
                                            <span key={item} className="text-[9px] font-mono px-2 py-1 bg-white/5 border border-white/10 text-white/70">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10">
                        <div className="border border-white/10 rounded-3xl bg-white/2 p-10">
                            <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent mb-8">Highlights</div>
                            <div className="space-y-6 text-secondary text-lg font-light">
                                {project.highlights.map((item, index) => (
                                    <div key={`${project.slug}-h-${index}`} className="flex gap-4 items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative border border-white/10 rounded-3xl bg-zinc-950 p-10 overflow-hidden">
                            <div className="absolute inset-0 opacity-40">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.2),_transparent_60%)]" />
                                <div className="absolute inset-0 pixel-grid opacity-30" />
                            </div>
                            <div className="relative z-10">
                                <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent mb-6">
                                    Creative Intent
                                </div>
                                <p className="text-secondary text-lg font-light leading-relaxed">
                                    {project.desc}
                                </p>
                                <div className="mt-10">
                                    <MagneticButton>
                                        <a href="/work" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold text-white/80 hover:text-accent transition-colors">
                                            Back to Archive <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </a>
                                    </MagneticButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
