# Astro Genesis

Astro Genesis is a production-ready Astro 6 template for content-driven websites that need both static pages and dynamic server features. The demo content uses the Genesis creation narrative to show routing, MDX, content collections, live collections, server islands, Actions, Sessions, SEO, dark mode, menus, widgets, RSS, sitemap generation, Docker, and GitHub automation.

## Current baseline

- Astro: `^6.2.0`
- Tailwind CSS: `4.1.17` through `@tailwindcss/vite`
- Rendering: `output: "server"` with explicit `prerender = true` for static routes
- Adapter: `@astrojs/node` standalone for Docker
- Content: Astro Content Collections with MDX
- Dynamic features: Live Content Collections, Server Islands, Actions, Sessions, Middleware, API routes

## Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

## Production build

```bash
npm run check
npm run build
npm run preview
```

## Docker

```bash
docker compose up --build
```

The container serves the standalone Node output on `http://localhost:4321`.

## Project structure

```text
src/
  actions/          Astro Actions
  components/       Layout, SEO, UI, widgets, blog components
  content/          Replaceable MDX demo content
  data/             Replaceable structured demo data and navigation
  layouts/          Base and Markdown layouts
  lib/              Content and SEO helpers
  pages/            Route ownership and rendering mode
  styles/           Tailwind 4 entry and global CSS
docs/               Repository maintenance documentation
```

## Documentation

- `docs/astro-6-checklist.md`
- `docs/architecture.md`
- `docs/content-model.md`
- `docs/deployment.md`
- `docs/updating.md`

## Updating

Use the automated Astro upgrade flow first:

```bash
npm run upgrade
npm run check
npm run build
```

Dependabot groups Astro and Tailwind updates so framework changes can be reviewed in focused pull requests.
