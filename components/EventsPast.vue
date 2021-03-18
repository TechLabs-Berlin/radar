<template>
  <div>
    <template v-if="events.length">
      <ul v-if="show" class="mb-8 space-y-4 md:space-y-8">
        <li v-for="e in events" :key="e.slug">
          <EventListItem
            :tl-event="e"
            is-past-event
            show-resources
            show-permalink
          />
        </li>
      </ul>
    </template>
    <div v-else>
      <p>No Past Events.</p>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    show: {
      type: Boolean,
    },
    events: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const showEvents = ref(false)
    const toggle = () => (showEvents.value = !showEvents.value)
    return {
      showEvents,
      toggle,
    }
  },
})
</script>
