export interface CapabilityCategory {
  id: string;
  title: string;
  icon: string;
  items: CapabilityItem[];
}

export interface CapabilityItem {
  name: string;
  description: string;
}

export const capabilities: CapabilityCategory[] = [
  {
    id: 'offensive',
    title: 'Offensive Security',
    icon: '⚔️',
    items: [
      { name: 'VAPT', description: 'Vulnerability Assessment and Penetration Testing across web, API, and network layers.' },
      { name: 'Penetration Testing', description: 'Systematic exploitation of security weaknesses to validate real-world attack impact.' },
      { name: 'Reconnaissance', description: 'OSINT, subdomain enumeration, service fingerprinting, and attack surface mapping.' },
      { name: 'Attack Surface Analysis', description: 'Identifying and cataloging all potential entry points in target infrastructure.' },
    ],
  },
  {
    id: 'web',
    title: 'Web & API Security',
    icon: '🌐',
    items: [
      { name: 'Authentication Testing', description: 'Evaluating login flows, session management, MFA bypass, and credential handling.' },
      { name: 'Authorization Testing', description: 'Testing IDOR, BOLA, privilege escalation, and access control enforcement.' },
      { name: 'Injection Attacks', description: 'SQL Injection, XSS (Reflected, Stored, DOM), and template injection testing.' },
      { name: 'SSRF & CSRF', description: 'Server-Side Request Forgery and Cross-Site Request Forgery identification.' },
      { name: 'API Security', description: 'REST/GraphQL testing, broken object-level authorization, mass assignment.' },
    ],
  },
  {
    id: 'infrastructure',
    title: 'Infra-structure',
    icon: '🖥️',
    items: [
      { name: 'Linux Security', description: 'Privilege escalation, misconfigurations, kernel exploits, and hardening assessment.' },
      { name: 'Windows Security', description: 'Active Directory attacks, Group Policy abuse, and Windows privilege escalation.' },
      { name: 'Active Directory', description: 'Kerberoasting, AS-REP Roasting, Pass-the-Hash, DCSync, and lateral movement.' },
      { name: 'Privilege Escalation', description: 'Identifying and exploiting paths from limited to administrative access.' },
    ],
  },
  {
    id: 'automation',
    title: 'Automation & Scripting',
    icon: '⚙️',
    items: [
      { name: 'Python', description: 'Security tool development, exploit scripting, and automation pipelines.' },
      { name: 'Bash Scripting', description: 'Reconnaissance automation, enumeration scripts, and workflow orchestration.' },
      { name: 'Security Automation', description: 'Building repeatable security testing workflows and CI/CD security integration.' },
    ],
  },
  {
    id: 'tools',
    title: 'Security Tooling',
    icon: '🛠️',
    items: [
      { name: 'Burp Suite', description: 'Web application security testing, proxy interception, and vulnerability scanning.' },
      { name: 'Nmap', description: 'Network discovery, port scanning, service enumeration, and OS fingerprinting.' },
      { name: 'Metasploit', description: 'Exploitation framework for validating vulnerabilities and post-exploitation.' },
      { name: 'SQLMap', description: 'Automated SQL injection detection and database exploitation.' },
      { name: 'Gobuster', description: 'Directory and DNS brute-forcing for hidden resource discovery.' },
      { name: 'Wireshark', description: 'Network traffic analysis, packet inspection, and protocol debugging.' },
      { name: 'Hydra', description: 'Password brute-forcing and credential testing across multiple protocols.' },
    ],
  },
];
