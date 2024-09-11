import { z, defineCollection } from "astro:content";

// Define a `type` and `schema` for each collection
const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      sortOrder: z.number(),
      video: z.object({
        desktopUrl: z.string(),
        mobileUrl: z.string()
      }),
      service: z.string(),
      type: z.string(),
      industry: z.string(),
      websiteUrl: z.string(),
      featured: z.string()
    })
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  projects: projectsCollection,
};