'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { useReducedMotion } from '@/hooks/useMediaQuery';

export default function Achievements() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="achievements" className="section-padding relative z-20 bg-transparent border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="06 — Achievements"
          title={"Recognition &\nMilestones"}
          description="Verified accomplishments in cybersecurity."
          align="left"
        />

        {/* Main Achievement Card */}
        <motion.div
          className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center"
          initial={{ opacity: 0, y: reducedMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Main Stat */}
          <div className="lg:w-1/2 flex flex-col justify-center items-start border-l border-accent pl-8 py-4">
            <span className="text-xs font-mono text-accent tracking-widest uppercase mb-4">TryHackMe</span>
            <span className="text-[120px] md:text-[180px] font-display font-bold leading-[0.8] text-text-primary tracking-tighter mix-blend-difference">
              1%
            </span>
            <p className="text-xl md:text-2xl text-text-secondary font-display font-semibold mt-4 uppercase tracking-tight">
              Global Ranking
            </p>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-8">
            <p className="text-sm md:text-base text-text-secondary leading-relaxed font-body">
              Achieved top 1% ranking globally on TryHackMe through consistent hands-on practice across penetration testing, privilege escalation, web security, and Active Directory attack paths.
            </p>

            {/* Learning Areas */}
            <div className="flex flex-col gap-4 border-t border-white/[0.1] pt-8">
              <h4 className="text-[10px] font-mono text-text-muted tracking-widest uppercase">Focus Areas</h4>
              <div className="flex flex-wrap gap-2">
                {['Penetration Testing', 'Web Security', 'Privilege Escalation', 'Active Directory', 'CTF Challenges'].map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 text-[9px] font-mono text-text-muted uppercase tracking-widest border border-border rounded-md"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

