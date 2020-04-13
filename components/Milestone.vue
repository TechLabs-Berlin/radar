<template>
  <div
    :id="milestone.slug"
    class="card timeline-event"
    :class="{ 'archive-striped': inactive }"
  >
    <div class="card-content">
      <div class="columns is-mobile is-centered is-vcentered">
        <div class="column is-narrow">
          <Fas i="flag" classes="icon is-medium" />
        </div>
        <div class="column is-narrow is-size-4 has-text-weight-semibold">
          {{ milestone.name }}
        </div>
      </div>
      <p
        v-if="deadlineRelative && !inactive"
        class="subtitle has-text-centered has-text-weight-semibold"
        :class="{ 'has-text-danger': dueSoon }"
      >
        <Fas
          v-if="dueSoon"
          classes="icon deadline-icon"
          i="exclamation-circle"
        />
        <span class="milestone-deadline" :title="deadlineAbsolute"
          >Due {{ deadlineRelative }}</span
        >
      </p>
      <p v-else-if="deadlineRelative" class="subtitle has-text-centered">
        <span class="milestone-deadline">Due {{ deadlineAbsolute }}</span>
      </p>
      <p class="content" v-html="description" />
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
import { parseISO, format, formatRelative, differenceInDays } from 'date-fns'
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
      dueSoon: false
    }
  },
  computed: {
    description() {
      const md = new MarkdownIt()
      return md.render(this.milestone.description)
    }
  },
  async created() {
    this.deadlineDate = parseISO(this.milestone.date)
    this.updateDeadline()
    this.updateDeadlineInterval = setInterval(this.updateDeadline, 1000)
    this.id = await sha256(this.milestone.name)
  },
  destroyed() {
    clearInterval(this.updateDeadlineInterval)
  },
  methods: {
    updateDeadline() {
      this.deadlineRelative = formatRelative(this.deadlineDate, new Date())
      this.deadlineAbsolute = format(this.deadlineDate, 'PPPPp')
      this.dueSoon = differenceInDays(this.deadlineDate, new Date()) < 2
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
