'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { researchNotes } from '@/data/research';
import { useReducedMotion } from '@/hooks/useMediaQuery';

export default function Research() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="research" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="// Security Notes"
          title="Research & Writing"
          description="Technical notes on security concepts, methodologies, and lessons from hands-on testing."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {researchNotes.map((note, i) => (
            <motion.article
              key={note.id}
              className="group p-6 rounded-2xl bg-bg-secondary border border-border-subtle hover:border-accent/20 transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: reducedMotion ? 0 : i * 0.08, duration: 0.5 }}
              whileHover={{ y: -3 }}
            >
              {/* Category */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-accent/80 tracking-wider">{note.category}</span>
                <span className="text-xs text-text-muted">{note.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-display font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors leading-snug">
                {note.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-grow">
                {note.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border-subtle">
                {note.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs font-mono text-text-muted bg-surface rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
