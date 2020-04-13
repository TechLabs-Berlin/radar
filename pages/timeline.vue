<template>
  <div class="timeline-wrapper">
    <div class="card timeline-event status-card">
      <div class="card-content">
        <div class="status">
          <span v-html="status.text" />
        </div>
        <div class="columns is-centered">
          <div
            v-for="link in status.links"
            :key="link.url"
            class="column is-narrow has-text-centered"
          >
            <a :href="link.url" target="_new" class="techlabs-button">
              {{ link.title }}
            </a>
          </div>
        </div>
      </div>
    </div>
    <Timeline :entries="timeline" />
  </div>
</template>

<script>
import Timeline from '~/components/Timeline.vue'
import { status, timeline } from '~/assets/content'

export default {
  components: {
    Timeline
  },
  data() {
    return {
      status,
      timeline
    }
  }
}
</script>

<style lang="sass">
@import "~bulma/sass/utilities/_all"
@import "~bulma/sass/base/helpers"
@import "~bulma/sass/elements/content"

.timeline-wrapper
  margin-top: 2rem

.status
  @extend .content
  @extend .is-size-4
  @extend .has-text-centered
  line-height: 2

.status-card
  margin-bottom: 2rem
</style>
