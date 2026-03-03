'use client';

import React from 'react';
import { PROCESS_STEPS } from '@/app/lib/data';

export default function ProcessSection() {
  const stepMeta = [
    { duration: '01-02', output: 'Strategy deck' },
    { duration: '02-03', output: 'Visual system' },
    { duration: '03-05', output: 'Interactive proto' },
    { duration: '02-03', output: 'Polish pass' },
    { duration: '01-02', output: 'Perf audit' },
    { duration: '01', output: 'Release kit' },
  ];

  return (
    <section
      id="process"
      className="py-20 px-6 md:px-24 bg-[#05070a] text-white overflow-hidden relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(circle_at_top,black,transparent_70%)]">
          <div className="h-full w-full bg-[linear-gradient(120deg,rgba(37,99,235,0.15),transparent_50%)]" />
        </div>
        <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-gradient-to-br from-accent/30 via-transparent to-transparent blur-3xl" />
        <div className="absolute -bottom-44 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-white/10 via-transparent to-transparent blur-3xl" />
        <div className="absolute inset-0 pixel-grid opacity-10" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto">
        <header className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-accent" />
              <span className="text-[10px] font-mono tracking-[0.35em] uppercase text-accent">
                Creative Execution // 04
              </span>
            </div>
            <h2 className="text-5xl md:text-[6.5vw] font-medium tracking-tighter leading-[0.85]">
              Precision <br />
              <span className="italic font-light text-zinc-500">
                delivery.
              </span>
            </h2>
          </div>

          <div className="max-w-md space-y-5">
            <p className="text-sm text-zinc-400 leading-relaxed">
              Premium-tech delivery with a clear cadence. Each phase has a
              defined output, validation checkpoint, and measurable impact
              before we move forward.
            </p>
            <div className="flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.3em] text-zinc-500">
              <span className="px-3 py-1 rounded-full border border-white/10">
                {PROCESS_STEPS.length} phases
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10">
                checkpointed
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10">
                audit-ready
              </span>
            </div>
          </div>
        </header>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {PROCESS_STEPS.map((item, i) => (
              <div
                key={item.step}
                className="group rounded-[1.75rem] border border-white/10 bg-[#070a0f] p-6 transition-colors hover:bg-[#0b1119]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="h-8 w-8 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-[10px] font-mono text-accent">
                      {item.step}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.35em] text-zinc-500">
                      Phase
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.35em] text-zinc-500">
                    {stepMeta[i]?.duration} w
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-medium tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-5 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                  <span className="flex items-center gap-3">
                    <span className="h-px w-6 bg-white/15" />
                    Output
                  </span>
                  <span className="text-zinc-300 tracking-[0.2em]">
                    {stepMeta[i]?.output}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
