<template>
  <div>
    <h3 class="title-with-lines">{{ title }}</h3>
    <ul class="link-grid">
      <li v-for="resource in resources" :key="resource.title">
        <ResourceListItem :resource="resource" />
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    resources: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: '',
    },
  },
  setup() {
    return {}
  },
})
</script>
