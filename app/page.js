import React from "react";
import Link from "next/link";
import Navigation from "./components/Navigation";
import MagneticButton from "./components/MagneticButton";
import BentoGrid from "./components/BentoGrid";
import BentoCard from "./components/BentoCard";
import AnimatedTypography from "./components/AnimatedTypography";
import Footer from "./components/Footer";
import ContactCTA from "./components/ContactCTA";
import LocalTime from "./components/LocalTime";
import {
  ArrowUpRight,
  Lightning,
  Globe,
  Code,
  Palette,
  ChartLineUp,
} from "@phosphor-icons/react/ssr";

const LIQUIDITY_LEVELS = [78, 54, 91];

export default function Home() {
  return (
    <main className="relative min-h-dvh bg-background text-foreground selection:bg-accent selection:text-white pixel-grid">
      <Navigation />

      {/* Hero Section */}
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
                </span>{" "}
                <br />
                <AnimatedTypography text="that feel alive." delay={0.5} />
              </h1>

              <div className="flex flex-wrap gap-6">
                <MagneticButton>
                  <Link
                    href="/work"
                    className="px-10 py-5 bg-foreground text-background rounded-full font-medium text-sm flex items-center gap-3 group hover:bg-accent hover:text-white transition-all shadow-xl shadow-black/20"
                  >
                    Explore Work{" "}
                    <ArrowUpRight
                      weight="bold"
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link
                    href="/#process"
                    className="px-10 py-5 border border-white/10 rounded-full font-medium text-sm flex items-center gap-3 hover:bg-white/5 transition-all text-secondary hover:text-white"
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

              {/* <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 gap-px bg-white/5 rounded-3xl overflow-hidden glass-refraction border border-white/5"
              >
                <div className="p-8 bg-background/50">
                  <div className="text-accent mb-4">
                    <Lightning size={24} weight="bold" />
                  </div>
                  <div className="text-3xl font-mono tracking-tighter">
                    99.2
                  </div>
                  <div className="text-[9px] uppercase tracking-widest text-secondary mt-1">
                    Perf Index
                  </div>
                </div>
                <div className="p-8 bg-background/50">
                  <div className="text-accent mb-4">
                    <Cpu size={24} weight="bold" />
                  </div>
                  <div className="text-3xl font-mono tracking-tighter">
                    0.08<span className="text-xs">ms</span>
                  </div>
                  <div className="text-[9px] uppercase tracking-widest text-secondary mt-1">
                    Render Floor
                  </div>
                </div>
              </motion.div> */}

              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-accent">Availability Matrix</span>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] uppercase tracking-widest opacity-60">Ready for Launch</span>
                  </div>
                </div>
                <p className="text-sm font-light text-zinc-400 leading-relaxed">
                  Currently accepting 2 select projects for Q2 2026. <br />
                  Estimated response time: <span className="text-white font-mono">{"< 24h"}</span>
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="text-[8px] uppercase tracking-widest opacity-40">Local Time</div>
                    <div className="text-xs font-mono"><LocalTime /></div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}

      </section>

      {/* Featured Work Section */}
      <section id="work" className="bg-zinc-50 py-32 px-6 md:px-24">
        <div className="w-full max-w-7xl mx-auto">
          <header className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-accent" />
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent">
                  Selected Works // 01-04
                </span>
              </div>
              <h2 className="text-5xl md:text-8xl font-medium tracking-tighter text-zinc-900 leading-[0.9]">
                Designed for <br />
                <span className="italic font-light text-zinc-300">
                  conversion.
                </span>
              </h2>
            </div>
            <MagneticButton>
              <div className="flex items-center gap-3 text-zinc-400 hover:text-accent transition-colors uppercase text-[10px] tracking-[0.2em] font-bold cursor-pointer group">
                All Systems{" "}
                <ArrowUpRight
                  weight="bold"
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </div>
            </MagneticButton>
          </header>

          <BentoGrid>
            <BentoCard
              title="Aura // Enterprise SaaS"
              description="High-performance data visualization dashboard and cloud management system. Built for scalability and real-time monitoring."
              tag="Stack: Next.js/TypeScript"
              className="md:col-span-8 min-h-[500px]"
            >
              <div className="relative w-full h-full bg-zinc-950/50 rounded-3xl overflow-hidden group/img aspect-video flex items-center justify-center border border-white/5">
                <div className="absolute inset-0 pixel-grid opacity-20" />
                <div className="relative z-20 flex flex-col items-center gap-4">
                  <div className="text-[8vw] font-mono text-white/10 select-none tracking-tighter leading-none">
                    AURA_PLATFORM
                  </div>
                  <div className="flex gap-2">
                    {["NEXT.JS", "TYPESCRIPT", "RECHARTS"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-[8px] font-mono border border-white/10 text-secondary bg-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Visual Engineering Mockup: Data Points */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-8 gap-2 opacity-10">
                    {Array.from({ length: 32 }).map((_, i) => (
                      <div key={i} className="w-12 h-12 border border-accent/20 rounded-sm" />
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/img:translate-x-full transition-transform duration-1000 ease-in-out" />
              </div>
            </BentoCard>

            <BentoCard
              title="Protocol // Fintech"
              description="Institutional-grade digital asset platform with hardware-accelerated trading visualizations and secure flows."
              tag="Stack: React/WebGL"
              className="md:col-span-4 min-h-[500px]"
            >
              <div className="relative h-full flex flex-col justify-end p-4 overflow-hidden group/mesh">
                <div className="absolute inset-0 bg-zinc-950 -z-10" />
                {/* Simulated Shader Background */}
                <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--color-accent)_0%,transparent_70%)] opacity-20 blur-3xl animate-pulse" />
                  <div className="absolute inset-0 pixel-grid" />
                </div>

                <div className="flex flex-col gap-6 mt-8 relative z-20">
                  <div className="space-y-4">
                    <div className="text-[8px] font-mono text-accent">
                      ORDER_ENGINE://ACTIVE
                    </div>
                  <div className="text-[10px] font-mono text-zinc-500 overflow-hidden leading-tight bg-black/40 p-3 rounded border border-white/5">
                      {`> EXECUTING_LIMIT_ORDER
> STATUS: CONFIRMED
> ASSET: BTC/USD
> VOLUME: 4.25`}
                    </div>
                </div>
                  {LIQUIDITY_LEVELS.map((level, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                        <span>Liquidity_{i + 1}</span>
                        <span>{level}%</span>
                      </div>
                      <div className="h-px bg-white/5 overflow-hidden">
                        <div
                          className="h-full bg-accent"
                          style={{ width: `${level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </BentoCard>

            <BentoCard
              title="Sonic // Luxury E-com"
              description="Premium headless commerce experience for high-end retail. Motion-driven storytelling with Stripe integration."
              tag="Stack: Next.js/GSAP"
              className="md:col-span-12 lg:col-span-5 min-h-[450px]"
            >
              <div className="mt-8 flex items-center justify-center h-full min-h-[250px] relative overflow-hidden bg-zinc-950 rounded-2xl">
                <div className="absolute inset-0 opacity-10">
                  <div className="h-px w-full bg-linear-to-r from-transparent via-accent to-transparent absolute top-1/2" />
                </div>
                <div className="relative z-10 text-center">
                  <div className="text-[10px] font-mono text-accent mb-4 tracking-[0.4em]">COLLECTION_2026</div>
                  <div className="text-4xl font-light italic text-white/40 tracking-tighter">Essential // Material</div>
                </div>
                <div className="w-48 h-48 rounded-full border border-white/5 flex items-center justify-center relative slow-pulse">
                  <div className="absolute inset-0 border border-accent/20 rounded-full animate-ping" />
                  <div className="w-32 h-32 rounded-full border border-accent/40 flex items-center justify-center backdrop-blur-3xl" />
                </div>
              </div>
            </BentoCard>

            <BentoCard
              title="Motion // Design Systems"
              description="Scalable UI architecture and animation libraries powering diverse products with performance and accessibility."
              tag="Stack: Storybook/Framer"
              className="md:col-span-12 lg:col-span-7 min-h-[450px]"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 h-full">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-zinc-900 border border-white/5 rounded-2xl flex flex-col items-center justify-center p-4 group/item relative overflow-hidden transition-transform duration-300 hover:scale-[0.98]"
                  >
                    <div className="absolute top-2 left-2 text-[8px] font-mono text-zinc-700">
                      MOD_{i}
                    </div>
                    <div className="w-12 h-12 border border-accent/40 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-accent/20 rounded-full" />
                    </div>
                    <div className="mt-4 w-full h-px bg-white/5" />
                    <div className="mt-4 flex gap-1">
                      <div className="w-1 h-1 bg-accent/40 rounded-full" />
                      <div className="w-1 h-1 bg-accent/20 rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </BentoCard>
          </BentoGrid>
        </div>
      </section>

      {/* Philosophy Section */}
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

          <h2 className="text-4xl md:text-7xl font-medium tracking-tighter leading-[0.9] mb-12">
            I don't ship <br />
            screens. I <br />
            <span className="text-secondary italic font-light">
              compose
            </span>{" "}
            <br />
            experiences.
          </h2>

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
                  {[
                    "NEXT.JS",
                    "REACT",
                    "FRAMER",
                    "GSAP",
                    "THREE.JS",
                    "GLSL",
                    "WEBGL",
                    "TAILWIND",
                    "TYPESCRIPT",
                    "CSS ARCH",
                    "WEB AUDIO",
                    "CANVAS",
                    "LAYOUT API",
                    "LENIS",
                    "MOTION",
                    "UX FLOW",
                    "MICRO-UI",
                    "GRID SYSTEMS",
                    "TYPE RHYTHM",
                    "PERF VITALS",
                    "A11Y",
                    "SCROLL FX",
                    "STATE MGMT",
                  ].map((badge, i) => (
                    <span
                      key={badge}
                      className={`text-[10px] font-mono uppercase tracking-widest px-4 py-2 rounded-full border border-white/10 bg-white/2 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/10 hover:text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.25)] ${i % 7 === 0 ? "ring-1 ring-accent/30" : ""}`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-secondary">
                  <span className="w-8 h-px bg-white/20" />
                  Calibrated For Expressive UI
                </div>
              </div>
            </div>

            <div className="mt-10 text-[10px] uppercase tracking-[0.3em] text-secondary flex items-center gap-3">
              <span className="w-8 h-px bg-white/20" />
              Calibrated For Expressive UI
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
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
                  View full creative protocol{" "}
                  <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </MagneticButton>
            </div>
          </div>

          <div className="lg:w-2/3 flex flex-col divide-y divide-zinc-100">
            {[
              {
                id: "01",
                title: "UI Architecture",
                desc: "Engineering scalable frontend foundations with Next.js and TypeScript. Focused on modularity and performance.",
                icon: <Code size={32} />,
              },
              {
                id: "02",
                title: "Product Strategy",
                desc: "Aligning user needs with technical possibilities to build intuitive, conversion-focused interfaces.",
                icon: <Palette size={32} />,
              },
              {
                id: "03",
                title: "Motion Systems",
                desc: "Creating fluid animation languages that enhance usability and brand identity across all touchpoints.",
                icon: <ChartLineUp size={32} />,
              },
              {
                id: "04",
                title: "Technical Excellence",
                desc: "Optimizing Core Web Vitals, accessibility, and clean code standards for long-term maintainability.",
                icon: <Lightning size={32} />,
              },
            ].map((service, i) => (
              <div
                key={service.id}
                className="group py-16 flex flex-col md:flex-row items-center gap-12 group"
              >
                <div className="flex items-center gap-6 md:w-1/3">
                  <span className="text-accent font-mono text-sm">
                    {service.id}
                  </span>
                  <div className="text-zinc-400 group-hover:text-accent transition-colors duration-500">
                    {service.icon}
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

      {/* The Process / Protocol Section */}
      <section
        id="process"
        className="py-32 px-6 md:px-24 bg-zinc-950 text-white overflow-hidden relative"
      >
        <div className="absolute inset-0 pixel-grid opacity-10 pointer-events-none" />
        <div className="w-full max-w-7xl mx-auto">
          <header className="mb-24">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-accent" />
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent">
                The Protocol // 04
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-medium tracking-tighter leading-[0.85]">
              Creative <br />
              <span className="italic font-light text-zinc-500">
                Execution.
              </span>
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "DISCOVERY",
                desc: "Immersion into the product story, audience, and creative direction.",
              },
              {
                step: "02",
                title: "VISUAL SYSTEM",
                desc: "Typography, layout rhythm, and motion language that define the brand feel.",
              },
              {
                step: "03",
                title: "INTERACTION",
                desc: "Crafting tactile interactions and micro-moments that make it feel alive.",
              },
              {
                step: "04",
                title: "REFINEMENT",
                desc: "Pixel-level polish and motion tuning across every breakpoint.",
              },
              {
                step: "05",
                title: "PERFORMANCE",
                desc: "Speed, accessibility, and responsiveness without sacrificing aesthetics.",
              },
              {
                step: "06",
                title: "LAUNCH",
                desc: "Precision deployment and post-launch iteration for continuous impact.",
              },
            ].map((item, i) => (
              <div
                key={item.step}
                className="p-12 border border-white/5 bg-white/2 hover:bg-white/5 transition-colors relative group"
              >
                <span className="text-xs font-mono text-accent mb-6 block">
                  {item.step}
                </span>
                <h3 className="text-2xl font-medium mb-4 tracking-tight group-hover:translate-x-2 transition-transform">
                  {item.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
