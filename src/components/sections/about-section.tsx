'use client';

import { Briefcase, User } from 'lucide-react';

import { PlusSigns } from '@/components/icons/plus-signs';
import { cn } from '@/lib/utils';

const experiences = [
  {
    icon: Briefcase,
    title: 'Work Experience',
    items: [
      {
        role: 'Senior Software Developer',
        company: 'Tech Company',
        period: '2022 - Present',
        description:
          'Building scalable web applications and leading frontend architecture decisions.',
      },
      {
        role: 'Software Developer',
        company: 'Startup Inc',
        period: '2020 - 2022',
        description:
          'Full-stack development with React, Node.js, and cloud technologies.',
      },
      {
        role: 'Junior Developer',
        company: 'Agency Co',
        period: '2018 - 2020',
        description:
          'Started my career building websites and learning best practices.',
      },
    ],
  },
];

export function AboutSection() {
  return (
    <section className="container">
      <div className="border border-t-0">
        {/* Section Header */}
        <div className="bordered-div-padding relative border-b">
          <PlusSigns className="absolute inset-0 -mt-0.25 hidden h-[calc(100%+2px)]! -translate-x-full border-y md:block" />
          <div className="space-y-4">
            <h3 className="text-muted-foreground flex items-center gap-2 text-sm leading-snug font-medium md:text-base">
              <User className="size-5" />
              About Me
            </h3>
            <h2 className="text-foreground font-weight-display leading-snug md:text-xl">
              A bit about my background
            </h2>
          </div>
          <p className="text-muted-foreground mt-6 max-w-2xl text-sm leading-relaxed md:text-base">
            I'm a software developer with a passion for building products that
            make a difference. I enjoy working across the full stack, but I'm
            particularly drawn to frontend development and creating great user
            experiences.
          </p>
        </div>

        {/* Experience Items */}
        {experiences.map((section) => (
          <div key={section.title}>
            <div className="bordered-div-padding border-b">
              <h3 className="text-muted-foreground flex items-center gap-2 text-sm font-medium md:text-base">
                <section.icon className="size-5" />
                {section.title}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3">
              {section.items.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    'bordered-div-padding space-y-3',
                    // Add right border to all except last item on desktop
                    index < section.items.length - 1 && 'md:border-r',
                    // Add bottom border to all except last item on mobile
                    index < section.items.length - 1 && 'border-b md:border-b-0',
                  )}
                >
                  <div className="space-y-1">
                    <h4 className="font-weight-display text-base md:text-lg">
                      {item.role}
                    </h4>
                    <p className="text-secondary text-sm font-medium">
                      {item.company}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {item.period}
                    </p>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
