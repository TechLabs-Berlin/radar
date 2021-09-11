<template>
  <main>
    <div class="space-y-4 lg:mx-auto lg:max-w-2xl">
      <NuxtLink to="/" class="text-gray-500 hover:text-gray-700"
        ><TIcon icon="chevron-left" class="inline-block" /> Back to the
        Timeline</NuxtLink
      >
      <EventListItem v-if="event" :tl-event="event" show-resources />
    </div>
  </main>
</template>

<script>
import {
  defineComponent,
  useContext,
  useRoute,
  useMeta,
  computed,
  ref,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const event = ref()
    const route = useRoute()
    const id = computed(() => route.value.params.id)
    const { title } = useMeta()
    const { $store } = useContext()

    event.value = $store.events.find((evt) => evt.id === id.value)
    title.value = event.value.title

    return { event }
  },
  head: {},
})
</script>
