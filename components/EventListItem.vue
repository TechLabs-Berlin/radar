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
        <div class="prose" v-html="$md.render(tlEvent.description)" />
      </main>
    </article>
  </WrapperContentBox>
</template>

<script>
import { format, isPast } from 'date-fns'
import { defineComponent } from '@nuxtjs/composition-api'

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

    return {
      format,
      isPast,
      eventDate,
    }
  },
})
</script>
