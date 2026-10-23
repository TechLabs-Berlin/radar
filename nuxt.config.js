import fs from 'fs'
import path from 'path'

const LOCATION = 'bln'

// Event and milestone pages are only linked from client-rendered lists, so the
// crawler can't discover them; list them explicitly so they get prerendered.
const contentRoutes = (type, prefix) =>
  fs
    .readdirSync(path.join(__dirname, `content-${LOCATION}`, type))
    .filter((file) => /\.ya?ml$/.test(file))
    .map((file) => `/${prefix}/${file.replace(/\.ya?ml$/, '')}`)

export default {
  env: {
    NUXT_APP_LOCATION: LOCATION,
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  generate: {
    fallback: true,
    routes: [
      ...contentRoutes('events', 'event'),
      ...contentRoutes('milestones', 'milestone'),
    ],
  },

  // uncomment the lines below if you are deploying to GitHub pages
  // router: {
  //   base: '/radar/',
  // },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Radar | ST21 | TechLabs Berlin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-tippy.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api',
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/markdownit',
    '@nuxtjs/axios',
  ],

  googleFonts: {
    families: {
      Livvic: [300, 400, 600, 700],
    },
    display: 'swap',
    download: true,
    subsets: 'latin',
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    dir: `content-${LOCATION}`,
  },

  // https://www.npmjs.com/package/@nuxtjs/markdownit
  markdownit: {
    runtime: true, // Support `$md()`
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
