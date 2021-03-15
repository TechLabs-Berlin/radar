<template>
  <div>
    <h3 class="title-with-lines">{{ title }}</h3>
    <ul class="link-grid">
      <li v-for="resource in resources" :key="resource.title">
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
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    resources: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: '',
    },
  },
  setup() {
    const icons = {
      meeting: 'video',
      form: 'comment-dots',
      slides: 'images',
      video: 'youtube',
      link: 'link',
    }
    return {
      icons,
    }
  },
})
</script>

<style lang="scss" scoped>
.link-grid {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: max-content;
}
</style>
