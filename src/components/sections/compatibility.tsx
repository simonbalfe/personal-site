const techStackRow1 = [
  { category: 'Languages', items: ['TypeScript', 'Python', 'C++', 'Swift'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'TailwindCSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL'] },
];

const techStackRow2 = [
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
      
      {/* Row 1 - 3 columns */}
      <div className="grid grid-cols-1 divide-y border border-t-0 md:grid-cols-3 md:divide-x md:divide-y-0">
        {techStackRow1.map((group) => (
          <div key={group.category} className="bordered-div-padding">
            <h3 className="text-muted-foreground text-sm font-medium uppercase tracking-wide mb-4">
              {group.category}
            </h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-foreground text-lg md:text-xl font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Row 2 - 2 columns */}
      <div className="grid grid-cols-1 divide-y border border-t-0 md:grid-cols-2 md:divide-x md:divide-y-0">
        {techStackRow2.map((group) => (
          <div key={group.category} className="bordered-div-padding">
            <h3 className="text-muted-foreground text-sm font-medium uppercase tracking-wide mb-4">
              {group.category}
            </h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-foreground text-lg md:text-xl font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
