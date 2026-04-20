'use client';

import React from 'react';
import Link from 'next/link';
import MagneticButton from '../MagneticButton';
import AnimatedTypography from '../AnimatedTypography';
import LocalTime from '../LocalTime';
import PerpetualPulse from '../PerpetualPulse';
import { ArrowUpRight, Globe } from '@phosphor-icons/react/ssr';

export default function HeroSection() {
  return (
    <section className="relative min-h-dvh flex flex-col justify-center px-6 md:px-24 py-32">
      {/* Cinematic Background Mesh */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] bg-accent/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-24">
          {/* Left Column: Massive Asymmetric Headline */}
          <div className="flex-1 max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-accent" />
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent">
                Creative UI Developer
              </span>
            </div>

            <h1 className="text-6xl md:text-[7vw] font-medium tracking-tighter leading-[0.85] mb-12">
              <AnimatedTypography text="Crafting" /> <br />
              <span className="text-secondary italic font-light">
                interfaces
              </span>{' '}
              <br />
              <AnimatedTypography text="that feel alive." delay={0.5} />
            </h1>

            <div className="flex flex-wrap gap-6">
              <MagneticButton>
                <Link
                  href="/work"
                  className="px-10 py-5 bg-foreground text-background rounded-full font-medium text-sm flex items-center gap-3 group hover:bg-accent hover:text-white transition-all shadow-xl shadow-black/20 active:scale-[0.98]"
                >
                  Explore Work{' '}
                  <ArrowUpRight
                    weight="bold"
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="/#process"
                  className="px-10 py-5 border border-white/10 rounded-full font-medium text-sm flex items-center gap-3 hover:bg-white/5 transition-all text-secondary hover:text-white active:scale-[0.98]"
                >
                  Creative Process
                </Link>
              </MagneticButton>
            </div>
          </div>

          {/* Right Column: Technical Stats / Sidebar */}
          <div className="w-full lg:w-[400px] flex flex-col gap-12 lg:pt-24 self-end lg:self-start">
            <div className="space-y-6">
              <p className="text-secondary leading-relaxed text-xl font-light">
                I specialize in building high-performance, scalable web
                applications and design systems that bridge the gap between
                complex engineering and intuitive user experience.
              </p>
              <div className="flex items-center gap-4 text-xs font-mono text-accent/60">
                <Globe size={16} />
                <span>INDEPENDENT // CHENNAI // EST. 2026</span>
              </div>
            </div>

            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-accent">
                  Availability Matrix
                </span>
                <div className="flex items-center gap-2">
                  <PerpetualPulse size="sm" color="emerald-500" />
                  <span className="text-[9px] uppercase tracking-widest opacity-60">
                    Ready for Launch
                  </span>
                </div>
              </div>
              <p className="text-sm font-light text-zinc-400 leading-relaxed">
                Currently accepting 2 select projects for Q2 2026. <br />
                Estimated response time:{' '}
                <span className="text-white font-mono">{'< 24h'}</span>
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="text-[8px] uppercase tracking-widest opacity-40">
                    Local Time
                  </div>
                  <div className="text-xs font-mono">
                    <LocalTime />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
