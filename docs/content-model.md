# Content Model

The template separates demo content from reusable structure.

## Blog

Blog content lives in `src/content/blog` and is registered in `src/content.config.ts`.

Required fields:

- `title`
- `description`
- `pubDate`
- `author`
- `tags`
- `featured`
- `image.src`
- `image.alt`

Optional fields:

- `updatedDate`
- `draft`
- `canonical`

## Structured data

Structured demo data lives in `src/data`.

- `creation.ts`: creation-day timeline and feature checklist.
- `navigation.ts`: header and footer navigation.
- `site.ts`: site metadata and social links.
- `widgets.ts`: widget demos and FAQ content.

## Replacing Genesis content

For a real project, replace these first:

1. `src/data/site.ts`
2. `src/data/navigation.ts`
3. `src/content/blog/*`
4. `src/data/creation.ts`
5. Page copy in `src/pages/about.astro`, `src/pages/features.astro`, and `src/pages/widgets.astro`

Avoid editing `BaseHead`, `BaseLayout`, sitemap, RSS, and Docker unless the project has a genuine architecture requirement.
