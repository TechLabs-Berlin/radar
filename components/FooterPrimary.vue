<template>
  <footer class="container p-4 mx-auto text-sm text-center">
    <NuxtContent :document="footer" />
  </footer>
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
    const { $content } = useContext()

    const footer = ref(null)

    const { fetchState } = useFetch(async () => {
      footer.value = await $content('footer').fetch()
    })

    return { footer, fetchState }
  },
})
</script>
