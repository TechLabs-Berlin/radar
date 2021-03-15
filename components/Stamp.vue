<template>
  <div
    class="absolute top-0 left-0 px-2 py-1 text-sm font-semibold tracking-wide uppercase border-2 border-blue-600 rounded-lg shadow"
    :class="isFutureDate ? 'text-blue-600 bg-white' : 'text-white bg-blue-600'"
  >
    <span v-if="isFutureDate" class="">Next</span>
    <span v-else class="">Live!</span>
  </div>
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'
import { isFuture } from 'date-fns'
export default defineComponent({
  props: {
    date: {
      type: Date,
      default: new Date(),
    },
  },
  setup(props) {
    const isFutureDate = computed(() => isFuture(props.date))
    return {
      isFutureDate,
    }
  },
})
</script>
