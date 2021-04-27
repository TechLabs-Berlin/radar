<template>
  <a
    :href="resource.url"
    target="_blank"
    class="flex items-start w-full h-full px-4 py-3 text-left transition-all duration-100 ease-in-out border-2 rounded-lg hover:shadow-lg"
    :class="
      onPink
        ? 'border-pink-900 hover:border-pink-600 hover:text-pink-600'
        : 'hover:border-blue-600 hover:text-blue-600'
    "
  >
    <div class="flex space-x-4">
      <p class="flex-none text-xl">
        <TIcon :icon="icons[resource.type]" class="inline-block" />
      </p>
      <div>
        <p class="font-bold">{{ resource.title }}</p>
        <p class="text-sm">{{ resource.description }}</p>
      </div>
    </div>
  </a>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    resource: {
      type: Object,
      required: true,
    },
    onPink: {
      type: Boolean,
    },
  },
  setup() {
    const icons = {
      meeting: 'video',
      form: 'comment-dots',
      slides: 'images',
      video: 'youtube',
      link: 'link',
      tool: 'tools',
      game: 'dice',
      nothing: 'thumbs-up',
    }
    return {
      icons,
    }
  },
})
</script>
