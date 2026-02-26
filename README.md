# Friday to Monday

## Public editing permissions

The live website is read-only for visitors. There is no public write API and no in-browser editor in production.

## Content frontmatter

Content files in `content/posts/*.md` and `content/projects/*.md` support either:

- JSON frontmatter between `---` delimiters
- YAML frontmatter between `---` delimiters

The parser uses the `yaml` package for YAML frontmatter parsing.

## Owner workflow: edit logs/projects locally (preferred)

1. Pull latest changes.
2. Create or edit markdown files in:
   - `content/posts/` for logs + sprints
   - `content/projects/` for portfolio projects
3. Keep required frontmatter fields:
   - Posts: `title`, `date` (ISO), `category` (`log` or `sprint`), `summary`, `tags`
   - Projects: `title`, `date`, `status` (`shipped` or `in-progress`), `summary`, `tags`
4. Run locally:
   - `npm install`
   - `npm run dev`
5. Validate pages:
   - `/logs`, `/sprints`, `/posts`, `/portfolio`
6. Commit + push to your repo.
7. Deploy (Vercel/GitHub integration or your existing deploy process). Once deployed, updates are live.

### Post template

```md
---
title: Week 04 Consistency Notes
date: 2026-03-01
category: log
summary: Tightened publishing cadence and review checklist.
tags:
  - systems
  - writing
---

## What changed
- Added one fixed writing slot each morning.
```

### Project template

```md
---
title: Landing Page Iteration
date: 2026-03-02
status: shipped
summary: Conversion-focused redesign shipped in one sprint.
tags:
  - design
  - nextjs
links:
  demo: https://example.com
---

## Overview
Shipped a clean, high-readability landing page.
```
