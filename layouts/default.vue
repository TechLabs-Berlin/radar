<template>
  <div class="h-full bg-gray-50">
    <div class="h-full main-grid">
      <BaseHeader />
      <Nuxt />
      <BaseFooter />
    </div>
    <SvgSprite />
  </div>
</template>

<style lang="scss" scoped>
.main-grid {
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
