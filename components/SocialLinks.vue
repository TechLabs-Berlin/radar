<template>
  <ul v-if="socialLinks.length" class="flex items-center space-x-4">
    <li v-for="link in socialLinks" :key="link.type">
      <a :href="link.url" class="hover:text-pink-600"
        ><TIcon :icon="link.type" :class="isSmall ? 'text-xl' : 'text-4xl'"
      /></a>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  isSmall: {
    type: Boolean,
  },
})

const isPublic = useIsPublic()
const { data: content } = useSingleDoc('socialLinks')
const socialLinks = computed(() => {
  const links = content.value?.socialLinks ?? []
  return isPublic ? links.filter((link) => link.is_public) : links
})
</script>
