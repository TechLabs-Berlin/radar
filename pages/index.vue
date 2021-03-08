<template>
  <main class="h-full bg-gray-50">
    <div class="container px-4 py-8 mx-auto timeline-grid">
      <div>
        <Timeline />
      </div>
      <div>events</div>
    </div>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.timeline-grid {
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 2rem;
}
</style>
