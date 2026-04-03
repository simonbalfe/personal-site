import { FaGithub } from 'react-icons/fa6';
import { ExternalLink } from 'lucide-react';
import { FadeIn, FadeInItem, FadeInStagger } from '@/components/ui/fade-in';

const projects = [
  {
    name: 'Shrillecho',
    description:
      'Discover hidden artists on Spotify in seconds. Pick a seed artist, set how deep you want to go, and watch as it maps out an entire network of related talent you\'d never find manually.',
    tech: ['React', 'Hono', 'Go', 'PostgreSQL', 'Redis', 'Turborepo'],
    github: 'https://github.com/simonbalfe/shrillecho',
  },
  {
    name: 'Sublead',
    description:
      'Turn Reddit into a lead generation machine. Automatically finds people actively looking for solutions like yours, scores them by purchase intent, and hands you a list of warm leads ready for outreach.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'OpenAI'],
  },
  {
    name: 'Creator Crawl',
    description:
      'One API to pull data from TikTok, Instagram, YouTube, Twitter, and Reddit. Profiles, videos, comments, transcripts. Built to plug directly into AI agent workflows so your automations can act on real social data.',
    tech: ['TypeScript', 'NestJS', 'Playwright', 'Redis', 'MCP'],
  },
  {
    name: 'Ekron AI Voice Agent',
    description:
      'Never miss a lead outside business hours. An AI voice agent picks up calls and texts when the team is offline, qualifies prospects in real time, and sends follow-up emails automatically.',
    tech: ['NestJS', 'TypeScript', 'Twilio', 'Resend', 'Retell AI'],
    github: 'https://github.com/simonbalfe/ekron-outbound',
    live: 'https://dashboard.retellai.com/agents/agent_d8f7d6402ff67b0c1a7b2c1016',
  },
  {
    name: 'Lead Spice',
    description:
      'End-to-end lead generation platform with a real-time dashboard, marketing site, and content management. Captures, qualifies, and organizes leads in one place so sales teams can focus on closing.',
    tech: ['NestJS', 'Next.js', 'Astro', 'Sanity', 'PostgreSQL', 'Drizzle'],
    github: 'https://github.com/awj-automate/lead-spice',
  },
  {
    name: 'AdGen',
    description:
      'Generate TV commercial scripts in minutes, not weeks. Paste a product URL, pick your audience and ad framework, and get a production-ready 30-second script with scene breakdowns, visuals, and voiceover direction.',
    tech: ['Next.js', 'Hono', 'OpenRouter', 'Replicate', 'Prisma', 'Turborepo'],
    github: 'https://github.com/unsaid-azizov/adgen',
  },
  {
    name: 'OpenClaw Discord',
    description:
      'Deploy and manage AI-powered Discord bots without touching a server. One click spins up a fully configured VPS, and a dashboard tracks every bot\'s performance and usage in real time.',
    tech: ['Elysia', 'Bun', 'React', 'Vultr API', 'Ansible', 'PostgreSQL'],
    github: 'https://github.com/simonbalfe/openclaw-discord',
  },
  {
    name: 'Harmony',
    description:
      'A high-performance HTTP framework built from scratch in C++20. Handles thousands of concurrent connections with zero blocking, using coroutines and Linux\'s fastest I/O engine under the hood.',
    tech: ['C++20', 'CMake', 'io_uring', 'Docker'],
    github: 'https://github.com/simonbalfe/old-projects/tree/main/harmony',
  },
  {
    name: 'Brevo Ads SMS Automation',
    description:
      'Qualify leads on autopilot over SMS. When someone fills out a form, an AI agent texts them back, asks the right questions, books calls for hot leads, and follows up with the ones that go cold.',
    tech: ['Hono', 'React', 'Mastra', 'Twilio', 'Brevo', 'OpenRouter'],
    github: 'https://github.com/simonbalfe/brevo-ads',
  },
  {
    name: 'Virality Scanner',
    description:
      'Know if your content will pop before you post it. Scores hooks, engagement patterns, and trending signals so creators can tweak and optimize for maximum reach before hitting publish.',
    tech: ['TypeScript', 'React', 'OpenAI', 'TikTok API'],
  },
  {
    name: 'Google Maps Tracker',
    description:
      'Ship subscription SaaS faster. A production-ready starter kit with auth, Stripe billing, transactional email, and one-command deployment already wired up so you can skip the boilerplate and start building.',
    tech: ['Next.js', 'Drizzle', 'Stripe', 'Better Auth', 'Resend', 'Redis'],
    github: 'https://github.com/simonbalfe/map-tracker',
  },
  {
    name: 'Email Router',
    description:
      'Stop manually sorting emails. AI reads every inbound message, figures out if it\'s support, sales, or ops, and routes it to the right person instantly. No rules to maintain, no emails slipping through the cracks.',
    tech: ['TypeScript', 'NestJS', 'OpenAI', 'Redis'],
    github: 'https://github.com/simonbalfe/email-router',
  },
  {
    name: 'AI Setter',
    description:
      'AI sales agents that live inside WhatsApp, Telegram, and ManyChat. Each agent gets its own personality, tools, and platform setup. Handles conversations, qualifies leads, and books calls while you sleep.',
    tech: ['TypeScript', 'Bun', 'Hono', 'Mastra', 'BullMQ', 'PostgreSQL', 'Redis'],
    github: 'https://github.com/unsaid-azizov/ai-setter',
  },
];

export function Projects() {
  return (
    <section id="projects" className="container">
      {/* Section Heading */}
      <FadeIn className="bordered-div-padding border border-t-0 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <h2 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-4xl">
          Projects
        </h2>
        <p className="text-muted-foreground text-base md:text-lg">
          &gt; Things I&apos;ve built and shipped.
        </p>
      </FadeIn>

      {/* Projects List */}
      <FadeInStagger className="divide-y border border-t-0">
        {projects.map((project, index) => (
          <FadeInItem
            key={project.name}
            className="px-6 py-5 md:px-8 md:py-6 lg:px-10 flex flex-col gap-4"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex gap-6 md:gap-10 lg:gap-16 flex-1">
                <span className="text-muted-foreground font-mono text-sm md:text-base shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="font-weight-display text-xl md:text-2xl">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-prose">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-muted-foreground font-mono text-xs md:text-sm border rounded px-2 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 ml-0 md:ml-4 pl-12 md:pl-0 shrink-0">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`${project.name} source code`}
                  >
                    <FaGithub className="size-5" />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`${project.name} live site`}
                  >
                    <ExternalLink className="size-5" />
                  </a>
                )}
              </div>
            </div>
          </FadeInItem>
        ))}
      </FadeInStagger>
    </section>
  );
}
