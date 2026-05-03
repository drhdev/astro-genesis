export const siteConfig = {
  name: 'Astro Genesis',
  title: 'Astro Genesis - A production Astro 6 template',
  description:
    'A world-class Astro 6 template for content-rich static and dynamic websites, demonstrated through the Genesis creation narrative.',
  url: 'https://astro-genesis.example.com',
  locale: 'en_US',
  author: 'Genesis Editorial',
  themeColor: '#0f766e',
  defaultImage:
    'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1600&q=80',
  github: 'https://github.com/example/astro-genesis',
};

export const socialLinks = [
  { label: 'GitHub', href: siteConfig.github },
  { label: 'RSS', href: '/rss.xml' },
  { label: 'Sitemap', href: '/sitemap-index.xml' },
];
