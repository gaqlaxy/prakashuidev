"use client";

import React from "react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import MagneticButton from "../components/MagneticButton";
import {
    Envelope,
    MapPin,
    TwitterLogo,
    GithubLogo,
    LinkedinLogo,
    InstagramLogo,
    ArrowRight
} from "@phosphor-icons/react";

export default function ContactPage() {
    return (
        <main className="relative min-h-dvh bg-background text-foreground selection:bg-accent selection:text-white pixel-grid overflow-x-hidden">
            <Navigation />

            <section className="relative pt-48 pb-32 px-6 md:px-24">
                <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-24">

                    {/* Header & Info */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-12"
                        >
                            <h1 className="text-6xl md:text-[8vw] font-medium tracking-tighter leading-none mb-12">
                                Let's start <br /> something.
                            </h1>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-[10px] uppercase tracking-[0.4em] text-accent mb-4 font-mono">Mail Protocol</h3>
                                    <a href="mailto:contactfeprakash@gmail.com" className="text-2xl md:text-3xl font-light hover:text-accent transition-colors underline underline-offset-8 decoration-white/10">
                                        contactfeprakash@gmail.com
                                    </a>
                                </div>

                                <div>
                                    <h3 className="text-[10px] uppercase tracking-[0.4em] text-accent mb-4 font-mono">Direct Line</h3>
                                    <p className="text-2xl md:text-3xl font-light">
                                        +917845151962
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-[10px] uppercase tracking-[0.4em] text-accent mb-4 font-mono">Location</h3>
                                    <p className="text-2xl md:text-3xl font-light">
                                        Chennai, India <br />
                                        12.9716° N, 77.5946° E
                                    </p>
                                </div>
                            </div>

                            <div className="pt-12 border-t border-white/5">
                                <h3 className="text-[10px] uppercase tracking-[0.4em] text-accent mb-8 font-mono">Social Systems</h3>
                                <div className="flex gap-8">
                                    <a href="#" className="text-zinc-400 hover:text-white transition-colors"><TwitterLogo size={24} /></a>
                                    <a href="#" className="text-zinc-400 hover:text-white transition-colors"><InstagramLogo size={24} /></a>
                                    <a href="#" className="text-zinc-400 hover:text-white transition-colors"><LinkedinLogo size={24} /></a>
                                    <a href="#" className="text-zinc-400 hover:text-white transition-colors"><GithubLogo size={24} /></a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Form */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/2 border border-white/5 p-8 md:p-12 rounded-3xl relative overflow-hidden glass-refraction"
                        >
                            <div className="absolute inset-0 pixel-grid opacity-10 pointer-events-none" />

                            <form className="relative z-10 space-y-12">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">01 // What's your name?</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe *"
                                        className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-light focus:outline-none focus:border-accent transition-colors transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">02 // What's your email?</label>
                                    <input
                                        type="email"
                                        placeholder="john@doe.com *"
                                        className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-light focus:outline-none focus:border-accent transition-colors"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">03 // What's your project about?</label>
                                    <textarea
                                        rows="4"
                                        placeholder="Hello Prakash, I'm looking for..."
                                        className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-light focus:outline-none focus:border-accent transition-colors resize-none"
                                    ></textarea>
                                </div>

                                <div className="pt-8">
                                    <MagneticButton>
                                        <button type="button" className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold uppercase tracking-widest hover:scale-105 transition-all">
                                            Send
                                        </button>
                                    </MagneticButton>
                                </div>
                            </form>
                        </motion.div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
