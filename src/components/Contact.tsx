'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-black/5 dark:bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Let&apos;s <span className="text-gradient">Connect</span></h2>
          <div className="w-20 h-1 bg-[var(--accent-color)] mx-auto rounded-full"></div>
          <p className="mt-6 text-[var(--text-secondary)] max-w-2xl mx-auto">
            Whether you&apos;re looking for an innovative hardware-software integration, a data science breakthrough, or a multidisciplinary leader, I&apos;m ready to build it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Contact Info Cards */}
          <motion.a
            href="mailto:thanaykrishna2255@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center gap-4 group hover:-translate-y-2 transition-all cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-[var(--accent-color)]/10 text-[var(--accent-color)] flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--accent-color)] group-hover:text-[var(--bg-primary)] transition-all">
              <Mail size={24} />
            </div>
            <div>
              <div className="text-xs font-semibold text-[var(--text-secondary)] mb-1 uppercase tracking-wider">Email</div>
              <div className="text-base font-medium text-[var(--text-primary)] truncate">thanaykrishna2255@gmail.com</div>
            </div>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/thanay-krishna-c-u-a1b67831b/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center gap-4 group hover:-translate-y-2 transition-all cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-[var(--highlight-color)]/10 text-[var(--highlight-color)] flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--highlight-color)] group-hover:text-[var(--bg-primary)] transition-all">
              <Linkedin size={24} />
            </div>
            <div>
              <div className="text-xs font-semibold text-[var(--text-secondary)] mb-1 uppercase tracking-wider">LinkedIn</div>
              <div className="text-base font-medium text-[var(--text-primary)] truncate">Thanay Krishna C U</div>
            </div>
          </motion.a>

          <motion.a
            href="https://github.com/THANAY-KRISHNA"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center gap-4 group hover:-translate-y-2 transition-all cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-[var(--text-primary)]/5 text-[var(--text-primary)] flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--text-primary)] group-hover:text-[var(--bg-primary)] transition-all">
              <Github size={24} />
            </div>
            <div>
              <div className="text-xs font-semibold text-[var(--text-secondary)] mb-1 uppercase tracking-wider">GitHub</div>
              <div className="text-base font-medium text-[var(--text-primary)] truncate">THANAY-KRISHNA</div>
            </div>
          </motion.a>

        </div>
      </div>
    </section>
  );
}

