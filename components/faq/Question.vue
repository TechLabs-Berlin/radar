<template>
  <div>
    <h3>{{ title }}</h3>
    <p v-html="formattedContent" />
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  computed: {
    formattedContent() {
      const md = new MarkdownIt()
      return md.render(this.content)
    }
  }
}
</script>
