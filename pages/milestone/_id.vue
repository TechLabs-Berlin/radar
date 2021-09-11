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
import {
  defineComponent,
  ref,
  useRoute,
  computed,
  useMeta,
  useContext,
} from '@nuxtjs/composition-api'
import MilestoneListItem from '@/components/MilestoneListItem'

export default defineComponent({
  components: { MilestoneListItem },
  setup() {
    const milestone = ref()
    const route = useRoute()
    const id = computed(() => route.value.params.id)
    const { title } = useMeta()
    const { $store } = useContext()

    milestone.value = $store.milestones.find(
      (milestone) => milestone.id === id.value
    )
    title.value = milestone.value.title

    return { milestone }
  },
  head: {},
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
