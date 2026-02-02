import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiSwift,
  SiReact,
  SiNextdotjs,
  SiAstro,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiCloudflare,
  SiDocker,
  SiLinux,
  SiApple,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,
} from '@icons-pack/react-simple-icons';

const techStack = [
  { icon: SiTypescript, label: 'TypeScript' },
  { icon: SiJavascript, label: 'JavaScript' },
  { icon: SiPython, label: 'Python' },
  { icon: SiCplusplus, label: 'C++' },
  { icon: SiSwift, label: 'Swift' },
  { icon: SiReact, label: 'React' },
  { icon: SiNextdotjs, label: 'Next.js' },
  { icon: SiAstro, label: 'Astro' },
  { icon: SiTailwindcss, label: 'Tailwind' },
  { icon: SiNodedotjs, label: 'Node.js' },
  { icon: SiExpress, label: 'Express' },
  { icon: SiPostgresql, label: 'PostgreSQL' },
  { icon: SiCloudflare, label: 'Cloudflare' },
  { icon: SiDocker, label: 'Docker' },
  { icon: SiLinux, label: 'Linux' },
  { icon: SiApple, label: 'macOS' },
  { icon: SiGit, label: 'Git' },
  { icon: SiGithub, label: 'GitHub' },
  { icon: SiVercel, label: 'Vercel' },
  { icon: SiFigma, label: 'Figma' },
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

      <div className="bordered-div-padding border border-t-0">
        <div className="grid grid-cols-4 gap-6 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
          {techStack.map((tech) => (
            <div key={tech.label} className="flex flex-col items-center gap-2">
              <tech.icon className="size-10 md:size-12" color="default" />
              <span className="text-muted-foreground text-xs text-center">
                {tech.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
