<template>
  <main>
    <div class="space-y-4 lg:mx-auto lg:max-w-2xl">
      <NuxtLink to="/" class="text-gray-500 hover:text-gray-700"
        ><TIcon icon="chevron-left" class="inline-block" /> Back to the
        Timeline</NuxtLink
      >
      <EventListItem v-if="event" :tl-event="event" show-resources />
    </div>
  </main>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  async asyncData({ $content, params }) {
    const event = await $content('events', params.slug).fetch()
    return {
      event,
    }
  },
  data() {
    return {
      event: null,
    }
  },
  head() {
    return {
      title: this.event.title,
    }
  },
})
</script>
