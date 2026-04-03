import { FaGithub } from 'react-icons/fa6';
import { ExternalLink } from 'lucide-react';
import { FadeIn, FadeInItem, FadeInStagger } from '@/components/ui/fade-in';

const projects = [
  {
    name: 'Shrillecho',
    description:
      'Distributed Spotify artist discovery tool. Input a seed artist and crawl depth, then parallel Go workers traverse Spotify\'s related artists graph, streaming progress via SSE and persisting results to Postgres.',
    tech: ['React', 'Hono', 'Go', 'PostgreSQL', 'Redis', 'Turborepo'],
    github: 'https://github.com/simonbalfe/shrillecho',
  },
  {
    name: 'Sublead',
    description:
      'Subreddit lead generation platform. Monitors Reddit for high-intent posts matching target keywords, scores them for purchase intent, and surfaces qualified leads for outreach.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'OpenAI'],
  },
  {
    name: 'Creator Crawl',
    description:
      'Social media data API and MCP server. Scrapes TikTok, Instagram, YouTube, Twitter, and Reddit for profiles, videos, comments, and transcripts. Powers agent workflows via Model Context Protocol.',
    tech: ['TypeScript', 'NestJS', 'Playwright', 'Redis', 'MCP'],
  },
  {
    name: 'Ekron AI Voice Agent',
    description:
      'Outbound communication service for Ekron with business-hours routing. AI handles calls and SMS outside hours via Twilio, with email outreach templates through Resend.',
    tech: ['NestJS', 'TypeScript', 'Twilio', 'Resend', 'Retell AI'],
    github: 'https://github.com/simonbalfe/ekron-outbound',
    live: 'https://dashboard.retellai.com/agents/agent_d8f7d6402ff67b0c1a7b2c1016',
  },
  {
    name: 'Lead Spice',
    description:
      'Full-stack lead generation platform with dashboard, marketing site, and headless CMS. Monorepo with four services handling core API, dashboard with DB schema, Astro landing page, and Sanity content management.',
    tech: ['NestJS', 'Next.js', 'Astro', 'Sanity', 'PostgreSQL', 'Drizzle'],
    github: 'https://github.com/awj-automate/lead-spice',
  },
  {
    name: 'AdGen',
    description:
      'AI-powered TV commercial script generator. Paste a product URL, select a target audience and ad framework (PAS, Hero\'s Journey), and get a production-ready 30-second scene-by-scene script with visuals and voiceover.',
    tech: ['Next.js', 'Hono', 'OpenRouter', 'Replicate', 'Prisma', 'Turborepo'],
    github: 'https://github.com/unsaid-azizov/adgen',
  },
  {
    name: 'OpenClaw Discord',
    description:
      'SaaS for deploying and managing AI-powered Discord bots with automated VPS provisioning. Control server spins up Vultr instances, configures them via Ansible, and tracks bot analytics through a web dashboard.',
    tech: ['Elysia', 'Bun', 'React', 'Vultr API', 'Ansible', 'PostgreSQL'],
    github: 'https://github.com/simonbalfe/openclaw-discord',
  },
  {
    name: 'Harmony',
    description:
      'Asynchronous HTTP web framework built from scratch in C++20 using coroutines and Linux io_uring. Implements a full async runtime with coroutine-based task scheduling and non-blocking socket I/O.',
    tech: ['C++20', 'CMake', 'io_uring', 'Docker'],
    github: 'https://github.com/simonbalfe/old-projects/tree/main/harmony',
  },
  {
    name: 'Brevo Ads SMS Automation',
    description:
      'AI-powered lead qualification via conversational SMS. When a lead submits their number through a Brevo form, an AI agent qualifies them over text, books calls for qualified leads, and follows up with inactive ones.',
    tech: ['Hono', 'React', 'Mastra', 'Twilio', 'Brevo', 'OpenRouter'],
    github: 'https://github.com/simonbalfe/brevo-ads',
  },
  {
    name: 'Virality Scanner',
    description:
      'Analyzes social media content to predict viral potential. Scores posts based on engagement patterns, hook strength, and trending signals to help creators optimize before publishing.',
    tech: ['TypeScript', 'React', 'OpenAI', 'TikTok API'],
  },
  {
    name: 'Google Maps Tracker',
    description:
      'SaaS boilerplate and starter kit for subscription-based web apps. Includes auth (email + Google OAuth), Stripe billing with webhooks, transactional email, Redis caching, and Hetzner deployment with Docker.',
    tech: ['Next.js', 'Drizzle', 'Stripe', 'Better Auth', 'Resend', 'Redis'],
    github: 'https://github.com/simonbalfe/map-tracker',
  },
  {
    name: 'Email Router',
    description:
      'Intelligent email routing system that classifies inbound emails by intent and routes them to the appropriate handler. Automates triage for support, sales, and operational emails.',
    tech: ['TypeScript', 'NestJS', 'OpenAI', 'Redis'],
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
