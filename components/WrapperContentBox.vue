<template>
  <div
    class="p-4 border lg:p-8 rounded-xl"
    :class="{
      'stripe-bg shadow-lg': faded,
      'bg-white shadow-xl': emphasized,
      'shadow-lg bg-white': !faded && !emphasized,
    }"
  >
    <slot />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    faded: {
      type: Boolean,
    },
    emphasized: {
      type: Boolean,
    },
  },
  setup() {},
})
</script>

<style lang="scss" scoped>
.stripe-bg {
  background-image: linear-gradient(
    45deg,
    #f5f5f5 25%,
    #fafafa 0,
    #fafafa 50%,
    #fafafa 0,
    #f5f5f5 75%,
    #fafafa 0,
    #fafafa
  );
  background-size: 80px 80px;
  // color: #7a7a7a;
}
</style>
