<template>
  <div>
    <template v-if="events.length">
      <div class="flex justify-end mb-8">
        <button
          class="flex space-x-4 text-gray-500 focus:outline-none active:outline-none"
          @click="toggle"
        >
          <p class="text-center">
            {{ showEvents ? 'Hide' : 'Show' }} Future Events
          </p>
          <p class="text-center">
            <TIcon
              :icon="showEvents ? 'eye-slash' : 'chevron-down'"
              class="inline-block"
            />
          </p>
        </button>
      </div>
      <ul v-if="showEvents" class="space-y-8">
        <li v-for="e in events" :key="e.slug">
          <EventListItem :tl-event="e" />
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
    events: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const showEvents = ref(true)
    const toggle = () => (showEvents.value = !showEvents.value)
    return {
      showEvents,
      toggle,
    }
  },
})
</script>
