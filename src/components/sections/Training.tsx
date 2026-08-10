'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { useReducedMotion } from '@/hooks/useMediaQuery';

const trainingTopics = [
  {
    category: 'Foundations',
    topics: ['IT & Computer Fundamentals', 'Linux Administration', 'Windows Security', 'Networking & TCP/IP', 'Python Scripting']
  },
  {
    category: 'Offensive Security',
    topics: ['Ethical Hacking (CEH-level)', 'Advanced Penetration Testing', 'Web Application Security', 'API Security', 'Exploitation Concepts']
  },
  {
    category: 'Defensive Security',
    topics: ['SOC L1 Training', 'SIEM Fundamentals', 'Log Analysis', 'Threat Detection', 'Incident Response']
  }
];

const TrainingCard = ({ group, index, progress, range, targetScale }: any) => {
  const container = useRef(null);
  const reducedMotion = useReducedMotion();
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-[60vh] md:h-[50vh] flex items-center justify-center sticky top-24 md:top-32">
      <motion.div 
        style={{ 
          scale: reducedMotion ? 1 : scale, 
          top: `calc(-5vh + ${index * 25}px)` 
        }}
        className="w-full relative p-8 md:p-12 rounded-[2rem] bg-[#080808] border border-white/[0.05] shadow-[0_-10px_40px_rgba(0,0,0,0.5)] origin-top transition-all duration-700 hover:border-white/[0.1] h-full flex flex-col justify-center"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02)_0%,transparent_70%)] pointer-events-none rounded-[2rem]" />
        
        <h4 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary uppercase tracking-tight mb-8 border-b border-white/[0.05] pb-6 relative z-10">
          {group.category}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
          {group.topics.map((topic: string, tIndex: number) => (
            <div key={tIndex} className="flex items-center gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
              <span className="text-sm md:text-base text-text-secondary">{topic}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default function Training() {
  const reducedMotion = useReducedMotion();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const fadeUp = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="training" className="section-padding relative z-20 bg-bg-secondary border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="04 — Knowledge Sharing"
          title={"Cybersecurity\nTraining"}
          description="Connecting security theory with real-world exploitation and defense."
        />

        <div className="mt-16 flex flex-col lg:flex-row gap-12 lg:gap-24 relative" ref={container}>
          {/* Left Column - Sticky Info */}
          <div className="lg:w-1/3">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="sticky top-32 flex flex-col gap-6"
            >
              <div>
                <h3 className="text-3xl font-display font-bold text-text-primary uppercase tracking-tight">
                  Cybersecurity<br />Trainer
                </h3>
                <p className="text-accent font-mono text-xs tracking-widest uppercase mt-4">
                  ~July 2025 – Present
                </p>
                <p className="text-xs text-text-muted uppercase tracking-widest mt-1">
                  College & Professional Training | India
                </p>
              </div>
              <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                I don't just find vulnerabilities; I teach others how to find them. I design and conduct hands-on labs, demonstrations, and practical exercises that take students from IT fundamentals to advanced penetration testing and SOC L1 analysis.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Stacked Flash Cards */}
          <div className="lg:w-2/3 pb-[10vh]">
            {trainingTopics.map((group, index) => {
              const targetScale = 1 - ((trainingTopics.length - index) * 0.05);
              return (
                <TrainingCard
                  key={index}
                  group={group}
                  index={index}
                  progress={scrollYProgress}
                  range={[index * (1 / trainingTopics.length), 1]}
                  targetScale={targetScale}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
