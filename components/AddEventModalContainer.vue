<template>
  <div v-if="$auth.loggedIn" @keyup.esc="toggle = false">
    <AddEventModalButton @update:toggle="updateToggle"></AddEventModalButton
    ><AddEventModalForm
      v-if="toggle"
      @keyup.esc="toggle = false"
      @update:toggle-false="updateToggleFalse"
    ></AddEventModalForm>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle: false,
    }
  },

  methods: {
    updateToggle() {
      this.toggle = !this.toggle
    },
    updateToggleFalse() {
      this.toggle = false
    },
  },
}
</script>
