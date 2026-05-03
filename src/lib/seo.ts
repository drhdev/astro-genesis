import { siteConfig } from '@data/site';

interface WebPageSchemaInput {
  title: string;
  description: string;
  url: string;
}

interface ArticleSchemaInput extends WebPageSchemaInput {
  image: string;
  pubDate: Date;
  updatedDate?: Date | undefined;
  author: string;
}

export function webPageSchema({ title, description, url }: WebPageSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function articleSchema({
  title,
  description,
  url,
  image,
  pubDate,
  updatedDate,
  author,
}: ArticleSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    image,
    datePublished: pubDate.toISOString(),
    dateModified: (updatedDate ?? pubDate).toISOString(),
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}
