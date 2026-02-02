import { ChevronDown } from 'lucide-react';

const techStack = [
  { category: 'Languages', items: ['TypeScript', 'Python', 'C++', 'Swift'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'TailwindCSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL'] },
  { category: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Linux'] },
  { category: 'Platforms', items: ['macOS', 'Linux', 'iOS'] },
];

export function Compatibility() {
  return (
    <section className="container">
      {/* Section Heading */}
      <div className="bordered-div-padding border border-t-0">
        <h2 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-4xl">
          Tech Stack
        </h2>
      </div>
      
      <div className="border border-t-0 divide-y">
        {techStack.map((group) => (
          <details key={group.category} className="group">
            <summary className="px-6 py-3 md:px-8 md:py-4 lg:px-10 flex items-center justify-between cursor-pointer list-none hover:bg-muted transition-colors">
              <span className="text-muted-foreground text-sm md:text-base font-medium uppercase tracking-wide">
                {group.category}
              </span>
              <ChevronDown className="size-5 text-muted-foreground transition-transform group-open:rotate-180" />
            </summary>
            <div className="px-6 pb-4 md:px-8 md:pb-5 lg:px-10 flex flex-wrap gap-x-6 gap-y-1">
              {group.items.map((item) => (
                <span key={item} className="text-foreground text-base md:text-lg font-medium">
                  {item}
                </span>
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
