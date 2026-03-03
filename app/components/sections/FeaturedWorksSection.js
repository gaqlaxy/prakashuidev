'use client';

import React from 'react';
import Link from 'next/link';
import MagneticButton from '../MagneticButton';
import BentoGrid from '../BentoGrid';
import BentoCard from '../BentoCard';
import { ArrowUpRight } from '@phosphor-icons/react/ssr';
import { PROJECTS } from '@/app/lib/data';

export default function FeaturedWorksSection() {
  const focusTags = [
    'Enterprise platforms',
    'Financial systems',
    'Luxury commerce',
    'Design infrastructure',
    'Realtime dashboards',
    'Performance tuning',
  ];

  const toneClasses = {
    cyan: 'border-cyan-200/30 text-cyan-100 bg-cyan-500/10',
    amber: 'border-amber-200/30 text-amber-100 bg-amber-500/10',
    rose: 'border-rose-200/30 text-rose-100 bg-rose-500/10',
    emerald: 'border-emerald-200/30 text-emerald-100 bg-emerald-500/10',
  };

  return (
    <section id="work" className="relative overflow-hidden bg-[#f6f1ea] py-28 px-6 md:px-20 text-zinc-900">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-gradient-to-br from-[#f8d48a]/40 via-transparent to-transparent blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-gradient-to-tr from-[#7dd3fc]/35 via-transparent to-transparent blur-3xl" />
        <div className="absolute inset-0 opacity-40 [mask-image:radial-gradient(circle_at_top,black,transparent_70%)]">
          <div className="h-full w-full bg-[linear-gradient(120deg,rgba(0,0,0,0.04),transparent_60%)]" />
        </div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto">
        <header className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between mb-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-zinc-800/70" />
              <span className="text-[11px] font-mono tracking-[0.35em] uppercase text-zinc-600">
                Featured Works // 2024-2026
              </span>
            </div>
            <h2 className="text-5xl md:text-[7vw] font-medium tracking-tighter leading-[0.85] text-zinc-900">
              Digital products <br />
              that feel inevitable.
            </h2>
          </div>
          <div className="max-w-md space-y-6">
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
              Four flagship builds across enterprise, finance, commerce, and design systems. 
              Each one tuned for clarity, speed, and measurable lift.
            </p>
            <div className="flex items-center gap-6">
              <MagneticButton>
                <Link
                  href="/work"
                  className="flex items-center gap-3 text-zinc-700 hover:text-accent transition-colors uppercase text-[10px] tracking-[0.25em] font-bold cursor-pointer group"
                >
                  View Full Archive
                  <ArrowUpRight
                    weight="bold"
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </Link>
              </MagneticButton>
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500">
                12+ systems shipped
              </div>
            </div>
          </div>
        </header>

        <div className="mb-16 overflow-hidden rounded-full border border-black/5 bg-white/60">
          <div className="flex items-center gap-6 whitespace-nowrap px-6 py-3 text-[10px] uppercase tracking-[0.35em] text-zinc-500 animate-marquee pause-marquee">
            {focusTags.concat(focusTags).map((tag, index) => (
              <span key={`${tag}-${index}`} className="flex items-center gap-4">
                <span>{tag}</span>
                <span className="h-1 w-1 rounded-full bg-zinc-400" />
              </span>
            ))}
          </div>
        </div>

        <BentoGrid>
          {PROJECTS.map((project, index) => (
            <BentoCard
              key={project.id}
              title={`${project.title} // ${project.sector}`}
              description={project.description}
              tag={`Stack: ${project.stack}`}
              tagClassName={toneClasses[project.tone]}
              meta={[
                { label: 'Year', value: project.year },
                { label: 'Role', value: project.role },
                { label: 'Impact', value: project.impact },
              ]}
              className={project.className}
              animation={project.animation}
              index={index}
            >
              <ProjectPreview
                title={project.title}
                tone={project.tone}
                badge={project.impact}
              />
            </BentoCard>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

function ProjectPreview({ title, tone, badge }) {
  const tones = {
    cyan: {
      border: 'border-cyan-200/20',
      glow: 'from-cyan-400/25 via-transparent to-transparent',
      text: 'text-cyan-200',
      chart: 'bg-cyan-400/30',
      chip: 'border-cyan-200/30 text-cyan-100/80',
    },
    amber: {
      border: 'border-amber-200/20',
      glow: 'from-amber-400/25 via-transparent to-transparent',
      text: 'text-amber-200',
      chart: 'bg-amber-400/30',
      chip: 'border-amber-200/30 text-amber-100/80',
    },
    rose: {
      border: 'border-rose-200/20',
      glow: 'from-rose-400/25 via-transparent to-transparent',
      text: 'text-rose-200',
      chart: 'bg-rose-400/30',
      chip: 'border-rose-200/30 text-rose-100/80',
    },
    emerald: {
      border: 'border-emerald-200/20',
      glow: 'from-emerald-400/25 via-transparent to-transparent',
      text: 'text-emerald-200',
      chart: 'bg-emerald-400/30',
      chip: 'border-emerald-200/30 text-emerald-100/80',
    },
  };

  const toneSet = tones[tone] || tones.cyan;

  return (
    <div className={`relative w-full h-full rounded-3xl overflow-hidden aspect-video border ${toneSet.border} bg-gradient-to-br from-[#0b0f14] via-[#0f131a] to-[#0b0f14]`}>
      <div className={`absolute -left-1/3 top-0 h-full w-full bg-gradient-to-br ${toneSet.glow}`} />
      <div className="absolute inset-0 pixel-grid opacity-30" />

      <div className="relative z-10 flex h-full flex-col p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/5" />
          </div>
          <div className={`text-[10px] uppercase tracking-[0.35em] font-mono ${toneSet.text}`}>
            Live System
          </div>
        </div>

        <div className="mt-8 grid grid-cols-12 gap-4">
          <div className="col-span-7 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="h-2 w-20 rounded-full bg-white/20" />
            <div className="mt-4 space-y-2">
              <div className="h-2 w-full rounded-full bg-white/10" />
              <div className="h-2 w-5/6 rounded-full bg-white/10" />
              <div className="h-2 w-4/6 rounded-full bg-white/10" />
            </div>
          </div>
          <div className="col-span-5 flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-white/50">Signals</div>
            <div className="grid grid-cols-4 gap-2 items-end h-16">
              {[10, 24, 18, 32].map((value, idx) => (
                <div
                  key={idx}
                  className={`w-full rounded-md ${toneSet.chart}`}
                  style={{ height: `${value}px` }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-auto flex items-end justify-between">
          <div>
            <div className="text-[clamp(1.25rem,3.2vw,2.5rem)] font-mono text-white/80 uppercase tracking-tight leading-none">
              {title}
            </div>
            <div className="mt-3 flex items-center gap-3">
              <span className={`text-[9px] font-mono uppercase tracking-[0.35em] ${toneSet.text}`}>
                System build
              </span>
              <span className="h-px w-16 bg-white/10" />
            </div>
          </div>
          <span className={`text-[9px] font-mono uppercase tracking-[0.3em] px-3 py-1 rounded-full border ${toneSet.chip}`}>
            {badge}
          </span>
        </div>
      </div>
    </div>
  );
}
