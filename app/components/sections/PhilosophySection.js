'use client';

import React from 'react';
import ScrollReveal from '../ScrollReveal';
import SkillBadge from '../SkillBadge';
import { SKILLS } from '@/app/lib/data';

export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="min-h-dvh bg-background text-foreground flex flex-col lg:flex-row relative overflow-hidden"
    >
      <div className="flex-1 p-6 md:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5 relative z-10">
        <div className="flex items-center gap-3 mb-12">
          <span className="w-8 h-px bg-accent" />
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent">
            The Protocol // 02
          </span>
        </div>

        <ScrollReveal>
          <h2 className="text-4xl md:text-7xl font-medium tracking-tighter leading-[0.9] mb-12">
            I don't ship <br />
            screens. I <br />
            <span className="text-secondary italic font-light">
              compose
            </span>{' '}
            <br />
            experiences.
          </h2>
        </ScrollReveal>

        <p className="text-secondary text-xl leading-relaxed max-w-xl font-light">
          My approach blends visual storytelling with precise interaction
          design. Every pixel carries intent, every motion tells a story, and
          every detail earns its place.
        </p>

        <div className="mt-16 flex items-center gap-12">
          <div>
            <div className="text-accent font-mono text-2xl mb-1">01</div>
            <div className="text-[10px] uppercase tracking-widest text-secondary">
              Concept
            </div>
          </div>
          <div className="w-12 h-px bg-white/10" />
          <div>
            <div className="text-accent font-mono text-2xl mb-1">02</div>
            <div className="text-[10px] uppercase tracking-widest text-secondary">
              Physics
            </div>
          </div>
          <div className="w-12 h-px bg-white/10" />
          <div>
            <div className="text-accent font-mono text-2xl mb-1">03</div>
            <div className="text-[10px] uppercase tracking-widest text-secondary">
              Deploy
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 relative bg-zinc-950 flex items-center justify-center p-12 overflow-hidden min-h-[500px]">
        <div className="absolute inset-0 pixel-grid opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_55%)]" />

        <div className="relative z-10 w-full max-w-xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-accent" />
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent">
              Skill Matrix
            </span>
          </div>

          <div className="relative border border-white/10 rounded-3xl bg-white/2 p-6 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
            <div className="absolute -right-24 -top-24 w-56 h-56 rounded-full border border-white/10 opacity-30" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[9px] font-mono tracking-[0.4em] uppercase text-accent">
                  Badge Mosaic
                </span>
                <span className="text-[9px] text-white/40 uppercase tracking-widest">
                  v2
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                {SKILLS.map((skill, i) => (
                  <SkillBadge key={skill} skill={skill} index={i} />
                ))}
              </div>

              <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-secondary">
                <span className="w-8 h-px bg-white/20" />
                Calibrated For Expressive UI
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
