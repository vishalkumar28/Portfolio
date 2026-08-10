'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { useReducedMotion } from '@/hooks/useMediaQuery';

type Capability = {
  id: string;
  category: string;
  title: string;
  description: string;
  tools: string[];
};

const capabilities: Capability[] = [
  {
    id: 'c1',
    category: 'OFFENSIVE SECURITY',
    title: 'Penetration Testing',
    description: 'Systematic enumeration and exploitation of infrastructure and application vulnerabilities to identify attack paths.',
    tools: ['Nmap', 'Metasploit', 'Burp Suite', 'Nessus'],
  },
  {
    id: 'c2',
    category: 'WEB SECURITY',
    title: 'Web App Exploitation',
    description: 'Deep diving into authentication bypasses, SQL injection, XSS, and SSRF vulnerabilities within modern web architectures.',
    tools: ['Burp Suite Pro', 'OWASP ZAP', 'ffuf', 'sqlmap'],
  },
  {
    id: 'c3',
    category: 'INFRASTRUCTURE',
    title: 'Active Directory Attacks',
    description: 'Simulating lateral movement, privilege escalation, and domain dominance in Windows enterprise environments.',
    tools: ['BloodHound', 'Impacket', 'Mimikatz', 'Responder'],
  },
  {
    id: 'c4',
    category: 'AUTOMATION',
    title: 'Security Tooling',
    description: 'Developing custom scripts and automation frameworks to accelerate reconnaissance and streamline vulnerability assessment workflows.',
    tools: ['Python', 'Bash', 'Go', 'Docker'],
  },
];

function FlashCard({ cap, index }: { cap: Capability, index: number }) {
  // All cards stick at the exact same position to perfectly overlap
  const stickyTop = `8rem`;

  return (
    <div className="sticky flex justify-center w-full" style={{ top: stickyTop, zIndex: index }}>
      <div 
        className="w-full bg-[#0A0A0A] border border-white/[0.05] border-t-white/[0.1] p-8 md:p-12 shadow-[0_-10px_40px_rgba(0,0,0,0.8)] rounded-3xl relative overflow-hidden"
      >
        {/* Subtle 3D inner shadow and highlight for premium feel */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />
        <div className="absolute inset-0 border-t border-l border-white/[0.08] rounded-xl pointer-events-none" />
        <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] rounded-xl pointer-events-none" />

        <div className="flex flex-col gap-6 relative z-10">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-accent uppercase mb-2 block">
              {cap.category}
            </span>
            <h3 className="text-3xl md:text-4xl font-display font-semibold text-text-primary">
              {cap.title}
            </h3>
          </div>
          
          <p className="text-base text-text-secondary leading-relaxed border-l-2 border-accent/40 pl-6 py-2">
            {cap.description}
          </p>

          <div className="mt-4 pt-8 border-t border-white/[0.05]">
            <div>
              <p className="text-[10px] font-mono tracking-widest text-text-muted uppercase mb-4">Relevant Tools</p>
              <div className="flex flex-wrap gap-2">
                {cap.tools.map((t) => (
                  <span key={t} className="text-[10px] font-mono tracking-widest text-text-primary border border-white/[0.1] px-3 py-1 uppercase bg-transparent rounded-md shadow-inner">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div >
    </div>
  );
}

export default function About() {

  const reducedMotion = useReducedMotion();
  const fadeUp: any = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="about" className="section-padding relative z-20 bg-transparent border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="01 — Profile"
          title={"I Learn Systems\nBy Breaking Them."}
          description="Understanding how systems fail in order to build them better."
        />

        {/* The natural height of the 4 stacked cards provides the scrolling distance without needing extra padding */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mt-16 relative items-start">
          
          {/* Story Column (Sticky) */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit space-y-8 z-10">
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-xl md:text-2xl font-display font-medium text-text-primary leading-tight">
              I got into offensive security because I wanted to understand how things actually work under the surface — not just how they're supposed to work.
            </motion.p>
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-base text-text-secondary leading-relaxed">
              There is a significant difference between reading about a vulnerability and finding one yourself in a live application. My focus is on web application and API security — testing authentication flows, probing authorization boundaries, and chaining small weaknesses into meaningful attack paths.
            </motion.p>
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-base text-text-secondary leading-relaxed">
              Beyond manual testing, I build security automation tools to streamline the repetitive phases of penetration testing. The goal isn't just finding vulnerabilities — it's understanding why they exist and communicating their real-world impact clearly.
            </motion.p>
            
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="pt-8 mt-8 border-t border-white/[0.05]">
              <div className="flex flex-col gap-4 border-l-2 border-accent pl-6">
                <h3 className="text-[10px] font-mono tracking-widest text-text-muted uppercase">Global Ranking</h3>
                <p className="text-3xl font-display font-bold text-text-primary tracking-tight">TryHackMe<br />Top 1%</p>
                <p className="text-sm text-text-secondary">Consistent performance across offensive security paths and CTF challenges.</p>
              </div>
            </motion.div>
          </div>

          {/* Flash Cards (3D Stack) */}
          <div className="lg:w-2/3 flex flex-col gap-24 lg:gap-40 relative w-full mt-10 lg:mt-0">
            {capabilities.map((cap, index) => (
              <FlashCard 
                key={cap.id} 
                cap={cap} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

