'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Download } from 'lucide-react';
import { useEffect, useState } from 'react';

const sentence = "Building AI & IoT solutions that create real-world impact.";

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < sentence.length) {
        setDisplayText(sentence.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Subtle Background Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full filter blur-[100px] bg-[var(--highlight-color)] opacity-20"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] -left-[10%] w-[40vw] h-[40vw] rounded-full filter blur-[80px] bg-[var(--accent-color)] opacity-20"
        />
      </div>

      <div className="container max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-surface)] text-sm font-medium tracking-wide shadow-sm"
        >
          <span className="text-[var(--text-secondary)]">Hello, I&apos;m</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight mb-6"
        >
          Thanay Krishna <span className="text-gradient">C U</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-[80px] sm:h-[60px] md:h-[80px] flex items-center justify-center mb-6"
        >
          <h2 className="text-xl md:text-3xl font-medium text-[var(--text-primary)] relative">
            <span className="sr-only">{sentence}</span>
            <span aria-hidden="true">{displayText}</span>
            <motion.span 
              aria-hidden="true"
              animate={{ opacity: [0, 1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="absolute -right-3 top-0 bottom-0 w-[2px] bg-[var(--accent-color)]"
            />
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="max-w-3xl text-sm md:text-base lg:text-lg text-[var(--text-secondary)] mb-10 leading-relaxed"
        >
          BTech student in Computer Science with Data Science Engineering at IES College of Engineering, Thrissur, focused on building intelligent systems and scalable technology solutions.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <a href="#projects" className="group relative px-8 py-3.5 bg-[var(--accent-color)] text-[var(--bg-primary)] rounded-lg font-semibold overflow-hidden transition-all focus:outline-none flex items-center gap-2 shadow-lg shadow-[var(--accent-color)]/20 hover:shadow-[var(--accent-color)]/40 hover:-translate-y-1">
            <span className="relative z-10">View Projects</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a href="#contact" className="group px-8 py-3.5 bg-transparent text-[var(--text-primary)] border border-[var(--border-color)] hover:border-[var(--accent-color)] rounded-lg font-semibold transition-all focus:outline-none flex items-center gap-2 hover:-translate-y-1 bg-[var(--bg-surface)] glass-panel">
            <span>Contact Me</span>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer flex flex-col items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors"
        role="button"
        tabIndex={0}
        aria-label="Scroll down to about section"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        onClick={() => {
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
