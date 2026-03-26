import { FaGithub } from 'react-icons/fa6';
import { ExternalLink } from 'lucide-react';
import { FadeIn, FadeInItem, FadeInStagger } from '@/components/ui/fade-in';

const projects = [
  {
    name: 'Cold Email AI',
    description:
      'SaaS platform that generates hyper-personalized cold emails using AI. Scrapes prospect data, enriches leads, and crafts outreach sequences that convert.',
    tech: ['Next.js', 'TypeScript', 'OpenAI', 'PostgreSQL', 'Resend'],
    github: 'https://github.com/simonbalfe/cold-email-ai',
    live: 'https://coldemail-ai.com',
  },
  {
    name: 'AI Voice Agent',
    description:
      'Conversational voice agent for automated phone calls. Handles inbound and outbound calls with natural speech, real-time transcription, and tool calling.',
    tech: ['Python', 'FastAPI', 'Twilio', 'Deepgram', 'OpenAI', 'WebSockets'],
    github: 'https://github.com/simonbalfe/ai-voice-agent',
    live: 'https://voiceagent.dev',
  },
  {
    name: 'AI Chatbot',
    description:
      'Custom chatbot builder that lets businesses deploy AI assistants trained on their own data. RAG pipeline with document ingestion and real-time streaming.',
    tech: ['React', 'Node.js', 'LangChain', 'Pinecone', 'Redis'],
    github: 'https://github.com/simonbalfe/ai-chatbot',
    live: 'https://aichatbot.tools',
  },
  {
    name: 'AI Social Scraper',
    description:
      'Scrapes and analyzes social media profiles, posts, and engagement data across platforms. Exports structured datasets for marketing and research.',
    tech: ['TypeScript', 'Playwright', 'NestJS', 'MongoDB', 'Bull'],
    github: 'https://github.com/simonbalfe/social-scraper',
    live: 'https://socialscraper.io',
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
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={`${project.name} source code`}
                >
                  <FaGithub className="size-5" />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={`${project.name} live site`}
                >
                  <ExternalLink className="size-5" />
                </a>
              </div>
            </div>
          </FadeInItem>
        ))}
      </FadeInStagger>
    </section>
  );
}
