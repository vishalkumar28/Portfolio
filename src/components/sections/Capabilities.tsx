'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { capabilities } from '@/data/capabilities';
import { 
  ShieldAlert, TerminalSquare, Search, Network, 
  Key, Lock, Database, ServerCrash, Webhook,
  Terminal, Computer, Users, ArrowUpRight,
  FileJson, Cog, Bug, Radar, Swords, 
  DatabaseZap, Ghost, Activity, Skull 
} from 'lucide-react';

const iconMap: Record<string, any> = {
  'VAPT': ShieldAlert,
  'Penetration Testing': TerminalSquare,
  'Reconnaissance': Search,
  'Attack Surface Analysis': Network,
  'Authentication Testing': Key,
  'Authorization Testing': Lock,
  'Injection Attacks': Database,
  'SSRF & CSRF': ServerCrash,
  'API Security': Webhook,
  'Linux Security': Terminal,
  'Windows Security': Computer,
  'Active Directory': Users,
  'Privilege Escalation': ArrowUpRight,
  'Python': FileJson,
  'Bash Scripting': TerminalSquare,
  'Security Automation': Cog,
  'Burp Suite': Bug,
  'Nmap': Radar,
  'Metasploit': Swords,
  'SQLMap': DatabaseZap,
  'Gobuster': Ghost,
  'Wireshark': Activity,
  'Hydra': Skull
};

export default function Capabilities() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate the exact horizontal slide distance using VW units.
  // 5 slides * 100vw = 500vw. 4 gaps * 15vw = 60vw. Total = 560vw. 
  // To align the final slide to the right edge, we translate by -(560 - 100)vw = -460vw.
  // Using matching "vw" units ensures Framer Motion interpolates smoothly instead of snapping.
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-460vw"]);

  return (
    <section ref={targetRef} id="capabilities" className="relative md:h-[600vh] bg-transparent">
      {/* Mobile Layout: Compact vertical stack */}
      <div className="md:hidden flex flex-col gap-12 py-16 px-4">
        {capabilities.map((category, idx) => (
          <div key={category.id} className="w-full flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="text-accent text-[10px] font-mono tracking-widest uppercase">
                {`0${idx + 1}`} — CATEGORY
              </span>
            </div>
            <h2 className="fluid-h3 font-display font-black text-white uppercase tracking-tight">
              {category.title}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {category.items.map((item) => {
                const Icon = iconMap[item.name] || ShieldAlert;
                return (
                  <div key={item.name} className="flex flex-col items-center justify-center p-4 bg-[#0A0A0A] border border-white/[0.05] rounded-xl">
                    <Icon className="w-6 h-6 text-accent mb-2" strokeWidth={1.5} />
                    <span className="text-[10px] font-medium text-white/80 text-center leading-tight">{item.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Layout: Horizontal Scroll */}
      <div className="hidden md:flex sticky top-0 h-screen items-center overflow-hidden">
        
        {/* Added w-max and a gap-[15vw] to create that clear "break" you wanted between sections */}
        <motion.div style={{ x }} className="flex h-full w-max gap-[15vw]">
          {capabilities.map((category, idx) => (
            <div 
              key={category.id} 
              className="w-screen h-full flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-24 shrink-0 relative overflow-hidden"
            >
              {/* Background Watermark Text */}
              <div className="absolute top-1/2 -translate-y-1/2 left-10 text-[8rem] sm:text-[12rem] md:text-[20rem] font-black text-white/[0.02] uppercase pointer-events-none select-none whitespace-nowrap z-0">
                {category.title}
              </div>

              {/* Container now utilizes full width with padding rather than a strict max-w, so it uses side space perfectly */}
              <div className="w-full flex flex-col gap-10 md:gap-14 relative z-10 justify-center">
                
                {/* Title Side - Now stacked vertically on top */}
                <div className="w-full flex flex-col text-left">
                  <div className="flex items-center gap-4 mb-4 md:mb-6">
                    <span className="text-accent text-xs md:text-sm font-mono tracking-widest uppercase">
                      {`0${idx + 1}`} — CATEGORY
                    </span>
                  </div>
                  {/* Fixed the "stressed" font issue: lowered vw scale to 5vw, reduced max size, and removed tracking-tighter to let it breathe */}
                  <h2 className="text-[clamp(2.5rem,5vw,5rem)] leading-[1.1] font-display font-black text-white uppercase tracking-tight">
                    {category.title}
                  </h2>
                </div>

                {/* Grid Side - Now vertically below the title ("font ke baad") */}
                <div className="w-full">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 w-full">
                    {category.items.map((item) => {
                      const Icon = iconMap[item.name] || ShieldAlert;
                      
                      return (
                        <div 
                          key={item.name} 
                          className="group flex flex-col items-center justify-center p-4 md:p-6 bg-[#0A0A0A] border border-white/[0.05] hover:border-white/[0.15] rounded-2xl transition-all duration-300 hover:bg-[#111] hover:-translate-y-1 relative overflow-hidden shadow-lg hover:shadow-accent/5"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                          
                          <Icon 
                            className="w-8 h-8 md:w-10 md:h-10 text-white/40 group-hover:text-accent transition-colors duration-300 mb-4" 
                            strokeWidth={1.5} 
                          />
                          <span className="text-xs font-medium text-white/60 group-hover:text-white text-center transition-colors duration-300 leading-tight">
                            {item.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

