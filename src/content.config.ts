import { defineCollection, reference } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const httpsUrl = z.url({ protocol: /^https$/ });

const sections = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/sections' }),
  schema: z.object({ title: z.string().trim().min(1), order: z.number().int() }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/index.yaml', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    name: z.string().trim().min(1),
    section: reference('sections'),
    order: z.number().int(),
    description: z.string().trim().min(1),
    icon: image(),
    links: z.array(z.object({
      label: z.string().trim().min(1),
      url: httpsUrl,
      kind: z.enum(['app', 'github']),
    })).min(1).refine((links) => links.filter((link) => link.kind === 'app').length <= 1, 'Only one primary app link'),
  }),
});

export const collections = { sections, projects };
