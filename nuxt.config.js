const GOOGLE_FONT_URL =
  'https://fonts.googleapis.com/css2?family=Livvic:wght@300;400;600;700'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Radar | ST21 | TechLabs Berlin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      { rel: 'preload', as: 'style', href: `${GOOGLE_FONT_URL}&display=swap` },
      {
        rel: 'stylesheet',
        href: `${GOOGLE_FONT_URL}&display=swap`,
        media: 'print',
        onload: 'this.media="all"',
      },
    ],
    noscript: [
      {
        link: [{ rel: 'stylesheet', href: `${GOOGLE_FONT_URL}&display=swap` }],
      },
    ],
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
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/markdownit',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'TechLabs Berlin Semester Radar',
      short_name: 'TechLabs Berlin',
      lang: 'en',
    },
    meta: {
      name: 'TechLabs Berlin Semester Radar',
      author: 'TechLabs Berlin e.V.',
      description:
        'The TechLabs Berlin semester radar shows all the important semester information at a glance',
      lang: 'en',
      nativeUI: true,
      appleStatusBarStyle: 'default',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // https://www.npmjs.com/package/@nuxtjs/markdownit
  markdownit: {
    runtime: true, // Support `$md()`
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
