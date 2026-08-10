'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { useReducedMotion } from '@/hooks/useMediaQuery';

const platforms = [
  {
    name: 'HOA Platform',
    category: 'Application Security Testing',
  },
  {
    name: 'Academy Platform',
    category: 'Web Application Security Testing',
  },
  {
    name: 'Blog Website',
    category: 'Web Security Testing',
  },
  {
    name: 'HRMS Platform',
    category: 'Application / API Security Testing',
  },
];

export default function RealWorldTesting() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="testing" className="section-padding relative z-20 bg-transparent border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="02 — Methodology Origin"
          title={"Real-World\nApplication Security"}
          description="Security testing performed across diverse production platforms, establishing the foundation for structured testing methodologies."
        />

        <div className="mt-16 flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-8 justify-between relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-white/[0.05] -z-10 -translate-y-1/2" />
          
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              className="relative group bg-bg-secondary border border-white/[0.05] p-6 lg:p-8 rounded-lg flex-1 hover:border-accent/30 transition-colors"
              initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reducedMotion ? 0 : i * 0.1, duration: 0.5 }}
            >
              <div className="flex flex-col gap-4 h-full justify-center text-center">
                <h3 className="text-xl md:text-2xl font-display font-bold text-text-primary uppercase tracking-tight group-hover:text-accent transition-colors">
                  {platform.name}
                </h3>
                <div className="h-[1px] w-12 bg-accent/50 mx-auto group-hover:w-full transition-all duration-500" />
                <p className="text-xs font-mono tracking-widest text-text-secondary uppercase">
                  {platform.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Narrative Connection to next sections */}
        <motion.div
          className="mt-32 flex flex-col items-center justify-center text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center gap-6">
            <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase">Learned recurring workflows</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
            <h4 className="text-2xl md:text-3xl font-display font-bold text-text-primary uppercase tracking-tight">
              Automation & Methodology
            </h4>
            <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
            <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase">Built structured testing workflows</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

