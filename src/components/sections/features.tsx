import { Bot, Cloud, Container, Layers, Rocket } from 'lucide-react';

import { PlusSigns } from '@/components/icons/plus-signs';
import { cn } from '@/lib/utils';
const features = [
  {
    icon: Rocket,
    title: 'MVP Development',
    description: 'Your idea, launched.',
    subDescription:
      'I turn your concept into a working product fast. You get a polished MVP to test with real users, validate your market, and start generating traction.',
  },
  {
    icon: Bot,
    title: 'Agentic LLM Workflows',
    description: 'AI that works for you.',
    subDescription:
      'I build custom AI agents that automate your repetitive tasks, process documents, and make decisions. Save hours of manual work every week.',
  },
  {
    icon: Cloud,
    title: 'Cloud',
    description: 'Infrastructure that scales.',
    subDescription:
      'I set up and manage your cloud infrastructure so it grows with your business. No surprise bills, no downtime—just reliable systems that handle your traffic.',
  },
  {
    icon: Container,
    title: 'DevOps',
    description: 'Deploy with confidence.',
    subDescription:
      'I automate your deployments so you can ship updates in minutes, not days. Your team pushes code, it goes live safely—every time.',
  },
  {
    icon: Layers,
    title: 'System Design',
    description: 'Architecture that lasts.',
    subDescription:
      'I design systems that won\'t fall over as you grow. You get a clear technical roadmap and an architecture that handles 10x your current load.',
  },
];

export function Features() {
  return (
    <section className="container">
      {/* Section Heading */}
      <div className="bordered-div-padding border border-t-0">
        <h2 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-4xl">
          What I Do
        </h2>
      </div>
      
      <div className="border border-t-0 divide-y">
        {features.map((feature, index) => (
          <div
            key={index}
            className="px-6 py-4 md:px-8 md:py-5 lg:px-10 relative flex flex-col gap-2 md:flex-row md:items-start md:gap-8"
          >
            {index === 0 && (
              <PlusSigns className="absolute inset-0 -mt-0.25 hidden !h-[calc(100%+2px)] -translate-x-full border-y md:block" />
            )}
            <div className="flex items-center gap-2 md:w-1/3 shrink-0">
              <feature.icon className="size-5 text-muted-foreground" />
              <h2 className="text-muted-foreground text-sm md:text-base font-medium">
                {feature.title}
              </h2>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-foreground font-weight-display text-lg md:text-xl mb-1">
                {feature.description}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                {feature.subDescription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
