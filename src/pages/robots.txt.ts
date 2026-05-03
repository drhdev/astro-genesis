import type { APIRoute } from 'astro';
import { siteConfig } from '@data/site';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL(siteConfig.url);
  const sitemap = new URL('/sitemap-index.xml', origin);

  return new Response(`User-agent: *\nAllow: /\nSitemap: ${sitemap.href}\n`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
