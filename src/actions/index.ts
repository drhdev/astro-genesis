import { defineAction } from 'astro:actions';
import { z } from 'astro/zod';

const focusOptions = [
  'light',
  'waters',
  'land',
  'stars',
  'life',
  'humanity',
  'rest',
] as const;

export const server = {
  contact: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string().min(2, 'Please provide your name.'),
      email: z.email('Please provide a valid email address.'),
      message: z
        .string()
        .min(12, 'Please add a little more context.')
        .max(1200),
      focus: z.enum(focusOptions).default('light'),
    }),
    handler: async (input, context) => {
      context.session?.set('creationFocus', input.focus);

      return {
        ok: true,
        name: input.name,
        focus: input.focus,
        receivedAt: new Date().toISOString(),
      };
    },
  }),
};
