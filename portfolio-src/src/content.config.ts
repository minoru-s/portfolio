import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const baseSchema = z.object({
  title: z.string(),
  summary: z.string(),
  date: z.date().optional(),
  tags: z.array(z.string()).default([]),
  period: z.string().optional(),
  organization: z.string().optional(),
  role: z.string().optional(),
  stack: z.array(z.string()).default([]),
  hero: z.string().optional(),
  demoUrl: z.string().optional(),
  repoUrl: z.string().optional(),
  draft: z.boolean().default(false),
  related: z.array(z.string()).default([]),
  order: z.number().default(99),
  highlights: z.array(z.string()).default([]),
});

const blogSchema = z.object({
  title: z.string(),
  summary: z.string(),
  date: z.date(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  thumbnail: z.string().optional(),
  hero: z.string().optional(),
});

export const collections = {
  projects: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
    schema: baseSchema,
  }),
  research: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
    schema: baseSchema,
  }),
  blog: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
    schema: blogSchema,
  }),
};
