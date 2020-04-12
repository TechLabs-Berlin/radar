<template>
  <a
    v-if="!inline"
    :href="resource.url"
    target="_new"
    class="resource-card-block"
  >
    <div class="columns is-mobile resource-title">
      <div class="column is-narrow">
        <Fas :i="icon" />
      </div>
      <div class="column is-size-5">
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
        case 'social':
          return 'comments'
        case 'feedback':
          return 'heart'
        default:
          return 'file'
      }
    }
  }
}
</script>

<style lang="sass">
@import "~bulma/sass/utilities/_all"
@import "~assets/variables"
@import "~bulma/sass/base/helpers"

.resource-card
  border: 1px solid $grey-lighter
  border-radius: 6px
  padding: 0.25rem
  &:hover, &:active, &:focus
    border: 1px solid $primary
    background-color: $white-bis

.resource-card-inline
  @extend .resource-card
  display: inline-block
  &:not(:last-child)
    margin-right: 0.75rem

.resource-card-inline-icon
  margin-left: 0.25rem

.resource-card-inline-title
  margin-left: 0.25rem
  vertical-align: text-bottom

.resource-card-block
  @extend .resource-card
  display: block
  padding: 0.5rem
  &:not(:last-child)
    margin-bottom: 0.75rem

.resource-card-block .column
  padding-bottom: 0

.resource-title
  margin-bottom: 0 !important

.resource-description
  @extend .is-size-7
  @extend .has-text-grey
  padding-top: 0.5rem
</style>
