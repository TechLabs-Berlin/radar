<template>
  <div
    :id="milestone.slug"
    class="card timeline-event"
    :class="{ 'archive-striped': inactive }"
  >
    <div class="card-content">
      <p
        class="title has-text-centered"
        :class="{ active: active, inactive: inactive }"
      >
        <Fas i="flag" classes="icon is-large" />
      </p>
      <p class="title has-text-centered">
        {{ milestone.name }}
      </p>
      <p
        v-if="isInFuture && dueSoon"
        class="subtitle has-text-centered"
        :class="{ 'has-text-danger': dueVerySoon }"
      >
        <Fas
          v-if="dueVerySoon"
          classes="icon deadline-icon"
          i="exclamation-circle"
        />
        <span class="milestone-deadline">Due {{ deadlineRelative }}</span>
      </p>
      <p v-else class="subtitle has-text-centered">
        <span class="milestone-deadline">Due {{ deadlineAbsolute }}</span>
      </p>
      <!--eslint-disable vue/no-v-html-->
      <p class="content" v-html="description" />
      <!--eslint-enable-->
      <Todo
        v-for="todo in milestone.todos"
        :key="todo.name"
        :todo="todo"
        :milestone-id="id"
      />
    </div>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'
import { format, formatRelative, differenceInDays } from 'date-fns'
import { enUS } from 'date-fns/locale'
import Fas from '~/components/Fas'
import Todo from '~/components/Todo'
import { sha256 } from '~/assets/crypto'

export default {
  components: {
    Fas,
    Todo
  },
  props: {
    milestone: {
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
      id: '',
      deadlineRelative: '',
      deadlineAbsolute: '',
      dueSoon: false,
      dueVerySoon: false,
      isInFuture: false
    }
  },
  computed: {
    description() {
      const md = new MarkdownIt()
      return md.render(this.milestone.description)
    },
    active() {
      return !this.inactive
    }
  },
  async created() {
    this.updateDates()
    this.updateDatesInterval = setInterval(this.updateDates, 1000)
    this.id = await sha256(this.milestone.name)
  },
  destroyed() {
    clearInterval(this.updateDatesInterval)
  },
  methods: {
    updateDates() {
      this.deadlineRelative = formatRelative(this.milestone.date, new Date(), {
        locale: enUS
      })
      this.deadlineAbsolute =
        format(this.milestone.date, 'EEEE, d. MMMM', {
          locale: enUS
        }) +
        ' at ' +
        format(this.milestone.date, 'p')
      this.dueSoon = differenceInDays(this.milestone.date, new Date()) < 7
      this.dueVerySoon = differenceInDays(this.milestone.date, new Date()) < 2
      this.isInFuture = this.milestone.date > new Date()
    }
  }
}
</script>

<style lang="sass">
@import "~bulma/sass/utilities/_all"
@import "~/assets/variables"
@import "~bulma-checkradio/src/sass/index"

.milestone-deadline
  vertical-align: top

.deadline-icon
  margin-right: 0.25rem
</style>
