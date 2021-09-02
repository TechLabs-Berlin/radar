<template>
  <div
    v-tippy="{ theme: 'tl' }"
    :content="'Login'"
    @keyup.esc="loginToggle = false"
  >
    <LoginButton @update:login-toggle="updateLoginToggle"></LoginButton
    ><LoginModal
      v-if="loginToggle"
      :submitform="loginUser"
      @update:login-toggle-false="updateLoginToggleFalse"
    ></LoginModal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginToggle: false,
    }
  },

  methods: {
    updateLoginToggle() {
      this.loginToggle = !this.loginToggle
    },
    updateLoginToggleFalse() {
      this.loginToggle = false
    },
    loginUser(loginInfo) {
      this.$auth.loginWith('google', { params: { prompt: 'select_account' } })
    },
  },
}
</script>
