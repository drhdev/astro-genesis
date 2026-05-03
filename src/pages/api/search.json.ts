import type { APIRoute } from 'astro';
import { getPublishedPosts } from '@lib/content';

export const prerender = true;

export const GET: APIRoute = async () => {
  const posts = await getPublishedPosts();

  return Response.json(
    posts.map((post) => ({
      id: post.id,
      title: post.data.title,
      description: post.data.description,
      tags: post.data.tags,
      href: `/blog/${post.id}`,
    })),
  );
};
