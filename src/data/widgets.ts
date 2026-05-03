export const widgetGroups = [
  {
    title: 'Editorial',
    items: [
      'Hero',
      'Feature grid',
      'Timeline',
      'Stats',
      'Blog cards',
      'Callouts',
    ],
  },
  {
    title: 'Conversion',
    items: [
      'CTA band',
      'Contact action',
      'Newsletter pattern',
      'FAQ accordion',
      'Feature matrix',
    ],
  },
  {
    title: 'Platform',
    items: [
      'Server island',
      'Session counter',
      'Live collection',
      'JSON endpoint',
      'RSS',
      'Sitemap',
    ],
  },
];

export const faqs = [
  {
    question: 'Can this ship as a static site?',
    answer:
      'Yes. Static routes opt into prerendering while the repository keeps a Node adapter for SSR demos, Actions, Sessions, and server islands.',
  },
  {
    question: 'Where do project-specific contents live?',
    answer:
      'Blog posts live in src/content, structured demo data lives in src/data, and shared template code stays in components, layouts, and lib.',
  },
  {
    question: 'How is the template kept up to date?',
    answer:
      'The repo includes CI, Dependabot groups for Astro and Tailwind, an upgrade script, and documentation describing safe update steps.',
  },
];
