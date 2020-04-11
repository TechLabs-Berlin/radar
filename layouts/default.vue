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
          <!--
          <div class="navbar-start">
            <a class="navbar-item">Radar</a>
          </div>
          -->
          <div class="navbar-end">
            <div class="navbar-item navbar-social-link">
              <a href="https://facebook.com" target="_new">
                <Fab i="facebook-f" />
              </a>
            </div>
            <div class="navbar-item navbar-social-link">
              <a href="https://instagram.com" target="_new">
                <Fab i="instagram" />
              </a>
            </div>
            <div class="navbar-item navbar-social-link">
              <a href="https://slack.com" target="_new">
                <Fab i="slack" />
              </a>
            </div>
            <div class="navbar-item">
              <a
                href="https://techlabs.org/location/Berlin"
                target="_new"
                class="techlabs-button"
              >
                <span class="icon">
                  <Fas i="link" />
                </span>
                <span>About TechLabs Berlin</span>
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

export default {
  components: {
    Fab,
    Fas
  }
}
</script>
