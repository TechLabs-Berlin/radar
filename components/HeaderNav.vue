<template>
  <div class="relative">
    <transition name="fade">
      <div
        v-if="isOpen"
        class="absolute top-0 right-0 z-50 flex flex-col items-end p-4 space-y-4 transform translate-y-10 bg-white rounded-lg shadow-lg lg:-translate-y-2 lg:px-4 lg:py-2 lg:space-y-0 lg:-translate-x-10 lg:flex-row lg:items-center lg:space-x-8"
      >
        <nav>
          <ul
            class="space-y-2 text-sm font-semibold text-right uppercase lg:flex lg:items-center lg:space-x-4 lg:space-y-0"
          >
            <li @click="toggle">
              <NuxtLink class="hover:text-pink-600 nav-link" to="/"
                >Timeline</NuxtLink
              >
            </li>
            <li @click="toggle">
              <NuxtLink class="hover:text-pink-600 nav-link" to="/faq"
                >FAQ</NuxtLink
              >
            </li>
            <li @click="toggle">
              <NuxtLink class="hover:text-pink-600 nav-link" to="/media"
                >Media</NuxtLink
              >
            </li>
            <li @click="toggle">
              <NuxtLink class="hover:text-pink-600 nav-link" to="/newsletter"
                >Newsletter</NuxtLink
              >
            </li>
          </ul>
        </nav>
        <SocialLinks is-small />
      </div>
    </transition>
    <div>
      <button
        v-if="isOpen"
        class="text-gray-400 focus:outline-none active:outline-none hover:text-gray-700"
        @click="toggle"
      >
        <TIcon icon="times" class="text-2xl" />
      </button>
      <button
        v-else
        class="text-gray-400 focus:outline-none active:outline-none hover:text-gray-700"
        @click="toggle"
      >
        <TIcon icon="hamburger" class="text-2xl" />
      </button>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const isOpen = ref(false)
    const toggle = () => (isOpen.value = !isOpen.value)
    return { isOpen, toggle }
  },
})
</script>
