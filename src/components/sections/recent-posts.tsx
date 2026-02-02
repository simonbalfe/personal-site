import type { BlogPostData } from '@/lib/blog';

interface RecentPostsProps {
  posts: BlogPostData[];
}

export function RecentPosts({ posts }: RecentPostsProps) {
  return (
    <section className="container">
      {/* Section Heading */}
      <div className="bordered-div-padding border border-t-0">
        <h2 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-4xl">
          Blog
        </h2>
      </div>

      {/* Posts List */}
      <div className="border border-t-0">
        {posts.slice(0, 5).map((post, index) => (
          <a
            key={post.id}
            href={`/blog/${post.slug}`}
            className={`px-6 py-3 md:px-8 md:py-4 lg:px-10 flex flex-col gap-1 transition-colors hover:bg-muted sm:flex-row sm:items-baseline sm:gap-8 ${
              index < Math.min(posts.length, 5) - 1 ? 'border-b' : ''
            }`}
          >
            <time className="text-muted-foreground w-36 shrink-0 text-sm">
              {post.date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
            <h3 className="font-semibold tracking-tight text-base md:text-lg">
              {post.title}
            </h3>
          </a>
        ))}
      </div>

      {/* View All Link */}
      <div className="bordered-div-padding border border-t-0">
        <a
          href="/blog"
          className="text-base md:text-lg font-medium hover:text-muted-foreground transition-colors"
        >
          View all posts →
        </a>
      </div>
    </section>
  );
}
