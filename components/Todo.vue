<template>
  <div class="todo field">
    <input
      :id="milestoneId + '-' + id"
      v-model="done"
      class="is-checkradio is-medium"
      type="checkbox"
      name="exampleCheckboxLarge"
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
