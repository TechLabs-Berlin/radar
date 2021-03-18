<template>
  <div>
    <template v-if="events.length">
      <div class="flex justify-end mb-8">
        <div
          class="flex space-x-4 text-gray-500 focus:outline-none active:outline-none"
        >
          <p class="text-center">Future Events</p>
          <p class="text-center">
            <TIcon icon="chevron-down" class="inline-block" />
          </p>
        </div>
      </div>
      <ul class="mb-8 space-y-4 md:space-y-8">
        <li v-for="e in events" :key="e.slug">
          <EventListItem :tl-event="e" show-permalink />
        </li>
      </ul>
    </template>
    <div v-else>
      <p>No Past Events.</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    events: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    return {}
  },
})
</script>
