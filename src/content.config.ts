import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    publishedAt: z.string(),
    summary: z.string(),
    images: z.array(z.string()).default([]),
    team: z.array(
      z.object({
        name: z.string(),
        role: z.string(),
        avatar: z.string(),
        linkedIn: z.string().optional(),
      })
    ).optional(),
  }),
});

export const collections = { projects };
