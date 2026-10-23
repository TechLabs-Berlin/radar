import { resolve } from 'node:path'
import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { LOCATION } from './radar.config'

const cwd = resolve(import.meta.dirname, `content-${LOCATION}`)
const source = (include: string) => ({ cwd, include })

const resource = z.object({
  title: z.string(),
  description: z.string().optional(),
  type: z.string(),
  url: z.string(),
})

export default defineContentConfig({
  collections: {
    events: defineCollection({
      type: 'data',
      source: source('events/*.{yaml,yml}'),
      schema: z.object({
        title: z.string(),
        date: z.string(),
        description: z.string(),
        showResources: z.boolean().optional(),
        is_public: z.boolean().optional(),
        meetings: z.array(resource).nullish(),
        forms: z.array(resource).nullish(),
        resources: z.array(resource).nullish(),
      }),
    }),
    milestones: defineCollection({
      type: 'data',
      source: source('milestones/*.{yaml,yml}'),
      schema: z.object({
        title: z.string(),
        deadline: z.string(),
        type: z.string(),
        description: z.string(),
        todos: z
          .array(
            z.object({
              name: z.string(),
              resources: z.array(resource).nullish(),
            })
          )
          .nullish(),
      }),
    }),
    timeline: defineCollection({
      type: 'data',
      source: source('timeline.yaml'),
      schema: z.object({
        startsAt: z.number(),
        timeline: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
            startDate: z.string(),
            endDate: z.string(),
          })
        ),
      }),
    }),
    term: defineCollection({
      type: 'data',
      source: source('term.yaml'),
      schema: z.object({ term: z.string() }),
    }),
    announcement: defineCollection({
      type: 'data',
      source: source('announcement.yaml'),
      schema: z.object({ body: z.string(), publish: z.boolean() }),
    }),
    faq: defineCollection({
      type: 'data',
      source: source('faq.yaml'),
      schema: z.object({
        sections: z.array(
          z.object({
            title: z.string(),
            questions: z.array(
              z.object({ title: z.string(), content: z.string() })
            ),
          })
        ),
      }),
    }),
    media: defineCollection({
      type: 'data',
      source: source('media.yaml'),
      schema: z.object({
        items: z
          .array(
            z.object({
              title: z.string(),
              youtubeURL: z.string(),
              date: z.string(),
              description: z.string(),
            })
          )
          .nullish(),
      }),
    }),
    navLinks: defineCollection({
      type: 'data',
      source: source('nav-links.yaml'),
      schema: z.object({
        navLinks: z.array(
          z.object({
            title: z.string(),
            path: z.string(),
            is_public: z.boolean().optional(),
          })
        ),
      }),
    }),
    socialLinks: defineCollection({
      type: 'data',
      source: source('social-links.yaml'),
      schema: z.object({
        socialLinks: z.array(
          z.object({
            type: z.string(),
            url: z.string(),
            is_public: z.boolean().optional(),
          })
        ),
      }),
    }),
    footer: defineCollection({
      type: 'page',
      source: source('footer.md'),
    }),
  },
})
