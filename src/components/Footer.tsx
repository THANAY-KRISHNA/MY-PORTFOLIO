'use client';

import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { siteConfig } from '@/lib/seo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-surface)]/40 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-heading font-bold text-lg text-[var(--text-primary)]">
            Thanay Krishna C U
          </span>
          <p className="text-sm text-[var(--text-secondary)]">
            Data Science Engineer &amp; Developer • Kerala, India
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Thanay Krishna C U on GitHub"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-2 rounded-lg hover:bg-[var(--border-color)]/30"
          >
            <Github size={20} />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Thanay Krishna C U on LinkedIn"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-2 rounded-lg hover:bg-[var(--border-color)]/30"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Send email to Thanay Krishna C U"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-2 rounded-lg hover:bg-[var(--border-color)]/30"
          >
            <Mail size={20} />
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors py-2 px-3 rounded-lg border border-[var(--border-color)] hover:border-[var(--accent-color)]"
          >
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-[var(--border-color)]/50 flex items-center justify-center text-xs text-[var(--text-secondary)] text-center">
        <p className="font-medium tracking-wide">
          Developed by:{' '}
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Thanay Krishna C U on LinkedIn"
            className="text-gradient font-bold tracking-wider hover:opacity-80 transition-opacity underline-offset-4 hover:underline inline-block"
          >
            THANAY KRISHNA C U
          </a>
        </p>
      </div>
    </footer>
  );
}
