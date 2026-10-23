import MarkdownIt from 'markdown-it'

// Makes `$md.render()` available in templates for the markdown in the YAML content.
export default defineNuxtPlugin(() => {
  return { provide: { md: new MarkdownIt() } }
})
