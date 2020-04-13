<template>
  <a v-if="isInitialized && isSupported && !isOptedOut" @click="unsubscribe">
    Disable Notifications
  </a>
</template>

<script>
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
    unsubscribe() {
      this.$OneSignal.setSubscription(false)
    }
  }
}
</script>
