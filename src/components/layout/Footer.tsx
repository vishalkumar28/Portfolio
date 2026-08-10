'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/vishalkumar28', icon: 'GH' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vishal-kumar28', icon: 'LI' },
    { label: 'TryHackMe', href: 'https://tryhackme.com/p/IIRevenII', icon: 'THM' },
    { label: 'Email', href: 'mailto:vishalkumar280404@gmail.com', icon: '✉' },
  ];

  return (
    <footer className="border-t border-border-subtle bg-bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-display font-bold text-lg text-text-primary">
              Vishal Kumar<span className="text-accent">.</span>
            </span>
            <span className="text-sm text-text-muted">
              Offensive Security / Penetration Testing / Cybersecurity Trainer
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-text-muted hover:text-accent hover:bg-surface-hover transition-all text-xs font-mono font-bold"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            © {currentYear} Vishal Kumar. Designed, Built & Secured with purpose.
          </p>
          <p className="text-xs text-text-muted font-mono">
            RECON → ANALYZE → EXPLOIT → UNDERSTAND → SECURE
          </p>
        </div>
      </div>
    </footer>
  );
}
