import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { siteConfig } from '@data/site';
import { getPublishedPosts } from '@lib/content';

export const prerender = true;

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();

  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site ?? siteConfig.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}`,
    })),
    customData: '<language>en-us</language>',
  });
}
