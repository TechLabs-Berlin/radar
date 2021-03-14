<template>
  <header>
    <div class="flex items-center justify-between p-4 mx-auto">
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
          <li>
            <NuxtLink class="hover:text-pink-600" to="/newsletter"
              >Newsletter</NuxtLink
            >
          </li>
        </ul>
      </nav>
      <SocialLinks show-techlabs-link />
    </div>
  </header>
</template>
