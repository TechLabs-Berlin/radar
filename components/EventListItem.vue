<template>
  <WrapperContentBox :faded="isPastEvent" :emphasized="isCurrentEvent">
    <article class="relative pt-8 lg:pt-0">
      <Stamp v-if="isCurrentEvent" :date="eventDate" />
      <header class="flex flex-col items-center mb-8">
        <p
          class="mb-4 text-4xl font-bold text-center"
          :class="isCurrentEvent ? 'text-pink-600' : 'text-gray-400'"
        >
          <TIcon icon="calendar-day" class="inline-block" />
        </p>
        <template v-if="showPermalink">
          <NuxtLink :to="`/event/${tlEvent.slug}`" class="title-link">
            <h2
              class="relative inline-block mb-1 text-2xl font-bold hover:underline"
            >
              {{ tlEvent.name }}
              <div
                class="absolute top-0 right-0 hidden pl-2 text-base text-blue-600 transform translate-x-full translate-y-1 icon"
              >
                <TIcon icon="link" class="inline-block" />
              </div></h2
          ></NuxtLink>
        </template>
        <template v-else>
          <h2 class="inline-block mb-1 text-2xl font-bold">
            {{ tlEvent.name }}
          </h2>
        </template>

        <div>
          <p class="text-lg text-center">
            {{ isPast(eventDate) ? 'Took' : 'Takes' }} place on
            {{ format(eventDate, "MMMM do, 'at' h:mm aaaa") }}
          </p>
        </div>
      </header>
      <main>
        <!-- BODY  -->
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="pb-10 prose" v-html="$md.render(tlEvent.description)" />
      </main>
      <!-- RESOURCES  -->
      <aside v-if="showResources && hasResources" class="space-y-8">
        <EventListItemResourceList
          v-if="isCurrentEvent && tlEvent.meetings && tlEvent.meetings.length"
          :resources="tlEvent.meetings"
          title="Meeting Rooms"
        />

        <EventListItemResourceList
          v-if="tlEvent.forms && tlEvent.forms.length"
          :resources="tlEvent.forms"
          title="Forms"
        />
        <EventListItemResourceList
          v-if="tlEvent.resources && tlEvent.resources.length"
          :resources="tlEvent.resources"
          title="Resources"
        />
      </aside>
      <aside v-else-if="isCurrentEvent">
        <p class="italic text-center text-gray-400">
          Links and other resources will be posted soon!
        </p>
      </aside>
    </article>
  </WrapperContentBox>
</template>

<script>
import { format, isPast } from 'date-fns'
import { defineComponent, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    tlEvent: {
      type: Object,
      required: true,
    },
    isCurrentEvent: {
      type: Boolean,
    },
    isPastEvent: {
      type: Boolean,
    },
    showResources: {
      type: Boolean,
    },
    showPermalink: {
      type: Boolean,
    },
  },
  setup(props) {
    const eventDate = new Date(props.tlEvent.date)
    const hasResources = computed(
      () =>
        props.tlEvent.resources || props.tlEvent.forms || props.tlEvent.meetings
    )
    return {
      format,
      isPast,
      eventDate,
      hasResources,
    }
  },
})
</script>
<style lang="scss" scoped>
.title-link:hover .icon {
  @apply inline-block;
}
</style>
