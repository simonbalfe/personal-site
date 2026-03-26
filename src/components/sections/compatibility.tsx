import { FadeIn, FadeInItem, FadeInStagger } from '@/components/ui/fade-in';

const techCategories = [
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'C++', 'Swift'],
  },
  {
    title: 'AI / LLM',
    items: ['Claude', 'OpenAI', 'LangChain', 'RAG', 'Vector DBs', 'Agent Frameworks'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Astro', 'Tailwind'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'NestJS'],
  },
  {
    title: 'Data',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Pinecone'],
  },
  {
    title: 'Cloud',
    items: ['GCP', 'Cloudflare', 'Vercel'],
  },
  {
    title: 'DevOps',
    items: ['Docker', 'Kubernetes', 'Terraform', 'Git', 'GitHub', 'Linux'],
  },
  {
    title: 'GTM',
    items: ['AI Prospecting', 'Automated Outreach', 'SEO', 'Content Strategy'],
  },
];

export function Compatibility() {
  return (
    <section className="container">
      {/* Section Heading */}
      <FadeIn className="bordered-div-padding border border-t-0 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <h2 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-4xl">
          Tech Stack
        </h2>
        <p className="text-muted-foreground text-base md:text-lg">
          &gt; Tools I use to get things done.
        </p>
      </FadeIn>

      <FadeInStagger className="border border-t-0 divide-y">
        {techCategories.map((category) => (
          <FadeInItem
            key={category.title}
            className="px-6 py-4 md:px-8 md:py-5 flex flex-col gap-1 md:flex-row md:items-center md:gap-4"
          >
            <h3 className="text-foreground font-weight-display text-base md:text-lg shrink-0 md:w-28">
              {category.title}
            </h3>
            <p className="text-muted-foreground text-base md:text-lg">
              {category.items.join(' · ')}
            </p>
          </FadeInItem>
        ))}
      </FadeInStagger>
    </section>
  );
}
