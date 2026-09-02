import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const text = z.object({
  en: z.coerce.string(),
  es: z.coerce.string(),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: text,
    excerpt: text,
    description: text,
    body: text,
    tags: z.array(z.string()),
    image: z.string().optional(),
    year: z.string(),
    kind: z.enum(["company", "personal"]),
    company: text.optional(),
    demo: z.string().optional(),
    repo: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number(),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    order: z.number(),
    company: text,
    role: text,
    period: text,
    location: text,
    bullets: z.array(text),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/education" }),
  schema: z.object({
    order: z.number(),
    school: text,
    degree: text,
    period: text,
    detail: text,
  }),
});

export const collections = { projects, experience, education };
