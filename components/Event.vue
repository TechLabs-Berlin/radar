<template>
  <div
    :id="event.slug"
    class="card timeline-event"
    :class="{ 'archive-striped': inactive }"
  >
    <div class="card-content">
      <p class="event-icon" :class="{ active: active, inactive: inactive }">
        <Fas i="calendar-day" classes="icon is-large" />
      </p>
      <p class="title has-text-centered">
        {{ event.name }}
      </p>
      <p
        v-if="dateRelative && !inactive"
        class="subtitle has-text-centered has-text-weight-semibold"
        :class="{ 'has-text-danger': happeningSoon }"
      >
        <Fas
          v-if="happeningSoon"
          classes="icon deadline-icon"
          i="exclamation-circle"
        />
        <span class="event-date" :title="dateAbsolute"
          >Takes place on {{ dateRelative }}</span
        >
      </p>
      <p v-else-if="dateRelative" class="subtitle has-text-centered">
        <span class="event-date">On {{ dateAbsolute }}</span>
      </p>
      <div class="columns">
        <div class="column is-three-fifths content" v-html="description" />
        <div v-if="event.resources.length > 0" class="column">
          <h4 class="resource-heading subtitle is-4">
            Resources
          </h4>
          <Resource
            v-for="resource in event.resources"
            :key="resource.url"
            :resource="resource"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'
import { parseISO, format, formatRelative, differenceInDays } from 'date-fns'
import Resource from '~/components/Resource.vue'
import Fas from '~/components/Fas.vue'

export default {
  components: {
    Resource,
    Fas
  },
  props: {
    event: {
      type: Object,
      required: true
    },
    inactive: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      dateRelative: '',
      dateAbsolute: '',
      happeningSoon: false
    }
  },
  computed: {
    description() {
      const md = new MarkdownIt()
      return md.render(this.event.description)
    },
    active() {
      return !this.inactive
    }
  },
  created() {
    this.date = parseISO(this.event.date)
    this.updateDate()
    this.updateDateInterval = setInterval(this.updateDeadline, 1000)
  },
  methods: {
    updateDate() {
      this.dateRelative = formatRelative(this.date, new Date())
      this.dateAbsolute = format(this.date, 'PPPPp')
      this.happeningSoon = differenceInDays(this.date, new Date()) < 2
    }
  }
}
</script>

<style lang="sass">
@import "~bulma/sass/utilities/initial-variables"
@import "~assets/variables"
@import "~bulma/sass/utilities/_all"
@import "~bulma/sass/base/helpers"
@import "~bulma/sass/elements/title"

.resource-heading
  margin-bottom: 0.75rem !important

.event-icon
  @extend .title
  @extend .has-text-centered

.event-date
  vertical-align: top
</style>
