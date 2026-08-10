'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useMediaQuery';

const chains = [
  {
    title: 'BOLA Attack Chain',
    target: 'Multi-Tenant SaaS API',
    impact: 'Cross-Tenant Data Exposure & Unauthorized Actions',
    steps: [
      'Reconnaissance & Endpoint Discovery',
      'Authorization Header Manipulation',
      'BOLA Vulnerability Identification',
      '34 Endpoint Attack Chain',
      'Cross-Tenant Access Validated'
    ]
  },
  {
    title: 'Privilege Escalation',
    target: 'SaaS Platform Identity System',
    impact: 'Full Platform Compromise',
    steps: [
      'Tenant Admin Access Secured',
      'Authorization Flaw in Account Management',
      'Role ID Manipulation',
      'Privilege Escalation',
      'Platform Super-Admin Access Granted'
    ]
  },
  {
    title: 'SSRF to Cloud Compromise',
    target: 'Cloud-Hosted Web Application',
    impact: 'AWS Credential Exposure',
    steps: [
      'Input Validation Weakness Discovered',
      'Server-Side Request Forgery Executed',
      'Targeted AWS IMDSv1',
      'Cloud Metadata Extracted',
      'AWS Credentials & Secrets Exposed'
    ]
  }
];

export default function AttackChains() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="attack-chains" className="section-padding relative z-20 bg-transparent border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-[10px] font-mono tracking-[0.3em] uppercase text-text-muted mb-4">
            02 — Attack Chain Analysis
          </h2>
          <p className="text-3xl md:text-5xl font-display font-bold text-text-primary uppercase tracking-tight">
            Exploitation Narrative
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {chains.map((chain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: reducedMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.3, ease: "easeOut" } 
              }}
              className="relative border border-white/[0.05] bg-surface/30 p-8 transition-colors group h-full flex flex-col hover:border-accent/40 hover:bg-surface/50"
              style={{
                boxShadow: "0 0 0 rgba(0,0,0,0)",
              }}
              // Applying a 3D glowing shadow on hover using Tailwind classes in the style prop if needed, or simply let Framer Motion handle a smooth shadow transition.
              // We'll use a sophisticated drop shadow for the 3D effect:
            >
              <motion.div
                className="absolute inset-0 z-[-1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm"
                style={{
                  boxShadow: "0 20px 40px -15px rgba(37, 99, 235, 0.15), 0 10px 20px -10px rgba(0, 0, 0, 0.5)"
                }}
              />
              
              <div className="mb-8 border-b border-white/[0.05] pb-4">
                <h3 className="font-mono text-sm tracking-widest text-accent uppercase mb-2">
                  {chain.title}
                </h3>
                <p className="text-xs text-text-muted font-mono mb-1">
                  Target: {chain.target}
                </p>
                <p className="text-xs text-danger font-mono">
                  Impact: {chain.impact}
                </p>
              </div>

              <div className="relative flex-grow">
                {/* Vertical Line */}
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/[0.05] group-hover:bg-accent/30 transition-colors duration-300" />
                
                <ul className="space-y-6 relative z-10">
                  {chain.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start gap-4">
                      <div className="w-[15px] h-[15px] rounded-none border border-accent/30 bg-transparent mt-1 shrink-0 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-colors duration-300">
                        <div className="w-[3px] h-[3px] bg-accent/50 group-hover:bg-accent transition-colors duration-300" />
                      </div>
                      <span className="text-sm font-mono text-text-secondary leading-snug pt-[1px] group-hover:text-text-primary transition-colors duration-300">
                        {step}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


