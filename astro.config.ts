import mdx from '@astrojs/mdx';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import {
  defineConfig,
  fontProviders,
  logHandlers,
  svgoOptimizer,
} from 'astro/config';

const site = process.env.SITE ?? 'https://astro-genesis.example.com';

export default defineConfig({
  site,
  output: 'server',
  adapter: node({
    mode: 'standalone',
    staticHeaders: true,
    bodySizeLimit: 256 * 1024,
  }),
  integrations: [
    mdx({
      optimize: true,
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      filter: (page) => !page.includes('/api/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss() as any],
  },
  trailingSlash: 'never',
  compressHTML: 'jsx',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  server: {
    port: 4321,
    host: '127.0.0.1',
    allowedHosts: ['localhost', '127.0.0.1', '.github.dev'],
  },
  image: {
    responsiveStyles: true,
    layout: 'constrained',
    objectFit: 'cover',
    breakpoints: [360, 640, 768, 1024, 1280, 1536],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  markdown: {
    gfm: true,
    syntaxHighlight: 'prism',
    smartypants: {
      dashes: 'oldschool',
    },
  },
  fonts: [
    {
      name: 'Inter',
      cssVariable: '--font-inter',
      provider: fontProviders.local(),
      fallbacks: ['system-ui', 'sans-serif'],
      options: {
        variants: [
          {
            src: [
              './node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2',
            ],
            weight: '100 900',
            style: 'normal',
          },
        ],
      },
    },
    {
      name: 'Fraunces',
      cssVariable: '--font-display',
      provider: fontProviders.local(),
      fallbacks: ['Georgia', 'serif'],
      options: {
        variants: [
          {
            src: [
              './node_modules/@fontsource/fraunces/files/fraunces-latin-600-normal.woff2',
            ],
            weight: '600',
            style: 'normal',
          },
          {
            src: [
              './node_modules/@fontsource/fraunces/files/fraunces-latin-700-normal.woff2',
            ],
            weight: '700',
            style: 'normal',
          },
        ],
      },
    },
  ],
  security: {
    checkOrigin: true,
    actionBodySizeLimit: 64 * 1024,
    serverIslandBodySizeLimit: 64 * 1024,
    csp: {
      algorithm: 'SHA-256',
      directives: [
        "default-src 'self'",
        "base-uri 'self'",
        "connect-src 'self'",
        "font-src 'self' data:",
        "form-action 'self'",
        "frame-ancestors 'none'",
        "img-src 'self' data: https://images.unsplash.com",
        "object-src 'none'",
      ],
    },
  },
  experimental: {
    svgOptimizer: svgoOptimizer(),
    ...(process.env.ASTRO_JSON_LOGS === '1'
      ? { logger: logHandlers.json() }
      : {}),
  },
});
