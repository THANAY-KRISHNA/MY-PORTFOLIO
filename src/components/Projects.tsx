'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Award } from 'lucide-react';

const projects = [
  {
    title: 'BloomWatch Pro',
    subtitle: 'Biodiversity Intelligence & Ecological Insights',
    description: 'An environmental intelligence platform providing biodiversity intelligence, AI-assisted species identification, interactive Earth observation data visualization, and predictive ecological insights.',
    tags: ['Artificial Intelligence', 'Data Science', 'Earth Observation', 'Next.js'],
    award: 'NASA Space Apps Global Nominee',
    github: 'https://github.com/THANAY-KRISHNA',
    link: 'https://github.com/THANAY-KRISHNA',
    linkLabel: 'Explore Project'
  },
  {
    title: 'MEDOS',
    subtitle: 'Medical Early Detection & Observation System',
    description: 'A clinical monitoring and decision-support concept designed for visualizing patient deterioration risks, continuous vital-sign tracking, and assisting healthcare decision-making through explainable risk assessments.',
    tags: ['Clinical AI', 'Data Science', 'Python', 'Decision Support'],
    award: 'Clinical Concept',
    github: 'https://github.com/THANAY-KRISHNA',
    link: 'https://github.com/THANAY-KRISHNA',
    linkLabel: 'Explore Concept'
  },
  {
    title: 'Patchwise',
    subtitle: 'Software Project Intelligence & Repository Tooling',
    description: 'A software project intelligence and repository tooling platform built for structured engineering workflows, backend API orchestration, automated repository analysis, and project health monitoring.',
    tags: ['Developer Tools', 'Python', 'Next.js', 'Repository Intelligence'],
    award: 'Developer Tooling',
    github: 'https://github.com/THANAY-KRISHNA/Patchwise',
    link: 'https://github.com/THANAY-KRISHNA/Patchwise',
    linkLabel: 'View Repository'
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
          <p className="mt-4 text-sm md:text-base text-[var(--text-secondary)] max-w-2xl mx-auto">
            Practical AI applications, clinical monitoring concepts, and developer tooling built by Thanay Krishna C U.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
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
                
                <h3 className="text-2xl font-bold font-heading mb-1 group-hover:text-[var(--accent-color)] transition-colors">{project.title}</h3>
                <p className="text-xs font-semibold text-[var(--accent-color)] uppercase tracking-wider mb-3">{project.subtitle}</p>
                
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
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-2 text-sm font-medium"
                  >
                    <Github size={18} /> Code
                  </a>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} project details`}
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-2 text-sm font-medium"
                  >
                    <span>{project.linkLabel}</span>
                    <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
