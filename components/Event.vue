<template>
  <div
    :id="event.slug"
    class="card timeline-event"
    :class="{ 'archive-striped': inactive }"
  >
    <div class="card-content">
      <p
        class="title has-text-centered"
        :class="{ active: active, inactive: inactive }"
      >
        <Fas i="calendar-day" classes="icon is-large" />
      </p>
      <p class="title has-text-centered">
        {{ event.name }}
      </p>
      <p
        v-if="isInFuture"
        class="subtitle has-text-centered"
        :class="{ 'has-text-danger': happeningVerySoon }"
      >
        <Fas
          v-if="happeningVerySoon"
          classes="icon deadline-icon"
          i="exclamation-circle"
        />
        <span class="event-date">
          Takes place
          <template v-if="happeningSoon">{{ dateRelative }}</template>
          <template v-else>{{ dateAbsolute }}</template>
        </span>
      </p>
      <p v-else class="subtitle has-text-centered">
        <span class="event-date">Took place on {{ dateAbsolute }}</span>
      </p>
      <div class="columns">
        <div class="column content" :class="{ 'is-three-fifths': showSidebar }">
          <!--eslint-disable vue/no-v-html-->
          <div class="event-description" v-html="description" />
          <!--eslint-enable-->
          <div v-if="!hidePermalink" class="permalink-left">
            <nuxt-link :to="'/events/' + event.slug"
              ><Fas i="share-square" classes="icon is-small" />&nbsp;
              Permalink</nuxt-link
            >
          </div>
        </div>
        <div v-if="showSidebar" class="column">
          <div
            v-if="!hideForms && event.forms.length > 0"
            class="resource-group"
          >
            <h4 class="resource-heading subtitle is-4">
              Forms
            </h4>
            <FormLink
              v-for="form in event.forms"
              :key="form.url"
              :resource="form"
              :to="'/events/' + event.slug"
            />
          </div>
          <div v-if="event.resources.length > 0" class="resource-group">
            <h4 class="resource-heading subtitle is-4">
              Resources
            </h4>
            <Resource
              v-for="resource in event.resources"
              :key="resource.url"
              :resource="resource"
            />
          </div>
          <div v-if="!hidePermalink" class="permalink-right">
            <nuxt-link :to="'/events/' + event.slug"
              ><Fas i="share-square" classes="icon is-small" />&nbsp;
              Permalink</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'
import { format, formatRelative, differenceInDays } from 'date-fns'
import { enUS } from 'date-fns/locale'
import Resource from '~/components/Resource.vue'
import Fas from '~/components/Fas.vue'
import FormLink from '~/components/FormLink.vue'

export default {
  components: {
    Resource,
    Fas,
    FormLink
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
    },
    hidePermalink: {
      type: Boolean,
      required: false,
      default: false
    },
    hideForms: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      dateRelative: '',
      dateAbsolute: '',
      happeningSoon: false,
      happeningVerySoon: false,
      isInFuture: false
    }
  },
  computed: {
    description() {
      const md = new MarkdownIt()
      return md.render(this.event.description)
    },
    active() {
      return !this.inactive
    },
    showSidebar() {
      return this.event.forms.length > 0 || this.event.resources.length > 0
    }
  },
  created() {
    this.updateDates()
    this.updateDatesInterval = setInterval(this.updateDates, 1000)
  },
  methods: {
    updateDates() {
      this.dateRelative = formatRelative(this.event.date, new Date(), {
        locale: enUS
      })
      this.dateAbsolute =
        format(this.event.date, 'EEEE, d. MMMM', {
          locale: enUS
        }) +
        ' at ' +
        format(this.event.date, 'p')
      this.happeningVerySoon = differenceInDays(this.event.date, new Date()) < 2
      this.happeningSoon = differenceInDays(this.event.date, new Date()) < 7
      this.isInFuture = this.event.date > new Date()
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
@import "~bulma/sass/components/navbar"

.resource-group:not(:last-child)
  margin-bottom: 2rem

.event-date
  vertical-align: top

.event-description
  padding-bottom: 2rem

.permalink-left
  display: none
  +from($tablet)
    display: block
    position: absolute
    bottom: 2rem

.permalink-right
  @extend .has-text-centered
  +from($tablet)
    display: none
</style>
