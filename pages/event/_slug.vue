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
      <EventListItem v-else-if="event[0]" :tl-event="event[0]" show-resources />
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

export default defineComponent({
  setup() {
    const { $content } = useContext()
    const route = useRoute()
    const event = ref('')
    useFetch(
      async () =>
        (event.value = await $content('/events')
          .where({ slug: route.value.params.slug })
          .limit(1)
          .fetch())
    )
    useMeta(() => ({ title: event.value ? event.value[0].name : 'Event' }))
    return {
      event,
    }
  },
  head: {},
})
</script>
