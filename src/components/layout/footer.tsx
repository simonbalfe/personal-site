import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

import { EXTERNAL_LINKS } from '@/constants/external-links';

const links = [
  {
    name: 'GitHub',
    href: EXTERNAL_LINKS.GITHUB,
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    href: EXTERNAL_LINKS.LINKEDIN,
    icon: FaLinkedin,
  },
  {
    name: 'Twitter',
    href: EXTERNAL_LINKS.TWITTER,
    icon: FaXTwitter,
  },
  {
    name: 'Email',
    href: EXTERNAL_LINKS.EMAIL,
    icon: Mail,
  },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-background text-foreground">
      <div className="container">
        {/* Main footer content */}
        <div className="bordered-div-padding border border-t-0">
          <h2 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-4xl">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground mt-4 max-w-[600px] text-base md:text-lg">
            I take on freelance and agency work—specialising in MVPs and AI
            automations. Get in touch.
          </p>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 divide-x divide-y border border-t-0 md:grid-cols-4 md:divide-y-0">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bordered-div-padding hover:bg-muted/30 flex items-center gap-3 transition-colors"
            >
              <link.icon className="size-5" />
              <span className="font-medium text-base md:text-lg">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="bordered-div-padding text-muted-foreground border border-t-0 text-center text-sm">
          © {new Date().getFullYear()} Simon Balfe
        </div>
      </div>
    </footer>
  );
};

export default Footer;
