'use client';

import { Code2, Database, Globe, Layers, Server, Wrench } from 'lucide-react';

import { cn } from '@/lib/utils';

const techCategories = [
  {
    icon: Globe,
    title: 'Frontend',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Astro'],
  },
  {
    icon: Server,
    title: 'Backend',
    technologies: ['Node.js', 'Python', 'Go', 'REST APIs', 'GraphQL'],
  },
  {
    icon: Database,
    title: 'Databases',
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma'],
  },
  {
    icon: Wrench,
    title: 'Tools & DevOps',
    technologies: ['Git', 'Docker', 'AWS', 'Vercel', 'GitHub Actions'],
  },
];

export function TechStack() {
  return (
    <section className="container">
      <div className="border border-t-0">
        {/* Section Header */}
        <div className="bordered-div-padding border-b">
          <div className="space-y-4">
            <h3 className="text-muted-foreground flex items-center gap-2 text-sm leading-snug font-medium md:text-base">
              <Layers className="size-5" />
              Tech Stack
            </h3>
            <h2 className="text-foreground font-weight-display leading-snug md:text-xl">
              Technologies I work with
            </h2>
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 divide-y md:grid-cols-2 md:divide-y-0">
          {techCategories.map((category, index) => (
            <div
              key={category.title}
              className={cn(
                'bordered-div-padding space-y-4',
                index % 2 === 0 && 'md:border-r',
                index < 2 && 'md:border-b',
              )}
            >
              <h3 className="text-muted-foreground flex items-center gap-2 text-sm font-medium md:text-base">
                <category.icon className="size-5" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-muted text-foreground rounded-md px-3 py-1.5 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
