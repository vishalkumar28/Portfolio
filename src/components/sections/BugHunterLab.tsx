'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useMediaQuery';
import SectionHeader from '@/components/ui/SectionHeader';

const features = [
  {
    id: 'scope',
    title: 'Scope Analyzer',
    description: 'Analyze attack surface difficulty based on program domains and scope. Categorizes into Beginner, Intermediate, and Expert.',
  },
  {
    id: 'recon',
    title: 'Automated Recon Pipeline',
    description: 'Live automated discovery via subfinder & httpx. Integrates live host detection, technology fingerprinting, and WebSocket logs.',
  },
  {
    id: 'attack-surface',
    title: 'Attack Surface Map',
    description: 'Interactive security intelligence mapping subdomains, live hosts, and technologies automatically post-reconnaissance.',
  },
  {
    id: 'testing',
    title: 'Testing Methodology',
    description: 'Endpoint-level testing checklists based on HTTP methods (GET, POST, PUT, DELETE, FILE) and target features.',
  },
  {
    id: 'findings',
    title: 'Vulnerability Findings',
    description: 'Professional vulnerability management interface capturing title, severity, class, and detailed descriptions.',
  },
  {
    id: 'evidence',
    title: 'Evidence Manager',
    description: 'Secure storage for screenshots, logs, and HTTP dumps (up to 20MB per file) for finding validation.',
  },
  {
    id: 'poc',
    title: 'Proof of Concept Generator',
    description: 'Auto-generate PoCs in cURL, Python, and Burp Suite formats directly from validated findings.',
  },
  {
    id: 'report',
    title: 'Report Builder',
    description: 'Generate styled Markdown and PDF reports linking findings, evidence, PoCs, impact, and remediation.',
  },
  {
    id: 'automation',
    title: 'Security Automation',
    description: 'Orchestrate nuclei, nmap, ffuf, gau, and katana via Celery workers with live WebSocket execution monitoring.',
  },
];

const workflow = [
  'Scope', 'Recon', 'Attack Surface', 'Testing', 'Findings', 'Evidence', 'PoC', 'Report'
];

