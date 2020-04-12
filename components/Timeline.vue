<template>
  <div>
    <a
      v-if="pastEntries.length > 0 && !showsPastEvents"
      class="timeline-show"
      @click="showsPastEvents = true"
    >
      <Fas i="angle-up" />
      <p>Show past events</p>
    </a>
    <div v-if="showsPastEvents">
      <div v-for="entry in pastEntries" :key="entry.name">
        <Event
          v-if="entry.type == 'event'"
          :event="entry"
          :inactive="isPastEntry(entry) || isFutureEntry(entry)"
        />
        <Milestone
          v-if="entry.type == 'milestone'"
          :milestone="entry"
          :inactive="isPastEntry(entry) || isFutureEntry(entry)"
        />
      </div>
    </div>
    <a
      v-if="pastEntries.length > 0 && showsPastEvents"
      class="timeline-show"
      @click="showsPastEvents = false"
    >
      <Fas i="eye-slash" />
      <p>Hide past events</p>
    </a>
    <div v-for="entry in currentEntries" :key="entry.name">
      <Event
        v-if="entry.type == 'event'"
        :event="entry"
        :inactive="isPastEntry(entry) || isFutureEntry(entry)"
      />
      <Milestone
        v-if="entry.type == 'milestone'"
        :milestone="entry"
        :inactive="isPastEntry(entry) || isFutureEntry(entry)"
      />
    </div>
    <a
      v-if="futureEntries.length > 0 && showsFutureEvents"
      class="timeline-show"
      @click="showsFutureEvents = false"
    >
      <Fas i="eye-slash" />
      <p>Hide future events</p>
    </a>
    <div v-if="showsFutureEvents">
      <div v-for="entry in futureEntries" :key="entry.name">
        <Event
          v-if="entry.type == 'event'"
          :event="entry"
          :inactive="isPastEntry(entry) || isFutureEntry(entry)"
        />
        <Milestone
          v-if="entry.type == 'milestone'"
          :milestone="entry"
          :inactive="isPastEntry(entry) || isFutureEntry(entry)"
        />
      </div>
    </div>
    <a
      v-if="futureEntries.length > 0 && !showsFutureEvents"
      class="timeline-show"
      @click="showsFutureEvents = true"
    >
      <p>Show future events</p>
      <Fas i="angle-down" />
    </a>
  </div>
</template>

<script>
import { parseISO, differenceInHours, differenceInDays } from 'date-fns'
import Fas from '~/components/Fas'
import Event from '~/components/Event'
import Milestone from '~/components/Milestone'

const isPastEntry = (e) => differenceInHours(new Date(), parseISO(e.date)) > 12
const isFutureEntry = (e) => differenceInDays(parseISO(e.date), new Date()) > 10

export default {
  components: {
    Fas,
    Event,
    Milestone
  },
  props: {
    entries: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      showsPastEvents: false,
      showsFutureEvents: false
    }
  },
  computed: {
    currentEntries() {
      return this.entries.filter((e) => !isPastEntry(e) && !isFutureEntry(e))
    },
    pastEntries() {
      return this.entries.filter(isPastEntry)
    },
    futureEntries() {
      return this.entries.filter(isFutureEntry)
    },
    shownEntries() {
      let entries = []
      if (this.showsPastEvents) {
        entries = entries.concat(this.pastEntries)
      }
      entries = entries.concat(this.currentEntries)
      if (this.showsFutureEvents) {
        entries = entries.concat(this.futureEntries)
      }
      return entries
    }
  },
  methods: {
    isPastEntry,
    isFutureEntry
  }
}
</script>

<style lang="sass">
@import "~bulma/sass/utilities/_all"
@import "~assets/variables"
@import "~bulma/sass/base/helpers"

.timeline-show
  @extend .has-text-centered
  color: $grey
  display: block
</style>
