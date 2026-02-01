'use client';

import { useState } from 'react';

import { Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { BlogPostData } from '@/lib/blog';
import { cn } from '@/lib/utils';

const POSTS_PER_PAGE = 8;

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
  const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);

  // Posts are already filtered on the server when activeTag is set
  const filteredPosts = blogPosts;

  // Get currently visible posts
  const visiblePostsList = filteredPosts.slice(0, visiblePosts);

  // Determine if there are more posts to show
  const hasMorePosts = visiblePosts < filteredPosts.length;

  // Function to load more posts
  const loadMorePosts = () => {
    setIsLoading(true);

    // Simulate network delay for loading effect
    setTimeout(() => {
      setVisiblePosts((prev) =>
        Math.min(prev + POSTS_PER_PAGE, filteredPosts.length),
      );
      setIsLoading(false);
    }, 200);
  };

  return (
    <section className="container">
      <div className="border-x border-b">
        <div className="hidden p-7.5 md:block" />

        <div className="bordered-div-padding border-b">
          <h1 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-5xl">
            {activeTag ? `/${getTagSlug(activeTag)}` : 'Blog'}
          </h1>
          <div className="mt-6 block md:hidden">
            <Select
              value={activeTag || 'all'}
              onValueChange={(value) => {
                if (value === 'all') {
                  window.location.href = '/blog';
                } else {
                  window.location.href = `/blog/tag/${getTagSlug(value)}`;
                }
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue>{activeTag || 'All Posts'}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Posts</SelectItem>
                {allTags.map((tag) => (
                  <SelectItem key={tag} value={tag}>
                    {tag}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="bordered-div-padding hidden border-b md:block">
          <div className="flex flex-wrap gap-3">
            <a
              href="/blog"
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                !activeTag
                  ? 'bg-foreground text-background'
                  : 'hover:bg-muted'
              )}
            >
              All Posts
            </a>
            {allTags.map((tag) => (
              <a
                key={tag}
                href={`/blog/tag/${getTagSlug(tag)}`}
                className={cn(
                  'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                  activeTag === tag
                    ? 'bg-foreground text-background'
                    : 'hover:bg-muted'
                )}
              >
                /{getTagSlug(tag)}
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {visiblePostsList.map((post, index) => {
            // Determine if this is in the last row
            const isLastRow =
              index >=
              visiblePostsList.length -
                (visiblePostsList.length % 2 === 0 ? 2 : 1);
            // Is it the last item?
            const isLastItem = index === visiblePostsList.length - 1;
            // Is it odd and in an odd position? (left column)
            const isLeftColumn = index % 2 === 0;
            // Is it the last item in an odd-length list?
            const isLastSingleItem =
              isLastItem && visiblePostsList.length % 2 !== 0;

            return (
              <BlogPostItem
                key={index}
                post={post}
                className={cn({
                  // No bottom border for last row items
                  'border-b-0': isLastRow,
                  // No right border for items in the right column
                  'md:border-r-0': !isLeftColumn,
                  // Full width and no borders for last item in odd-length list
                  'md:col-span-2': isLastSingleItem,
                  // Add right border only to left column items
                  'md:border-r': isLeftColumn && !isLastSingleItem,
                })}
              />
            );
          })}
        </div>

        {filteredPosts.length > 0 && (
          <div className="bordered-div-padding flex flex-col items-center justify-center gap-4 border-t text-center">
            {hasMorePosts && (
              <Button
                variant="outline"
                className="rounded-full"
                size="lg"
                onClick={loadMorePosts}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Loading...
                  </>
                ) : (
                  'Show More Posts'
                )}
              </Button>
            )}
            <p className="text-muted-foreground text-sm">
              Showing {Math.min(visiblePosts, filteredPosts.length)} of{' '}
              {filteredPosts.length} posts
            </p>
          </div>
        )}

        {filteredPosts.length === 0 && (
          <div className="bordered-div-padding text-center">
            <p className="text-muted-foreground">
              No posts found for this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function BlogPostItem({
  post,
  className,
}: {
  post: BlogPostData;
  className?: string;
}) {
  // Format date: Apr 11, 2025
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div
      className={cn(
        'bordered-div-padding border-b',
        className,
      )}
    >
      <div className="">
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-2">
            {post.tags?.map((tag) => (
              <a
                key={tag}
                href={`/blog/tag/${getTagSlug(tag)}`}
                className="text-secondary hover:text-secondary/80 text-sm font-medium transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                /{getTagSlug(tag)}
              </a>
            ))}
          </div>
          <span className="text-muted-foreground text-sm">{formattedDate}</span>
        </div>
        <a
          href={`/blog/${post.slug}`}
          className="block hover:opacity-80 transition-opacity"
        >
          <h2 className="font-weight-display mt-4 text-base leading-snug tracking-tighter md:text-xl">
            {post.title}
          </h2>
          <p className="text-muted-foreground mt-6 text-sm leading-relaxed md:text-base">
            {post.description}
          </p>
        </a>
      </div>

      <div className="mt-6 flex items-center justify-between md:mt-8 lg:mt-10">
        {post.authors && post.authors.length > 0 && (
          <div className="flex items-center gap-2">
            <div className="flex -space-x-3">
              {post.authors.map(
                (author: { name: string; image?: string }) =>
                  author.image && (
                    <img
                      key={author.name}
                      src={author.image}
                      alt={author.name}
                      width={32}
                      height={32}
                      className="border-background h-8 w-8 rounded-full border-2"
                    />
                  ),
              )}
            </div>
            <span className="text-muted-foreground text-sm font-medium">
              {post.authors
                .map((author: { name: string }) => author.name)
                .join(' and ')}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
