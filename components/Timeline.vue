<template>
  <div class="w-full">
    <div class="w-full p-8 mx-auto bg-white border shadow-lg rounded-xl">
      <ul v-if="compiledTimeline.length" class="space-y-8">
        <li v-for="period in compiledTimeline" :key="period.id">
          <!-- phase title  -->
          <h3
            class="
              flex
              items-center
              justify-between
              mb-4
              text-xs
              font-semibold
              tracking-wide
              uppercase
            "
          >
            <span>{{ period.title }}</span
            ><span
              v-tippy="{ placement: 'right', theme: 'tl' }"
              class="py-1 pl-2 text-gray-500"
              :content="period.description"
              ><TIcon icon="question-circle"
            /></span>
          </h3>

          <!-- weeks  -->
          <div class="space-y-4">
            <TimelineWeek
              v-for="week in period.weeks"
              :key="week.number"
              :week="week"
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { eachWeekOfInterval, isSameWeek, startOfDay, endOfDay } from 'date-fns'

export default defineComponent({
  props: {
    timeline: {
      type: Array,
      required: true,
    },
    events: {
      type: Array,
      default: () => [],
    },
    milestones: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const compiledTimeline = ref(compileTimeline(props.timeline, 1))

    function compileTimeline(timeline, startsAt) {
      if (!timeline) return []
      let weekNumber = startsAt
      return timeline.map((period) => {
        const start = startOfDay(new Date(period.dates.start))
        const end = endOfDay(new Date(period.dates.end))
        const weeks = eachWeekOfInterval({ start, end }, { weekStartsOn: 1 })
        const objWeeks = weeks.map((week) => {
          const number = weekNumber
          const events = findWeekEvents(week, props.events)
          const milestones = findWeekMilestones(week, props.milestones)
          weekNumber++
          return {
            number,
            events,
            milestones,
            week,
          }
        })
        return {
          ...period,
          weeks: objWeeks,
        }
      })
    }

    function findWeekEvents(week, events) {
      // return false
      return events.filter((e) =>
        isSameWeek(new Date(week), new Date(e.datetime.start), {
          weekStartsOn: 1,
        })
      )
    }
    function findWeekMilestones(week, milestones) {
      return milestones.filter((e) =>
        isSameWeek(new Date(week), new Date(e.deadline), {
          weekStartsOn: 1,
        })
      )
    }

    return { compiledTimeline }
  },
})
</script>
