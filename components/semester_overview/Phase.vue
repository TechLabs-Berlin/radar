<template>
  <div class="phase column is-narrow">
    <div class="heading">
      {{ title }}
    </div>
    <div
      class="phase-weeks has-tooltip-arrow has-tooltip-bottom"
      :data-tooltip="formattedDescription"
    >
      <Week
        v-for="week in weeks"
        :key="week.relativeNumber"
        :relative-week-num="week.relativeNumber"
        :absolute-week-num="week.absoluteNumber"
        :current-week-num="currentWeekNum"
      />
    </div>
  </div>
</template>

<script>
import Week from '~/components/semester_overview/Week'

function testWhite(x) {
  const white = new RegExp(/^\s$/)
  return white.test(x.charAt(0))
}

function wordWrap(str, maxWidth) {
  const newLineStr = '\n'
  let res = ''
  while (str.length > maxWidth) {
    let found = false
    // Inserts new line at first whitespace of the line
    for (let i = maxWidth - 1; i >= 0; i--) {
      if (testWhite(str.charAt(i))) {
        res = res + [str.slice(0, i), newLineStr].join('')
        str = str.slice(i + 1)
        found = true
        break
      }
    }
    // Inserts new line at maxWidth position, the word is too long to wrap
    if (!found) {
      res += [str.slice(0, maxWidth), newLineStr].join('')
      str = str.slice(maxWidth)
    }
  }

  return res + str
}

export default {
  components: {
    Week
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    initialWeekNum: {
      type: Number,
      required: true
    },
    startWeekNum: {
      type: Number,
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    currentWeekNum: {
      type: Number,
      required: true
    }
  },
  data() {
    // Generates a range with 12 elements and offset 10
    const weeks = [...Array(this.duration).keys()].map((w) => ({
      absoluteNumber: w + this.startWeekNum,
      relativeNumber: w + (this.startWeekNum - this.initialWeekNum)
    }))
    return {
      weeks
    }
  },
  computed: {
    formattedDescription() {
      return wordWrap(this.description, 35)
    }
  }
}
</script>

<style lang="sass">
@import "~bulma/sass/utilities/_all"

.phase
  padding-left: 0.5rem
  padding-right: 0.5rem
  min-width: 130px

.phase-weeks
  display: flex
  justify-content: center
  align-items: center

.heading
  overflow: hidden
  text-align: center
  user-select: none

.heading:before, .heading:after
  background-color: $grey-lighter
  content: ""
  display: inline-block
  height: 1px
  position: relative
  vertical-align: middle
  width: 50%

.heading:before
  right: 0.5em
  margin-left: -50%

.heading:after
  left: 0.5em
  margin-right: -50%
</style>
