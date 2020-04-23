<template>
  <a
    v-if="!inline"
    :href="resource.url"
    target="_new"
    class="resource-card-block"
  >
    <div class="columns is-mobile resource-heading">
      <div class="column is-narrow">
        <Fas :i="icon" />
      </div>
      <div class="column is-size-5 resource-title">
        {{ resource.title }}
      </div>
    </div>
    <div v-if="resource.description" class="content resource-description">
      {{ resource.description }}
    </div>
  </a>
  <a
    v-else-if="inline"
    :href="resource.url"
    target="_new"
    class="resource-card-inline"
  >
    <Fas :i="icon" classes="icon resource-card-inline-icon" />
    <span class="resource-card-inline-title">{{ resource.title }}</span>
  </a>
</template>

<script>
import Fas from '~/components/Fas.vue'

export default {
  components: {
    Fas
  },
  props: {
    resource: {
      type: Object,
      required: true
    },
    inline: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    icon() {
      switch (this.resource.type) {
        case 'pdf':
          return 'file-pdf'
        case 'link':
          return 'link'
        case 'slides':
          return 'file-powerpoint'
        case 'typeform':
          return 'theater-masks'
        case 'calendar':
          return 'calendar-alt'
        case 'tool':
          return 'toolbox'
        case 'meeting':
          return 'handshake'
        case 'video':
          return 'video'
        default:
          return 'file'
      }
    }
  }
}
</script>

<style lang="sass">
@import '~/assets/components/resource-card'
</style>
