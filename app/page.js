import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/sections/HeroSection';
import FeaturedWorksSection from './components/sections/FeaturedWorksSection';
import PhilosophySection from './components/sections/PhilosophySection';
import ExpertiseSection from './components/sections/ExpertiseSection';
import ProcessSection from './components/sections/ProcessSection';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-dvh bg-background text-foreground selection:bg-accent selection:text-white pixel-grid">
      <Navigation />
      <HeroSection />
      <FeaturedWorksSection />
      <PhilosophySection />
      <ExpertiseSection />
      <ProcessSection />
      <ContactCTA />
      <Footer />
    </main>
  );
}
