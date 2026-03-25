'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'E-Commerce Strategy Lead',
    company: 'HOPE Initiative',
    description: 'Strategized and implemented scalable e-commerce workflows to optimize operational efficiency and user engagement within the initiative.',
  },
  {
    role: 'IoT Communication Lead',
    company: 'HOPE Initiative',
    description: 'Led the development and deployment of robust IoT communication protocols, integrating hardware sensor systems with software analytics platforms.',
  },
  {
    role: 'Community Engagement Head',
    company: 'HOPE Initiative',
    description: 'Spearheaded technical community events and fostered a collaborative, high-performance culture among engineering students and faculty.',
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-black/5 dark:bg-white/[0.02]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4"><span className="text-gradient">Experience</span> Journey</h2>
          <div className="w-20 h-1 bg-[var(--accent-color)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-[var(--border-color)] ml-4 md:ml-0 md:border-none">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-[var(--border-color)] -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute left-[-21px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-[var(--bg-surface)] border-2 border-[var(--accent-color)] flex items-center justify-center text-[var(--accent-color)] z-10 shadow-lg shadow-[var(--accent-color)]/20"
                >
                  <Briefcase size={16} />
                </motion.div>

                <div className="w-full pl-8 md:pl-0 md:w-[45%]">
                  <motion.div
                    initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                    className="glass-panel p-6 rounded-2xl relative group hover:border-[var(--accent-color)] transition-colors duration-300"
                  >
                    {/* Desktop Connector Line */}
                    <div className={`hidden md:block absolute top-1/2 -mt-0.5 h-[1px] w-6 bg-[var(--border-color)] group-hover:bg-[var(--accent-color)] transition-colors ${idx % 2 === 0 ? '-left-6' : '-right-6'}`}></div>
                    
                    <h3 className="text-xl font-bold font-heading text-[var(--text-primary)] mb-1">{exp.role}</h3>
                    <div className="text-sm font-semibold text-[var(--highlight-color)] uppercase tracking-wider mb-4">{exp.company}</div>
                    <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base">
                      {exp.description}
                    </p>
                  </motion.div>
                </div>

                <div className="hidden md:block w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
