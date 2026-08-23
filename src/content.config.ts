import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: 'src/content/projects',
    generateId: ({ entry }) => entry.replace(/\.md$/, '')
  }),
  schema: z.object({
    slug: z.string(),
    locale: z.enum(['en', 'es']),
    title: z.string(),
    shortTitle: z.string(),
    summary: z.string(),
    role: z.string(),
    duration: z.string(),
    status: z.enum(['published', 'in-progress']),
    featured: z.boolean(),
    cover: z.string(),
    tags: z.array(z.string()),
    tools: z.array(z.string()),
    nextSlug: z.string().optional(),
    previousSlug: z.string().optional(),
    draft: z.boolean().optional().default(false)
  })
});

export const collections = { projects };
