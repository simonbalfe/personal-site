# simonbalfe.com

Personal site and blog. Notes on outbound, automation, and whatever else I happen to be building.

Built with Astro + Tailwind. Deployed on Cloudflare Pages.

## Run locally

```bash
pnpm install
pnpm dev
```

Open http://localhost:4321.

## Writing a post

Posts live in `src/content/blog/` as `.mdx`. Each one needs frontmatter:

```yaml
---
title: 'Post title'
description: 'One-line summary.'
date: '2026-05-23'
authors: [{ name: 'simon balfe' }]
tags: ['tag1', 'tag2']
coverImage: '/images/blog/whatever.webp'
---
```
