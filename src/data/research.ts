export interface ResearchNote {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  tags: string[];
}

export const researchNotes: ResearchNote[] = [
  {
    id: 'web-app-auth',
    title: 'Breaking Authentication: Common Patterns in Web Applications',
    excerpt: 'An analysis of frequently encountered authentication weaknesses — from predictable session tokens to broken MFA implementations — and how to test for them systematically.',
    category: 'Web Security',
    readTime: '8 min read',
    tags: ['Authentication', 'Session Management', 'OWASP'],
  },
  {
    id: 'api-security',
    title: 'API Security Testing: Beyond the Basics',
    excerpt: 'Moving past basic API fuzzing to identify broken object-level authorization, mass assignment vulnerabilities, and rate-limiting gaps in modern REST and GraphQL APIs.',
    category: 'API Security',
    readTime: '10 min read',
    tags: ['API', 'BOLA', 'GraphQL', 'REST'],
  },
  {
    id: 'recon-methodology',
    title: 'Building an Effective Reconnaissance Workflow',
    excerpt: 'How to structure reconnaissance for maximum coverage — combining passive OSINT, active scanning, subdomain enumeration, and service fingerprinting into a repeatable process.',
    category: 'Reconnaissance',
    readTime: '7 min read',
    tags: ['OSINT', 'Enumeration', 'Nmap', 'Methodology'],
  },
  {
    id: 'ad-attacks',
    title: 'Active Directory Attack Paths: From User to Domain Admin',
    excerpt: 'Exploring common AD attack chains including Kerberoasting, AS-REP Roasting, Pass-the-Hash, and DCSync — with a focus on understanding why these attacks work.',
    category: 'Active Directory',
    readTime: '12 min read',
    tags: ['Active Directory', 'Kerberos', 'Lateral Movement', 'Windows'],
  },
  {
    id: 'security-automation',
    title: 'Automating Security Testing with Python',
    excerpt: 'Practical approaches to building security testing automation — from chaining Nmap scans with custom parsers to building vulnerability correlation pipelines.',
    category: 'Automation',
    readTime: '9 min read',
    tags: ['Python', 'Automation', 'Scripting', 'CI/CD'],
  },
  {
    id: 'ctf-learning',
    title: 'What CTFs Taught Me About Real-World Security',
    excerpt: 'Lessons from TryHackMe and CTF challenges that directly translate to professional penetration testing — pattern recognition, methodology, and persistence.',
    category: 'CTF / Learning',
    readTime: '6 min read',
    tags: ['TryHackMe', 'CTF', 'Learning', 'Methodology'],
  },
];

export const labAreas = [
  {
    id: 'web-pentest',
    title: 'Web Application Pentesting',
    description: 'Hands-on testing of authentication, authorization, injection, and business logic vulnerabilities in web applications.',
    tools: ['Burp Suite', 'OWASP ZAP', 'Browser DevTools'],
    methodology: 'OWASP Testing Guide',
    icon: '🌐',
  },
  {
    id: 'api-security',
    title: 'API Security Testing',
    description: 'Assessing REST and GraphQL APIs for broken access control, injection, and data exposure vulnerabilities.',
    tools: ['Burp Suite', 'Postman', 'Custom Scripts'],
    methodology: 'OWASP API Security Top 10',
    icon: '🔌',
  },
  {
    id: 'network-recon',
    title: 'Network Reconnaissance',
    description: 'Active and passive reconnaissance including port scanning, service enumeration, and vulnerability identification.',
    tools: ['Nmap', 'Gobuster', 'Wireshark'],
    methodology: 'PTES Reconnaissance',
    icon: '📡',
  },
  {
    id: 'ad-exploitation',
    title: 'Active Directory Exploitation',
    description: 'Practicing AD attack paths including Kerberoasting, credential harvesting, and lateral movement techniques.',
    tools: ['Impacket', 'Mimikatz', 'BloodHound'],
    methodology: 'MITRE ATT&CK',
    icon: '🏢',
  },
  {
    id: 'privesc',
    title: 'Privilege Escalation',
    description: 'Linux and Windows privilege escalation through misconfigurations, SUID binaries, kernel exploits, and service abuse.',
    tools: ['LinPEAS', 'WinPEAS', 'GTFOBins'],
    methodology: 'Systematic Enumeration',
    icon: '⬆️',
  },
  {
    id: 'security-automation',
    title: 'Security Automation',
    description: 'Building Python and Bash scripts to automate repetitive security testing tasks and chain tool outputs.',
    tools: ['Python', 'Bash', 'Custom Frameworks'],
    methodology: 'Workflow Automation',
    icon: '🤖',
  },
];
