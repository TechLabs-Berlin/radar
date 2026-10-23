<template>
  <footer class="container p-4 mx-auto text-sm text-center">
    <ContentRenderer v-if="footer" :value="footer" />
  </footer>
</template>

<script setup>
const { data: footer } = useSingleDoc('footer')
</script>
