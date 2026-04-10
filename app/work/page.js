"use client";

import React, { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion, useInView } from "framer-motion";
import Navigation from "../components/Navigation";
import PageBackground from "../components/PageBackground";
import { ArrowUpRight, Funnel, X } from "@phosphor-icons/react";
import { projects } from "./projects";

// ─── Category color config ──────────────────────────────────────────────────
const CAT_TONE = {
  Architecture:   { color: "#06b6d4", bg: "rgba(6,182,212,0.05)"  },
  Infrastructure: { color: "#f59e0b", bg: "rgba(245,158,11,0.05)" },
  Healthcare:     { color: "#f43f5e", bg: "rgba(244,63,94,0.05)"  },
  "Internal Tool": { color: "#10b981", bg: "rgba(16,185,129,0.05)" },
};

const CATEGORIES = ["All", "Architecture", "Infrastructure", "Healthcare", "Internal Tool"];

// ─── Project card component ─────────────────────────────────────────────────
function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const shouldReduceMotion = useReducedMotion();
  const tone = CAT_TONE[project.category] || CAT_TONE.Product;

  return (
    <motion.div
      ref={ref}
      layout
      initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <Link href={`/work/${project.slug}`} className="block group h-full">
        <div
          className="relative overflow-hidden rounded-2xl border border-white/[0.07] h-full flex flex-col transition-all duration-500"
          style={{ background: "rgba(255,255,255,0.02)" }}
        >
          {/* Hover tint overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
            style={{ backgroundColor: tone.bg }}
          />

          {/* Top visual area */}
          <div
            className="relative overflow-hidden flex-1 min-h-[220px]"
            style={{
              background: `linear-gradient(135deg, ${tone.color}12 0%, transparent 60%)`,
            }}
          >
            {/* Dot-grid texture */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)`,
                backgroundSize: "20px 20px",
              }}
            />

            {/* Project ID */}
            <div
              className="absolute top-6 left-6 font-mono text-[11px] font-bold tracking-[0.2em] transition-colors duration-300"
              style={{ color: `${tone.color}90` }}
            >
              {project.id}
            </div>

            {/* Arrow button */}
            <div
              className="absolute top-6 right-6 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{
                borderColor: `${tone.color}30`,
                background: "rgba(255,255,255,0.04)",
              }}
            >
              <ArrowUpRight
                weight="bold"
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ color: `${tone.color}bb` }}
              />
            </div>

            {/* Centre abstract visual */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity duration-500">
              <div
                className="w-28 h-28 rounded-full border"
                style={{
                  borderColor: `${tone.color}40`,
                  boxShadow: `0 0 60px ${tone.color}20`,
                }}
              />
              <div
                className="absolute w-16 h-16 rounded-full border"
                style={{ borderColor: `${tone.color}30` }}
              />
              <div
                className="absolute w-6 h-6 rounded-full"
                style={{ background: `${tone.color}35` }}
              />
            </div>
          </div>

          {/* Bottom info area */}
          <div className="relative z-10 p-6 border-t border-white/[0.05]">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[7px] font-mono tracking-widest uppercase px-2 py-1 rounded-sm border"
                  style={{
                    color: `${tone.color}80`,
                    borderColor: `${tone.color}20`,
                    background: `${tone.color}08`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight leading-tight mb-2 text-white/85 group-hover:text-white transition-colors duration-300">
              {project.title.split(" // ")[0]}
            </h2>
            <p className="text-[12px] font-mono tracking-[0.2em] uppercase mb-3" style={{ color: `${tone.color}70` }}>
              {project.title.split(" // ")[1] || project.category}
            </p>
            <p className="text-[13px] text-white/35 leading-relaxed group-hover:text-white/50 transition-colors duration-300 line-clamp-2">
              {project.summary}
            </p>

            {/* Footer meta */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/[0.05]">
              <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-white/25">
                {project.role}
              </span>
              <span className="text-[9px] font-mono text-white/20">
                {project.timeline}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Main Works Page ─────────────────────────────────────────────────────────
export default function WorkPage() {
  const [filter, setFilter] = useState("All");
  const shouldReduceMotion = useReducedMotion();

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  const handleFilter = useCallback((cat) => setFilter(cat), []);

  return (
    <main className="relative bg-background text-foreground min-h-dvh">
      <PageBackground />
      <Navigation />

      {/* ════════════════════ HERO HEADER ════════════════════ */}
      <section className="pt-44 pb-20 px-6 md:px-12 lg:px-20">
        <div className="w-full max-w-7xl mx-auto">
          <header
            ref={headerRef}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20"
          >
            {/* Left: Label + title */}
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: -14 }}
                animate={headerInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex items-center gap-4 mb-8"
              >
                <span className="h-px w-10 bg-accent" />
                <span className="text-[9px] font-mono tracking-[0.4em] uppercase text-accent/70">
                  Creative Experiments // [WORK]
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.75, delay: 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="font-medium tracking-tighter leading-[0.88]"
                style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
              >
                The Project
                <br />
                <span className="italic font-light text-secondary">Showcase.</span>
              </motion.h1>
            </div>

            {/* Right: stat + description */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="lg:text-right space-y-4 max-w-xs"
            >
              <div
                className="font-mono font-bold tracking-tighter leading-none text-white/[0.04] select-none hidden lg:block"
                style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}
              >
                0{projects.length}
              </div>
              <p className="text-[13px] text-white/35 leading-relaxed">
                A curated collection of enterprise products, creative experiments, and systems built with craft.
              </p>
            </motion.div>
          </header>

          {/* ════════════════════ FILTER BAR ════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-2 mb-12"
          >
            <div className="flex items-center gap-2 text-white/25 mr-2">
              <Funnel size={13} />
              <span className="text-[8px] font-mono tracking-[0.3em] uppercase">Filter</span>
            </div>
            {CATEGORIES.map((cat) => {
              const active = filter === cat;
              const tone = CAT_TONE[cat];
              return (
                <motion.button
                  key={cat}
                  onClick={() => handleFilter(cat)}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
                  className="relative px-4 py-2 rounded-full border text-[9px] uppercase font-mono tracking-widest transition-all duration-300 overflow-hidden"
                  style={{
                    borderColor: active
                      ? tone?.color || "#2563eb"
                      : "rgba(255,255,255,0.08)",
                    color: active
                      ? tone?.color || "#2563eb"
                      : "rgba(255,255,255,0.4)",
                    background: active
                      ? tone?.bg || "rgba(37,99,235,0.08)"
                      : "transparent",
                  }}
                >
                  {cat}
                  {active && filter !== "All" && (
                    <span className="ml-1.5 opacity-50 text-[8px]">
                      ({filteredProjects.length})
                    </span>
                  )}
                </motion.button>
              );
            })}
            {filter !== "All" && (
              <button
                onClick={() => handleFilter("All")}
                className="flex items-center gap-1 px-3 py-2 text-[8px] font-mono tracking-widest uppercase text-white/25 hover:text-white/50 transition-colors duration-200"
              >
                <X size={10} />
                Clear
              </button>
            )}
          </motion.div>

          {/* ════════════════════ PROJECT GRID ════════════════════ */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={filter}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24 text-white/20 font-mono text-sm tracking-widest"
            >
              NO PROJECTS IN THIS CATEGORY
            </motion.div>
          )}
        </div>
      </section>

      {/* ════════════════════ FOOTER CTA ════════════════════ */}
      <footer className="py-24 border-t border-white/[0.05] px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white/15 text-[8px] uppercase tracking-[0.4em] font-mono">
            Prakash — Built for the edge
          </div>
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-3 text-xl font-light text-white/60 hover:text-white transition-colors duration-300"
          >
            Start a collaboration
            <ArrowUpRight
              weight="bold"
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 text-accent"
            />
          </Link>
        </div>
      </footer>
    </main>
  );
}
