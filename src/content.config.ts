import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const produkter = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/produkter' }),
  schema: ({ image }) =>
    z.object({
      tittel: z.string(),
      ingress: z.string(),
      bilde: image(),
      rekkefolge: z.number(),
      galleri: z.array(z.object({ bilde: image(), tekst: z.string() })).optional(),
    }),
});

export const collections = { produkter };
