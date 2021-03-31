<template>
  <main>
    <div class="space-y-4 lg:mx-auto lg:max-w-2xl">
      <NuxtLink to="/" class="text-gray-500 hover:text-gray-700"
        ><TIcon icon="chevron-left" class="inline-block" /> Back to the
        Timeline</NuxtLink
      >

      <MilestoneListItem
        v-if="milestone"
        :milestone="milestone"
        always-show-tasks
      />
    </div>
  </main>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import MilestoneListItem from '@/components/MilestoneListItem'

export default defineComponent({
  components: { MilestoneListItem },
  async asyncData({ $content, params }) {
    const milestone = await $content('milestones', params.slug).fetch()
    return {
      milestone,
    }
  },
  data() {
    return {
      milestone: null,
    }
  },
  head() {
    return {
      title: this.milestone.title,
    }
  },
})
</script>

<style scoped>
.link-grid {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: max-content;
}
</style>
