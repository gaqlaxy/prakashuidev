"use client";

import React from "react";
import MagneticButton from "./MagneticButton";

export default function ContactCTA() {
    return (
        <section className="relative min-h-[80dvh] bg-background text-foreground flex flex-col items-start justify-center px-6 md:px-24 py-32 overflow-hidden border-t border-white/5">
            <div className="w-full max-w-7xl mx-auto relative">
                {/* Main Headline */}
                <div className="flex items-center gap-6 mb-8 group">

                    <h2 className="text-6xl md:text-[10vw] font-medium tracking-tighter leading-none">
                        Let's work <br /> together
                    </h2>


                </div>

                <div className="w-full h-px bg-white/10 my-16 relative">
                    {/* Overlapping Magnetic Button */}
                    <div className="absolute right-10 md:right-24 top-0 -translate-y-1/2 z-20">
                        <MagneticButton>
                            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-accent flex items-center justify-center text-white text-sm font-medium hover:scale-105 transition-transform cursor-pointer">
                                Get in touch
                            </div>
                        </MagneticButton>
                    </div>
                </div>

                {/* Contact Capsules */}
                <div className="flex flex-col md:flex-row gap-6 mt-12">
                    <a
                        href="mailto:contactfeprakash@gmail.com"
                        className="px-12 py-6 border border-white/10 rounded-full text-lg md:text-xl font-light hover:bg-white/5 transition-colors"
                    >
                        contactfeprakash@gmail.com
                    </a>
                    <a
                        href="tel:+917845151962"
                        className="px-12 py-6 border border-white/10 rounded-full text-lg md:text-xl font-light hover:bg-white/5 transition-colors"
                    >
                        +917845151962
                    </a>
                </div>
            </div>
        </section>
    );
}
