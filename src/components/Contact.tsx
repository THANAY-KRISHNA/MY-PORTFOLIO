'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
    
    setTimeout(() => setStatus('idle'), 4000);
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold font-heading">Get In Touch</h3>
            
            <a href="mailto:thanaykrishna2255@gmail.com" className="glass-panel p-6 rounded-2xl flex items-center gap-6 group hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-[var(--accent-color)]/10 text-[var(--accent-color)] flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--accent-color)] group-hover:text-white dark:group-hover:text-black transition-all">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-sm font-semibold text-[var(--text-secondary)] mb-1 uppercase tracking-wider">Email</div>
                <div className="text-lg font-medium text-[var(--text-primary)]">thanaykrishna2255@gmail.com</div>
              </div>
            </a>

            <a href="https://linkedin.com/in/placeholder" target="_blank" rel="noopener noreferrer" className="glass-panel p-6 rounded-2xl flex items-center gap-6 group hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-[var(--highlight-color)]/10 text-[var(--highlight-color)] flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--highlight-color)] group-hover:text-white dark:group-hover:text-black transition-all">
                <Linkedin size={24} />
              </div>
              <div>
                <div className="text-sm font-semibold text-[var(--text-secondary)] mb-1 uppercase tracking-wider">LinkedIn</div>
                <div className="text-lg font-medium text-[var(--text-primary)]">linkedin.com/in/thanaykrishna</div>
              </div>
            </a>

            <a href="https://github.com/placeholder" target="_blank" rel="noopener noreferrer" className="glass-panel p-6 rounded-2xl flex items-center gap-6 group hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-[var(--text-primary)]/5 text-[var(--text-primary)] flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--text-primary)] group-hover:text-[var(--bg-primary)] transition-all">
                <Github size={24} />
              </div>
              <div>
                <div className="text-sm font-semibold text-[var(--text-secondary)] mb-1 uppercase tracking-wider">GitHub</div>
                <div className="text-lg font-medium text-[var(--text-primary)]">github.com/thanaykrishna</div>
              </div>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 md:p-10 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-[var(--text-secondary)]">Name</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-color)] transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-[var(--text-secondary)]">Email</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-color)] transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-[var(--text-secondary)]">Message</label>
                <textarea 
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-color)] transition-colors resize-none"
                  placeholder="How can we collaborate?"
                />
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="mt-2 w-full bg-[var(--accent-color)] hover:bg-opacity-90 text-white dark:text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed group shadow-lg shadow-[var(--accent-color)]/20 hover:-translate-y-1"
              >
                {status === 'loading' ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : status === 'success' ? (
                  'Message Sent!'
                ) : status === 'error' ? (
                  'Failed to send. Try again.'
                ) : (
                  <>Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
