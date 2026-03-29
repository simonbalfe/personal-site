'use client';

import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

import { FadeIn } from '@/components/ui/fade-in';
import { Button } from '@/components/ui/button';
import { EXTERNAL_LINKS } from '@/constants/external-links';

const socials = [
  { name: 'GitHub', href: EXTERNAL_LINKS.GITHUB, icon: FaGithub },
  { name: 'LinkedIn', href: EXTERNAL_LINKS.LINKEDIN, icon: FaLinkedin },
  { name: 'Twitter', href: EXTERNAL_LINKS.TWITTER, icon: FaXTwitter },
  { name: 'Email', href: EXTERNAL_LINKS.EMAIL, icon: Mail },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container">
        <div className="bordered-div-padding relative flex flex-col items-center gap-8 border-x border-b text-center md:gap-10 lg:gap-12 lg:!py-25">
          <FadeIn className="max-w-3xl space-y-6 md:space-y-8">
            <h1 className="font-weight-display text-4xl leading-tight tracking-tighter md:text-5xl lg:text-6xl">
              Hi, I'm Simon
            </h1>
            <p className="text-muted-foreground mx-auto max-w-[600px] text-lg leading-relaxed md:text-xl">
              Software engineer writing about production-ready AI agents, LLM-powered lead
              generation, and scalable systems that drive real revenue.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Button asChild>
              <a href="/blog">Read the Blog</a>
            </Button>
            <Button asChild variant="outline">
              <a href="#contact">Get in Touch</a>
            </Button>
          </FadeIn>

          <FadeIn delay={0.3} className="flex items-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.name}
              >
                <social.icon className="size-5" />
              </a>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
