import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { labAreas } from '@/data/research';
import { useReducedMotion } from '@/hooks/useMediaQuery';
import { Globe, Braces, Radio, Building2, ChevronsUp, Bot, ShieldAlert } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'web-pentest': <Globe className="w-12 h-12 md:w-16 md:h-16 text-text-muted group-hover:text-accent transition-colors duration-500" strokeWidth={1} />,
  'api-security': <Braces className="w-12 h-12 md:w-16 md:h-16 text-text-muted group-hover:text-accent transition-colors duration-500" strokeWidth={1} />,
  'network-recon': <Radio className="w-12 h-12 md:w-16 md:h-16 text-text-muted group-hover:text-accent transition-colors duration-500" strokeWidth={1} />,
  'ad-exploitation': <Building2 className="w-12 h-12 md:w-16 md:h-16 text-text-muted group-hover:text-accent transition-colors duration-500" strokeWidth={1} />,
  'privesc': <ChevronsUp className="w-12 h-12 md:w-16 md:h-16 text-text-muted group-hover:text-accent transition-colors duration-500" strokeWidth={1} />,
  'security-automation': <Bot className="w-12 h-12 md:w-16 md:h-16 text-text-muted group-hover:text-accent transition-colors duration-500" strokeWidth={1} />,
};

const Card = ({ area, index, progress, range, targetScale }: any) => {
  const container = useRef(null);
  const reducedMotion = useReducedMotion();

  // The card scales down as the user scrolls past its active section
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ 
          scale: reducedMotion ? 1 : scale, 
          top: `calc(-5vh + ${index * 25}px)` 
        }}
        className="w-full relative flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 p-8 md:p-12 lg:px-12 lg:py-16 rounded-[2rem] bg-[#050505] border border-white/[0.05] shadow-[0_-10px_40px_rgba(0,0,0,0.8)] origin-top group transition-all duration-700 hover:border-white/[0.1]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02)_0%,transparent_70%)] pointer-events-none rounded-[2rem] transition-opacity duration-700 opacity-30 group-hover:opacity-100" />
        
        {/* Meta Column */}
        <div className="lg:w-5/12 shrink-0 flex flex-col gap-4 relative z-10">
          <div className="mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
            {iconMap[area.id] || <ShieldAlert className="w-12 h-12 md:w-16 md:h-16 text-text-muted group-hover:text-accent transition-colors duration-500" strokeWidth={1} />}
          </div>
          <p className="text-[10px] font-mono tracking-widest text-accent uppercase flex items-center gap-2">
            <span className="w-4 h-px bg-accent/50"></span>
            {area.methodology}
          </p>
          <h3 className="text-3xl md:text-4xl xl:text-5xl font-display font-bold text-text-primary uppercase tracking-tighter leading-[1.1] break-words hyphens-auto">
            {area.title}
          </h3>
        </div>

        {/* Content Column */}
        <div className="lg:w-7/12 flex flex-col gap-6 relative z-10">
          <p className="text-sm md:text-base text-text-secondary leading-relaxed font-body font-light">
            {area.description}
          </p>

          {/* Tools */}
          <div className="mt-2">
            <h4 className="text-[10px] font-mono text-text-muted tracking-widest uppercase mb-4 flex items-center gap-4">
              <span>Arsenal & Tooling</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {area.tools.map((tool: string) => {
                const getToolIcon = (name: string) => {
                  const iconClass = "w-5 h-5 opacity-70 group-hover/tool:opacity-100 transition-opacity";
                  switch (name.toLowerCase()) {
                    case 'burp suite': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><path d="m8 2 1.88 1.88"/><path d="M14.12 3.88 16 2"/><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"/><path d="M12 20v-9"/><path d="M6.53 9C4.6 8.8 3 7.1 3 5"/><path d="M6 13H2"/><path d="M3 21c0-2.1 1.7-3.9 3.8-4"/><path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"/><path d="M22 13h-4"/><path d="M17.2 17c2.1.1 3.8 1.9 3.8 4"/></svg>; // Bug
                    case 'owasp zap': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>; // Zap
                    case 'browser devtools': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>; // Layout/Browser
                    case 'postman': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>; // Send
                    case 'custom scripts': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m10 12.5-2 2 2 2"/><path d="m14 12.5 2 2-2 2"/></svg>; // FileCode
                    case 'nmap': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"/><path d="M4 6h.01"/><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"/><path d="M16.24 7.76A6 6 0 1 0 8.25 16.23"/><path d="M11.64 13.36a3 3 0 1 1-1.28-4.27"/><polygon points="12 12 17 7 12 12"/></svg>; // Radar
                    case 'gobuster': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><path d="M9 10h.01"/><path d="M15 10h.01"/><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"/></svg>; // Ghost
                    case 'wireshark': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>; // Activity
                    case 'impacket': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><polyline points="8 10 12 14 8 18"/><line x1="16" x2="16" y1="18" y2="18"/></svg>; // TerminalSquare
                    case 'mimikatz': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M8 20v2h8v-2"/><path d="m12.5 17-.5-1-.5 1h1z"/><path d="M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20"/></svg>; // Skull
                    case 'bloodhound': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>; // Share2
                    case 'linpeas': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>; // Search
                    case 'winpeas': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>; // Search
                    case 'gtfobins': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>; // Database
                    case 'python': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>; // Terminal
                    case 'bash': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>; // Terminal
                    case 'custom frameworks': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><rect width="7" height="7" x="14" y="3" rx="1"/><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"/></svg>; // Blocks
                    default: return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>; // Wrench
                  }
                };

                return (
                  <div
                    key={tool}
                    className="group/tool flex flex-col items-center justify-center gap-3 p-4 md:p-5 bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 rounded-xl"
                  >
                    <div className="text-text-muted group-hover/tool:text-accent transition-colors">
                      {getToolIcon(tool)}
                    </div>
                    <span className="text-[10px] md:text-xs font-medium text-text-secondary group-hover/tool:text-text-primary transition-colors text-center">
                      {tool}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function SecurityLab() {
  const container = useRef(null);
  
  // Track the scroll progress of the entire stack container
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section id="security-lab" className="relative z-20 bg-transparent" ref={container}>
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-transparent to-bg-primary pointer-events-none" />

      <div className="relative max-w-[85rem] mx-auto px-6 pt-24 md:pt-32">
        <SectionHeader
          label="05 — Research"
          title={"Security\nLaboratory"}
          description="An interactive visualization of typical attack vectors, vulnerabilities, and the methodologies used to exploit and secure them."
          align="left"
        />

        <div className="mt-16 md:mt-24">
          {labAreas.map((area, i) => {
            // targetScale determines how much smaller the card gets when it's stacked behind
            const targetScale = 1 - ((labAreas.length - i) * 0.05);
            return (
              <Card 
                key={area.id} 
                area={area} 
                index={i} 
                progress={scrollYProgress} 
                // Each card starts scaling down when the scroll progress passes its index proportion
                range={[i * (1 / labAreas.length), 1]} 
                targetScale={targetScale} 
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

