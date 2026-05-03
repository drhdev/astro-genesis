import type { APIRoute } from 'astro';
import { creationDays } from '@data/creation';

export const prerender = false;

export const GET: APIRoute = () => {
  const index = new Date().getUTCDay() % creationDays.length;
  const item = creationDays[index];

  return Response.json({
    generatedAt: new Date().toISOString(),
    item,
  });
};
