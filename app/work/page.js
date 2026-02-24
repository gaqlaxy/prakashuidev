"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "../components/Navigation";
import { ArrowUpRight } from "@phosphor-icons/react";
import { projects } from "./projects";

export default function WorkPage() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Product", "Finance", "E-commerce", "Infrastructure", "Community"];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <main className="bg-background text-foreground min-h-dvh">
      <div className="fixed inset-0 pixel-grid pointer-events-none opacity-20" />
      <div className="grain-overlay" />
      <Navigation />

      <section className="pt-48 pb-24 px-6 md:px-24">
        <div className="w-full max-w-7xl mx-auto">
          <header className="mb-24 flex flex-col lg:flex-row justify-between items-end gap-12">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 mb-12"
              >
                <span className="w-8 h-px bg-accent" />
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent">
                  Creative Experiments // [WORK]
                </span>
              </motion.div>
              <h1 className="text-6xl md:text-[8vw] font-medium tracking-tighter leading-[0.85] mb-8">
                The Project <br />
                <span className="italic font-light text-secondary">
                  Showcase.
                </span>
              </h1>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-wrap gap-4 mb-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full border text-[10px] uppercase font-mono tracking-widest transition-all ${filter === cat
                      ? "bg-accent border-accent text-white"
                      : "border-white/10 text-secondary hover:border-white/30"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/work/${project.slug}`}
                  className="block"
                >
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ y: -10 }}
                    className="group relative bg-white/2 border border-white/5 rounded-3xl overflow-hidden aspect-4/3 flex flex-col justify-end p-12 transition-colors hover:bg-white/5"
                  >
                    <div className="absolute top-12 left-12 text-accent font-mono text-sm">
                      {project.id}
                    </div>
                    <div className="relative z-10">
                      <div className="flex gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[8px] font-mono border border-white/10 px-2 py-0.5 text-zinc-500 bg-white/2"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-4">
                        {project.title}
                      </h2>
                      <p className="text-secondary text-lg font-light leading-relaxed max-w-sm">
                        {project.desc}
                      </p>
                    </div>
                    <div className="absolute top-12 right-12 w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                      <ArrowUpRight
                        weight="bold"
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </div>
                    {/* Decorative Project Pattern */}
                    <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/10 rounded-full group-hover:scale-95 transition-transform duration-1000" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/5 rounded-full group-hover:scale-105 transition-transform duration-1000" />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <footer className="py-24 border-t border-white/5 text-center">
        <div className="text-secondary text-[9px] uppercase tracking-[0.4em] mb-12">
          Prakash (TM) // Built for the edge
        </div>
        <Link
          href="/#contact"
          className="text-3xl font-light hover:text-accent transition-colors"
        >
          Start a collaboration &rarr;
        </Link>
      </footer>
    </main>
  );
}
