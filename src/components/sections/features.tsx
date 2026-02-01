import { Code2, Database, Globe, Rocket } from 'lucide-react';

import { PlusSigns } from '@/components/icons/plus-signs';
import { cn } from '@/lib/utils';
const features = [
  {
    icon: Code2,
    title: (
      <>
        Full Stack
        <br />
        Development
      </>
    ),
    description: 'End-to-end solutions.',
    subDescription:
      'Building complete applications with TypeScript, Next.js, and TailwindCSS on the frontend, with Python and Node.js powering the backend.',
  },
  {
    icon: Database,
    title: 'Cybersecurity',
    description: 'Secure by design.',
    subDescription:
      'Experience in threat detection and security systems at Darktrace. Building software with security-first principles and best practices.',
  },
  {
    icon: Globe,
    title: 'Systems Programming',
    description: 'Low-level expertise.',
    subDescription:
      'Proficient in C++ and Swift for high-performance applications. Deep experience with macOS and Linux system development.',
  },
  {
    icon: Rocket,
    title: 'DevOps & Cloud',
    description: 'Ship with confidence.',
    subDescription:
      'Docker containerization, AWS cloud infrastructure, and automated testing pipelines. Quality engineering experience from PlayStation.',
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
      
      <div className="grid grid-cols-1 border border-t-0 md:grid-cols-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className={cn(
              'bordered-div-padding relative space-y-8',
              index === 0 && 'md:border-r',
              index === 1 && 'border-t md:border-t-0',
              index === 2 && 'border-t md:border-r',
              index === 3 && 'border-t',
            )}
          >
            {index === 0 && (
              // Height is 100% + 2px to account for parent border not being included in the calculation
              <PlusSigns className="absolute inset-0 -mt-0.25 hidden !h-[calc(100%+2px)] -translate-x-full border-y md:block" />
            )}
            <div className="space-y-4 md:space-y-6">
              <div className="space-y-4">
                <h2 className="text-muted-foreground flex items-center gap-2 text-base leading-snug font-medium md:text-lg">
                  <feature.icon className="size-6" />
                  {feature.title}
                </h2>
                <h3 className="text-foreground font-weight-display text-xl leading-snug md:text-2xl">
                  {feature.description}
                </h3>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed md:text-lg">
                {feature.subDescription}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
