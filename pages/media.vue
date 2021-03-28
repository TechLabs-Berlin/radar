<script>
import {
  defineComponent,
  useFetch,
  useContext,
  ref,
  useMeta,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    useMeta({ title: 'Media' })

    const { $content } = useContext()

    const mediaItems = ref(null)

    const { fetchState } = useFetch(async () => {
      mediaItems.value = await $content('media').fetch()
    })

    return { mediaItems, fetchState }
  },
  head: {},
})
</script>

<template>
  <main>
    <div class="h-full py-4 md:py-8 lg:mx-auto lg:max-w-2xl">
      <h1 class="mb-8 text-4xl font-bold text-center">Media</h1>
      <template v-if="!fetchState.pending">
        <template v-if="!mediaItems.items || !mediaItems.items.length">
          <WrapperContentBox>
            <p>
              As the semester progresses, we'll add videos of all our events
              here.
            </p>
          </WrapperContentBox>
        </template>
        <template v-else>
          <WrapperContentBox
            v-for="media in mediaItems.items"
            :key="media.title"
            class="mb-4 md:mb-8"
          >
            <div class="flex justify-between mb-4">
              <div>
                <h2 class="text-xl font-bold">{{ media.title }}</h2>
                <p>{{ media.date }}</p>
              </div>
              <div>
                <a
                  :href="media.youtubeURL"
                  target="_blank"
                  class="flex items-center px-4 py-2 space-x-2 border-2 border-gray-700 rounded-xl hover:border-pink-600 hover:text-pink-600"
                  ><span><TIcon icon="youtube" class="text-xl" /></span
                  ><span class="whitespace-nowrap">Watch it on YouTube</span></a
                >
              </div>
            </div>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div class="prose" v-html="$md.render(media.description)" />
          </WrapperContentBox>
        </template>
      </template>
    </div>
  </main>
</template>
