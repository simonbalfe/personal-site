import { FadeIn, FadeInItem, FadeInStagger } from '@/components/ui/fade-in';

const features = [
  {
    title: 'AI Lead Generation',
    description:
      'I build AI systems that find, qualify, and engage leads on autopilot. Automated prospecting, personalized outreach at scale, and enrichment pipelines that fill your CRM with warm leads.',
  },
  {
    title: 'Production-Ready AI Agents',
    description:
      'I ship agentic workflows that run unsupervised in production. Reliable tool use, error recovery, observability, and human-in-the-loop patterns built for real workloads.',
  },
  {
    title: 'LLM-Powered Automation',
    description:
      'I replace manual processes with LLM pipelines that actually work. Document processing, content generation, data extraction, and decision-making systems with eval frameworks to keep them honest.',
  },
  {
    title: 'System Design',
    description:
      "I design systems that won't fall over as you grow. Clear technical roadmaps and architectures that handle 10x your current load.",
  },
  {
    title: 'Cloud & DevOps',
    description:
      'I set up infrastructure and CI/CD pipelines so your team ships fast without breaking things. Automated deployments, observability, and cost-efficient cloud setups.',
  },
  {
    title: 'MVP Development',
    description:
      'I turn your concept into a working product fast. A polished MVP to test with real users, validate your market, and start generating traction.',
  },
];

export function Features() {
  return (
    <section className="container">
      {/* Section Heading */}
      <FadeIn className="bordered-div-padding border border-t-0 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <h2 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-4xl">
          What I Do
        </h2>
        <p className="text-muted-foreground text-base md:text-lg">
          &gt; I build things that make a difference.
        </p>
      </FadeIn>

      <FadeInStagger className="border border-t-0 divide-y">
        {features.map((feature, index) => (
          <FadeInItem
            key={index}
            className="px-6 py-5 md:px-8 md:py-6 lg:px-10 relative flex gap-6 md:gap-10 lg:gap-16"
          >
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
          </FadeInItem>
        ))}
      </FadeInStagger>
    </section>
  );
}
