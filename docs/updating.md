# Updating

## Routine update flow

```bash
npm run upgrade
npm install
npm run check
npm run build
```

Review Astro release notes before merging framework upgrades.

## GitHub workflow

- Dependabot groups `astro` and `@astrojs/*` updates together.
- Dependabot groups `tailwindcss` and `@tailwindcss/*` updates together.
- CI blocks pull requests that fail type checks or production builds.
- Keep template changes and content changes in separate pull requests when possible.

## What to inspect after an Astro upgrade

- `astro.config.ts`: deprecated or renamed options.
- `src/content.config.ts`: content collection loader and schema changes.
- `src/live.config.ts`: Live Content Collection API changes.
- `src/actions/index.ts`: Action validation and session APIs.
- `src/components/seo/BaseHead.astro`: metadata, Fonts API, CSP, and transition changes.
- `Dockerfile`: Node runtime requirements.

## Version policy

Use caret ranges for Astro and official integrations so patch and minor updates can land through Dependabot. Tailwind's Vite plugin is pinned to `4.1.17` in this baseline because `4.2.x` currently resolves Vite 8 behavior that is not compatible with Astro 6.2. Re-test and unpin when Astro's Vite 8 path is stable.
