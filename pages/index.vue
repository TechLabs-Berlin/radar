<script setup>
useHead({ title: 'Timeline' })

const isPublic = useIsPublic()
const { data: events } = await useEventList()
// the public version of the Radar only shows events
const milestones = isPublic ? ref([]) : (await useMilestoneList()).data
const timeline = isPublic ? ref(null) : (await useSingleDoc('timeline')).data
const { data: announcement } = await useSingleDoc('announcement')
</script>

<template>
  <main class="h-full bg-gray-50">
    <div class="w-full" :class="isPublic ? 'max-w-2xl mx-auto' : 'main-grid'">
      <div v-if="!isPublic && timeline" class="w-64 mx-auto timeline">
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
        <div v-if="announcement && announcement.publish">
          <WrapperContentBox>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div
              class="prose text-center"
              v-html="$md.render(announcement.body)"
            />
          </WrapperContentBox>
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
