<template>
  <div class="card timeline-event">
    <div class="card-content content">
      <h2>{{ form.title }}</h2>
      <!--eslint-disable vue/no-v-html-->
      <p v-if="form.description" v-html="description" />
      <!--eslint-enable-->
      <Typeform :url="form.url" />
    </div>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'
import Typeform from '~/components/Typeform'
export default {
  components: {
    Typeform
  },
  props: {
    form: {
      type: Object,
      required: true
    }
  },
  computed: {
    description() {
      const md = new MarkdownIt()
      return md.render(this.form.description)
    }
  }
}
</script>
