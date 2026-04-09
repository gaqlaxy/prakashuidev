'use client';

import React, { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useInView,
} from 'framer-motion';
import { ArrowUpRight } from '@phosphor-icons/react/ssr';
import { PROJECTS } from '@/app/lib/data';

// ─── Tone palette (dark-theme accent colors per project) ───────────────────────
const TONE = {
  cyan: {
    bg: 'rgba(6, 182, 212, 0.04)',
    accent: '#06b6d4',
    tag: 'border-cyan-500/20 text-cyan-400/70 bg-cyan-500/5',
    glow: '0 0 90px rgba(6, 182, 212, 0.14)',
  },
  amber: {
    bg: 'rgba(245, 158, 11, 0.04)',
    accent: '#f59e0b',
    tag: 'border-amber-500/20 text-amber-400/70 bg-amber-500/5',
    glow: '0 0 90px rgba(245, 158, 11, 0.14)',
  },
  rose: {
    bg: 'rgba(244, 63, 94, 0.04)',
    accent: '#f43f5e',
    tag: 'border-rose-500/20 text-rose-400/70 bg-rose-500/5',
    glow: '0 0 90px rgba(244, 63, 94, 0.14)',
  },
  emerald: {
    bg: 'rgba(16, 185, 129, 0.04)',
    accent: '#10b981',
    tag: 'border-emerald-500/20 text-emerald-400/70 bg-emerald-500/5',
    glow: '0 0 90px rgba(16, 185, 129, 0.14)',
  },
};

// ─── Abstract project preview visuals (CSS-only) ───────────────────────────────
function CyanDashboardVisual({ accent }) {
  return (
    <div className="relative w-full h-full">
      {/* Grid backdrop */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(${accent}18 1px, transparent 1px), linear-gradient(90deg, ${accent}12 1px, transparent 1px)`,
          backgroundSize: '32px 24px',
        }}
      />
      {/* Stat cards */}
      <div className="flex gap-2 mb-3 relative z-10">
        {['+38%', '12.4k', '2.1×'].map((val, i) => (
          <div
            key={i}
            className="flex-1 rounded p-2"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: `1px solid ${accent}25`,
            }}
          >
            <div
              className="text-[9px] font-mono font-bold"
              style={{ color: accent }}
            >
              {val}
            </div>
            <div className="text-[6px] text-white/25 mt-0.5 font-mono">
              METRIC {i + 1}
            </div>
          </div>
        ))}
      </div>
      {/* Area chart */}
      <div className="relative z-10" style={{ height: '55%' }}>
        <svg
          className="w-full h-full"
          viewBox="0 0 300 80"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="cyanGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={accent} stopOpacity="0.4" />
              <stop offset="100%" stopColor={accent} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,80 L0,52 C40,48 70,32 110,36 C140,40 170,18 200,22 C230,26 260,10 300,13 L300,80 Z"
            fill="url(#cyanGrad)"
          />
          <path
            d="M0,52 C40,48 70,32 110,36 C140,40 170,18 200,22 C230,26 260,10 300,13"
            fill="none"
            stroke={accent}
            strokeWidth="1.5"
          />
          {/* Data points */}
          {[
            [110, 36],
            [200, 22],
            [300, 13],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="2.5" fill={accent} opacity="0.8" />
          ))}
        </svg>
      </div>
    </div>
  );
}

function AmberFinanceVisual({ accent }) {
  const candles = [
    { o: 60, c: 74, h: 78, l: 55 },
    { o: 74, c: 62, h: 77, l: 58 },
    { o: 62, c: 80, h: 83, l: 60 },
    { o: 80, c: 71, h: 84, l: 68 },
    { o: 71, c: 88, h: 91, l: 69 },
    { o: 88, c: 79, h: 93, l: 76 },
    { o: 79, c: 92, h: 94, l: 77 },
  ];

  return (
    <div className="relative w-full h-full">
      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-[11px] font-mono font-bold" style={{ color: accent }}>
          91,420
        </span>
        <span className="text-[8px] font-mono text-green-400">▲ 2.4%</span>
      </div>
      <svg
        className="w-full"
        style={{ height: '50%' }}
        viewBox="0 0 196 64"
        preserveAspectRatio="none"
      >
        {candles.map((c, i) => {
          const x = 4 + i * 27;
          const isUp = c.c > c.o;
          const top = Math.min(c.o, c.c);
          const h = Math.max(2, Math.abs(c.c - c.o));
          return (
            <g key={i}>
              <line
                x1={x + 6}
                y1={100 - c.h}
                x2={x + 6}
                y2={100 - c.l}
                stroke={isUp ? accent : '#ef4444'}
                strokeWidth="1"
                opacity="0.6"
              />
              <rect
                x={x}
                y={100 - top - h}
                width="12"
                height={h}
                fill={isUp ? accent : '#ef4444'}
                rx="1.5"
                fillOpacity="0.85"
              />
            </g>
          );
        })}
      </svg>
      <div className="flex gap-1.5 mt-2">
        {['BTC', 'ETH', 'SOL', 'AVAX'].map((sym) => (
          <div
            key={sym}
            className="text-[7px] font-mono px-1.5 py-0.5 rounded-sm"
            style={{
              background: `${accent}12`,
              color: `${accent}bb`,
              border: `1px solid ${accent}28`,
            }}
          >
            {sym}
          </div>
        ))}
      </div>
    </div>
  );
}

function RoseCommerceVisual({ accent }) {
  return (
    <div className="relative w-full h-full flex gap-3">
      {/* Product card */}
      <div
        className="flex-1 rounded-lg overflow-hidden flex flex-col"
        style={{
          background: 'rgba(255,255,255,0.03)',
          border: `1px solid ${accent}22`,
        }}
      >
        <div
          className="flex-1 flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${accent}18 0%, transparent 100%)`,
          }}
        >
          <div
            className="w-10 h-10 rounded-full"
            style={{ background: `${accent}30` }}
          />
        </div>
        <div className="p-2">
          <div className="text-[7px] font-mono text-white/35">SONIC ARC PRO</div>
          <div
            className="text-[10px] font-mono font-bold mt-0.5"
            style={{ color: accent }}
          >
            $420
          </div>
        </div>
      </div>
      {/* Sidebar chips */}
      <div className="flex flex-col gap-2 w-14 justify-between">
        {['EARBUDS', 'WIRELESS', 'ANC'].map((tag) => (
          <div
            key={tag}
            className="rounded-sm px-1 py-1.5 text-[5px] font-mono text-white/25 text-center leading-tight"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {tag}
          </div>
        ))}
        <div
          className="rounded-sm py-1.5 text-center"
          style={{ background: accent }}
        >
          <span className="text-[6px] font-bold font-mono text-black">ADD</span>
        </div>
      </div>
    </div>
  );
}

