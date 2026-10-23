// @ts-check
import prettier from 'eslint-plugin-prettier/recommended'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(prettier, {
  rules: {
    // the Nuxt Content markdown is rendered with markdown-it, see plugins/markdown.js
    'vue/no-v-html': 'off',
    // single-word component names are used throughout (Events, Timeline, ...)
    'vue/multi-word-component-names': 'off',
  },
})
