import { defineLiveCollection } from 'astro:content';
import { z } from 'astro/zod';
import { creationDays } from './data/creation';

const liveSignals = creationDays.map((day) => ({
  id: `day-${day.day}`,
  data: {
    title: day.title,
    phase: day.phase,
    summary: day.summary,
    updatedAt: new Date(),
  },
  rendered: {
    html: `<p>${day.summary}</p>`,
  },
  cacheHint: {
    tags: ['creation-days', `creation-day-${day.day}`],
    lastModified: new Date(),
  },
}));

const creationSignals = defineLiveCollection({
  loader: {
    name: 'local-live-creation-signals',
    async loadCollection(context) {
      const filter = context.filter as { phase?: string } | undefined;
      const phase = filter?.phase;
      const entries = phase
        ? liveSignals.filter((entry) => entry.data.phase === phase)
        : liveSignals;

      return {
        entries,
        cacheHint: {
          tags: phase ? ['creation-days', `phase-${phase}`] : ['creation-days'],
          lastModified: new Date(),
        },
      };
    },
    async loadEntry(context) {
      const filter = context.filter as string | { id?: string } | undefined;
      const id =
        typeof filter === 'string'
          ? filter
          : typeof filter === 'object' && filter && 'id' in filter
            ? String(filter.id)
            : '';
      return liveSignals.find((entry) => entry.id === id);
    },
  },
  schema: z.object({
    title: z.string(),
    phase: z.string(),
    summary: z.string(),
    updatedAt: z.coerce.date(),
  }),
});

export const collections = { creationSignals };
