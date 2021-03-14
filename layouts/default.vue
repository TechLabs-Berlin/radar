<template>
  <div class="h-full bg-gray-50">
    <div class="w-full h-full max-w-5xl px-2 mx-auto layout-grid">
      <HeaderCompact />
      <Nuxt />
      <FooterPrimary />
    </div>
    <SvgSprite />
  </div>
</template>

<style lang="scss" scoped>
.layout-grid {
  display: grid;
  grid-gap: 1.5rem;
  grid-template-rows: auto 1fr auto;
}
</style>
