import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
const country = z.enum([
  "Slovakia",
  "Greece",
  "Bosnia & Herzegovina",
  "Bulgaria",
  "Serbia",
  "Italy",
  "United Kingdom",
  "European Union",
  "Online",
]);
const image = z
  .object({
    src: z.string(),
    alt: z.string(),
    credit: z.string().optional(),
  })
  .optional();
const news = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string().min(1),
    date: z.coerce.date(),
    summary: z.string().min(20),
    author: z.string().optional(),
    image,
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});
const events = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/events" }),
  schema: z.object({
    title: z.string().min(1),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    time: z.string().optional(),
    location: z.string().min(1),
    locationUrl: z.string().url().optional(),
    country,
    format: z.enum(["In-person", "Online", "Hybrid"]),
    workPackage: z.string().optional(),
    summary: z.string().min(20),
    agenda: z.string().optional(),
    image,
    registrationUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});
const teamMember = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  bio: z.string().optional(),
  photo: z.string().optional(),
});
const partners = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/partners" }),
  schema: z.object({
    name: z.string().min(1),
    shortName: z.string().min(1),
    country,
    role: z.enum(["Coordinator", "Beneficiary"]),
    website: z.string().url().optional(),
    logo: z.string().optional(),
    summary: z.string().min(20),
    contribution: z.string().optional(),
    team: z.array(teamMember).default([]),
    order: z.number().int().default(99),
  }),
});
const advisoryBoard = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.md",
    base: "./src/content/advisory-board",
  }),
  schema: z.object({
    name: z.string().min(1),
    country,
    affiliation: z.string().min(1),
    expertise: z.string().min(5),
    bio: z.string().min(20),
    photo: z.string().optional(),
    order: z.number().int().default(99),
  }),
});
const outputs = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/outputs" }),
  schema: z.object({
    id: z.string().regex(/^D\d{1,2}\.\d$/, { message: "e.g. D6.1" }),
    title: z.string().min(1),
    workPackage: z.string().optional(),
    leadPartner: z.string().optional(),
    dueMonth: z.number().int().min(1).max(24).optional(),
    summary: z.string().min(20),
    image,
    featured: z.boolean().default(false),
    fileUrl: z
      .string()
      .refine((v) => v.startsWith("/") || /^https?:\/\//i.test(v), {
        message: "Must be a full URL (https://...) or a site path (/files/...)",
      })
      .optional(),
    order: z.number().int().default(99),
  }),
});
export const collections = { news, events, partners, advisoryBoard, outputs };
