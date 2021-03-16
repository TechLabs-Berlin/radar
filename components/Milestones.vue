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
    <WrapperContentBox v-if="currentMilestone">
      <article class="relative pt-8 lg:pt-0">
        <header class="mb-8">
          <p class="mb-4 text-4xl font-bold text-center text-pink-600">
            <TIcon icon="clipboard-list" class="inline-block" />
          </p>
          <h2 class="text-2xl font-bold text-center">
            {{ currentMilestone.title }}
          </h2>
          <p class="mb-4 text-lg text-center">
            Due
            {{
              format(
                new Date(currentMilestone.deadline),
                "MMMM do, 'at' h:mm aaaa"
              )
            }}
          </p>
        </header>

        <main v-if="currentMilestone.todos.length" class="space-y-8">
          <p class="text-center">
            <button
              v-if="showTasks"
              class="px-2 py-1 text-sm font-semibold tracking-wide uppercase border-2 rounded-lg"
              @click="toggleTasks"
            >
              <TIcon icon="eye-slash" class="inline-block" /> Hide tasks
            </button>
            <button
              v-else
              class="px-2 py-1 text-sm font-semibold tracking-wide uppercase border-2 rounded-lg"
              @click="toggleTasks"
            >
              <TIcon icon="chevron-down" class="inline-block" /> Show tasks
            </button>
          </p>
          <ul v-if="showTasks" class="space-y-8 text-lg">
            <li
              v-for="todo in currentMilestone.todos"
              :key="todo.name"
              class="flex space-x-4"
            >
              <div>
                <TIcon icon="check-square" class="text-2xl text-blue-600" />
              </div>
              <div>
                <p>{{ todo.name }}</p>
                <ul v-if="todo.resources" class="mt-4 link-grid">
                  <li v-for="resource in todo.resources" :key="resource.title">
                    <ResourceListItem :resource="resource" />
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </main>
      </article>
    </WrapperContentBox>
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
import { defineComponent, computed, ref } from '@nuxtjs/composition-api'
import { isPast, isFuture, format } from 'date-fns'

export default defineComponent({
  props: {
    milestones: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const showTasks = ref(false)
    const toggleTasks = () => (showTasks.value = !showTasks.value)
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
      format,
      showTasks,
      toggleTasks,
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
