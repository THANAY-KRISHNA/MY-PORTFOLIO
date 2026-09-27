'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Award } from 'lucide-react';

const projects = [
  {
    title: 'Bloom Watch Pro',
    description: 'An advanced monitoring system providing real-time analytics. Recognized on an international stage for innovation in aerospace-related challenges.',
    tags: ['IoT', 'Data Science', 'AI'],
    award: 'NASA Global Nominee',
    link: '#',
    github: '#'
  },
  {
    title: 'SINOVA’26 Winning System',
    description: 'An intelligent hardware and software integration that won first prize at the prestigious SINOVA’26 innovation hackathon.',
    tags: ['Embedded Systems', 'Node.js', 'C'],
    award: 'SINOVA’26 Winner',
    link: '#',
    github: '#'
  },
  {
    title: 'Autonomous Robotics Platform',
    description: 'A custom-built intelligent robotics system capable of autonomous navigation, data collection, and physical environment sensing.',
    tags: ['Robotics', 'Python', 'Sensors'],
    link: '#',
    github: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-black/5 dark:bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-20 h-1 bg-[var(--accent-color)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative h-full flex flex-col glass-panel rounded-2xl overflow-hidden hover:border-[var(--accent-color)] transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-color)]/5 to-[var(--highlight-color)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="p-8 flex flex-col flex-1 relative z-10">
                {project.award && (
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--highlight-color)] mb-4 uppercase tracking-wider bg-[var(--highlight-color)]/10 self-start px-3 py-1 rounded-full">
                    <Award size={14} />
                    {project.award}
                  </div>
                )}
                
                <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-[var(--accent-color)] transition-colors">{project.title}</h3>
                
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono px-2.5 py-1 bg-[var(--border-color)]/50 rounded-md text-[var(--text-secondary)]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[var(--border-color)]">
                  <a 
                    href={project.github} 
                    aria-label={`View source code for ${project.title}`}
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-2 text-sm font-medium"
                  >
                    <Github size={18} /> Code
                  </a>
                  <a 
                    href={project.link} 
                    aria-label={`View demo for ${project.title}`}
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-2 text-sm font-medium"
                  >
                    View Demo <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
