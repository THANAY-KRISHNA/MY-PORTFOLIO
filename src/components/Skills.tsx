'use client';

import { motion } from 'framer-motion';
import { Code2, Cpu, BrainCircuit } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: <Code2 size={24} />,
    skills: ['C', 'Python', 'TypeScript', 'C++']
  },
  {
    title: 'Technologies',
    icon: <Cpu size={24} />,
    skills: ['IoT Systems', 'Embedded Systems', 'Node.js', 'React']
  },
  {
    title: 'Domains',
    icon: <BrainCircuit size={24} />,
    skills: ['Artificial Intelligence', 'Data Science', 'Robotics', 'Automation']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
          <div className="w-20 h-1 bg-[var(--highlight-color)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-panel p-8 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[var(--accent-color)] opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-14 h-14 rounded-xl bg-[var(--text-primary)]/5 flex items-center justify-center text-[var(--text-primary)] mb-6 group-hover:scale-110 group-hover:text-[var(--accent-color)] transition-all">
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold font-heading mb-6">{category.title}</h3>
              
              <ul className="space-y-4 text-[var(--text-secondary)]">
                {category.skills.map(skill => (
                  <li key={skill} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--highlight-color)]"></div>
                    <span className="font-medium text-sm md:text-base group-hover:text-[var(--text-primary)] transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
