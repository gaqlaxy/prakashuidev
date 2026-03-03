"use client";

import React, { useState, useEffect } from "react";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };
    update();
    const timer = setInterval(update, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="w-full bg-background border-t border-white/5 px-6 md:px-24 py-12">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end md:items-center gap-12 text-[10px] uppercase tracking-[0.3em] text-secondary">
        <div className="flex flex-col gap-2">
          <span className="opacity-40">Version</span>
          <span className="text-foreground">2026 © Edition</span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="opacity-40">Local Time</span>
          <span className="text-foreground font-mono">{time || "00:00"} IST</span>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <span className="opacity-40">Socials</span>
          <div className="flex gap-6">
            <a href="#" className="text-foreground hover:text-accent transition-colors">Awwwards</a>
            <a href="#" className="text-foreground hover:text-accent transition-colors">Instagram</a>
            <a href="#" className="text-foreground hover:text-accent transition-colors">Twitter</a>
            <a href="#" className="text-foreground hover:text-accent transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
