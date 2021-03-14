<template>
  <div v-if="events.length">
    <div>
      <!-- PAST EVENTS  -->
      <EventsPast
        v-if="pastEvents.length"
        :events="pastEvents"
        :show="showPastEvents"
      />
      <!-- CURRENT EVENT  -->
      <div class="mb-8">
        <EventListItem
          :tl-event="currentEvent"
          is-current-event
          :show-resources="isToday(currentEvent.date)"
        />
      </div>
      <!-- FUTURE EVENTS  -->
      <EventsFuture
        v-if="futureEvents.length"
        :events="futureEvents.filter(({ slug }) => slug !== currentEvent.slug)"
      />
    </div>
  </div>
  <div v-else>
    <WrapperContentBox>
      <p class="prose text-center">
        We are preparing the next term for you.<br />Stay tuned.
      </p></WrapperContentBox
    >
  </div>
</template>

<script>
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { isToday, isPast, isFuture, closestTo, isSameDay } from 'date-fns'

export default defineComponent({
  props: {
    showPastEvents: {
      type: Boolean,
    },
    events: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const events = computed(() =>
      props.events.map((e) => ({ ...e, date: new Date(e.date) }))
    )
    const pastEvents = computed(() =>
      events.value.filter(({ date }) => isPast(date) && !isToday(date))
    )

    const futureEvents = computed(() =>
      events.value.filter(({ date }) => isFuture(date) || isToday(date))
    )

    const currentEvent = computed(() => {
      const futureDates = futureEvents.value.map(({ date }) => date)
      const closestDate = closestTo(new Date(), futureDates)
      return futureEvents.value.find(({ date }) => isSameDay(date, closestDate))
    })

    return { pastEvents, currentEvent, futureEvents, isToday }
  },
})
</script>
