<template>
  <nuxt-link v-if="!inline" :to="to" class="resource-card-block">
    <div class="columns is-mobile resource-heading">
      <div class="column is-narrow">
        <Fas i="theater-masks" />
      </div>
      <div class="column is-size-5 resource-title">
        {{ resource.title }}
      </div>
    </div>
    <div v-if="resource.description" class="content resource-description">
      {{ resource.description }}
    </div>
  </nuxt-link>
  <nuxt-link v-else-if="inline" :to="to" class="resource-card-inline">
    <Fas i="heart" classes="icon resource-card-inline-icon" />
    <span class="resource-card-inline-title">{{ resource.title }}</span>
  </nuxt-link>
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
    to: {
      type: String,
      required: true
    },
    inline: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="sass">
@import '~/assets/components/resource-card'
</style>
