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

    const faq = ref(null)

    const { fetchState } = useFetch(async () => {
      faq.value = await $content('faq').fetch()
    })

    return { faq, fetchState }
  },
})
</script>

<template>
  <main>
    <div class="max-w-2xl px-4 py-8 mx-auto space-y-8">
      <h1 class="text-4xl font-bold text-center">Frequently Asked Questions</h1>
      <template v-if="!fetchState.pending">
        <WrapperContentBox v-for="section in faq.sections" :key="section.title">
          <h2 class="relative mb-8 text-2xl font-bold section-title">
            {{ section.title }}
          </h2>
          <div v-for="question in section.questions" :key="question.title">
            <h3 class="mb-2 text-base font-bold">{{ question.title }}</h3>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div class="mb-4 prose" v-html="$md.render(question.content)" />
          </div>
        </WrapperContentBox>
      </template>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.section-title::after {
  content: '';
  @apply bg-pink-600;

  width: 40px;
  height: 4px;
  position: absolute;
  left: 0;
  bottom: -10px;
}
</style>
