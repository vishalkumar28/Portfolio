'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { experience } from '@/data/experience';
import { useReducedMotion } from '@/hooks/useMediaQuery';

export default function Experience() {
  const reducedMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  return (
    <section id="experience" className="section-padding relative z-20 bg-transparent border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="03 — Experience"
          title={"Professional\nExperience"}
          description="Practical security experience through hands-on engagements."
        />

        <div className="flex flex-col border-t border-white/[0.05] overflow-hidden">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="group flex flex-col gap-12 py-16 border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors -mx-6 px-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: i * 0.1 } } }}
            >
              {/* Meta Info */}
              <div className="flex flex-col items-center text-center gap-2 w-full">
                <p className="text-[10px] font-mono tracking-widest text-text-muted uppercase mb-2">
                  {exp.period}
                </p>
                <h3 className="font-display font-bold text-text-primary uppercase tracking-tight fluid-h2">
                  {exp.company}
                </h3>
                <p className="text-accent font-mono text-sm tracking-widest uppercase mt-2">
                  {exp.role}
                </p>
                <p className="text-xs text-text-muted uppercase tracking-widest mt-1">
                  {exp.location}
                </p>
              </div>

              {/* Details */}
              <div className="w-full max-w-4xl mx-auto flex flex-col gap-8">
                {exp.description && (
                  <motion.p variants={fadeUp} className="text-sm md:text-base text-text-secondary leading-relaxed font-body">
                    {exp.description}
                  </motion.p>
                )}

                {exp.aboutCompany && (
                  <motion.div variants={fadeUp}>
                    <h4 className="text-[10px] font-mono text-text-muted tracking-widest uppercase mb-2 border-b border-white/[0.1] pb-2 inline-block">
                      About {exp.company}
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed font-body mt-2">
                      {exp.aboutCompany}
                    </p>
                  </motion.div>
                )}

                {exp.myWork && (
                  <motion.div variants={fadeUp}>
                    <h4 className="text-[10px] font-mono text-text-muted tracking-widest uppercase mb-2 border-b border-white/[0.1] pb-2 inline-block">
                      My Role & Responsibilities
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed font-body mt-2">
                      {exp.myWork}
                    </p>
                  </motion.div>
                )}

                {exp.whatILearned && (
                  <motion.div variants={fadeUp}>
                    <h4 className="text-[10px] font-mono text-text-muted tracking-widest uppercase mb-2 border-b border-white/[0.1] pb-2 inline-block">
                      What I Learned
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed font-body mt-2">
                      {exp.whatILearned}
                    </p>
                  </motion.div>
                )}

                {exp.whatITested && exp.whatITested.length > 0 && (
                  <motion.div variants={fadeUp}>
                    <h4 className="text-[10px] font-mono text-text-muted tracking-widest uppercase mb-3 border-b border-white/[0.1] pb-2 inline-block">
                      What I Tested
                    </h4>
                    <ul className="space-y-3">
                      {exp.whatITested.map((item, j) => (
                        <motion.li
                          key={j}
                          variants={fadeUp}
                          className="flex items-start gap-4 text-sm text-text-secondary"
                        >
                          <span className="font-mono text-accent/50 text-[10px] mt-1">{`[0${j + 1}]`}</span>
                          <span className="leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                <motion.div variants={fadeUp}>
                  <h4 className="text-[10px] font-mono text-text-muted tracking-widest uppercase mb-3 border-b border-white/[0.1] pb-2 inline-block">
                    Key Engagements
                  </h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, j) => (
                      <motion.li
                        key={j}
                        variants={fadeUp}
                        className="flex items-start gap-4 text-sm text-text-secondary"
                      >
                        <span className="font-mono text-accent/50 text-[10px] mt-1">{`[0${j + 1}]`}</span>
                        <span className="leading-relaxed">{resp}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-3 mt-6">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-[10px] font-mono tracking-widest uppercase text-text-primary bg-white/[0.02] border border-white/[0.1] rounded-full hover:border-accent/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

