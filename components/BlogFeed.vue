<script setup>
import { format } from 'date-fns'

defineProps({
  items: { type: Array, required: true },
})
</script>

<template>
  <section class="p-4 bg-white border rounded-xl shadow-lg lg:p-8">
    <h3 class="title-with-lines">From the blog</h3>
    <ul class="mt-4 space-y-3">
      <li v-for="item in items" :key="item.link">
        <a
          :href="item.link"
          target="_blank"
          rel="noopener"
          class="font-semibold underline"
          >{{ item.title }}</a
        >
        <time :datetime="item.date.toISOString()" class="block text-sm">
          {{ format(item.date, 'd MMM yyyy') }}
        </time>
      </li>
    </ul>
  </section>
</template>
