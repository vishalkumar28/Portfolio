export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description?: string;
  aboutCompany?: string;
  myWork?: string;
  whatILearned?: string;
  whatITested?: string[];
  responsibilities: string[];
  technologies: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: 'boltmartz',
    role: 'Penetration Tester',
    company: 'Boltmartz IT Solutions',
    period: 'Jan 2026 – Present',
    location: 'Indore, India',

    aboutCompany: 'Boltmartz IT Solutions is a forward-thinking technology and cybersecurity firm specializing in securing enterprise infrastructure, web applications, and cloud environments against modern cyber threats.',
    myWork: 'As a Penetration Tester, I was responsible for leading offensive security engagements, conducting comprehensive vulnerability assessments, and executing penetration testing on client platforms. I focused on identifying critical security flaws, building attack chains, and providing actionable remediation strategies.',
    whatILearned: 'I developed a deep understanding of complex authorization vulnerabilities, business logic flaws, and enterprise-grade security reporting. I also honed my skills in automating repetitive reconnaissance and security testing workflows using custom Python and Bash scripts, significantly increasing testing efficiency.',
    whatITested: [
      'Multi-tenant SaaS Platforms',
      'Complex Authorization Flows (BOLA/IDOR)',
      'Role-Based Access Control (RBAC) Systems',
      'API Endpoints and Integrations',
      'Cloud Infrastructure (AWS IAM/IMDSv1)',
    ],
    responsibilities: [
      'Identified 114 vulnerabilities including 34 CVSS 10.0 Critical findings.',
      'Discovered a system-wide BOLA attack chain across 34 API endpoints, demonstrating cross-tenant access.',
      'Identified a complete privilege escalation path from Tenant Admin to Platform Super-Admin.',
      'Chained SSRF to AWS IMDSv1, resulting in exposure of cloud credentials.',
      'Prepared enterprise-grade VAPT reports containing PoCs, attack-chain analysis, and CVSS v4.0 scores.',
      'Automated reconnaissance and repetitive security-testing workflows using Python and Bash, reducing manual effort by approximately 40%.'
    ],
    technologies: ['Burp Suite Pro', 'Python', 'Bash', 'AWS', 'CVSS v4.0', 'MITRE ATT&CK', 'Web & API Security'],
  },
];
