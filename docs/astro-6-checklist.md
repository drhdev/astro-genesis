# Astro 6.2 Feature Checklist

Checked on 2026-05-03 against official Astro documentation and release notes.

## Adopted in this template

- Astro 6.2 baseline with `astro@^6.2.0`.
- Redesigned Astro 6 dev/build runtime model by keeping one server-capable project and using explicit prerendering for static pages.
- `@astrojs/node` standalone adapter for on-demand routes, server islands, actions, sessions, and Docker.
- Built-in Fonts API with `fontProviders.fontsource()` and `<Font />` preload.
- Stable Content Security Policy API with hashed Astro-managed scripts and styles.
- Tailwind CSS 4.1 through the Vite plugin path, not deprecated `@astrojs/tailwind`. The plugin is pinned to `4.1.17` until Astro's Vite 8 path is the stable default.
- Content Collections through `src/content.config.ts`, `glob()`, Zod schemas, and MDX.
- Live Content Collections through `src/live.config.ts` and `/dynamic/live`.
- Server islands with `server:defer`.
- Actions with form validation and typed inputs.
- Sessions with typed `App.SessionData` and middleware updates.
- Middleware for request IDs and security headers.
- RSS feed through `@astrojs/rss`.
- Sitemap through `@astrojs/sitemap` and dynamic robots generation.
- Prefetch through Astro configuration; client-side view transitions are documented but not enabled by default because this template prioritizes Astro CSP.
- Image defaults with responsive styles, constrained layout, object-fit, and breakpoints.
- Astro 6.2 SVG optimizer via `experimental.svgOptimizer`.
- Astro 6.2 optional JSON logger via `ASTRO_JSON_LOGS=1`.
- Astro 6.2 `compressHTML: "jsx"` option.
- `server.allowedHosts` configured for local and Codespaces-style preview hosts.
- CSP is disabled in `astro dev` because Astro 6 CSP is not supported with the Vite dev server. Production builds and previews keep CSP enabled.

## Deliberately not defaulted

- Experimental route caching and queued rendering are documented but not enabled by default. They should be adopted per hosting platform and traffic profile.
- Client-side view transitions are not enabled by default because Astro CSP is part of the production baseline. Enable `<ClientRouter />` only after validating your CSP requirements.
- Astro DB and authentication are not included because they would impose product choices on a general-purpose template.
- Framework islands with React/Vue/Svelte are not included because the template demonstrates Astro-native behavior with minimal JavaScript. Add a renderer only when the project needs one.

## Primary sources

- Astro 6.2 release notes: https://astro.build/blog/astro-620/
- Astro 6.1 release notes: https://astro.build/blog/astro-610/
- Astro 6.0 release notes: https://astro.build/blog/astro-6/
- Astro configuration reference: https://docs.astro.build/en/reference/configuration-reference/
- Astro Content Collections: https://docs.astro.build/en/guides/content-collections/
- Astro Content Loader API: https://docs.astro.build/en/reference/content-loader-reference/
- Astro Server Islands: https://docs.astro.build/en/guides/server-islands/
- Astro Actions: https://docs.astro.build/en/guides/actions/
- Astro Sessions: https://docs.astro.build/en/guides/sessions/
- Astro Sitemap integration: https://docs.astro.build/en/guides/integrations-guide/sitemap/
- Astro RSS recipe: https://docs.astro.build/en/recipes/rss/
- Tailwind in Astro: https://docs.astro.build/en/guides/styling/#tailwind
- AstroWind reference: https://github.com/arthelokyo/astrowind
