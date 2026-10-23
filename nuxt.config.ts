import { createHash } from 'node:crypto'
import { readdirSync } from 'node:fs'
import { join } from 'node:path'
import { LOCATION } from './radar.config'

// Event and milestone pages are only linked from client-rendered lists, so the
// crawler can't discover them; list them explicitly so they get prerendered.
const contentRoutes = (type: string, prefix: string) =>
  readdirSync(join(import.meta.dirname, `content-${LOCATION}`, type))
    .filter((file) => /\.ya?ml$/.test(file))
    .map((file) => `/${prefix}/${file.replace(/\.ya?ml$/, '')}`)

// Optional access gate: set ACCESS_PASSWORD when building to ask visitors for
// this password. Only a hash of it ends up in the site, see composables/useAccessGate.js.
const accessHash = process.env.ACCESS_PASSWORD
  ? createHash('sha256').update(process.env.ACCESS_PASSWORD).digest('hex')
  : ''

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

  runtimeConfig: {
    public: {
      location: LOCATION,
      // set SCOPE=public to build the reduced public version of the Radar
      scope: process.env.SCOPE || '',
      accessHash,
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/faq',
        '/media',
        '/newsletter',
        ...contentRoutes('events', 'event'),
        ...contentRoutes('milestones', 'milestone'),
      ],
    },
  },
})
