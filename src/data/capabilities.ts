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
      { name: 'VAPT', description: 'Vulnerability Assessment and Penetration Testing.' },
      { name: 'Web Application Pentesting', description: 'Testing modern web apps for security flaws.' },
      { name: 'API Security', description: 'Testing REST/GraphQL API authorization and logic.' },
      { name: 'OWASP Top 10', description: 'Identifying standard critical web vulnerabilities.' },
      { name: 'BOLA/IDOR', description: 'Exploiting Broken Object Level Authorization.' },
      { name: 'SSRF', description: 'Server-Side Request Forgery exploitation.' },
      { name: 'XSS', description: 'Cross-Site Scripting (Stored, Reflected, DOM).' },
      { name: 'Authentication Bypass', description: 'Circumventing login and session mechanisms.' },
      { name: 'Privilege Escalation', description: 'Vertical and horizontal privilege escalation.' },
      { name: 'Business Logic Testing', description: 'Exploiting application-specific logic flaws.' },
      { name: 'JWT Security', description: 'Testing JSON Web Token implementations.' },
      { name: 'CORS', description: 'Exploiting arbitrary-origin CORS with credentials.' },
      { name: 'Host Header Attacks', description: 'Password reset poisoning and routing bypasses.' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: '🛠️',
    items: [
      { name: 'Burp Suite Pro', description: 'Web application security testing framework.' },
      { name: 'Nmap', description: 'Network discovery and security auditing.' },
      { name: 'SQLMap', description: 'Automated SQL injection detection.' },
      { name: 'Gobuster', description: 'Directory and DNS brute-forcing.' },
      { name: 'Metasploit', description: 'Penetration testing framework.' },
      { name: 'Wireshark', description: 'Network protocol analyzer.' },
      { name: 'Netcat', description: 'Network utility for reading/writing connections.' },
      { name: 'Hydra', description: 'Network logon cracker.' },
      { name: 'Shodan', description: 'Search engine for Internet-connected devices.' },
      { name: 'TheHarvester', description: 'OSINT gathering tool.' },
      { name: 'Maltego', description: 'Open-source intelligence and forensics.' },
    ],
  },
  {
    id: 'programming',
    title: 'Programming',
    icon: '💻',
    items: [
      { name: 'Python', description: 'Security automation and tool development.' },
      { name: 'Bash/Shell', description: 'Linux automation and reconnaissance scripting.' },
      { name: 'C++', description: 'Systems programming and memory analysis.' },
      { name: 'SQL', description: 'Database querying and injection payload crafting.' },
    ],
  },
  {
    id: 'defensive',
    title: 'Defensive Security',
    icon: '🛡️',
    items: [
      { name: 'SOC L1', description: 'Security Operations Center tier 1 analysis.' },
      { name: 'SIEM', description: 'Security Information and Event Management.' },
      { name: 'Log Analysis', description: 'Investigating logs for anomalous behavior.' },
      { name: 'Alert Investigation', description: 'Triage and verification of security alerts.' },
      { name: 'Threat Detection', description: 'Identifying malicious activity indicators.' },
      { name: 'Incident Response', description: 'Handling and recovering from security breaches.' },
      { name: 'Security Monitoring', description: 'Continuous surveillance of networks and systems.' },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks',
    icon: '📋',
    items: [
      { name: 'CVSS v4.0', description: 'Common Vulnerability Scoring System.' },
      { name: 'CWE', description: 'Common Weakness Enumeration.' },
      { name: 'MITRE ATT&CK', description: 'Adversary tactics and techniques.' },
      { name: 'OWASP', description: 'Open Worldwide Application Security Project.' },
      { name: 'SOC 2', description: 'Service Organization Control 2.' },
      { name: 'ISO 27001', description: 'Information security management.' },
      { name: 'GDPR', description: 'General Data Protection Regulation.' },
      { name: 'PCI DSS', description: 'Payment Card Industry Data Security Standard.' },
    ],
  },
];
