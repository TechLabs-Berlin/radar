<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { format } from 'date-fns'

export default defineComponent({
  props: {
    milestone: {
      type: Object,
      required: true,
    },
    alwaysShowTasks: {
      type: Boolean,
    },
  },
  setup() {
    const showTasks = ref(false)
    const toggleTasks = () => (showTasks.value = !showTasks.value)
    return {
      showTasks,
      toggleTasks,
      format,
    }
  },
})
</script>

<template>
  <div class="p-4 bg-pink-100 border shadow-inner-pink lg:p-6 rounded-xl">
    <article class="relative pt-8 lg:pt-0 milestone-grid">
      <div class="-mt-1 text-4xl font-bold text-center text-pink-600">
        <!-- <TIcon icon="clipboard-list" class="inline-block" /> -->
        <TIcon
          :icon="
            milestone.type === 'cutoff' ? 'exclamation-circle' : 'check-square'
          "
          class="inline-block"
        />
      </div>
      <header class="flex items-center space-x-4">
        <div>
          <NuxtLink :to="`/milestone/${milestone.slug}`" class="title-link">
            <h2
              class="relative inline-block mb-1 text-2xl font-bold text-pink-900 hover:underline"
            >
              {{ milestone.title }}
              <div
                class="absolute top-0 right-0 hidden pl-2 text-base text-pink-600 transform translate-x-full translate-y-1 icon"
              >
                <TIcon icon="link" class="inline-block" />
              </div></h2
          ></NuxtLink>
          <ClientOnly>
            <p class="text-lg">
              Due
              {{
                format(new Date(milestone.deadline), "MMMM do, 'at' h:mm aaaa")
              }}
            </p>
          </ClientOnly>
        </div>
      </header>
      <div />
      <main class="space-y-8">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="prose" v-html="$md.render(milestone.description)" />
        <template v-if="milestone.todos.length">
          <p v-if="!alwaysShowTasks">
            <button
              v-if="showTasks"
              class="px-2 py-1 text-sm font-semibold tracking-wide text-pink-900 uppercase border-2 border-pink-900 rounded-lg focus:outline-none active:outline-none"
              @click="toggleTasks"
            >
              <TIcon icon="eye-slash" class="inline-block" /> Hide tasks
            </button>
            <button
              v-else
              class="px-2 py-1 text-sm font-semibold tracking-wide text-pink-900 uppercase border-2 border-pink-900 rounded-lg focus:outline-none active:outline-none"
              @click="toggleTasks"
            >
              <TIcon icon="chevron-down" class="inline-block" /> Show tasks
            </button>
          </p>
          <ul v-if="showTasks || alwaysShowTasks" class="space-y-8 text-lg">
            <li
              v-for="todo in milestone.todos"
              :key="todo.name"
              class="flex space-x-4"
            >
              <div>
                <TIcon icon="check-square" class="text-2xl text-pink-600" />
              </div>
              <div>
                <p>{{ todo.name }}</p>
                <ul v-if="todo.resources" class="mt-4 link-grid">
                  <li v-for="resource in todo.resources" :key="resource.title">
                    <ResourceListItem :resource="resource" on-pink />
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </template>
      </main>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.milestone-grid {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: auto 1fr;
}
.shadow-inner-pink {
  --tw-shadow: inset 0 4px 8px 0 rgba(250, 30, 90, 0.15);

  box-shadow: var(--tw-ring-offset-shadow, 0 0 #fa1e5a),
    var(--tw-ring-shadow, 0 0 #fa1e5a), var(--tw-shadow);
}

.title-link:hover .icon {
  @apply inline-block;
}
</style>
