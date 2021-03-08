<template>
  <div class="p-8 border rounded-xl">
    <ul v-if="timeline.length" class="space-y-8">
      <li v-for="(milestone, i) in timeline" :key="milestone.startDate">
        <!-- phase title  -->
        <h3
          class="flex items-center justify-between mb-4 text-xs font-semibold tracking-wide uppercase"
        >
          <span>{{ milestone.title }}</span
          ><span :name="`info-${i}`" class="text-gray-500"
            ><TIcon icon="question-circle"
          /></span>
        </h3>
        <Tippy :to="`info-${i}`" theme="tl" placement="right">
          <p class="p-2 text-left">{{ milestone.description }}</p>
        </Tippy>
        <!-- weeks  -->
        <ul class="space-y-4">
          <li
            v-for="week in milestone.weeks"
            :key="week.number"
            class="flex items-center justify-center w-10 h-10 border rounded-lg shadow"
          >
            {{ week.number }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  defineComponent,
  useFetch,
  useContext,
  ref,
  computed,
} from '@nuxtjs/composition-api'
import { eachWeekOfInterval } from 'date-fns'

export default defineComponent({
  setup() {
    const { $content } = useContext()

    const timelineContent = ref('')

    const { fetch, fetchState } = useFetch(async () => {
      timelineContent.value = await $content('timeline').fetch()
    })
    const timeline = computed(() =>
      timelineContent.value ? compileTimeline(timelineContent.value) : []
    )
    function compileTimeline({ timeline }) {
      let weekNumber = 1
      return timeline.map((milestone) => {
        const start = new Date(milestone.startDate)
        const end = new Date(milestone.endDate)
        const weeks = eachWeekOfInterval({ start, end }, { weekStartsOn: 1 })
        weeks.forEach((week) => {
          week.number = weekNumber
          weekNumber++
        })
        return {
          ...milestone,
          weeks,
        }
      })
    }

    return { timeline, fetch, fetchState, timelineContent }
  },
})
</script>
