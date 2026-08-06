'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative bg-[var(--bg-primary)] min-h-screen selection:bg-[var(--highlight-color)] selection:text-black">
      {/* Dynamic Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[var(--accent-color)] z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <div className="flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Achievements />
        <Contact />
      </div>
    </main>
  );
}