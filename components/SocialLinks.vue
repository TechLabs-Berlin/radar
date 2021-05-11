<template>
  <ul v-if="socialLinks.length" class="flex items-center space-x-4">
    <li v-for="link in socialLinks" :key="link.type">
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
    const isPublic = ref(process.env.SCOPE === 'public')
    const { $content } = useContext()

    const socialLinks = ref([])

    useFetch(async () => {
      const content = await $content('social-links').fetch()
      console.log(
        '%cSocialLinks.vue line:33 isPublic',
        'color: #007acc;',
        isPublic.value
      )
      socialLinks.value = isPublic.value
        ? content.socialLinks.filter((link) => link.is_public)
        : content.socialLinks
    })

    return { socialLinks }
  },
})
</script>
