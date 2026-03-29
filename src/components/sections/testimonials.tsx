import { FadeIn, FadeInItem, FadeInStagger } from '@/components/ui/fade-in';

const experience = [
  {
    company: 'Darktrace',
    role: 'Software Engineer',
    period: '2023 - Present',
    description: 'Building cybersecurity solutions and threat detection systems.',
  },
  {
    company: 'PlayStation',
    role: 'Software Engineer in Test',
    period: '2021 - 2023',
    description: 'Developing test automation frameworks and ensuring software quality.',
  },
];

export function Testimonials() {
  return (
    <div className="relative overflow-hidden">
    <section className="container">
      {/* Section Heading */}
      <FadeIn className="bordered-div-padding relative border border-t-0 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <h2 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-4xl">
          Experience
        </h2>
        <p className="text-muted-foreground text-base md:text-lg">
          &gt; Where I&apos;ve been shipping code.
        </p>
      </FadeIn>

      {/* Work experience - vertical timeline */}
      <FadeInStagger className="divide-y border border-t-0">
        {experience.map((job) => (
          <FadeInItem key={job.company} className="px-6 py-5 md:px-8 md:py-6 lg:px-10 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div className="md:w-1/3">
              <p className="text-muted-foreground text-base md:text-lg">{job.period}</p>
            </div>
            <div className="space-y-1 md:w-2/3">
              <h3 className="font-weight-display text-xl md:text-2xl">{job.role}</h3>
              <p className="text-muted-foreground font-medium text-base md:text-lg">{job.company}</p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{job.description}</p>
            </div>
          </FadeInItem>
        ))}
      </FadeInStagger>
    </section>
    </div>
  );
}
