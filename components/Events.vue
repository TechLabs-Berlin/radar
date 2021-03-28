<template>
  <div>
    <!-- MILESTONE  -->
    <div class="mb-8">
      <Milestones v-if="milestones.length" :milestones="milestones" />
    </div>
    <!-- PAST EVENTS  -->
    <div v-if="pastEvents.length">
      <div class="flex items-start justify-end h-8">
        <button
          class="flex space-x-4 text-gray-500 focus:outline-none active:outline-none"
          @click="showPastEvents = !showPastEvents"
        >
          <p class="text-center">
            {{ showPastEvents ? 'Hide' : 'Show' }} Past Events
          </p>
          <p class="text-center">
            <TIcon
              :icon="showPastEvents ? 'eye-slash' : 'chevron-up'"
              class="inline-block"
            />
          </p>
        </button>
      </div>
      <EventsPast :events="pastEvents" :show="showPastEvents" />
    </div>

    <!-- CURRENT EVENT  -->
    <div class="mb-8">
      <ClientOnly>
        <EventListItem
          :tl-event="currentEvent"
          is-current-event
          show-permalink
        />
      </ClientOnly>
    </div>
    <!-- FUTURE EVENTS  -->
    <EventsFuture
      v-if="futureEvents.length"
      :events="futureEvents.filter(({ slug }) => slug !== currentEvent.slug)"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { useEvents } from '@/composables/useEvents.js'

export default defineComponent({
  props: {
    events: {
      type: Array,
      default: () => [],
    },
    milestones: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const { pastEvents, currentEvent, futureEvents, isToday } = useEvents(
      props.events
    )

    const showPastEvents = ref(false)

    return { pastEvents, currentEvent, futureEvents, isToday, showPastEvents }
  },
})
</script>
