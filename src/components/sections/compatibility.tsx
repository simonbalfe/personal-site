const techCategories = [
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'C++', 'Swift'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Astro', 'Tailwind'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express'],
  },
  {
    title: 'Data',
    items: ['PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Cloud',
    items: ['GCP', 'Cloudflare', 'Vercel'],
  },
  {
    title: 'DevOps',
    items: ['Docker', 'Kubernetes', 'Terraform', 'Git', 'GitHub', 'Linux'],
  },
];

export function Compatibility() {
  return (
    <section className="container">
      {/* Section Heading */}
      <div className="bordered-div-padding border border-t-0 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <h2 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-4xl">
          Tech Stack
        </h2>
        <p className="text-muted-foreground text-base md:text-lg">
          &gt; Tools I use to get things done.
        </p>
      </div>

      <div className="border border-t-0 divide-y">
        {techCategories.map((category) => (
          <div
            key={category.title}
            className="px-6 py-4 md:px-8 md:py-5 flex flex-col gap-1 md:flex-row md:items-center md:gap-4"
          >
            <h3 className="text-foreground font-weight-display text-base md:text-lg shrink-0 md:w-28">
              {category.title}
            </h3>
            <p className="text-muted-foreground text-base md:text-lg">
              {category.items.join(' · ')}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
