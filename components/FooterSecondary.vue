<template>
  <div>
    <nav class="p-8">
      <ul class="space-y-2 text-sm font-semibold tracking-wide uppercase">
        <li>
          <NuxtLink class="hover:text-pink-600" to="/">Timeline</NuxtLink>
        </li>
        <li>
          <NuxtLink class="hover:text-pink-600" to="/faq">FAQ</NuxtLink>
        </li>
        <li>
          <NuxtLink class="hover:text-pink-600" to="/media">Media</NuxtLink>
        </li>
        <li>
          <NuxtLink class="hover:text-pink-600" to="/newsletter"
            >Newsletter</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>
