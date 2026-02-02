'use client';

import { FaGithub } from 'react-icons/fa6';

import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container">
        <div className="bordered-div-padding relative flex flex-col items-center gap-8 border-x border-b text-center md:gap-10 lg:gap-12 lg:!py-25">
          {/* Main Heading */}
          <div className="max-w-3xl space-y-6 md:space-y-8">
            <h1 className="font-weight-display text-4xl leading-tight tracking-tighter md:text-5xl lg:text-6xl">
              Hi, I'm Simon
            </h1>
            <p className="text-muted-foreground mx-auto max-w-[600px] text-lg leading-relaxed md:text-xl">
              Software engineer writing about building scalable systems, clean architecture, and
              lessons from the startup trenches.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Button asChild>
              <a href="/blog">Read the Blog</a>
            </Button>
            <Button asChild variant="outline">
              <a href="https://github.com/simonbalfe" target="_blank" rel="noopener noreferrer">
                <FaGithub className="size-5" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