export default function BugHunterLab() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="bughunterlab" className="section-padding relative z-20 bg-transparent border-t border-white/[0.05] overflow-hidden -mt-[20vh]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,136,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <SectionHeader
          label="06 — Projects"
          title={"BugHunterLab"}
          description="Developing advanced offensive security platforms and automation tools."
        />

        {/* HERO */}
        <div className="mb-32 mt-16 text-center flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-text-secondary max-w-3xl mb-12"
          >
            Professional Bug Bounty & VAPT Platform
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-2 md:gap-4 font-mono text-[10px] md:text-xs tracking-widest text-text-muted uppercase"
          >
            {workflow.map((step, i) => (
              <div key={step} className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                <span className="text-accent">{step}</span>
                {i < workflow.length - 1 && <span className="hidden md:inline">→</span>}
                {i < workflow.length - 1 && <span className="md:hidden">↓</span>}
              </div>
            ))}
          </motion.div>
        </div>

        {/* OVERVIEW & PROBLEM & SOLUTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[10px] font-mono tracking-widest text-accent uppercase mb-4">01. Overview & Problem</h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              BugHunterLab is a professional Bug Bounty and VAPT platform designed to organize the complete security testing workflow from scope analysis and reconnaissance to vulnerability testing, proof-of-concept generation, evidence management, and professional reporting.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Security testing workflows often suffer from fragmented tooling, lost evidence, and manual reporting. BugHunterLab solves this by unifying the entire lifecycle into a structured, methodology-driven platform.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-bg-secondary border border-white/[0.05] p-8 rounded-lg"
          >
            <h3 className="text-[10px] font-mono tracking-widest text-accent uppercase mb-6">02. Architecture Stack</h3>
            <div className="flex flex-col gap-4 text-sm font-mono text-text-primary">
              <div className="flex justify-between border-b border-white/[0.05] pb-2"><span>Frontend</span> <span className="text-text-muted">Next.js</span></div>
              <div className="flex justify-between border-b border-white/[0.05] pb-2"><span>Backend</span> <span className="text-text-muted">FastAPI</span></div>
              <div className="flex justify-between border-b border-white/[0.05] pb-2"><span>Database</span> <span className="text-text-muted">PostgreSQL</span></div>
              <div className="flex justify-between border-b border-white/[0.05] pb-2"><span>Task Processing</span> <span className="text-text-muted">Celery + Redis</span></div>
              <div className="flex justify-between border-b border-white/[0.05] pb-2"><span>Monitoring</span> <span className="text-text-muted">Flower</span></div>
              <div className="flex justify-between pt-2"><span>Infra</span> <span className="text-text-muted">Docker Compose</span></div>
            </div>
          </motion.div>
        </div>

        {/* WORKFLOW VISUALIZATION */}
        <div className="mb-32">
          <SectionHeader label="03. Core Engine" title="The Security Workflow" description="A structured pipeline tracking targets from initial discovery to final validation." />
          <div className="mt-16 flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
              {['SCOPE', 'RECON', 'ATTACK SURFACE', 'TESTING'].map((step, i) => (
                <div key={step} className="border border-white/[0.05] bg-bg-secondary/50 p-6 text-center group hover:border-accent/30 transition-colors">
                  <span className="text-[10px] font-mono tracking-widest text-accent mb-2 block">PHASE 0{i+1}</span>
                  <h4 className="font-display font-bold tracking-tight uppercase text-text-primary">{step}</h4>
                </div>
              ))}
            </div>
            <div className="w-[1px] h-12 bg-white/[0.05] my-4" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
              {['FINDING', 'EVIDENCE', 'PoC', 'REPORT'].map((step, i) => (
                <div key={step} className="border border-white/[0.05] bg-bg-secondary/50 p-6 text-center group hover:border-accent/30 transition-colors">
                  <span className="text-[10px] font-mono tracking-widest text-accent mb-2 block">PHASE 0{i+5}</span>
                  <h4 className="font-display font-bold tracking-tight uppercase text-text-primary">{step}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FEATURES GRID */}
        <div className="mb-32">
          <SectionHeader label="04. Capabilities" title="Platform Features" description="Professional security orchestration and vulnerability management." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {features.map((feature, i) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-bg-secondary border border-white/[0.05] p-8 hover:border-accent/30 transition-colors group"
              >
                <div className="w-10 h-10 border border-white/[0.1] flex items-center justify-center text-xs font-mono text-accent mb-6 group-hover:bg-accent/10 transition-colors">
                  0{i+1}
                </div>
                <h4 className="text-xl font-display font-bold text-text-primary uppercase tracking-tight mb-3">
                  {feature.title}
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECURITY AUTOMATION & TOOLS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
          <div>
            <h3 className="text-[10px] font-mono tracking-widest text-accent uppercase mb-4">05. Security Automation</h3>
            <h4 className="text-3xl font-display font-bold text-text-primary uppercase tracking-tight mb-6">
              Orchestrated Testing
            </h4>
            <p className="text-text-secondary leading-relaxed mb-8">
              BugHunterLab integrates industry-standard security tools directly into the platform workflow. Tasks are executed asynchronously via Celery workers, allowing testers to run intensive scans while analyzing other targets.
            </p>
            <div className="flex flex-wrap gap-3">
              {['subfinder', 'httpx', 'nuclei', 'nmap', 'ffuf', 'gau', 'katana'].map(tool => (
                <span key={tool} className="px-3 py-1 border border-white/[0.1] text-xs font-mono text-text-primary bg-bg-secondary/50">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div className="relative aspect-video border border-white/[0.05] bg-black/50 rounded-lg overflow-hidden flex flex-col">
            <div className="h-8 border-b border-white/[0.05] bg-bg-secondary flex items-center px-4 gap-2">
              <div className="w-2 h-2 rounded-full bg-error" />
              <div className="w-2 h-2 rounded-full bg-warning" />
              <div className="w-2 h-2 rounded-full bg-success" />
              <span className="ml-4 text-[10px] font-mono text-text-muted">Live Execution Log (WebSocket)</span>
            </div>
            <div className="flex-1 p-4 font-mono text-xs text-text-secondary overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-primary z-10" />
              <div className="animate-pulse opacity-50 space-y-2">
                <p className="text-success">[+] Task started: nuclei -t vulnerabilities/ -u target.com</p>
                <p>[*] Loading templates...</p>
                <p>[*] Execution active: 45 workers</p>
                <p className="text-warning">[!] Found CVE-2023-XXXX on target.com/api/v1</p>
                <p>[*] Saving output to database...</p>
              </div>
            </div>
          </div>
        </div>

        {/* OUTCOME / CONCLUSION */}
        <div className="text-center max-w-3xl mx-auto border-t border-white/[0.05] pt-16">
          <h3 className="text-[10px] font-mono tracking-widest text-accent uppercase mb-4">06. Outcomes & Challenges</h3>
          <p className="text-text-secondary leading-relaxed mb-8">
            Building BugHunterLab required overcoming complex challenges in real-time task orchestration, managing large evidence payloads securely, and normalizing output from diverse CLI security tools into a unified PostgreSQL schema.
          </p>
          <motion.a
            href="https://github.com/vishalkumar28/BugHunterLab"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-white/10 hover:border-accent hover:bg-accent/5 transition-all group font-mono text-xs text-text-primary tracking-widest uppercase"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span>View Source on GitHub</span>
          </motion.a>
        </div>

      </div>
    </section>
  );
}

