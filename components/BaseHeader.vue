<template>
  <header>
    <div class="container flex items-center justify-between p-4 mx-auto">
      <div><NuxtImg src="/tlb-logo.png" class="h-12" /></div>
      <nav class="flex items-center">
        <ul class="flex items-center space-x-8 font-semibold uppercase">
          <li>
            <NuxtLink class="hover:text-pink-600" to="/">Timeline</NuxtLink>
          </li>
          <li>
            <NuxtLink class="hover:text-pink-600" to="/faq">FAQ</NuxtLink>
          </li>
          <li>
            <NuxtLink class="hover:text-pink-600" to="/media">Media</NuxtLink>
          </li>
        </ul>
      </nav>
      <ul class="flex items-center space-x-4">
        <li>
          <a href="#" class="hover:text-pink-600"
            ><TIcon icon="slack" class="text-4xl"
          /></a>
        </li>
        <li>
          <a href="#" class="hover:text-pink-600"
            ><TIcon icon="facebook" class="text-4xl"
          /></a>
        </li>
        <li>
          <a href="#" class="hover:text-pink-600"
            ><TIcon icon="instagram" class="text-4xl"
          /></a>
        </li>
        <li>
          <a
            href="#"
            target="_blank"
            class="flex items-center px-4 py-2 space-x-2 border-2 border-gray-700 rounded-xl hover:border-pink-600 hover:text-pink-600"
            ><span><TIcon icon="link" class="text-xl" /></span
            ><span>techlabs.org</span></a
          >
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>
