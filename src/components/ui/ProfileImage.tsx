'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import InteractiveBackground from './InteractiveBackground';

export default function ProfileImage() {
  return (
    <motion.div
      className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] mx-auto lg:mx-0 mb-4 lg:mb-0 rounded-none bg-surface/20 backdrop-blur-sm overflow-hidden flex items-end justify-center group cursor-crosshair"
      initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{
        boxShadow: 'inset 0 0 40px rgba(0,0,0,0.8)'
      }}
    >
      {/* Brutalist Tech Corners */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent/40 z-30 transition-all duration-300 group-hover:w-12 group-hover:h-12 group-hover:border-accent" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent/40 z-30 transition-all duration-300 group-hover:w-12 group-hover:h-12 group-hover:border-accent" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent/40 z-30 transition-all duration-300 group-hover:w-12 group-hover:h-12 group-hover:border-accent" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent/40 z-30 transition-all duration-300 group-hover:w-12 group-hover:h-12 group-hover:border-accent" />

      {/* Cyber Grid Overlay */}
      <div
        className="absolute inset-0 z-20 pointer-events-none opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Interactive Particle Background behind the image */}
      <InteractiveBackground />

      {/* Scanning Effect on Hover */}
      <motion.div
        className="absolute inset-x-0 h-40 bg-gradient-to-b from-transparent via-accent/20 to-transparent z-20 pointer-events-none opacity-0 group-hover:opacity-100 mix-blend-screen"
        initial={{ top: '-50%' }}
        whileHover={{ top: ['-50%', '120%', '-50%'] }}
        transition={{ duration: 4, ease: "linear", repeat: Infinity }}
      />

      {/* Edge glows */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none mix-blend-overlay" />

      {/* The Image */}
      <Image
        src="/vishal-profile-photo.png"
        alt="Vishal Kumar"
        fill
        className="object-contain object-center filter grayscale group-hover:grayscale-0 contrast-125 brightness-90 group-hover:brightness-110 transition-all duration-700 scale-100 group-hover:scale-105"
        sizes="(max-width: 768px) 288px, (max-width: 1024px) 384px, 500px"
        priority
      />
    </motion.div>
  );
}
