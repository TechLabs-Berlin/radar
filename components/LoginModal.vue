<template>
  <div>
    <div
      class="
        fixed
        overflow-x-hidden overflow-y-auto
        inset-0
        flex
        justify-center
        items-center
        z-40
      "
    >
      <div
        class="
          relative
          mx-auto
          w-auto
          max-w-2xl
          p-4
          lg:p-8
          bg-white
          text-grey
          rounded-lg
          border-grey border
          shadow-lg
          form
        "
      >
        <div class="login">
          <div class="login-header">
            <h3 class="text-lg font-bold mb-5">LOGIN</h3>
            <p class="mb-4">Please enter your credentials to login.</p>
          </div>
        </div>
        <form class="login-form">
          <input v-model="userInfo.name" type="text" placeholder="username" />
          <input
            v-model="userInfo.password"
            type="password"
            placeholder="password"
          />
          <button id="login-button" @click.prevent="submitform">login</button>
        </form>
        <button id="exit-button" @click="updateLoginToggleFalse">Cancel</button>
      </div>
    </div>
    <div class="fixed h-full w-full inset-0 z-30 opacity-25 bg-black"></div>
  </div>
</template>

<script>
export default {
  props: ['submitform'],
  emits: ['update:login-toggle-false'],
  data() {
    return {
      userInfo: {
        name: 'matteo',
        password: 'password123',
      },
    }
  },
  methods: {
    updateLoginToggleFalse() {
      this.$emit('update:login-toggle-false')
    },
  },
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto:300);
header .header {
  background-color: #fff;
  height: 45px;
}
header a img {
  width: 134px;
  margin-top: 4px;
}
.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.login-page .form .login {
  margin-top: -31px;
  margin-bottom: 26px;
}
.form {
  position: relative;
  z-index: 1;
  background: #fff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: 'Roboto', sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  border-radius: 0.375rem;
  margin: 0 0 0.5rem;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  outline: 0;
  background-color: #328f8a;
  width: 100%;
  border: 0;
  border-radius: 0.375rem;
  margin-top: 0.5rem;
  padding: 15px;
  color: #fff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
#login-button {
  background-image: linear-gradient(45deg, #328f8a, #08ac4b);
}
#login-button:hover {
  background-image: linear-gradient(45deg, #28a096, #1ebe5f);
}
#exit-button {
  background-image: linear-gradient(45deg, #c20000, #eb4d4d);
}
#exit-button:hover {
  background-image: linear-gradient(45deg, #d61414, #ff4d4d);
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4caf50;
  text-decoration: none;
}

.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}

body {
  background-color: #328f8a;
  background-image: linear-gradient(45deg, #328f8a, #08ac4b);
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
