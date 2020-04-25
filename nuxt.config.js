export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/styles.sass'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/vuex-persist', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/fontawesome'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/onesignal',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources'
  ],
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        type: 'json',
        use: 'yaml-loader'
      })
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: { fix: true }
        })
      }
    }
  },
  fontawesome: {
    icons: {
      solid: [
        'faLink',
        'faFlag',
        'faCalendarDay',
        'faFile',
        'faFilePdf',
        'faFilePowerpoint',
        'faFilm',
        'faComments',
        'faHeart',
        'faExclamationCircle',
        'faAngleUp',
        'faAngleDown',
        'faEyeSlash',
        'faShareSquare',
        'faComment',
        'faCommentSlash',
        'faCheckCircle',
        'faHourglassHalf',
        'faTheaterMasks',
        'faCalendarAlt',
        'faToolbox',
        'faHandshake',
        'faVideo'
      ],
      brands: ['faSlack', 'faInstagram', 'faFacebookF']
    }
  },
  router: {
    linkActiveClass: 'is-active'
  },
  pwa: {
    manifest: {
      name: 'TechLabs Berlin Semester Radar',
      short_name: 'TechLabs Berlin',
      lang: 'en'
    },
    meta: {
      name: 'TechLabs Berlin Semester Radar',
      author: 'TechLabs Berlin e.V.',
      description:
        'The TechLabs Berlin semester radar shows all the important semester information at a glance',
      lang: 'en',
      nativeUI: true,
      appleStatusBarStyle: 'default'
    }
  },
  oneSignal: {
    init: {
      appId: process.env.ONESIGNAL_APP_ID,
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: true
      }
    }
  },
  env: {
    baseURL: process.env.BASE_URL
  }
}
