import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    tags: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    status: z.string(),
    tags: z.array(z.string()).optional(),
    repoURL: z.string().url().optional(),
    demoURL: z.string().url().optional(),
  }),
});

export const collections = { work, projects };
