<template>
  <div class="semester-overview-wrapper">
    <div class="timeline-event">
      <div class="columns is-centered">
        <Phase
          v-for="phase in phases"
          :key="phase.title"
          :title="phase.title"
          :description="phase.description"
          :start-week-num="phase.startWeekNum"
          :duration="phase.duration"
          :current-week-num="currentWeekNum"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getISOWeek } from 'date-fns'
import Phase from '~/components/semester_overview/Phase'
import { phases } from '~/assets/content'

export default {
  components: {
    Phase
  },
  data() {
    return {
      phases,
      currentWeekNum: getISOWeek(new Date())
    }
  }
}
</script>

<style lang="sass">
.semester-overview-wrapper
  margin-bottom: 2rem
</style>
