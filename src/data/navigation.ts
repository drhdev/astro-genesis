export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'Widgets', href: '/widgets' },
  { label: 'Blog', href: '/blog' },
  {
    label: 'Demos',
    href: '/dynamic',
    children: [
      { label: 'Dynamic SSR', href: '/dynamic' },
      { label: 'Live Collection', href: '/dynamic/live' },
      { label: 'Search API', href: '/api/search.json' },
    ],
  },
  { label: 'Docs', href: '/docs' },
  { label: 'Contact', href: '/contact' },
];

export const footerNavigation = [
  {
    title: 'Template',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Widgets', href: '/widgets' },
      { label: 'Documentation', href: '/docs' },
    ],
  },
  {
    title: 'Content',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Tags', href: '/tags/genesis' },
      { label: 'RSS', href: '/rss.xml' },
    ],
  },
  {
    title: 'System',
    links: [
      { label: 'Dynamic SSR', href: '/dynamic' },
      { label: 'Live Collection', href: '/dynamic/live' },
      { label: 'Sitemap', href: '/sitemap-index.xml' },
    ],
  },
];
