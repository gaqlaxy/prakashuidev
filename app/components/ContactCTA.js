"use client";

import React from "react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function ContactCTA() {
  return (
    <section className="relative min-h-[80dvh] bg-background text-foreground flex flex-col items-start justify-center px-6 md:px-24 py-32 overflow-hidden border-t border-white/5">
      {/* Animated mesh backgrounds */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[60%] h-[60%] bg-accent/5 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-[-10%] w-[70%] h-[70%] bg-accent/5 blur-[120px] rounded-full" />
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="flex items-center gap-6 mb-8 group"
        >
          <h2 className="text-6xl md:text-[10vw] font-medium tracking-tighter leading-none">
            Let's work <br /> together
          </h2>
        </motion.div>

        <div className="w-full h-px bg-white/10 my-16 relative">
          {/* Overlapping Magnetic Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="absolute right-10 md:right-24 top-0 -translate-y-1/2 z-20"
          >
            <MagneticButton>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-accent flex items-center justify-center text-white text-sm font-medium cursor-pointer shadow-lg shadow-accent/30 hover:shadow-accent/50 transition-all duration-300"
              >
                Get in touch
              </motion.div>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Contact Capsules */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
          className="flex flex-col md:flex-row gap-6 mt-12"
        >
          <motion.a
            href="mailto:contactfeprakash@gmail.com"
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.08)", borderColor: "rgba(37, 99, 235, 0.5)" }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-6 border border-white/10 rounded-full text-lg md:text-xl font-light hover:text-accent transition-colors duration-300"
          >
            contactfeprakash@gmail.com
          </motion.a>
          <motion.a
            href="tel:+917845151962"
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.08)", borderColor: "rgba(37, 99, 235, 0.5)" }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-6 border border-white/10 rounded-full text-lg md:text-xl font-light hover:text-accent transition-colors duration-300"
          >
            +917845151962
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
