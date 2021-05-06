<template>
  <ul v-if="content" class="flex items-center space-x-4">
    <li v-for="link in content.socialLinks" :key="link.type">
      <a :href="link.url" class="hover:text-pink-600"
        ><TIcon :icon="link.type" :class="isSmall ? 'text-xl' : 'text-4xl'"
      /></a>
    </li>
  </ul>
</template>

<script>
import {
  defineComponent,
  useFetch,
  useContext,
  ref,
} from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    isSmall: {
      type: Boolean,
    },
  },
  setup() {
    const { $content } = useContext()

    const content = ref(null)

    const { fetchState } = useFetch(async () => {
      content.value = await $content('social-links').fetch()
    })

    return { content, fetchState }
  },
})
</script>
