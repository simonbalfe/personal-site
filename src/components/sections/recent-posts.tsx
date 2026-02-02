import type { BlogPostData } from '@/lib/blog';

interface RecentPostsProps {
  posts: BlogPostData[];
}

export function RecentPosts({ posts }: RecentPostsProps) {
  return (
    <section className="container">
      {/* Section Heading */}
      <a href="/blog" className="bordered-div-padding border border-t-0 block transition-colors hover:bg-muted">
        <h2 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-4xl">
          Blog
        </h2>
      </a>

      {/* Posts List */}
      <div className="divide-y border border-t-0">
        {posts.slice(0, 5).map((post) => (
          <a
            key={post.id}
            href={`/blog/${post.slug}`}
            className="px-6 py-5 md:px-8 md:py-6 lg:px-10 flex flex-col gap-2 md:flex-row md:items-start md:justify-between transition-colors hover:bg-muted"
          >
            <div className="md:w-1/3">
              <time className="text-muted-foreground text-base md:text-lg">
                {post.date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
            </div>
            <div className="md:w-2/3">
              <h3 className="font-weight-display text-xl md:text-2xl">
                {post.title}
              </h3>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
}
