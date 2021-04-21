<template>
  <div class="flex space-x-2">
    <p>
      <TIcon
        icon="calendar-day"
        class="inline-block text-xs mt-05"
        :class="
          weekStatus === 'current' && isFutureEvent
            ? 'text-pink-600'
            : 'text-gray-300'
        "
      />
    </p>
    <div>
      <p class="font-semibold" :class="{ 'line-through': !isFutureEvent }">
        <NuxtLink :to="`/event/${event.slug}`" class="regular-link">{{
          event.title
        }}</NuxtLink>
      </p>
      <p>
        {{ format(new Date(event.date), 'MMM d') }}
      </p>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { format, isToday, isFuture, parseISO } from 'date-fns'

export default defineComponent({
  props: {
    event: {
      type: Object,
      required: true,
    },
    weekStatus: {
      type: String,
      default: 'current',
    },
  },
  setup(props) {
    const isFutureEvent = computed(
      () =>
        isFuture(parseISO(props.event.date)) ||
        isToday(parseISO(props.event.date))
    )
    return { format, isFutureEvent }
  },
})
</script>
<style lang="scss" scoped>
.mt-05 {
  margin-top: 0.05rem;
}
</style>
