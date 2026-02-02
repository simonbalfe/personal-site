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
    <section className="container flex flex-1 flex-col">
      <div className="hidden p-7.5 md:block border-x" />

      <div className="bordered-div-padding border border-t-0">
        <h1 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-5xl">
          Blog
        </h1>
      </div>

      {/* Tags filter */}
      <div className="bordered-div-padding border border-t-0">
        <div className="flex flex-wrap gap-2">
          <a
            href="/blog"
            className={cn(
              'border px-4 py-1.5 text-sm font-medium transition-colors',
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
                'border px-4 py-1.5 text-sm font-medium transition-colors',
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
      {blogPosts.length > 0 ? (
        <div className="divide-y border-x border-b">
          {blogPosts.map((post) => (
            <BlogPostItem
              key={post.id}
              post={post}
            />
          ))}
        </div>
      ) : (
        <div className="bordered-div-padding text-center border-x border-b">
          <p className="text-muted-foreground">No posts found.</p>
        </div>
      )}

      {/* Spacer to extend vertical borders to footer */}
      <div className="flex-1 border-x" />
    </section>
  );
}

function BlogPostItem({
  post,
}: {
  post: BlogPostData;
}) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <a
      href={`/blog/${post.slug}`}
      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 flex flex-col gap-2 md:flex-row md:items-start md:justify-between transition-colors hover:bg-muted"
    >
      <div className="md:w-1/3">
        <time className="text-muted-foreground text-sm md:text-base">
          {formattedDate}
        </time>
      </div>
      <div className="md:w-2/3">
        <h2 className="font-weight-display text-lg md:text-xl">
          {post.title}
        </h2>
      </div>
    </a>
  );
}
