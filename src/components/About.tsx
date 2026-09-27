'use client';

import { motion, Variants } from 'framer-motion';
import { Target, Lightbulb, Zap } from 'lucide-react';

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-20 h-1 bg-[var(--highlight-color)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 space-y-6 text-base md:text-lg text-[var(--text-secondary)] leading-relaxed"
          >
            <motion.p variants={itemVariants}>
              I am <strong className="text-[var(--text-primary)] font-medium">Thanay Krishna C U</strong>, currently pursuing a BTech in <strong className="text-[var(--text-primary)] font-medium">Computer Science with Data Science Engineering</strong> at IES College of Engineering, Thrissur.
            </motion.p>
            <motion.p variants={itemVariants}>
              I am passionate about building impactful solutions at the intersection of <strong className="text-[var(--text-primary)] font-medium">Artificial Intelligence, IoT, and Data Science</strong>. I enjoy transforming ideas into real-world systems that solve meaningful problems.
            </motion.p>
            <motion.p variants={itemVariants}>
              I actively contribute to multidisciplinary initiatives where I take on roles in strategy, development, and community engagement. My experience includes working on IoT systems, exploring intelligent automation, and participating in competitive hackathons that challenge my ability to innovate and think critically.
            </motion.p>
            <motion.p variants={itemVariants}>
              Driven by curiosity, continuous learning, and the ambition to become a Data Science Engineer and technology entrepreneur, I focus on building solutions that are both technically strong and valuable in real-world applications.
            </motion.p>
          </motion.div>

          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel p-6 rounded-2xl flex items-start gap-4 hover:-translate-y-1 transition-transform"
            >
              <div className="p-3 bg-[var(--highlight-color)]/10 text-[var(--highlight-color)] rounded-xl">
                <Target size={24} />
              </div>
              <div>
                <h3 className="text-[var(--text-primary)] font-semibold font-heading mb-1">Mission Driven</h3>
                <p className="text-sm text-[var(--text-secondary)]">Focused on creating solutions that have tangible, real-world impact.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-panel p-6 rounded-2xl flex items-start gap-4 hover:-translate-y-1 transition-transform"
            >
              <div className="p-3 bg-[var(--accent-color)]/10 text-[var(--accent-color)] rounded-xl">
                <Lightbulb size={24} />
              </div>
              <div>
                <h3 className="text-[var(--text-primary)] font-semibold font-heading mb-1">Constant Innovation</h3>
                <p className="text-sm text-[var(--text-secondary)]">Continuously exploring the limits of logic, AI, and connected devices.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass-panel p-6 rounded-2xl flex items-start gap-4 hover:-translate-y-1 transition-transform"
            >
              <div className="p-3 border border-[var(--border-color)] text-[var(--text-primary)] rounded-xl">
                <Zap size={24} />
              </div>
              <div>
                <h3 className="text-[var(--text-primary)] font-semibold font-heading mb-1">Fast Execution</h3>
                <p className="text-sm text-[var(--text-secondary)]">Adept at rapid prototyping from hackathons to scalable MVPs.</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
