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
      <WrapperContentBox v-else>
        <article class="relative pt-8 lg:pt-0">
          <header class="mb-8">
            <p class="mb-4 text-4xl font-bold text-center text-pink-600">
              <TIcon icon="clipboard-list" class="inline-block" />
            </p>
            <h2 class="text-2xl font-bold text-center">
              {{ milestone[0].title }}
            </h2>
            <p class="mb-4 text-lg text-center">
              Due
              {{
                format(
                  new Date(milestone[0].deadline),
                  "MMMM do, 'at' h:mm aaaa"
                )
              }}
            </p>
          </header>

          <main v-if="milestone[0].todos.length" class="space-y-8">
            <ul class="space-y-8 text-lg">
              <li
                v-for="todo in milestone[0].todos"
                :key="todo.name"
                class="flex space-x-4"
              >
                <div>
                  <TIcon icon="check-square" class="text-2xl text-blue-600" />
                </div>
                <div>
                  <p>{{ todo.name }}</p>
                  <ul v-if="todo.resources" class="mt-4 link-grid">
                    <li
                      v-for="resource in todo.resources"
                      :key="resource.title"
                    >
                      <ResourceListItem :resource="resource" />
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </main>
        </article>
      </WrapperContentBox>
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
} from '@nuxtjs/composition-api'
import { format } from 'date-fns'

export default defineComponent({
  setup() {
    const { $content } = useContext()
    const route = useRoute()
    const milestone = ref({})
    useFetch(
      async () =>
        (milestone.value = await $content('/milestones')
          .where({ slug: route.value.params.slug })
          .limit(1)
          .fetch())
    )

    return {
      milestone,
      format,
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
