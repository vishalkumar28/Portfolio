'use client';

import { motion } from 'framer-motion';
import ProfileImage from '@/components/ui/ProfileImage';
import SecurityCore3D from '@/components/ui/SecurityCore3D';

export default function Hero() {
  return (
    <section className="relative w-full bg-transparent" id="hero">
      <div className="sticky top-0 h-[100dvh] min-h-[600px] w-full overflow-hidden flex flex-col">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <SecurityCore3D />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-primary/90 z-10 pointer-events-none" />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-20 flex-1 w-full container-responsive flex flex-col justify-end lg:justify-center pb-12 lg:pb-0 pt-24 pointer-events-none">
            <div className="flex flex-col lg:flex-row items-start lg:items-center w-full justify-between gap-6 md:gap-8 pointer-events-none mt-auto lg:mt-0">
              <div className="flex flex-col items-start text-left pointer-events-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex items-center gap-4 mb-4 md:mb-6 border-l-2 border-accent pl-4"
                >
                  <span className="w-2 h-2 rounded-none bg-accent animate-pulse" />
                  <span className="font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase text-text-primary mix-blend-difference">
                    Penetration Tester | Web & API Security | Cybersecurity Trainer
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display font-bold text-text-primary fluid-h1 tracking-tighter uppercase mix-blend-difference"
                >
                  Vishal<br />Kumar<span className="text-accent">.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="mt-6 md:mt-10 font-mono text-xs md:text-sm tracking-widest text-text-secondary uppercase max-w-xl leading-relaxed mix-blend-difference"
                >
                  Testing production applications, discovering vulnerabilities, validating exploitation,<br className="hidden md:block" /> and delivering professional security reporting.
                </motion.p>
                
              </div>

              <div className="flex lg:block items-center justify-center w-full lg:w-auto mt-8 lg:mt-0 pointer-events-auto">
                <ProfileImage />
              </div>
            </div>
        </div>
      </div>
      {/* Invisible spacer to allow scrolling past the sticky hero */}
      <div className="relative z-10 w-full h-[20vh] pointer-events-none" />
    </section>
  );
}

