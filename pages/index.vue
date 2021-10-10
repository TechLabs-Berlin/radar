<script>
import {
  defineComponent,
  useContext,
  ref,
  useMeta,
  useFetch,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { title } = useMeta()
    title.value = 'Timeline'
    const { $content, $store, $config } = useContext()
    const events = ref([])
    const timeline = ref([])
    const milestones = ref([])
    const announcement = ref()
    const isPublic = ref($config.scope === 'public')
    useFetch(async () => {
      events.value = $store.events
      milestones.value = $store.milestones
      timeline.value = $store.timeline
      announcement.value = await $content('announcement').fetch()
    })

    return {
      events,
      timeline,
      milestones,
      isPublic,
      announcement,
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

        <Timeline
          :timeline="timeline"
          :events="events"
          :milestones="milestones"
        />
      </div>
      <div class="events">
        <div v-if="events && events.length">
          <ClientOnly>
            <Events :events="events" :milestones="milestones" />
          </ClientOnly>
        </div>
        <!-- <div v-if="announcement && announcement.publish">
          <WrapperContentBox> -->
        <!-- eslint-disable-next-line vue/no-v-html -->
        <!-- <div
              class="prose text-center"
              v-html="$md.render(announcement.body)"
            />
          </WrapperContentBox>
        </div> -->
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
