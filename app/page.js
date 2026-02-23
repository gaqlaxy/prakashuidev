'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import MagneticButton from './components/MagneticButton';
import BentoGrid from './components/BentoGrid';
import BentoCard from './components/BentoCard';
import AnimatedTypography from './components/AnimatedTypography';
import { ArrowUpRight, Cpu, Lightning, Globe, Code, Palette, ChartLineUp } from '@phosphor-icons/react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "spring", stiffness: 100, damping: 20 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export default function Home() {
  return (
    <main className="relative min-h-dvh bg-background text-foreground selection:bg-accent selection:text-white pixel-grid">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center px-6 md:px-24 py-32">
        {/* Cinematic Background Mesh */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] bg-accent/10 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/5 blur-[120px] rounded-full" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative z-10 w-full max-w-7xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-24">
            {/* Left Column: Massive Asymmetric Headline */}
            <div className="flex-1 max-w-4xl">
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
                <span className="w-8 h-px bg-accent" />
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent">
                  Senior UI Engineer // v4.1
                </span>
              </motion.div>

              <h1 className="text-6xl md:text-[7vw] font-medium tracking-tighter leading-[0.85] mb-12">
                <AnimatedTypography text="Engineering" /> <br />
                <span className="text-secondary italic font-light">interfaces</span> <br />
                <AnimatedTypography text="that transcend." delay={0.5} />
              </h1>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-6">
                <MagneticButton>
                  <button className="px-10 py-5 bg-foreground text-background rounded-full font-medium text-sm flex items-center gap-3 group hover:bg-accent hover:text-white transition-all shadow-xl shadow-black/20">
                    Explore Systems <ArrowUpRight weight="bold" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </MagneticButton>
                <MagneticButton>
                  <button className="px-10 py-5 border border-white/10 rounded-full font-medium text-sm flex items-center gap-3 hover:bg-white/5 transition-all text-secondary hover:text-white">
                    Our Philosophy
                  </button>
                </MagneticButton>
              </motion.div>
            </div>

            {/* Right Column: Technical Stats / Sidebar */}
            <div className="w-full lg:w-[400px] flex flex-col gap-12 lg:pt-24 self-end lg:self-start">
              <motion.div variants={fadeInUp} className="space-y-6">
                <p className="text-secondary leading-relaxed text-xl font-light">
                  I bridge the gap between high-end design and precision engineering. Specializing in interaction physics and hardware-accelerated interfaces.
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-accent/60">
                  <Globe size={16} />
                  <span>FREELANCE // BENGALURU // EST. 2026</span>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-px bg-white/5 rounded-3xl overflow-hidden glass-refraction border border-white/5">
                <div className="p-8 bg-background/50">
                  <div className="text-accent mb-4"><Lightning size={24} weight="bold" /></div>
                  <div className="text-3xl font-mono tracking-tighter">99.2</div>
                  <div className="text-[9px] uppercase tracking-widest text-secondary mt-1">Perf Index</div>
                </div>
                <div className="p-8 bg-background/50">
                  <div className="text-accent mb-4"><Cpu size={24} weight="bold" /></div>
                  <div className="text-3xl font-mono tracking-tighter">0.08<span className="text-xs">ms</span></div>
                  <div className="text-[9px] uppercase tracking-widest text-secondary mt-1">Render Floor</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-6 md:left-24 flex flex-col items-start gap-6"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-secondary vertical-text mb-4">Explore</span>
          <div className="w-[1px] h-24 bg-gradient-to-b from-accent to-transparent" />
        </motion.div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="bg-zinc-50 py-32 px-6 md:px-24">
        <div className="w-full max-w-7xl mx-auto">
          <header className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="w-8 h-px bg-accent" />
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent">Selected Works // 01-04</span>
              </motion.div>
              <h2 className="text-5xl md:text-8xl font-medium tracking-tighter text-zinc-900 leading-[0.9]">
                Engineered for <br />
                <span className="italic font-light text-zinc-300">conversion.</span>
              </h2>
            </div>
            <MagneticButton>
              <div className="flex items-center gap-3 text-zinc-400 hover:text-accent transition-colors uppercase text-[10px] tracking-[0.2em] font-bold cursor-pointer group">
                All Systems <ArrowUpRight weight="bold" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </MagneticButton>
          </header>

          <BentoGrid>
            <BentoCard
              title="Aura OS // v2.0"
              description="Custom physics-based window manager and canvas-driven workspace system. Zero-latency interaction models."
              tag="Engine: Canvas/Physics"
              className="md:col-span-8 min-h-[500px]"
            >
              <div className="relative w-full h-full bg-zinc-950/50 rounded-3xl overflow-hidden group/img aspect-video flex items-center justify-center border border-white/5">
                <div className="absolute inset-0 pixel-grid opacity-20" />
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  className="relative z-20 flex flex-col items-center gap-4"
                >
                  <div className="text-[8vw] font-mono text-white/10 select-none tracking-tighter leading-none">AURA_SYS</div>
                  <div className="flex gap-2">
                    {['NEXT.JS', 'FRAMER MOTION', 'CANVAS'].map(tech => (
                      <span key={tech} className="px-2 py-1 text-[8px] font-mono border border-white/10 text-secondary bg-white/5">{tech}</span>
                    ))}
                  </div>
                </motion.div>
                {/* Visual Engineering Mockup: Floating "Nodes" */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, 10, 0],
                      opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5
                    }}
                    className="absolute w-24 h-24 border border-accent/20 rounded-lg flex items-center justify-center bg-accent/5 backdrop-blur-sm"
                    style={{
                      top: `${20 + i * 15}%`,
                      left: `${10 + i * 20}%`,
                      transform: `rotate(${i * 15}deg)`
                    }}
                  >
                    <div className="w-1 h-1 bg-accent rounded-full" />
                  </motion.div>
                ))}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/img:translate-x-full transition-transform duration-1000 ease-in-out" />
              </div>
            </BentoCard>

            <BentoCard
              title="Protocol Mesh"
              description="Experimental 3D visualization layer using custom GLSL shaders and hardware acceleration."
              tag="Engine: WebGL/GLSL"
              className="md:col-span-4 min-h-[500px]"
            >
              <div className="relative h-full flex flex-col justify-end p-4 overflow-hidden group/mesh">
                <div className="absolute inset-0 bg-zinc-950 -z-10" />
                {/* Simulated Shader Background */}
                <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-accent)_0%,_transparent_70%)] opacity-20 blur-3xl animate-pulse" />
                  <div className="absolute inset-0 pixel-grid" />
                </div>

                <div className="flex flex-col gap-6 mt-8 relative z-20">
                  <div className="space-y-4">
                    <div className="text-[8px] font-mono text-accent">SHADER_SOURCE://0X8F21</div>
                    <pre className="text-[10px] font-mono text-zinc-500 overflow-hidden leading-tight">
                      {`void main() {
  vec2 uv = fragCoord;
  float d = length(uv);
  gl_FragColor = vec4(d);
}`}
                    </pre>
                  </div>
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                        <span>Buffer_{i}</span>
                        <span>{Math.floor(Math.random() * 100)}%</span>
                      </div>
                      <div className="h-px bg-white/5 overflow-hidden">
                        <motion.div
                          className="h-full bg-accent"
                          initial={{ width: "0%" }}
                          whileInView={{ width: `${Math.random() * 80 + 20}%` }}
                          transition={{ duration: 1.5, delay: i * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </BentoCard>

            <BentoCard
              title="Sonic Interface"
              description="Web-audio synthesizer with spatial 3D interaction and generative UI states."
              tag="Engine: Web Audio"
              className="md:col-span-12 lg:col-span-5 min-h-[450px]"
            >
              <div className="mt-8 flex items-center justify-center h-full min-h-[250px] relative overflow-hidden bg-zinc-950 rounded-2xl">
                <div className="absolute inset-0 opacity-10">
                  <div className="h-px w-full bg-linear-to-r from-transparent via-accent to-transparent absolute top-1/2" />
                </div>
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-48 h-48 rounded-full border border-white/5 flex items-center justify-center relative"
                >
                  <div className="absolute inset-0 border border-accent/20 rounded-full animate-ping" />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-32 h-32 rounded-full border border-accent/40 flex items-center justify-center"
                  >
                    <div className="w-8 h-8 rounded-full bg-accent shadow-[0_0_40px_var(--color-accent)]" />
                  </motion.div>
                </motion.div>
                {/* Frequency Bars */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1 h-32 items-end opacity-20">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [`${Math.random() * 100}%`, `${Math.random() * 100}%`] }}
                      transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror" }}
                      className="w-[2px] bg-accent"
                    />
                  ))}
                </div>
              </div>
            </BentoCard>

            <BentoCard
              title="Motion Core"
              description="High-performance layout transition engine for fluid Next.js 15 page orchestrations."
              tag="Engine: Layout API"
              className="md:col-span-12 lg:col-span-7 min-h-[450px]"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 h-full">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <motion.div
                    key={i}
                    layoutId={`box-${i}`}
                    whileHover={{ scale: 0.95, rotate: i % 2 === 0 ? 2 : -2 }}
                    className="aspect-square bg-zinc-900 border border-white/5 rounded-2xl flex flex-col items-center justify-center p-4 group/item relative overflow-hidden"
                  >
                    <div className="absolute top-2 left-2 text-[8px] font-mono text-zinc-700">0{i}_ORCH</div>
                    <motion.div
                      layout
                      className="w-12 h-12 border border-accent/40 rounded-lg flex items-center justify-center"
                    >
                      <div className="w-4 h-4 bg-accent/20 rounded-full" />
                    </motion.div>
                    <div className="mt-4 w-full h-px bg-white/5" />
                    <div className="mt-4 flex gap-1">
                      <div className="w-1 h-1 bg-accent/40 rounded-full" />
                      <div className="w-1 h-1 bg-accent/20 rounded-full" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </BentoCard>
          </BentoGrid>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="min-h-dvh bg-background text-foreground flex flex-col lg:flex-row relative overflow-hidden">
        <div className="flex-1 p-6 md:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12"
          >
            <span className="w-8 h-px bg-accent" />
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent">The Protocol // 02</span>
          </motion.div>

          <h2 className="text-4xl md:text-7xl font-medium tracking-tighter leading-[0.9] mb-12">
            I don't build <br />
            websites. I <br />
            <span className="text-secondary italic font-light">architect</span> <br />
            ecosystems.
          </h2>

          <p className="text-secondary text-xl leading-relaxed max-w-xl font-light">
            My approach is rooted in the intersection of mathematical precision and aesthetic purity. Every pixel has a purpose. Every motion has a physics. I build for performance, scalability, and pure digital joy.
          </p>

          <div className="mt-16 flex items-center gap-12">
            <div>
              <div className="text-accent font-mono text-2xl mb-1">01</div>
              <div className="text-[10px] uppercase tracking-widest text-secondary">Concept</div>
            </div>
            <div className="w-12 h-px bg-white/10" />
            <div>
              <div className="text-accent font-mono text-2xl mb-1">02</div>
              <div className="text-[10px] uppercase tracking-widest text-secondary">Physics</div>
            </div>
            <div className="w-12 h-px bg-white/10" />
            <div>
              <div className="text-accent font-mono text-2xl mb-1">03</div>
              <div className="text-[10px] uppercase tracking-widest text-secondary">Deploy</div>
            </div>
          </div>
        </div>

        <div className="flex-1 relative bg-zinc-950 flex items-center justify-center p-12 overflow-hidden min-h-[500px]">
          <div className="absolute inset-0 pixel-grid opacity-20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_55%)]" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 w-full max-w-xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-accent" />
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent">Skill Matrix</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {['NEXT.JS', 'REACT', 'FRAMER', 'GLSL', 'THREE.JS', 'TAILWIND', 'TYPESCRIPT', 'GSAP', 'WEB AUDIO', 'LENIS'].map((skill) => (
                <div
                  key={skill}
                  className="group/skill border border-white/10 rounded-2xl px-4 py-5 bg-white/2 hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono tracking-widest text-white/80">{skill}</span>
                    <span className="text-[9px] text-accent">++</span>
                  </div>
                  <div className="mt-4 h-px bg-white/10 overflow-hidden">
                    <div className="h-px w-2/3 bg-accent/60 group-hover/skill:w-full transition-all duration-700" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-[10px] uppercase tracking-[0.3em] text-secondary flex items-center gap-3">
              <span className="w-8 h-px bg-white/20" />
              Calibrated For Real-Time Interfaces
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="services" className="bg-white py-32 px-6 md:px-24 relative">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-start">
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-8 h-px bg-accent" />
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent">Expertise // 03</span>
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-medium tracking-tighter text-zinc-900 leading-[0.85]">
              Core <br />
              <span className="italic font-light text-zinc-300">Capabilities.</span>
            </h2>
            <p className="mt-12 text-zinc-500 text-lg leading-relaxed max-w-sm">
              I specialize in high-performance digital engineering where motion physics meets architectural precision.
            </p>
            <div className="mt-12">
              <MagneticButton>
                <a href="/services" className="text-[10px] uppercase tracking-widest font-bold text-accent flex items-center gap-2 group">
                  View full service protocol <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </MagneticButton>
            </div>
          </div>

          <div className="lg:w-2/3 flex flex-col divide-y divide-zinc-100">
            {[
              { id: '01', title: 'Interface Engineering', desc: 'Hardware-accelerated R&D with Next.js and Framer Motion. I optimize for the sub-ms render floor.', icon: <Code size={32} /> },
              { id: '02', title: 'Product Strategy', desc: 'Defining the digital narrative and user psychological journeys. Turning browsers into believers.', icon: <Palette size={32} /> },
              { id: '03', title: 'Motion Physics', desc: 'Crafting fluid, high-frame-rate interaction models that feel organic and tactile.', icon: <ChartLineUp size={32} /> },
              { id: '04', title: 'Performance Architecture', desc: 'Optimizing Vitals, SEO, and accessibility. I build for the speed of light.', icon: <Lightning size={32} /> }
            ].map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group py-16 flex flex-col md:flex-row items-start gap-12 group"
              >
                <div className="flex items-center gap-6 md:w-1/3">
                  <span className="text-accent font-mono text-sm">{service.id}</span>
                  <div className="text-zinc-400 group-hover:text-accent transition-colors duration-500">
                    {service.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl md:text-5xl font-medium text-zinc-900 mb-6 group-hover:translate-x-2 transition-transform duration-500">{service.title}</h3>
                  <p className="text-zinc-500 text-xl leading-relaxed max-w-xl font-light">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process / Protocol Section */}
      <section id="process" className="py-32 px-6 md:px-24 bg-zinc-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 pixel-grid opacity-10 pointer-events-none" />
        <div className="w-full max-w-7xl mx-auto">
          <header className="mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-8 h-px bg-accent" />
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent">The Protocol // 04</span>
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-medium tracking-tighter leading-[0.85]">
              Technical <br />
              <span className="italic font-light text-zinc-500">Execution.</span>
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { step: '01', title: 'DISCOVERY', desc: 'Deep-dive into technical constraints and product vision. Defining the engineering North Star.' },
              { step: '02', title: 'ARCHITECTURE', desc: 'Building robust, scalable foundations with a focus on type-safety and performance.' },
              { step: '03', title: 'PHYSICS', desc: 'Integrating fluid motion and organic interactions via frame-perfect animation engines.' },
              { step: '04', title: 'REFINEMENT', desc: 'Micro-interaction tuning and sub-pixel polishing across all viewport variants.' },
              { step: '05', title: 'PERFORMANCE', desc: 'Rigorous auditing for core vitals and zero-bloat delivery systems.' },
              { step: '06', title: 'DEPLOYMENT', desc: 'Flawless edge delivery and staging-to-prod synchronization.' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 border border-white/5 bg-white/2 hover:bg-white/5 transition-colors relative group"
              >
                <span className="text-xs font-mono text-accent mb-6 block">{item.step}</span>
                <h3 className="text-2xl font-medium mb-4 tracking-tight group-hover:translate-x-2 transition-transform">{item.title}</h3>
                <p className="text-secondary text-sm leading-relaxed font-light">{item.desc}</p>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" className="min-h-dvh bg-background text-foreground flex flex-col justify-between p-6 md:p-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] border border-white/2 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] border border-white/5 rounded-full" />
        </div>

        <div className="relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12"
          >
            <span className="w-8 h-px bg-accent" />
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent">Get in touch // 04</span>
          </motion.div>

          <h2 className="text-6xl md:text-[14vw] font-medium tracking-tighter leading-[0.75] mb-24">
            Let's build <br />
            <span className="italic font-light text-secondary">the future.</span>
          </h2>

          <div className="flex flex-col lg:flex-row gap-16 items-start justify-between">
            <MagneticButton>
              <a href="mailto:hello@pixeldperfect.com" className="group text-3xl md:text-7xl font-light tracking-tight hover:text-accent transition-colors flex items-center gap-8">
                hello@pixeldperfect.com
                <div className="w-16 h-16 md:w-32 md:h-32 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:scale-110 transition-all duration-500">
                  <ArrowUpRight weight="bold" className="group-hover:rotate-45 transition-transform text-white w-8 h-8 md:w-12 md:h-12" />
                </div>
              </a>
            </MagneticButton>

            <div className="grid grid-cols-2 gap-16 text-secondary text-xs font-mono tracking-[0.2em]">
              <div className="space-y-4">
                <span className="text-accent underline underline-offset-8">STUDIO</span>
                <p className="leading-loose uppercase">
                  12.9716° N, 77.5946° E <br />
                  BENGALURU, INDIA <br />
                  EST. 2026
                </p>
              </div>
              <div className="space-y-4">
                <span className="text-accent underline underline-offset-8">SOCIAL</span>
                <div className="flex flex-col gap-2">
                  <a href="#" className="hover:text-white transition-colors">DRIBBBLE</a>
                  <a href="#" className="hover:text-white transition-colors">X / TWITTER</a>
                  <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-secondary text-[9px] uppercase tracking-[0.4em]">
          <div>PixelDperfect™ // All Rights Reserved</div>
          <div className="flex gap-12">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
          <div>© 2026 // v4.0.2</div>
        </div>
      </footer>
    </main>
  );
}
