'use client';

import { Cloud, Cog, Database, Globe, Layers, Server, Code2 } from 'lucide-react';

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
    technologies: ['Node.js', 'Python', 'Go', 'GraphQL', 'REST'],
  },
  {
    icon: Database,
    title: 'Data',
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'Prisma'],
  },
  {
    icon: Cloud,
    title: 'Cloud',
    technologies: ['AWS', 'GCP', 'Cloudflare', 'Vercel'],
  },
  {
    icon: Cog,
    title: 'DevOps',
    technologies: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
  },
  {
    icon: Layers,
    title: 'Systems',
    technologies: ['Linux', 'Nginx', 'gRPC', 'Message Queues'],
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
              <Code2 className="size-5" />
              Tech Stack
            </h3>
            <h2 className="text-foreground font-weight-display leading-snug md:text-xl">
              Technologies I work with
            </h2>
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 divide-y md:grid-cols-3 md:divide-y-0">
          {techCategories.map((category, index) => (
            <div
              key={category.title}
              className={cn(
                'bordered-div-padding space-y-3',
                index % 3 !== 2 && 'md:border-r',
                index < 3 && 'md:border-b',
              )}
            >
              <h3 className="text-muted-foreground flex items-center gap-1.5 text-sm font-medium">
                <category.icon className="size-4" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {category.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-muted text-foreground rounded-md px-2.5 py-1 text-sm"
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
