<template>
  <div class="p-8 bg-white border shadow-lg rounded-xl">
    <ul v-if="compiledTimeline.length" class="space-y-8">
      <li v-for="milestone in compiledTimeline" :key="milestone.startDate">
        <!-- phase title  -->
        <h3
          class="flex items-center justify-between mb-4 text-xs font-semibold tracking-wide uppercase"
        >
          <span>{{ milestone.title }}</span
          ><span
            v-tippy="{ placement: 'right', theme: 'tl' }"
            class="py-1 pl-2 text-gray-500"
            :content="milestone.description"
            ><TIcon icon="question-circle"
          /></span>
        </h3>

        <!-- weeks  -->
        <div class="space-y-4">
          <TimelineWeek
            v-for="week in milestone.weeks"
            :key="week.number"
            :week="week"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { eachWeekOfInterval, isSameWeek } from 'date-fns'

export default defineComponent({
  props: {
    timeline: {
      type: Object,
      required: true,
    },
    events: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const compiledTimeline = ref(compileTimeline(props.timeline))

    function compileTimeline({ timeline }) {
      if (!timeline) return []
      let weekNumber = 1
      return timeline.map((milestone) => {
        const start = new Date(milestone.startDate)
        const end = new Date(milestone.endDate)
        const weeks = eachWeekOfInterval({ start, end }, { weekStartsOn: 1 })
        const objWeeks = weeks.map((week) => {
          const number = weekNumber
          const events = findWeekEvents(week, props.events)
          weekNumber++
          return {
            number,
            events,
            week,
          }
        })
        return {
          ...milestone,
          weeks: objWeeks,
        }
      })
    }

    function findWeekEvents(week, events) {
      return events.filter((e) => isSameWeek(new Date(week), new Date(e.date)))
    }

    return { compiledTimeline }
  },
})
</script>
