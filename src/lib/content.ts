import { getCollection, type CollectionEntry } from 'astro:content';

export async function getPublishedPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

export async function getFeaturedPosts(limit = 3) {
  const posts = await getPublishedPosts();
  return posts.filter((post) => post.data.featured).slice(0, limit);
}

export async function getAllTags() {
  const posts = await getPublishedPosts();
  return [...new Set(posts.flatMap((post) => post.data.tags))].sort((a, b) =>
    a.localeCompare(b),
  );
}

export function getPostReadingTime(post: CollectionEntry<'blog'>) {
  const words = post.body?.trim().split(/\s+/).length ?? 0;
  return Math.max(1, Math.ceil(words / 220));
}
