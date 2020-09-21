<template>
  <div class="card timeline-event status-card">
    <div class="card-content">
      <div class="status">
        <h3>
          TechLabs Berlin Newsletter
        </h3>
        <p>
          Stay in the loop and get notifications about upcoming events,
          workshops, new application dates, partnership opportunities, and more.
        </p>
        <div class="form has-text-left">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input
                v-model="form.name"
                class="input is-medium"
                type="text"
                placeholder="Enter your name"
                :disabled="loading"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                v-model="form.email"
                class="input is-medium"
                :class="{ 'is-danger': errorEmail }"
                type="email"
                placeholder="Enter your email"
                :disabled="loading"
              />
            </div>
            <p v-if="errorEmail" class="help is-danger">
              This email is invalid
            </p>
          </div>
          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input
                  v-model="form.consent"
                  type="checkbox"
                  :disabled="loading"
                />
                I agree to subscribe to the newsletter and receive emails from
                TechLabs Berlin. I can unsubscribe at any time.
              </label>
            </div>
            <p v-if="errorConsent" class="help is-danger">
              You need to agree, otherwise we cannot add you to our list.
            </p>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button
                class="techlabs-button"
                :class="{ 'is-loading': loading }"
                @click="checkForm"
              >
                Subscribe
              </button>
            </div>
            <div class="control">
              <button
                class="button is-text"
                :disabled="loading"
                @click="$router.push('/')"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const SIGNUP_URL =
  'https://a696oel4ti.execute-api.eu-central-1.amazonaws.com/dev/add-to-list'
export default {
  name: 'MailchimpForm',
  data() {
    return {
      form: {
        email: '',
        name: '',
        consent: true
      },
      errorEmail: false,
      errorConsent: false,
      loading: false
    }
  },
  methods: {
    async submit(email, name) {
      this.loading = true
      const data = {
        email,
        name
      }
      try {
        const response = await this.$axios.$post(SIGNUP_URL, data, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        console.log('SUCCESS')
        console.log(response)
        this.$emit('success')
      } catch (e) {
        console.log('ERROR')
        console.error(e)
        this.$emit('failure')
      } finally {
        this.loading = false
      }
    },
    checkForm(e) {
      this.errorConsent = !this.form.consent
      this.errorEmail = false
      if (!this.form.email || !this.validEmail(this.form.email)) {
        this.errorEmail = true
      }
      if (!this.errorConsent && !this.errorEmail) {
        this.submit(this.form.email, this.form.name)
      }
      e.preventDefault()
    },
    validEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}
</script>

<style lang="sass">
.form
  max-width: 24rem;
  margin: 0 auto 2rem auto;
.status p
  line-height: 1.5;
</style>
