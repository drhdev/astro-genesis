# Deployment

Astro Genesis uses `@astrojs/node` in standalone mode.

## Local production preview

```bash
npm run build
npm run preview
```

## Docker

```bash
docker compose up --build
```

The image runs:

```bash
node dist/server/entry.mjs
```

Environment variables:

- `SITE`: canonical production URL used by sitemap, RSS, and canonical links.
- `HOST`: default `0.0.0.0` in Docker.
- `PORT`: default `4321`.
- `ASTRO_JSON_LOGS`: set to `1` to enable Astro 6.2 experimental JSON logging.

## CI

GitHub Actions runs:

```bash
npm ci
npm run sync
npm run check
npm run build
```

## Static-only adaptation

If a future project does not need server features, remove Actions, Sessions, Server Islands, Live Collections, and the Node adapter, then set `output: "static"`. Keep this template server-capable by default because it demonstrates the full Astro surface.
