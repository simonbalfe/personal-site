import { PlusSigns } from '@/components/icons/plus-signs';

const features = [
  {
    title: 'MVP Development',
    description:
      'I turn your concept into a working product fast. You get a polished MVP to test with real users, validate your market, and start generating traction.',
  },
  {
    title: 'Agentic LLM Workflows',
    description:
      'I build custom AI agents that automate your repetitive tasks, process documents, and make decisions. Save hours of manual work every week.',
  },
  {
    title: 'Cloud',
    description:
      'I set up and manage your cloud infrastructure so it grows with your business. No surprise bills, no downtime—just reliable systems that handle your traffic.',
  },
  {
    title: 'DevOps',
    description:
      'I automate your deployments so you can ship updates in minutes, not days. Your team pushes code, it goes live safely—every time.',
  },
  {
    title: 'System Design',
    description:
      "I design systems that won't fall over as you grow. You get a clear technical roadmap and an architecture that handles 10x your current load.",
  },
];

export function Features() {
  return (
    <section className="container">
      {/* Section Heading */}
      <div className="bordered-div-padding border border-t-0 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <h2 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-4xl">
          What I Do
        </h2>
        <p className="text-muted-foreground text-base md:text-lg">
          &gt; I build things that make a difference.
        </p>
      </div>

      <div className="border border-t-0 divide-y">
        {features.map((feature, index) => (
          <div
            key={index}
            className="px-6 py-5 md:px-8 md:py-6 lg:px-10 relative flex gap-6 md:gap-10 lg:gap-16"
          >
            {index === 0 && (
              <PlusSigns className="absolute inset-0 -mt-0.25 hidden !h-[calc(100%+2px)] -translate-x-full border-y md:block" />
            )}
            <span className="text-muted-foreground font-mono text-sm md:text-base shrink-0">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col">
              <h3 className="text-foreground font-weight-display text-xl md:text-2xl">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mt-2 max-w-prose">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
