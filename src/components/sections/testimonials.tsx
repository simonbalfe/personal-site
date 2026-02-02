import { Meteors } from '@/components/magicui/meteors';

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
      <div className="bordered-div-padding relative border border-t-0">
        <div className="absolute top-0 z-10 left-full -mt-0.25 hidden h-[calc(100%+2px)] w-[50vw] overflow-hidden md:block">
          <Meteors
            number={1000}
            angle={65}
            maxDuration={20}
            minDuration={5}
            className="opacity-10 [&>div]:opacity-10"
          />
        </div>
        <h2 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-4xl">
          Experience
        </h2>
      </div>
      
      {/* Work experience - vertical timeline */}
      <div className="divide-y border border-t-0">
        {experience.map((job) => (
          <div key={job.company} className="px-6 py-4 md:px-8 md:py-5 lg:px-10 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div className="md:w-1/3">
              <p className="text-muted-foreground text-sm md:text-base">{job.period}</p>
            </div>
            <div className="space-y-1 md:w-2/3">
              <h3 className="font-weight-display text-lg md:text-xl">{job.role}</h3>
              <p className="text-muted-foreground font-medium text-sm md:text-base">{job.company}</p>
              <p className="text-muted-foreground text-sm md:text-base">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
