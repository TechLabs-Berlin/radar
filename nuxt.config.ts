import { readdirSync } from 'node:fs'
import { join } from 'node:path'
import { LOCATION } from './radar.config'

// Event and milestone pages are only linked from client-rendered lists, so the
// crawler can't discover them; list them explicitly so they get prerendered.
const contentRoutes = (type: string, prefix: string) =>
  readdirSync(join(import.meta.dirname, `content-${LOCATION}`, type))
    .filter((file) => /\.ya?ml$/.test(file))
    .map((file) => `/${prefix}/${file.replace(/\.ya?ml$/, '')}`)

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxt/eslint'],

  css: ['~/assets/css/fonts.css'],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },

  app: {
    // uncomment the lines below if you are deploying to GitHub pages
    // baseURL: '/radar/',
    head: {
      titleTemplate: '%s - Radar | ST21 | TechLabs Berlin',
      meta: [
        {
          name: 'description',
          content: process.env.npm_package_description || '',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  hooks: {
    // The YAML content files start with a `---` document marker (possibly after
    // some comments). Nuxt Content would read that as unterminated frontmatter
    // and ignore the whole file, so drop it.
    'content:file:beforeParse'({ file }) {
      if (file.extension === '.yaml' || file.extension === '.yml') {
        file.body = file.body.replace(
          /^((?:[ \t]*(?:#.*)?\r?\n)*)---[ \t]*\r?\n/,
          '$1'
        )
      }
    },
  },

  runtimeConfig: {
    public: {
      location: LOCATION,
      // set SCOPE=public to build the reduced public version of the Radar
      scope: process.env.SCOPE || '',
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        ...contentRoutes('events', 'event'),
        ...contentRoutes('milestones', 'milestone'),
      ],
    },
  },
})
