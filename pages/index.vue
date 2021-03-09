<template>
  <main class="h-full bg-gray-50">
    <div class="container px-4 py-8 mx-auto main-grid">
      <div></div>
      <div class="w-64 justify-self-end">
        <Timeline />
      </div>
      <div class="max-w-2xl">
        <WrapperContentBox>
          <p class="prose text-center">
            We are preparing the <strong>Summer Term 2021</strong> for you.<br />Stay
            tuned.
          </p></WrapperContentBox
        >
      </div>
      <div></div>
    </div>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.main-grid {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: auto min-content 42rem auto;
}
</style>
