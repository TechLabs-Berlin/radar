<template>
  <div class="timeline-wrapper">
    <SemesterOverview />
    <div class="card timeline-event status-card">
      <div class="card-content">
        <div class="status">
          <!--eslint-disable vue/no-v-html-->
          <span v-html="status.text" />
          <!--eslint-enable-->
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
    <NotificationSetup />
    <Timeline :entries="timeline" />
  </div>
</template>

<script>
import NotificationSetup from '~/components/NotificationSetup'
import Timeline from '~/components/Timeline.vue'
import SemesterOverview from '~/components/SemesterOverview.vue'
import { status, timeline } from '~/assets/content'

export default {
  components: {
    NotificationSetup,
    Timeline,
    SemesterOverview
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
  @extend .is-size-6
  @extend .is-size-5-desktop
  @extend .has-text-centered
  line-height: 2

.status-card
  margin-bottom: 2rem
</style>
