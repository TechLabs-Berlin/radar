<template>
  <div id="main">
    <div class="headroom">
      <div class="navbar" role="navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://techlabs.org" target="_new"
            ><img class="navbar-logo" src="~assets/techlabs-global-logo.svg" />
          </a>
          <a
            class="navbar-item"
            href="https://techlabs.org/location/Berlin"
            target="_new"
            ><img class="navbar-logo" src="~assets/techlabs-berlin-logo.jpg" />
          </a>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbar" class="navbar-menu">
          <div class="navbar-start">
            <nuxt-link
              to="/timeline"
              class="navbar-item has-text-centered is-tab"
              >Timeline</nuxt-link
            >
            <nuxt-link to="/faq" class="navbar-item has-text-centered is-tab"
              >FAQ</nuxt-link
            >
            <nuxt-link to="/media" class="navbar-item has-text-centered is-tab"
              >Media</nuxt-link
            >
          </div>
          <div class="navbar-end">
            <div class="navbar-item navbar-social-link">
              <a href="https://facebook.com/techlabsberlin" target="_new">
                <Fab i="facebook-f" />
                <span class="navbar-social-link-handle">techlabsberlin</span>
              </a>
            </div>
            <div class="navbar-item navbar-social-link">
              <a href="https://instagram.com" target="_new">
                <Fab i="instagram" />
                <span class="navbar-social-link-handle">techlabs.berlin</span>
              </a>
            </div>
            <div class="navbar-item navbar-social-link">
              <a href="https://slack.com" target="_new">
                <Fab i="slack" />
                <span class="navbar-social-link-handle"
                  >techlabsberlin.slack.com</span
                >
              </a>
            </div>
            <div class="navbar-item has-text-centered">
              <a
                href="https://techlabs.org/location/Berlin"
                target="_new"
                class="techlabs-button"
              >
                <span class="icon">
                  <Fas i="link" />
                </span>
                <span>techlabs.org</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <nuxt />
  </div>
</template>

<script>
import Fab from '~/components/Fab.vue'
import Fas from '~/components/Fas.vue'
import { initializeNavbar } from '~/assets/layout'

export default {
  components: {
    Fab,
    Fas
  },
  mounted() {
    initializeNavbar()
  },
  head() {
    return {
      title: 'TechLabs Berlin Semester Radar'
    }
  }
}
</script>
