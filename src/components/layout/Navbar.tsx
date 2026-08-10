'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useActiveSection } from '@/hooks/useScrollProgress';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'experience', label: 'Experience' },
  { id: 'bughunterlab', label: 'Projects' },
  { id: 'training', label: 'Training' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(navLinks.map((l) => l.id));
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // Hide if scrolling down and past the top section
    if (latest > 150 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };

    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    }
    return () => { 
      document.body.style.overflow = ''; 
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          className={`pointer-events-auto transition-all duration-300 rounded-full border w-full max-w-4xl flex items-center justify-between px-6 h-14 md:h-16 ${
            scrolled 
              ? 'glass-strong shadow-[0_8px_30px_rgb(0,0,0,0.5)] border-white/[0.1] bg-[#050505]/80' 
              : 'bg-transparent border-transparent'
          }`}
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: -100, opacity: 0 }
          }}
          initial="visible"
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display font-bold text-lg md:text-xl text-text-primary hover:text-accent transition-colors"
          >
            VK<span className="text-accent">.</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-3 md:px-4 py-2 text-[9px] md:text-[10px] font-mono tracking-widest uppercase transition-colors rounded-full ${
                  activeSection === link.id
                    ? 'text-text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-white/[0.08] rounded-full border border-white/[0.1]"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
            <a
              href="https://drive.google.com/file/d/1U1I9S2geXlpEURN3_P-RjF8SkLZcV6uE/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 relative px-4 py-2 text-[10px] font-mono tracking-widest uppercase text-bg-primary bg-accent hover:bg-accent/90 transition-colors rounded-full font-bold flex items-center gap-2"
            >
              Resume
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="ml-2 relative px-4 py-2 text-[10px] font-mono tracking-widest uppercase text-bg-primary bg-white hover:bg-gray-200 transition-colors rounded-full font-bold flex items-center gap-2"
            >
              Hire Me
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden relative w-12 h-12 flex items-center justify-center -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <div className="flex flex-col gap-1.5 w-6">
              <motion.span
                className="block h-0.5 bg-text-primary rounded-full origin-center"
                animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-0.5 bg-text-primary rounded-full"
                animate={mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-0.5 bg-text-primary rounded-full origin-center"
                animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </motion.nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-bg-primary/95 backdrop-blur-xl" />
            <nav className="relative flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-xl md:text-2xl py-3 px-8 w-full text-center font-mono tracking-widest uppercase transition-colors ${
                    activeSection === link.id ? 'text-accent' : 'text-text-primary'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  {link.label}
                </motion.button>
              ))}
              
              <motion.a
                href="https://drive.google.com/file/d/1U1I9S2geXlpEURN3_P-RjF8SkLZcV6uE/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-8 py-3 text-sm font-mono tracking-widest uppercase text-bg-primary bg-accent rounded-full font-bold flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
              >
                Download Resume
              </motion.a>
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="mt-2 px-8 py-3 text-sm font-mono tracking-widest uppercase text-bg-primary bg-white rounded-full font-bold flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: navLinks.length * 0.05 + 0.05, duration: 0.3 }}
              >
                Hire Me
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
