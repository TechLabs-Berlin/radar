<template>
  <div class="todo field">
    <input
      :id="milestoneId + '-' + id"
      v-model="done"
      class="is-checkradio is-medium"
      type="checkbox"
      name="exampleCheckboxLarge"
      @click="toggleDone"
    />
    <label :for="milestoneId + '-' + id" :class="{ 'todo-done': done }"
      >{{ todo.name }}
    </label>
    <p class="todo-resources">
      <Resource
        v-for="resource in todo.resources"
        :key="resource.url"
        :resource="resource"
        :inline="true"
      />
    </p>
  </div>
</template>

<script>
import Resource from '~/components/Resource'
import { sha256 } from '~/assets/crypto'

function fullID(milestoneId, todoId) {
  return sha256(milestoneId + '-' + todoId)
}

export default {
  components: {
    Resource
  },
  props: {
    todo: {
      type: Object,
      required: true
    },
    milestoneId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      id: '',
      done: false
    }
  },
  async created() {
    this.id = await sha256(this.todo.name)
    const _fullID = await fullID(this.milestoneId, this.id)
    this.done = this.$store.state.todos.done.includes(_fullID)
  },
  methods: {
    async toggleDone() {
      this.done = !this.done
      const _fullID = await fullID(this.milestoneId, this.id)
      if (this.done) {
        this.$store.commit('todos/add', _fullID)
      } else {
        this.$store.commit('todos/remove', _fullID)
      }
    }
  }
}
</script>

<style lang="sass">
@import "~bulma/sass/utilities/_all"
@import "~assets/variables"
@import "~bulma/sass/base/helpers"

.todo:not(:last-child)
  margin-bottom: 1.5rem

.todo-done
  @extend .has-text-grey
  text-decoration: line-through;

.todo-resources
  margin-top: .5rem
  margin-left: 2.5rem
</style>
