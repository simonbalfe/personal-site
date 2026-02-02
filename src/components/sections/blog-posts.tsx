import { cn } from '@/lib/utils';
import type { BlogPostData } from '@/lib/blog';

function getTagSlug(tag: string): string {
  return tag.toLowerCase().replace(/\s+/g, '-');
}

export default function BlogPosts({
  blogPosts,
  allTags = [],
  activeTag,
}: {
  blogPosts: BlogPostData[];
  allTags?: string[];
  activeTag?: string;
}) {
  return (
    <section className="container">
      <div className="border-x border-b">
        <div className="hidden p-7.5 md:block" />

        <div className="bordered-div-padding border-b">
          <h1 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-5xl">
            Blog
          </h1>
        </div>

        {/* Tags filter */}
        <div className="bordered-div-padding border-b">
          <div className="flex flex-wrap gap-2">
            <a
              href="/blog"
              className={cn(
                'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
                !activeTag
                  ? 'bg-foreground text-background border-foreground'
                  : 'hover:bg-muted'
              )}
            >
              All
            </a>
            {allTags.map((tag) => (
              <a
                key={tag}
                href={`/blog/tag/${getTagSlug(tag)}`}
                className={cn(
                  'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
                  activeTag === tag
                    ? 'bg-foreground text-background border-foreground'
                    : 'hover:bg-muted'
                )}
              >
                {tag}
              </a>
            ))}
          </div>
        </div>

        {/* Blog list */}
        <div>
          {blogPosts.map((post, index) => (
            <BlogPostItem
              key={post.id}
              post={post}
              isLast={index === blogPosts.length - 1}
            />
          ))}
        </div>

        {blogPosts.length === 0 && (
          <div className="bordered-div-padding text-center">
            <p className="text-muted-foreground">No posts found.</p>
          </div>
        )}
      </div>
    </section>
  );
}

function BlogPostItem({
  post,
  isLast,
}: {
  post: BlogPostData;
  isLast: boolean;
}) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <a
      href={`/blog/${post.slug}`}
      className={cn(
        'bordered-div-padding flex flex-col gap-2 transition-colors hover:bg-muted sm:flex-row sm:items-baseline sm:gap-8',
        !isLast && 'border-b'
      )}
    >
      <time className="text-muted-foreground w-44 shrink-0 text-sm">
        {formattedDate}
      </time>
      <h2 className="font-semibold tracking-tight text-lg md:text-xl">
        {post.title}
      </h2>
    </a>
  );
}
