import {
  SiReact,
  SiOpenai,
  SiCloudflare,
  SiDocker,
  SiApachekafka,
} from '@icons-pack/react-simple-icons';

import { PlusSigns } from '@/components/icons/plus-signs';

const features = [
  {
    icon: SiReact,
    title: 'MVP Development',
    description:
      'I turn your concept into a working product fast. You get a polished MVP to test with real users, validate your market, and start generating traction.',
  },
  {
    icon: SiOpenai,
    title: 'Agentic LLM Workflows',
    description:
      'I build custom AI agents that automate your repetitive tasks, process documents, and make decisions. Save hours of manual work every week.',
  },
  {
    icon: SiCloudflare,
    title: 'Cloud',
    description:
      'I set up and manage your cloud infrastructure so it grows with your business. No surprise bills, no downtime—just reliable systems that handle your traffic.',
  },
  {
    icon: SiDocker,
    title: 'DevOps',
    description:
      'I automate your deployments so you can ship updates in minutes, not days. Your team pushes code, it goes live safely—every time.',
  },
  {
    icon: SiApachekafka,
    title: 'System Design',
    description:
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
            className="px-6 py-5 md:px-8 md:py-6 lg:px-10 relative flex flex-col"
          >
            {index === 0 && (
              <PlusSigns className="absolute inset-0 -mt-0.25 hidden !h-[calc(100%+2px)] -translate-x-full border-y md:block" />
            )}
            <div className="flex items-center gap-2.5">
              <feature.icon className="size-6" color="default" />
              <h3 className="text-foreground font-weight-display text-xl md:text-2xl">
                {feature.title}
              </h3>
            </div>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mt-2 max-w-prose">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
