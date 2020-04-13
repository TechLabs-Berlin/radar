<template>
  <div>
    <div class="event-wrapper">
      <Event :event="event" :hide-permalink="true" :hide-forms="true" />
    </div>
    <div v-for="form in event.forms" :key="form.url" class="event-wrapper">
      <Form :form="form" />
    </div>
  </div>
</template>

<script>
import Event from '~/components/Event'
import Form from '~/components/Form'
import { timeline } from '~/assets/content'

export default {
  components: {
    Event,
    Form
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
