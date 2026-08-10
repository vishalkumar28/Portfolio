'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useMediaQuery';

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({ label, title, description, align = 'left' }: SectionHeaderProps) {
  const reducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: reducedMotion ? 0 : 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <motion.div
      className={`mb-24 md:mb-32 ${align === 'center' ? 'text-center' : ''}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <motion.span
        variants={itemVariants}
        className="inline-block text-[10px] md:text-xs font-mono tracking-[0.3em] uppercase text-text-secondary mb-6"
      >
        {label}
      </motion.span>
      <motion.h2
        variants={itemVariants}
        className="font-display font-bold text-text-primary leading-[0.9] tracking-tighter uppercase whitespace-pre-line"
        style={{ fontSize: 'clamp(3rem, 8vw, 8rem)' }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={itemVariants}
          className={`mt-8 text-sm md:text-base font-mono tracking-widest uppercase text-text-secondary max-w-2xl leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
