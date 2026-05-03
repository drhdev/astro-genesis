# Architecture

Astro Genesis uses one repository for both static and dynamic demonstrations.

## Rendering model

- `output: "server"` keeps Astro Actions, Sessions, Server Islands, Live Collections, and SSR pages available.
- Static pages explicitly export `prerender = true`.
- Dynamic routes stay server-rendered by omitting prerender or exporting `prerender = false`.
- The Node adapter builds a standalone server entry that is simple to run in Docker.

## Boundaries

- `src/content`: replaceable editorial content.
- `src/data`: replaceable structured content, navigation, and widget data.
- `src/components`: reusable visual and behavioral building blocks.
- `src/layouts`: page shells and metadata wiring.
- `src/lib`: framework-adjacent helpers for content queries and JSON-LD.
- `src/pages`: routes and rendering ownership.
- `docs`: repository maintenance knowledge.

## Design direction

The design follows AstroWind principles: content-first pages, strong SEO, dark mode, responsive sections, reusable widgets, minimal client JavaScript, and clear deployment paths. It is not a clone; the implementation is updated around Astro 6, Tailwind 4, server islands, actions, sessions, and live content.

## Dynamic features

- `/dynamic` demonstrates request headers, middleware request IDs, sessions, and server islands.
- `/dynamic/live` demonstrates Astro 6 Live Content Collections.
- `/contact` demonstrates Actions with validation and session writes.
- `/api/creation-day.json` demonstrates runtime JSON.
- `/api/search.json` demonstrates prerendered JSON from content collections.
