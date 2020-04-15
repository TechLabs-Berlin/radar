<template>
  <div>
    <div class="card media-card">
      <div class="card-content">
        <h1 class="title">Info Session</h1>
        <div class="columns">
          <div class="column">
            <div class="video-container">
              <iframe
                class="video"
                src="https://www.youtube-nocookie.com/embed/iL8MZkqpUIA"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div class="column">
            <p><strong>Date:</strong> April 10, 2020</p>
            <p>
              This is a warm welcome from your TechLabs Berlin team. In this
              video, we introduce TechLabs, our Digital Shaper program with its
              four tracks: Data Science, Artificial Intelligence, Web
              Development and User Experience Design. We discuss how we will
              structure our upcoming semester, how you can participate and what
              you need to do to get your Digital Shaper certificate.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="card media-card">
      <div class="card-content">
        <h1 class="title">Q&amp;A Session</h1>
        <div class="columns">
          <div class="column">
            <div class="video-container">
              <iframe
                class="video"
                src="https://www.youtube-nocookie.com/embed/mnHizM8Pd0M"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div class="column">
            <p><strong>Date:</strong> April 14, 2020</p>
            <p>
              We hosted a Q&amp;A session to answer all your questions about our
              upcoming semester. In case you want to see a list of questions we
              answered in this video and skip to a certain one, open the video
              on YouTube and look at the video description. Please feel free to
              reach out to us in case of any further questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="sass">
@import "~bulma/sass/utilities/_all"
@import "~bulma/sass/base/helpers"
@import "~bulma/sass/elements/content"

.media-card
  @extends .card
  margin-top: 2rem
  margin-bottom: 2rem
  margin-left: auto
  margin-right: auto
  max-width: $desktop * (9/12)
  border-radius: 8px

.video-container
  position: relative
  width: 100%
  height: 0
  padding-bottom: 56.25%

.video
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
</style>
