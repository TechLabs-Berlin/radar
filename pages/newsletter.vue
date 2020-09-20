<template>
  <div>
    <!-- SHOW SUCCESS MSG  -->
    <div v-if="status === 'success'" class="card timeline-event status-card">
      <div class="card-content">
        <div class="status">
          <h3>Done!</h3>
          <p>
            Thank you for the support and we'll be in touch :)
          </p>
        </div>
      </div>
    </div>

    <!-- SHOW FAIL, TRY AGAIN  -->
    <div
      v-else-if="status === 'failure'"
      class="card timeline-event status-card"
    >
      <div class="card-content">
        <div class="status">
          <h3>Ooops...</h3>
          <p>
            ... something went wrong! Wanna try again?
          </p>
        </div>
      </div>
    </div>

    <!-- SHOW SUBSCRIPTION FORM -->
    <div v-else>
      <!-- <iframe
        class="signup mj-w-res-iframe"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://app.mailjet.com/widget/iframe/5567/qAw"
      ></iframe> -->
      <MailchimpForm
        @success="status = 'success'"
        @failure="status = 'failure'"
      />
    </div>
  </div>
</template>

<script>
import MailchimpForm from '~/components/MailchimpForm'
export default {
  name: 'PageNewsletter',
  components: {
    MailchimpForm
  },
  data() {
    return {
      status: this.$route.query.status
    }
  }
}
</script>

<style lang="sass">
.signup-wrapper
  width: 400px
  margin-left: auto
  margin-right: auto

.signup
  width: 100%
  height: 450px

.status-card
  margin-top: 2rem
</style>
