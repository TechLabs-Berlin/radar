<template>
  <ul class="mt-1 text-xs" :class="{ 'opacity-75': weekStatus === 'past' }">
    <li v-for="e in events" :key="e.slug">
      <slot name="event" :event="e" />
    </li>
  </ul>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    weekStatus: {
      type: String,
      default: 'current',
    },
    events: {
      type: Array,
      default: () => {},
    },
  },
  setup() {
    return {}
  },
})
</script>
