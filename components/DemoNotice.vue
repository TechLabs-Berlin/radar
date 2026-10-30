<script setup>
defineProps({
  text: { type: String, default: '' },
})
</script>

<template>
  <div
    v-if="text"
    role="note"
    class="px-4 py-2 text-sm font-semibold text-center text-white bg-pink-600"
  >
    {{ text }}
  </div>
</template>
