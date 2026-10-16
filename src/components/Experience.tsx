'use client';

import { motion } from 'framer-motion';
import { Briefcase, ExternalLink, MapPin } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  location?: string;
  period?: string;
  description: string;
  highlights?: string[];
  tags?: string[];
  link?: string;
  linkLabel?: string;
}

const experiences: ExperienceItem[] = [
  {
    role: 'Technical Lead',
    company: 'IES–IEDC',
    location: 'IES College of Engineering, Thrissur, Kerala',
    period: '2026 – Present',
    description: 'Serving as Technical Lead at the IES Innovation and Entrepreneurship Development Cell (IEDC), contributing to the cell’s technical initiatives and digital presence.',
    highlights: [
      'Website Development: Building the IES–IEDC website to establish a dedicated online platform for the college’s innovation and entrepreneurship community.',
      'Technical Leadership: Contributing to technical planning, development decisions, and the implementation of web-based solutions for IEDC.',
      'Digital Presence: Developing a platform to present IEDC initiatives, activities, and opportunities to the student community.',
      'Continuous Improvement: Working on improving the website’s usability, structure, and maintainability as the platform evolves.'
    ],
    tags: ['Technical Leadership', 'Web Development', 'Frontend Development', 'UI/UX', 'Project Development'],
    link: 'https://ies-iedc.vercel.app/',
    linkLabel: 'ies-iedc.vercel.app'
  },
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
      <div className="max-w-5xl mx-auto px-6">
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
                    className="glass-panel p-6 md:p-7 rounded-2xl relative group hover:border-[var(--accent-color)] transition-colors duration-300"
                  >
                    {/* Desktop Connector Line */}
                    <div className={`hidden md:block absolute top-1/2 -mt-0.5 h-[1px] w-6 bg-[var(--border-color)] group-hover:bg-[var(--accent-color)] transition-colors ${idx % 2 === 0 ? '-left-6' : '-right-6'}`}></div>
                    
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h3 className="text-xl font-bold font-heading text-[var(--text-primary)]">{exp.role}</h3>
                      {exp.period && (
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[var(--accent-color)]/10 text-[var(--accent-color)] border border-[var(--accent-color)]/25 font-semibold">
                          {exp.period}
                        </span>
                      )}
                    </div>

                    <div className="text-sm font-semibold text-[var(--highlight-color)] uppercase tracking-wider mb-1">
                      {exp.company}
                    </div>

                    {exp.location && (
                      <div className="text-xs text-[var(--text-secondary)] mb-3 flex items-center gap-1.5">
                        <MapPin size={12} className="text-[var(--accent-color)] shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                    )}

                    <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base">
                      {exp.description}
                    </p>

                    {exp.highlights && exp.highlights.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-[var(--border-color)]/50 space-y-2">
                        {exp.highlights.map((item, hIdx) => {
                          const separatorIndex = item.indexOf(': ');
                          const hasColon = separatorIndex !== -1;
                          const title = hasColon ? item.slice(0, separatorIndex) : '';
                          const content = hasColon ? item.slice(separatorIndex + 2) : item;

                          return (
                            <div key={hIdx} className="text-xs md:text-sm text-[var(--text-secondary)] flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)] mt-1.5 shrink-0" />
                              <span className="leading-snug">
                                {hasColon ? (
                                  <>
                                    <strong className="text-[var(--text-primary)] font-medium">{title}:</strong> {content}
                                  </>
                                ) : (
                                  content
                                )}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {exp.tags && (
                      <div className="flex flex-wrap gap-1.5 mt-4 pt-1">
                        {exp.tags.map(tag => (
                          <span key={tag} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--border-color)]/50 text-[var(--text-secondary)]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {exp.link && (
                      <div className="mt-4 pt-3 border-t border-[var(--border-color)] flex items-center justify-between">
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${exp.role} platform at ${exp.linkLabel || exp.link}`}
                          className="text-xs md:text-sm font-medium text-[var(--accent-color)] hover:text-[var(--highlight-color)] transition-colors inline-flex items-center gap-1.5 group/link"
                        >
                          <span>{exp.linkLabel || 'Visit Platform'}</span>
                          <ExternalLink size={13} className="group-hover/link:translate-x-0.5 transition-transform" />
                        </a>
                      </div>
                    )}
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
