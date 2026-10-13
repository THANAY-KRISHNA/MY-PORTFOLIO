'use client';

import { motion } from 'framer-motion';
import { Trophy, Award, CheckCircle2, Sparkles, Compass } from 'lucide-react';

const featuredAchievements = [
  {
    title: "First Place — SINOVA’26",
    subtitle: "National-Level Hackathon",
    badge: "1st Prize • National Winner",
    description: "Secured first place at SINOVA’26, a national-level hackathon, by developing an innovative technology solution with my team. Demonstrated rapid prototyping, problem discovery, and high-impact software execution under intense time constraints.",
    skills: ["Innovation", "Software Development", "Teamwork", "Rapid Prototyping", "Problem-Solving"],
    icon: Trophy,
    highlight: true,
  },
  {
    title: "NASA Space Apps Challenge 2025",
    subtitle: "Local First Place & Global Nominee",
    badge: "BloomWatch Pro • Earth & Space Science",
    description: "Won first place at the Thrissur Local Event and selected as Global Nominee. BloomWatch Pro explores flowering phenology patterns combining AI-powered species identification, NASA Earth-observation data (EMIT, PACE, Landsat), predictive modelling, and interactive 3D Earth visualisation.",
    skills: ["AI/ML", "Data Analysis", "Predictive Modelling", "Geospatial Visualisation", "Research"],
    icon: Trophy,
    highlight: true,
  },
  {
    title: "Best AI/ML Solution — YUKTHI 2026",
    subtitle: "Project: V.O.I.D.E. • Team HOPE-INT-CORE",
    badge: "Best AI/ML Solution Award",
    description: "Recognised for the Best AI/ML Solution for V.O.I.D.E. (Autonomous Multi-Layer Telemetry Anomaly Detection & Industrial Equipment Health Monitoring System). Identifies abnormal industrial equipment behaviour through telemetry analysis, anomaly detection, temporal persistence, and predictive intelligence.",
    skills: ["Machine Learning", "Anomaly Detection", "Telemetry Analysis", "Industrial IoT", "Intelligent Monitoring"],
    icon: Award,
    highlight: true,
  },
];

const additionalAchievements = [
  {
    title: "10th Position — NEUROBOTS 2026",
    subtitle: "National-Level Hackathon • Robotics Domain",
    badge: "135+ Teams • 739 Participants",
    team: "Team: TN INNOVATIONS",
    description: "Secured 10th position in the Robotics domain at NEUROBOTS National-Level Hackathon 2026, competing in an engineering environment involving over 135 teams and 739 participants that demanded practical thinking, rapid prototyping, and cross-functional technical innovation under pressure.",
    skills: ["Robotics", "Engineering Problem-Solving", "Prototyping", "Collaboration"],
    icon: Compass,
  },
  {
    title: "Certificate of Appreciation — AgriNext Summit 2026",
    subtitle: "Organised by Kerala Startup Mission (KSUM)",
    badge: "Volunteering & Professional Engagement",
    team: "Kerala Startup Mission",
    description: "Received a Certificate of Appreciation for contributing as an active ecosystem volunteer at AgriNext Summit 2026, engaging with participants and gaining hands-on exposure to cutting-edge agricultural technology, startup incubation, and agritech entrepreneurship.",
    skills: ["AgTech Innovation", "Startup Ecosystem", "Community Leadership", "Professional Engagement"],
    icon: CheckCircle2,
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[var(--highlight-color)]/5 rounded-full filter blur-3xl -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[var(--accent-color)]/5 rounded-full filter blur-3xl translate-x-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header with Official Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-surface)] text-xs font-semibold uppercase tracking-wider text-[var(--accent-color)] mb-4 shadow-sm">
            <Sparkles size={14} /> Awards & Recognitions
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Milestones & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-lg md:text-xl font-medium text-[var(--text-primary)] mb-3">
            Building Ideas. Solving Problems. Creating Impact.
          </p>
          <div className="w-20 h-1 bg-[var(--highlight-color)] mx-auto rounded-full mb-6" />
          <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
            My journey in technology is driven by innovation, experimentation, and the desire to build solutions to real-world problems. Through national-level hackathons, AI/ML projects, and collaborative engineering challenges, I have earned recognition for my technical skills, creativity, and problem-solving abilities.
          </p>
        </motion.div>

        {/* Top 3 Featured Flagship Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {featuredAchievements.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="glass-panel p-7 rounded-2xl flex flex-col justify-between group hover:bg-[var(--bg-surface)] hover:shadow-xl transition-all border-[var(--highlight-color)]/25 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-[var(--highlight-color)]/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                <div>
                  {/* Badge & Icon Header */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="text-xs font-bold text-[var(--highlight-color)] bg-[var(--highlight-color)]/10 px-3 py-1 rounded-full border border-[var(--highlight-color)]/20 uppercase tracking-wider">
                      {item.badge}
                    </span>
                    <div className="p-2.5 rounded-xl bg-[var(--highlight-color)]/10 text-[var(--highlight-color)] flex-shrink-0 group-hover:scale-110 transition-transform">
                      <IconComponent size={20} />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent-color)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[var(--accent-color)] uppercase tracking-wider mb-3">
                    {item.subtitle}
                  </p>

                  <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Skill Pills */}
                <div className="pt-4 border-t border-[var(--border-color)]">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                    Skills Demonstrated
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--border-color)]/40 text-[var(--text-secondary)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Next Tier Achievements Grid (NEUROBOTS & AgriNext Summit) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {additionalAchievements.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.12 }}
                className="glass-panel p-7 rounded-2xl flex flex-col justify-between group hover:bg-[var(--bg-surface)] hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-semibold text-[var(--accent-color)] bg-[var(--accent-color)]/10 px-3 py-1 rounded-full border border-[var(--accent-color)]/20">
                      {item.badge}
                    </span>
                    <div className="p-2.5 rounded-xl bg-[var(--text-primary)]/5 text-[var(--accent-color)] flex-shrink-0 group-hover:scale-110 transition-transform">
                      <IconComponent size={20} />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-lg md:text-xl text-[var(--text-primary)] mb-1">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--text-secondary)] font-medium mb-3">
                    <span className="text-[var(--accent-color)]">{item.subtitle}</span>
                    {item.team && (
                      <>
                        <span>•</span>
                        <span className="text-[var(--text-primary)]">{item.team}</span>
                      </>
                    )}
                  </div>

                  <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-color)]">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                    Key Competencies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--border-color)]/40 text-[var(--text-secondary)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* "Beyond Awards" Reflection Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 md:p-10 rounded-3xl border border-[var(--border-color)] relative overflow-hidden text-center max-w-4xl mx-auto"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-[var(--text-primary)]/5 text-[var(--text-primary)] text-xs font-semibold uppercase tracking-wider mb-4">
            Philosophy
          </div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-[var(--text-primary)]">
            Beyond Awards
          </h3>
          <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto mb-6">
            I believe achievements are not limited to trophies or certificates. Every project, competition, and collaborative experience helps me become a better engineer and problem-solver. My focus is on combining computer science, data science, artificial intelligence, and emerging technologies to build practical, intelligent, and impactful solutions.
          </p>
          <div className="inline-block p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--highlight-color)]/30 text-sm md:text-base font-semibold text-[var(--text-primary)] shadow-sm">
            <span className="text-[var(--highlight-color)] font-bold">“</span>
            Every challenge is an opportunity to learn. Every idea is an opportunity to build.
            <span className="text-[var(--highlight-color)] font-bold">”</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
