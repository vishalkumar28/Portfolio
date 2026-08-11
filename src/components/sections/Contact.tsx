'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useMediaQuery';

export default function Contact() {
  const reducedMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  const contactLinks = [
    { label: 'Email', value: 'vishalkumar280404@gmail.com', href: 'mailto:vishalkumar280404@gmail.com' },
    { label: 'LinkedIn', value: 'linkedin.com/in/vishal-kumar28', href: 'https://www.linkedin.com/in/vishal-kumar28' },
    { label: 'GitHub', value: 'github.com/vishalkumar28', href: 'https://github.com/vishalkumar28' },
    { label: 'TryHackMe', value: 'tryhackme.com/p/IIRevenII', href: 'https://tryhackme.com/p/IIRevenII' },
  ];

  return (
    <section id="contact" className="section-padding relative bg-transparent border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Achievements / Left Col */}
        <motion.div 
          className="lg:w-1/3 flex flex-col gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >

          <motion.div variants={fadeUp} className="flex flex-col gap-4 border-l-2 border-white/[0.1] pl-6">
            <h3 className="text-[10px] font-mono tracking-widest text-text-muted uppercase">Location</h3>
            <p className="text-sm text-text-primary font-mono uppercase tracking-widest">India</p>
            <p className="text-sm text-text-secondary">Available for remote opportunities.</p>
          </motion.div>
        </motion.div>

        {/* CTA / Right Col */}
        <motion.div
          className="lg:w-2/3 flex flex-col justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <h2 className="text-5xl md:text-7xl lg:text-[8rem] font-display font-bold text-text-primary uppercase tracking-tighter leading-[0.85]">
              Let's Secure<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}>Systems</span>
            </h2>
            <p className="mt-8 text-lg text-text-secondary max-w-xl leading-relaxed">
              Open to freelance contracts, full-time roles, and collaboration on ambitious, security-focused systems.
            </p>
            <div className="mt-12 flex items-center">
              <a 
                href="mailto:vishalkumar280404@gmail.com" 
                className="group flex items-center gap-4 hover:opacity-80 transition-opacity"
              >
                <span className="text-[clamp(1rem,4.5vw,1.875rem)] font-display font-bold text-text-primary break-all md:break-normal">
                  vishalkumar280404@gmail.com
                </span>
                <span className="w-12 h-12 flex items-center justify-center rounded-full border border-white/[0.2] text-white group-hover:bg-white group-hover:text-black transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 pt-12 border-t border-white/[0.05]">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2"
              >
                <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase transition-colors group-hover:text-accent">
                  {link.label}
                </span>
                <span className="text-lg font-display text-text-primary transition-colors group-hover:text-white">
                  {link.value}
                </span>
              </a>
            ))}
            
            {/* Resume */}
            <a
              href="https://drive.google.com/file/d/1jDgJHygIgjeE_PX8tqWfAGwh0ejbA1Z8/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2"
            >
              <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase transition-colors group-hover:text-accent">
                Resume
              </span>
              <span className="text-lg font-display text-text-primary transition-colors group-hover:text-white flex items-center gap-2">
                Download PDF
                <svg className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </span>
            </a>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}

