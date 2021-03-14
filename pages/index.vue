<template>
  <main class="h-full bg-gray-50">
    <div class="w-full main-grid">
      <div class="w-64 mx-auto timeline">
        <h3 class="md:hidden title-with-lines">Timeline</h3>
        <Timeline :timeline="timeline" :events="events" />
      </div>
      <div class="events">
        <Events :events="events" />
      </div>
    </div>
  </main>
</template>

<script>
import { useAsync, defineComponent, useContext } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const { $content } = useContext()
    const events = useAsync(() => $content('/events').sortBy('date').fetch())
    const timeline = useAsync(() => $content('timeline').fetch())

    return {
      events,
      timeline,
    }
  },
})
</script>

<style lang="scss" scoped>
.main-grid {
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr;
  grid-template-areas: 'events' 'timeline';
}

@screen md {
  .main-grid {
    grid-column-gap: 1rem;
    grid-template-columns: min-content 1fr;
    grid-template-areas: 'timeline events';
  }
}

@screen lg {
  .main-grid {
    grid-gap: 2rem;
  }
}
.timeline {
  grid-area: timeline;
}
.events {
  grid-area: events;
}
</style>
