<template>
  <div>
    <div
      class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-40"
    >
      <div
        class="relative mx-auto w-auto max-w-2xl p-4 lg:p-8 bg-white text-grey rounded-lg border-grey border shadow-lg"
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
        <button
          class="relative p-10 bg-green-400 z-40"
          @click="updateToggleFalse"
        >
          Done
        </button>
      </div>
    </div>
    <div class="fixed h-full w-full inset-0 z-30 opacity-25 bg-black"></div>
  </div>
</template>

<script>
export default {
  emits: ['update:toggle-false'],
  methods: {
    updateToggleFalse() {
      this.$emit('update:toggle-false')
    },
  },
}
</script>
