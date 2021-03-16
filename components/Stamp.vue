<template>
  <div
    class="absolute top-0 left-0 px-2 py-1 text-sm font-semibold tracking-wide uppercase border-2 border-blue-600 rounded-lg shadow"
    :class="classNames"
  >
    <span>{{ text }}</span>
  </div>
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'
import { isFuture, isToday } from 'date-fns'
export default defineComponent({
  props: {
    date: {
      type: Date,
      default: new Date(),
    },
  },
  setup(props) {
    const isFutureDate = computed(() => isFuture(props.date))
    const isTodayDate = computed(() => isToday(props.date))
    const text = computed(() => {
      if (isTodayDate.value) return 'today!'
      if (isFutureDate.value) return 'next'
      return 'live!'
    })
    const classNames = computed(() => {
      if (isFutureDate.value && !isTodayDate.value)
        return 'text-blue-600 bg-white'
      return 'text-white bg-blue-600'
    })
    return {
      isFutureDate,
      isTodayDate,
      text,
      classNames,
    }
  },
})
</script>
