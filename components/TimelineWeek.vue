<template>
  <div class="flex items-center space-x-2">
    <div
      v-tippy="{ theme: 'tl' }"
      :content="weekDates"
      class="relative flex items-center justify-center flex-none w-10 h-10 font-mono text-sm font-semibold border rounded-lg shadow"
      :class="
        clsx({
          'text-pink-600': weekStatus === 'current',
          'bg-gray-100 text-gray-500': weekStatus === 'past',
          'bg-white': weekStatus === 'future',
        })
      "
    >
      W{{ week.number }}
      <template v-if="['current', 'past'].includes(weekStatus)">
        <TIcon
          :icon="weekStatus === 'current' ? 'hourglass-half' : 'check-circle'"
          class="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2"
          :class="weekStatus === 'current' ? 'text-pink-600' : 'text-gray-700'"
        />
      </template>
    </div>
    <ul
      v-if="week.events.length"
      class="text-xs"
      :class="{ 'opacity-75': weekStatus === 'past' }"
    >
      <li v-for="e in week.events" :key="e.slug">
        <span> {{ format(new Date(e.date), 'MMM d') }} </span><br /><span
          class="font-semibold"
          >{{ e.name }}</span
        >
      </li>
    </ul>
    <p v-else class="text-xs italic text-gray-400">&mdash;</p>
  </div>
</template>

<script>
import { isSameWeek, format, isPast, startOfWeek, endOfWeek } from 'date-fns'
import clsx from 'clsx'
import { computed, defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    week: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const date = computed(() => new Date(props.week.week))
    const weekStatus = computed(() => {
      if (isSameWeek(new Date(), date.value, { weekStartsOn: 1 }))
        return 'current'
      if (isPast(date.value)) return 'past'
      return 'future'
    })
    const weekDates = computed(
      () =>
        `${format(
          startOfWeek(date.value, { weekStartsOn: 1 }),
          'MMM d'
        )} → ${format(endOfWeek(date.value, { weekStartsOn: 1 }), 'MMM d')}`
    )
    return {
      format,
      weekStatus,
      weekDates,
      clsx,
    }
  },
})
</script>