function EmeraldSystemVisual({ accent }) {
  const components = ['Button', 'Card', 'Modal', 'Input', 'Toast', 'Badge'];
  return (
    <div className="relative w-full h-full flex flex-col gap-2">
      <div className="grid grid-cols-3 gap-1.5 flex-1">
        {components.map((comp, i) => (
          <div
            key={i}
            className="rounded-sm p-2 flex flex-col gap-1.5"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border:
                i === 0
                  ? `1px solid ${accent}40`
                  : '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div
              className="w-full h-2.5 rounded-sm"
              style={{
                background:
                  i % 3 === 0 ? `${accent}55` : 'rgba(255,255,255,0.06)',
              }}
            />
            <div className="text-[6px] font-mono text-white/25">{comp}</div>
          </div>
        ))}
      </div>
      <div
        className="p-2 rounded-sm"
        style={{
          background: 'rgba(255,255,255,0.02)',
          border: `1px solid ${accent}22`,
        }}
      >
        <div className="text-[7px] font-mono" style={{ color: accent }}>
          99% UI parity · 40+ components
        </div>
      </div>
    </div>
  );
}

// ─── Project Preview Window ───────────────────────────────────────────────────
function ProjectVisual({ tone, title }) {
  const colors = TONE[tone] || TONE.cyan;
  const visualMap = {
    cyan: <CyanDashboardVisual accent={colors.accent} />,
    amber: <AmberFinanceVisual accent={colors.accent} />,
    rose: <RoseCommerceVisual accent={colors.accent} />,
    emerald: <EmeraldSystemVisual accent={colors.accent} />,
  };

  return (
    <div className="relative w-full h-full bg-[#0c0c0c] overflow-hidden">
      {/* Dot grid texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)',
          backgroundSize: '16px 16px',
        }}
      />
      {/* Browser chrome */}
      <div className="absolute top-0 left-0 right-0 px-4 py-3 flex items-center gap-2 z-20 border-b border-white/[0.06]">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-white/10" />
          <div className="w-2 h-2 rounded-full bg-white/10" />
          <div className="w-2 h-2 rounded-full bg-white/10" />
        </div>
        <div
          className="ml-2 px-3 py-0.5 rounded-sm text-[7px] font-mono text-white/20 flex-1"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {title.toLowerCase()}.app/dashboard
        </div>
      </div>
      {/* Visual content */}
      <div className="absolute inset-0 pt-12 p-4 z-10">
        {visualMap[tone]}
      </div>
      {/* Bottom accent glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-20"
        style={{
          background: `linear-gradient(to top, ${colors.accent}18, transparent)`,
        }}
      />
    </div>
  );
}

// ─── Project Row ──────────────────────────────────────────────────────────────
function ProjectRow({ project, index, isHovered, onHover, onLeave, shouldReduceMotion }) {
  const rowRef = useRef(null);
  const isInView = useInView(rowRef, { once: true, margin: '0px 0px -60px 0px' });
  const tone = TONE[project.tone] || TONE.cyan;

  return (
    <motion.div
      ref={rowRef}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={onLeave}
      className="relative group cursor-pointer"
    >
      {/* Row hover background tint */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-xl"
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        style={{ backgroundColor: tone.bg }}
        transition={{ duration: 0.35 }}
      />

      <div className="relative flex items-center px-4 md:px-6 py-7 md:py-9 border-b border-white/[0.05] gap-4 md:gap-8">
        {/* ── Index Number ── */}
        <motion.span
          animate={{
            opacity: isHovered ? 1 : 0.15,
            scale: isHovered ? 1.06 : 1,
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="hidden sm:block font-mono font-bold tracking-tighter leading-none select-none flex-shrink-0 w-14 text-right"
          style={{
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            color: isHovered ? tone.accent : 'rgba(255,255,255,0.12)',
            willChange: 'transform, color',
          }}
        >
          0{index + 1}
        </motion.span>

        {/* ── Main Info ── */}
        <div className="flex-1 flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-8 min-w-0">
          {/* Title + sector */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3
                className="font-medium tracking-tight leading-none transition-colors duration-300"
                style={{
                  fontSize: 'clamp(1.4rem, 3vw, 2.25rem)',
                  color: isHovered ? '#ffffff' : 'rgba(255,255,255,0.85)',
                }}
              >
                {project.title}
              </h3>
              <span className="text-[9px] font-mono tracking-[0.22em] uppercase text-white/30 group-hover:text-white/50 transition-colors duration-300">
                {project.sector}
              </span>
            </div>
            <p className="mt-2 text-[13px] leading-relaxed text-white/30 group-hover:text-white/45 transition-colors duration-300 hidden md:block max-w-[46ch]">
              {project.description}
            </p>
          </div>

          {/* Meta cluster */}
          <div className="flex items-center gap-5 lg:gap-7 flex-shrink-0">
            {/* Stack chip */}
            <span
              className={`hidden md:inline-flex items-center px-2.5 py-1 rounded-sm text-[7px] font-mono tracking-widest uppercase border flex-shrink-0 ${tone.tag}`}
            >
              {project.stack}
            </span>

            {/* Year */}
            <div className="flex flex-col gap-0.5 flex-shrink-0">
              <span className="text-[7px] font-mono tracking-[0.35em] uppercase text-white/20">
                Year
              </span>
              <span className="text-[11px] font-mono text-white/55">
                {project.year}
              </span>
            </div>

            {/* Role — hidden on small screens */}
            <div className="hidden xl:flex flex-col gap-0.5 flex-shrink-0">
              <span className="text-[7px] font-mono tracking-[0.35em] uppercase text-white/20">
                Role
              </span>
              <span className="text-[11px] font-mono text-white/55">
                {project.role}
              </span>
            </div>

            {/* Impact */}
            <div className="flex flex-col gap-0.5 flex-shrink-0">
              <span className="text-[7px] font-mono tracking-[0.35em] uppercase text-white/20">
                Impact
              </span>
              <span
                className="text-[11px] font-mono font-bold"
                style={{ color: tone.accent }}
              >
                {project.impact}
              </span>
            </div>
          </div>
        </div>

        {/* ── Arrow ── */}
        <motion.div
          animate={{
            x: isHovered ? 0 : -3,
            y: isHovered ? 0 : 3,
            opacity: isHovered ? 1 : 0.2,
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="flex-shrink-0 ml-2"
          style={{ color: isHovered ? tone.accent : 'rgba(255,255,255,0.4)' }}
        >
          <ArrowUpRight weight="bold" size={20} />
        </motion.div>

        {/* ── Hover Preview Panel (desktop only) ── */}
        <AnimatePresence>
          {isHovered && !shouldReduceMotion && (
            <motion.div
              key={`preview-${project.id}`}
              initial={{ clipPath: 'inset(0 100% 0 0 round 12px)', opacity: 0 }}
              animate={{ clipPath: 'inset(0 0% 0 0 round 12px)', opacity: 1 }}
              exit={{ clipPath: 'inset(0 100% 0 0 round 12px)', opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
              className="absolute right-14 top-3 bottom-3 hidden lg:block pointer-events-none"
              style={{
                width: 'clamp(240px, 28vw, 360px)',
                boxShadow: tone.glow,
                zIndex: 20,
              }}
            >
              <div
                className="w-full h-full rounded-xl overflow-hidden"
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <ProjectVisual tone={project.tone} title={project.title} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ─── Scrolling ticker tags ─────────────────────────────────────────────────────
const FOCUS_TAGS = [
  'Enterprise platforms',
  'Financial systems',
  'Luxury commerce',
  'Design infrastructure',
  'Realtime dashboards',
  'Performance tuning',
  'Motion design',
  'Accessibility',
];

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function FeaturedWorksSection() {
  const [hoveredId, setHoveredId] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, {
    once: true,
    margin: '0px 0px -80px 0px',
  });

  const handleHover = useCallback((id) => setHoveredId(id), []);
  const handleLeave = useCallback(() => setHoveredId(null), []);

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-background py-28 px-6 md:px-12 lg:px-20"
    >
      {/* Ambient centre glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(37,99,235,0.035) 0%, transparent 68%)',
          }}
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto">
        {/* ════════════════════════ HEADER ════════════════════════ */}
        <header
          ref={headerRef}
          className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between mb-16"
        >
          {/* Left: label + title */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -14 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex items-center gap-4 mb-7"
            >
              <span className="h-px w-10 bg-accent" />
              <span className="text-[9px] font-mono tracking-[0.4em] uppercase text-accent/70">
                Featured Works
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.75,
                delay: 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="font-medium tracking-tighter leading-[0.91] text-foreground"
              style={{ fontSize: 'clamp(2.6rem, 7vw, 6.5rem)' }}
            >
              Digital products
              <br />
              <span className="text-secondary italic font-light">
                that feel
              </span>
              <br />
              inevitable.
            </motion.h2>
          </div>

          {/* Right: counter + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.22, ease: 'easeOut' }}
            className="flex flex-col lg:items-end gap-6"
          >
            {/* Ghost counter */}
            <span
              className="font-mono font-bold tracking-tighter leading-none text-white/[0.04] select-none hidden lg:block"
              style={{ fontSize: 'clamp(4rem, 9vw, 7rem)' }}
            >
              04
            </span>
            <div className="space-y-3 lg:text-right">
              <p className="text-[13px] text-white/35 leading-relaxed max-w-[28ch]">
                Four flagship projects across enterprise, finance, commerce,
                and design systems.
              </p>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-[8px] font-mono tracking-[0.32em] uppercase text-white/40 hover:text-accent transition-colors duration-300 group"
              >
                View Archive
                <ArrowUpRight
                  weight="bold"
                  size={11}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
              </Link>
            </div>
          </motion.div>
        </header>

        {/* ════════════════════════ TICKER ════════════════════════ */}
        <div className="mb-14 overflow-hidden border-y border-white/[0.05]">
          <div className="flex items-center gap-10 whitespace-nowrap px-6 py-3 text-[7px] uppercase tracking-[0.38em] text-white/20 animate-marquee pause-marquee font-mono">
            {FOCUS_TAGS.concat(FOCUS_TAGS).map((tag, i) => (
              <span key={`${tag}-${i}`} className="flex items-center gap-6">
                <span>{tag}</span>
                <span
                  className="inline-block rounded-full flex-shrink-0"
                  style={{
                    width: '3px',
                    height: '3px',
                    background: 'rgba(37,99,235,0.5)',
                  }}
                />
              </span>
            ))}
          </div>
        </div>

        {/* ════════════════════════ PROJECT LIST ════════════════════════ */}
        <div className="relative">
          {/* Top hairline */}
          <div className="border-t border-white/[0.05]" />

          {PROJECTS.map((project, index) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={index}
              isHovered={hoveredId === project.id}
              onHover={handleHover}
              onLeave={handleLeave}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}

          {/* ── Browse All CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex items-center justify-center pt-14"
          >
            <Link
              href="/work"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-[13px] font-medium border border-white/[0.1] text-white/50 hover:text-white hover:border-accent/40 transition-all duration-300 overflow-hidden"
            >
              {/* Shimmer fill on hover */}
              <span className="absolute inset-0 rounded-full bg-accent/[0.06] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
              <span className="relative">Browse all projects</span>
              <ArrowUpRight
                weight="bold"
                size={14}
                className="relative group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 text-white/40 group-hover:text-accent"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
