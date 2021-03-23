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
import { useEvent } from '@/composables/useEvent'
export default defineComponent({
  props: {
    date: {
      type: Date,
      default: new Date(),
    },
  },
  setup(props) {
    const { isLive, isFutureDate, isTodayDate } = useEvent({ date: props.date })

    const text = computed(() => {
      if (isLive.value) return 'live!'
      if (isTodayDate.value) return 'today!'
      return 'next'
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
      isLive,
    }
  },
})
</script>
