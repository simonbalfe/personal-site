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
  SiMongodb,
  SiRedis,
  SiCloudflare,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiLinux,
  SiGit,
  SiGithub,
  SiVercel,
  SiGooglecloud,
} from '@icons-pack/react-simple-icons';

const techCategories = [
  {
    title: 'Languages',
    items: [
      { icon: SiTypescript, label: 'TypeScript' },
      { icon: SiJavascript, label: 'JavaScript' },
      { icon: SiPython, label: 'Python' },
      { icon: SiCplusplus, label: 'C++' },
      { icon: SiSwift, label: 'Swift' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { icon: SiReact, label: 'React' },
      { icon: SiNextdotjs, label: 'Next.js' },
      { icon: SiAstro, label: 'Astro' },
      { icon: SiTailwindcss, label: 'Tailwind' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { icon: SiNodedotjs, label: 'Node.js' },
      { icon: SiExpress, label: 'Express' },
    ],
  },
  {
    title: 'Data',
    items: [
      { icon: SiPostgresql, label: 'PostgreSQL' },
      { icon: SiMongodb, label: 'MongoDB' },
      { icon: SiRedis, label: 'Redis' },
    ],
  },
  {
    title: 'Cloud',
    items: [
      { icon: SiGooglecloud, label: 'GCP' },
      { icon: SiCloudflare, label: 'Cloudflare' },
      { icon: SiVercel, label: 'Vercel' },
    ],
  },
  {
    title: 'DevOps',
    items: [
      { icon: SiDocker, label: 'Docker' },
      { icon: SiKubernetes, label: 'Kubernetes' },
      { icon: SiTerraform, label: 'Terraform' },
      { icon: SiGit, label: 'Git' },
      { icon: SiGithub, label: 'GitHub' },
      { icon: SiLinux, label: 'Linux' },
    ],
  },
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

      <div className="border border-t-0 grid grid-cols-2 lg:grid-cols-3">
        {techCategories.map((category, index) => (
          <div
            key={category.title}
            className="border-b border-r last:border-r-0 [&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
          >
            <div className="border-b px-6 py-4 md:px-8 md:py-5">
              <h3 className="text-foreground font-weight-display text-xl md:text-2xl text-center">
                {category.title}
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-6 px-6 py-5 md:px-8 md:py-6">
              {category.items.map((tech) => (
                <div key={tech.label} className="flex flex-col items-center gap-2">
                  <tech.icon className="size-8 md:size-10" color="default" />
                  <span className="text-muted-foreground text-base md:text-lg text-center">
                    {tech.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
