<template>
  <WrapperContentBox>
    <article class="relative pt-8 lg:pt-0">
      <header class="flex flex-col items-center mb-8">
        <p class="mb-4 text-4xl font-bold text-center text-pink-600">
          <!-- <TIcon icon="clipboard-list" class="inline-block" /> -->
          <TIcon
            :icon="
              milestone.type === 'cutoff'
                ? 'exclamation-circle'
                : 'check-square'
            "
            class="inline-block"
          />
        </p>

        <NuxtLink :to="`/milestone/${milestone.slug}`" class="title-link">
          <h2
            class="relative inline-block mb-1 text-2xl font-bold hover:underline"
          >
            {{ milestone.title }}
            <div
              class="absolute top-0 right-0 hidden pl-2 text-base text-blue-600 transform translate-x-full translate-y-1 icon"
            >
              <TIcon icon="link" class="inline-block" />
            </div></h2
        ></NuxtLink>
        <ClientOnly>
          <p class="text-lg text-center">
            Due
            {{
              format(new Date(milestone.deadline), "MMMM do, 'at' h:mm aaaa")
            }}
          </p>
        </ClientOnly>
      </header>

      <main class="space-y-8">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="prose" v-html="$md.render(milestone.description)" />
        <template v-if="milestone.todos.length">
          <p v-if="!alwaysShowTasks" class="text-center">
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
          <ul v-if="showTasks || alwaysShowTasks" class="space-y-8 text-lg">
            <li
              v-for="todo in milestone.todos"
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
        </template>
      </main>
    </article>
  </WrapperContentBox>
</template>

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
