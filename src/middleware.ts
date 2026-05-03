import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  context.locals.requestId = crypto.randomUUID();

  if (!context.isPrerendered) {
    const visits = (await context.session?.get('visits')) ?? 0;
    context.session?.set('visits', visits + 1);
    context.session?.set('lastVisit', new Date());
  }

  const response = await next();
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()',
  );

  return response;
});
