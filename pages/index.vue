<script>
import {
  useFetch,
  defineComponent,
  useContext,
  ref,
  useMeta,
} from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const { title } = useMeta()
    title.value = 'Timeline'
    const { $content } = useContext()
    const events = ref()
    const timeline = ref()
    const milestones = ref()
    const isPublic = ref(process.env.SCOPE === 'public')
    useFetch(async () => {
      if (isPublic.value) {
        events.value = await $content('/events')
          .sortBy('date')
          .where({ is_public: { $eq: true } })
          .fetch()
        timeline.value = []
        milestones.value = []
      } else {
        events.value = await $content('/events').sortBy('date').fetch()
        timeline.value = await $content('timeline').fetch()
        milestones.value = await $content('/milestones')
          .sortBy('deadline')
          .fetch()
      }
    })

    return {
      events,
      timeline,
      milestones,
      isPublic,
    }
  },
  head: {},
})
</script>

<template>
  <main class="h-full bg-gray-50">
    <div
      v-if="!$fetchState.pending"
      class="w-full"
      :class="isPublic ? 'max-w-2xl mx-auto' : 'main-grid'"
    >
      <div v-if="!isPublic" class="w-64 mx-auto timeline">
        <h3 class="md:hidden title-with-lines">Timeline</h3>
        <ClientOnly>
          <Timeline
            :timeline="timeline"
            :events="events"
            :milestones="milestones"
          />
        </ClientOnly>
      </div>
      <div class="events">
        <div v-if="events && events.length">
          <ClientOnly>
            <Events :events="events" :milestones="milestones" />
          </ClientOnly>
        </div>
        <div v-else>
          <WrapperContentBox>
            <p class="prose text-center">
              We are preparing the next term for you.<br />Stay tuned.
            </p></WrapperContentBox
          >
        </div>
      </div>
    </div>
  </main>
</template>

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
