<template>
  <button
    :href="resource.url"
    target="blank"
    class="flex items-start w-full h-full px-4 py-3 text-left transition-all duration-100 ease-in-out border-2 rounded-lg hover:border-blue-600 hover:shadow-lg hover:text-blue-600"
  >
    <div>
      <div class="space-x-2">
        <span class="text-xl"
          ><TIcon :icon="icons[resource.type]" class="inline-block"
        /></span>
        <span class="font-bold">{{ resource.title }}</span>
      </div>
      <span class="text-sm">{{ resource.description }}</span>
    </div>
  </button>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    resource: {
      type: Object,
      required: true,
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
    }
    return {
      icons,
    }
  },
})
</script>
