<template>
  <main class="h-full bg-gray-50">
    <div class="container px-4 py-8 mx-auto main-grid">
      <div class="justify-self-end show-past-events">
        <button
          class="flex mb-4 space-x-4 text-gray-500 focus:outline-none active:outline-none"
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

      <div class="w-64 justify-self-end timeline">
        <Timeline :timeline="timeline" :events="events" />
      </div>
      <div class="max-w-2xl events">
        <Events :events="events" :show-past-events="showPastEvents" />
      </div>
    </div>
  </main>
</template>

<script>
import {
  useAsync,
  defineComponent,
  useContext,
  ref,
} from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const { $content } = useContext()
    const events = useAsync(() => $content('/events').sortBy('date').fetch())
    const timeline = useAsync(() => $content('timeline').fetch())

    const showPastEvents = ref(false)
    return {
      events,
      timeline,
      showPastEvents,
    }
  },
})
</script>

<style lang="scss" scoped>
.main-grid {
  display: grid;
  grid-column-gap: 2rem;
  grid-template-columns: auto min-content 42rem auto;
  grid-template-rows: auto 1fr;
  grid-template-areas: '. . show-past-events .' '. timeline events .';
}
.show-past-events {
  grid-area: show-past-events;
}
.timeline {
  grid-area: timeline;
}
.events {
  grid-area: events;
}
</style>
