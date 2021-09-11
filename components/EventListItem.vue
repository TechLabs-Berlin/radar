<template>
  <WrapperContentBox
    :faded="isPastDate && !isLive"
    :emphasized="isCurrentEvent"
  >
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
          <NuxtLink :to="`/event/${tlEvent.id}`" class="title-link">
            <h2
              class="
                relative
                inline-block
                mb-1
                text-2xl
                font-bold
                hover:underline
              "
            >
              {{ tlEvent.title }}
              <div
                class="
                  absolute
                  top-0
                  right-0
                  hidden
                  pl-2
                  text-base text-blue-600
                  transform
                  translate-x-full translate-y-1
                  icon
                "
              >
                <TIcon icon="link" class="inline-block" />
              </div></h2
          ></NuxtLink>
        </template>
        <template v-else>
          <h2 class="inline-block mb-1 text-2xl font-bold">
            {{ tlEvent.title }}
          </h2>
        </template>

        <div>
          <p class="text-lg text-center">
            {{ verb }} place on
            {{ format(eventDate, "MMMM do, 'at' h:mm aaaa") }}
          </p>
        </div>
      </header>
      <main>
        <!-- BODY  -->
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="pb-10 prose" v-html="tlEvent.content.html" />
      </main>
      <!-- RESOURCES  -->
      <aside v-if="hasResources" class="space-y-8">
        <template
          v-if="
            (isInOneHour || isLive) &&
            tlEvent.meetings &&
            tlEvent.meetings.length
          "
        >
          <EventListItemResourceList
            :resources="tlEvent.links.meetings"
            title="Meeting Rooms"
          />
        </template>
        <template v-else-if="isCurrentEvent">
          <p class="italic text-center text-gray-400">
            Other event links will be posted soon!
          </p>
        </template>
        <template
          v-if="isLive || isPastDate || showResources || tlEvent.showResources"
        >
          <EventListItemResourceList
            v-if="tlEvent.links.forms && tlEvent.links.forms.length"
            :resources="tlEvent.links.forms"
            title="Forms"
          />
          <EventListItemResourceList
            v-if="tlEvent.links.other && tlEvent.links.other.length"
            :resources="tlEvent.links.other"
            title="Resources"
          />
        </template>
      </aside>
    </article>
  </WrapperContentBox>
</template>

<script>
import { format } from 'date-fns'
import { defineComponent, computed } from '@nuxtjs/composition-api'
import { useEvent } from '@/composables/useEvent'

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
    const eventDate = new Date(props.tlEvent.datetime.start)
    const { isPastDate, isFutureDate, isLive, isInOneHour } = useEvent({
      ...props.tlEvent,
      datetime: { start: eventDate },
    })
    const hasResources = computed(() => Boolean(props.tlEvent.links.length))

    const verb = computed(() => {
      if (isLive.value) return 'Taking'
      if (isPastDate.value) return 'Took'
      return 'Takes'
    })

    return {
      format,
      eventDate,
      hasResources,
      isInOneHour,
      isLive,
      isPastDate,
      isFutureDate,
      verb,
    }
  },
})
</script>
<style lang="scss" scoped>
.title-link:hover .icon {
  @apply inline-block;
}
</style>
