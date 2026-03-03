'use client';

import React from 'react';
import Link from 'next/link';
import MagneticButton from '../MagneticButton';
import { ArrowUpRight, Code, Palette, ChartLineUp, Lightning } from '@phosphor-icons/react/ssr';
import { SERVICES } from '@/app/lib/data';

const iconMap = {
  '01': <Code size={32} />,
  '02': <Palette size={32} />,
  '03': <ChartLineUp size={32} />,
  '04': <Lightning size={32} />,
};

export default function ExpertiseSection() {
  return (
    <section id="services" className="bg-white py-32 px-6 md:px-24 relative">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-start">
        <div className="lg:w-1/3 lg:sticky lg:top-32">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-accent" />
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent">
              Expertise // 03
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-medium tracking-tighter text-zinc-900 leading-[0.85]">
            Creative <br />
            <span className="italic font-light text-zinc-300">
              Capabilities.
            </span>
          </h2>
          <p className="mt-12 text-zinc-500 text-lg leading-relaxed max-w-sm">
            I design and build cinematic UI systems where motion, layout, and
            interaction elevate the product story.
          </p>
          <div className="mt-12">
            <MagneticButton>
              <Link
                href="/services"
                className="text-[10px] uppercase tracking-widest font-bold text-accent flex items-center gap-2 group"
              >
                View full creative protocol{' '}
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </MagneticButton>
          </div>
        </div>

        <div className="lg:w-2/3 flex flex-col divide-y divide-zinc-100">
          {SERVICES.map((service, i) => (
            <div
              key={service.id}
              className="group py-16 flex flex-col md:flex-row items-center gap-12"
            >
              <div className="flex items-center gap-6 md:w-1/3">
                <span className="text-accent font-mono text-sm">{service.id}</span>
                <div className="text-zinc-400 group-hover:text-accent transition-colors duration-500">
                  {iconMap[service.id]}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl md:text-5xl font-medium text-zinc-900 mb-6 group-hover:translate-x-2 transition-transform duration-500">
                  {service.title}
                </h3>
                <p className="text-zinc-500 text-xl leading-relaxed max-w-xl font-light">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
