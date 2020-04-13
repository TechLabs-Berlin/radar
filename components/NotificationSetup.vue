<template>
  <div
    v-if="isInitialized && isSupported && !isSubscribed"
    class="card timeline-event"
  >
    <div class="card-content content">
      <h3 class="setup-title">
        <Fas i="comment" /><span>We would like to keep you up-to-date</span>
      </h3>

      <div class="columns">
        <div class="column is-three-fifths">
          Your browser supports push notifications. Click on the button below to
          allow us to keep you up-to-date on TechLabs Berlin. We won't send more
          than a few messages per week and you can unsubscribe at any time at
          the bottom of this page.
        </div>
        <div class="column">
          <img
            class="setup-image"
            src="~/assets/notification.png"
            alt="An Update from TechLabs Berlin"
          />
        </div>
      </div>

      <p class="has-text-centered">
        <a class="techlabs-button" @click="subscribe">Enable Notifications</a>
      </p>
    </div>
  </div>
</template>

<script>
import Fas from '~/components/Fas'

function updateSubscriptionStatus(oneSignal) {
  return Promise.all([
    oneSignal.isPushNotificationsEnabled(),
    oneSignal.isOptedOut()
  ]).then(function(result) {
    return {
      isSubscribed: result[0],
      isOptedOut: result[1]
    }
  })
}
export default {
  components: {
    Fas
  },
  data() {
    return {
      isInitialized: false,
      isSupported: false,
      isSubscribed: false,
      isOptedOut: false
    }
  },
  mounted() {
    const oneSignal = this.$OneSignal
    const self = this
    this.$OneSignal.push(async function() {
      // If we're on an unsupported browser, do nothing
      if (!oneSignal.isPushNotificationsSupported()) {
        return
      }
      self.isSupported = true

      oneSignal.on('subscriptionChange', async function() {
        const status = await updateSubscriptionStatus(oneSignal)
        self.isInitialized = true
        self.isSubscribed = status.isSubscribed
        self.isOptedOut = status.isOptedOut
      })

      const status = await updateSubscriptionStatus(oneSignal)
      self.isInitialized = true
      self.isSubscribed = status.isSubscribed
      self.isOptedOut = status.isOptedOut
    })
  },
  methods: {
    subscribe() {
      if (!this.isOptedOut) {
        this.$OneSignal.registerForPushNotifications()
      } else {
        this.$OneSignal.setSubscription(true)
      }
    },
    unsubscribe() {
      this.$OneSignal.setSubscription(false)
    }
  }
}
</script>

<style lang="sass">
.setup-title span
  margin-left: 0.5rem
  vertical-align: text-top
</style>
