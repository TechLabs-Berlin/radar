<template>
  <header>
    <div class="flex items-center justify-between pt-4 mx-auto">
      <NuxtLink to="/" class="flex items-center space-x-2">
        <img src="/icon.png" class="w-10 h-10" />
        <img :src="`/icon-${location}.png`" class="w-10 h-10" />
        <p
          v-if="content"
          class="pl-4 font-bold tracking-wide text-gray-500 uppercase"
        >
          {{ content.term }}
        </p>
      </NuxtLink>
      <div><HeaderNav /></div>
    </div>
  </header>
</template>

<script>
import {
  defineComponent,
  useFetch,
  useContext,
  ref,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $content, env } = useContext()
    const content = ref(null)
    useFetch(async () => {
      content.value = await $content('term').fetch()
    })
    return { content, location: env.NUXT_APP_LOCATION }
  },
})
</script>
