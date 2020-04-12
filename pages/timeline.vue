<template>
  <section class="section">
    <div class="card timeline-event">
      <div class="card-content">
        <div class="status">
          <span v-html="status.text" />
        </div>
        <p class="content has-text-centered">
          <a
            v-for="link in status.links"
            :key="link.url"
            :href="link.url"
            target="_new"
            class="techlabs-button status-button"
          >
            {{ link.title }}
          </a>
        </p>
      </div>
    </div>
    <Timeline :entries="timeline" />
  </section>
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

.status
  @extend .content
  @extend .is-size-4
  @extend .has-text-centered
  line-height: 2

.status-button:not(:last-child)
  margin-right: 0.75rem
</style>
