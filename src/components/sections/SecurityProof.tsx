'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useMediaQuery';

const metrics = [
  {
    value: '114',
    label: 'Vulnerabilities Identified',
    detail: 'In production multi-tenant SaaS environments'
  },
  {
    value: '34',
    label: 'CVSS 10.0 Critical Findings',
    detail: 'High-impact authorization and logic flaws'
  },
  {
    value: '34',
    label: 'API Endpoints in BOLA Chain',
    detail: 'Demonstrated cross-tenant unauthorized access'
  },
  {
    value: '~40%',
    label: 'Manual Effort Reduced',
    detail: 'Through Python and Bash automation'
  }
];

export default function SecurityProof() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="proof" className="section-padding relative z-20 bg-bg-secondary border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent mb-4 border border-accent/20 px-4 py-2 bg-accent/5">
            Security Proof System
          </h2>
          <p className="text-2xl md:text-4xl font-display font-medium text-text-primary max-w-3xl leading-tight">
            Proof &gt; Claims. Real-world validation of security posture across modern architectures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-8 border border-white/[0.05] bg-transparent hover:bg-white/[0.02] transition-colors"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent/30 group-hover:border-accent transition-colors" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-accent/30 group-hover:border-accent transition-colors" />

              <div className="flex flex-col h-full justify-between gap-6">
                <div>
                  <h3 className="fluid-h2 font-display font-bold text-text-primary mb-2">
                    {metric.value}
                  </h3>
                  <div className="h-px w-8 bg-accent/50 mb-4 group-hover:w-16 transition-all duration-300" />
                  <p className="font-mono text-sm tracking-widest uppercase text-text-primary">
                    {metric.label}
                  </p>
                </div>
                <p className="text-xs text-text-muted">
                  {metric.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

