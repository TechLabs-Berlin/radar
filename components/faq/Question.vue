<template>
  <div>
    <h3>{{ title }}</h3>
    <!--eslint-disable vue/no-v-html-->
    <p v-html="formattedContent" />
    <!--eslint-enable-->
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
