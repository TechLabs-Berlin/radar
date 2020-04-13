<template>
  <div class="event-wrapper">
    <Event :event="event" :hide-permalink="true" />
  </div>
</template>

<script>
import Event from '~/components/Event'
import { timeline } from '~/assets/content'

export default {
  components: {
    Event
  },
  validate({ params }) {
    const event = timeline.find((e) => e.slug === params.slug)
    return typeof event !== 'undefined'
  },
  asyncData({ params }) {
    const event = timeline.find((e) => e.slug === params.slug)
    return {
      event
    }
  }
}
</script>

<style lang="sass">
.event-wrapper
  margin-top: 2rem
</style>
