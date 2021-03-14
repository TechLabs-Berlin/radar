<template>
  <WrapperContentBox :faded="isPastEvent" :emphasized="isCurrentEvent">
    <article class="space-y-8">
      <header>
        <p
          class="mb-4 text-4xl font-bold text-center"
          :class="isCurrentEvent ? 'text-pink-600' : 'text-gray-400'"
        >
          <TIcon icon="calendar-day" class="inline-block" />
        </p>
        <h2 class="text-2xl font-bold text-center">{{ tlEvent.name }}</h2>
        <p class="text-lg text-center">
          {{ isPast(eventDate) ? 'Took' : 'Takes' }} place on
          {{ format(eventDate, "MMMM do, 'at' h:mm aaaa") }}
        </p>
      </header>
      <main>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="pb-10 prose" v-html="$md.render(tlEvent.description)" />
        <aside v-if="hasResources" class="space-y-8">
          <EventListItemResourceList
            v-if="tlEvent.meetings"
            :resources="tlEvent.meetings"
            title="Meeting Rooms"
          />
          <EventListItemResourceList
            v-if="tlEvent.forms"
            :resources="tlEvent.forms"
            title="Forms"
          />
          <EventListItemResourceList
            v-if="tlEvent.resources"
            :resources="tlEvent.resources"
            title="Other Resources"
          />
        </aside>
      </main>
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
