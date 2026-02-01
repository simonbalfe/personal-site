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

      {/* Posts Grid */}
      <div className="grid grid-cols-1 divide-y border border-t-0 md:grid-cols-3 md:divide-x md:divide-y-0">
        {posts.slice(0, 3).map((post) => (
          <a
            key={post.id}
            href={`/blog/${post.slug}`}
            className="bordered-div-padding hover:bg-muted/30 transition-colors group"
          >
            <div className="space-y-3">
              <p className="text-muted-foreground text-sm">
                {post.date.toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </p>
              <h3 className="font-weight-display text-lg md:text-xl group-hover:text-secondary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-base line-clamp-2">
                {post.description}
              </p>
            </div>
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
