<template>
  <div class="typeform" />
</template>

<script>
import * as typeformEmbed from '@typeform/embed'

export default {
  props: {
    url: {
      type: String,
      required: true
    }
  },
  mounted() {
    typeformEmbed.makeWidget(this.$el, this.url, { hideFooter: true })
  }
}
</script>

<style lang="sass">
.typeform
  height: 500px
</style>
