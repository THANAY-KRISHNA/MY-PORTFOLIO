'use client';

import { motion } from 'framer-motion';
import { Trophy, Award, CheckCircle2 } from 'lucide-react';

const achievements = [
  'SINOVA’26 Winner',
  'NASA Space Apps Global Nominee',
  'NASA Space Apps Local Winner',
  'JRC Certification',
  'Kerala Startup Mission Volunteer'
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[var(--highlight-color)]/5 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Milestones & <span className="text-gradient">Achievements</span></h2>
          <div className="w-20 h-1 bg-[var(--highlight-color)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-panel p-6 rounded-2xl flex items-center gap-4 group hover:bg-[var(--bg-surface)] hover:shadow-lg transition-all ${idx === 0 || idx === 1 ? 'border-[var(--highlight-color)]/30' : ''}`}
            >
              <div className={`p-3 rounded-xl flex-shrink-0 transition-transform group-hover:scale-110 ${idx === 0 || idx === 1 ? 'bg-[var(--highlight-color)]/10 text-[var(--highlight-color)]' : 'bg-[var(--text-primary)]/5 text-[var(--accent-color)]'}`}>
                {idx === 0 || idx === 1 ? <Trophy size={24} /> : idx === 3 ? <Award size={24} /> : <CheckCircle2 size={24} />}
              </div>
              <h3 className="font-semibold text-base md:text-lg text-[var(--text-primary)]">{item}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
