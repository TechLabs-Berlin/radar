<template>
  <div>
    <!-- <div>
      <button>
        <TIcon
          icon="chevron-left"
          class="inline-block text-4xl text-gray-300"
        />
      </button>
    </div> -->
    <MilestoneListItem v-if="currentMilestone" :milestone="currentMilestone" />
    <!-- <div>
      <button>
        <TIcon
          icon="chevron-right"
          class="inline-block text-4xl text-gray-300"
        />
      </button>
    </div> -->
  </div>
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'
import { isPast, isFuture } from 'date-fns'

export default defineComponent({
  props: {
    milestones: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const milestones = props.milestones.map((milestone) => ({
      ...milestone,
      deadline: new Date(milestone.deadline),
    }))

    const pastMilestones = computed(() =>
      milestones.filter(({ deadline }) => isPast(deadline))
    )
    const futureMilestones = computed(() =>
      milestones.filter(({ deadline }) => isFuture(deadline))
    )
    const currentMilestone = computed(() =>
      futureMilestones.value && futureMilestones.value.length
        ? futureMilestones.value[0]
        : null
    )

    return {
      pastMilestones,
      futureMilestones,
      currentMilestone,
    }
  },
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
