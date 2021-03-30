<template>
  <main>
    <div class="space-y-4 lg:mx-auto lg:max-w-2xl">
      <NuxtLink to="/" class="text-gray-500 hover:text-gray-700"
        ><TIcon icon="chevron-left" class="inline-block" /> Back to the
        Timeline</NuxtLink
      >
      <WrapperContentBox v-if="$fetchState.pending"
        >Loading...</WrapperContentBox
      >
      <MilestoneListItem
        v-else-if="milestone[0]"
        :milestone="milestone[0]"
        always-show-tasks
      />
    </div>
  </main>
</template>

<script>
import {
  defineComponent,
  useContext,
  useFetch,
  useRoute,
  ref,
  useMeta,
} from '@nuxtjs/composition-api'
import MilestoneListItem from '~/components/MilestoneListItem.vue'

export default defineComponent({
  components: { MilestoneListItem },
  setup() {
    const { $content } = useContext()
    const route = useRoute()
    const milestone = ref()
    useFetch(
      async () =>
        (milestone.value = await $content('/milestones')
          .where({ slug: route.value.params.slug })
          .limit(1)
          .fetch())
    )
    useMeta(() => ({
      title: milestone.value ? milestone.value[0].title : 'Milestone',
    }))

    return {
      milestone,
    }
  },
  head: {},
})
</script>

<style lang="postcss" scoped>
.link-grid {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: max-content;
}
</style>
