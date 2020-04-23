<template>
  <div class="week">
    <span class="weeknum">{{ relativeWeekNum }}</span>
    <Fas v-if="icon" :i="icon" :classes="'icon weekicon' + completedClass" />
  </div>
</template>

<script>
import Fas from '~/components/Fas'

export default {
  components: {
    Fas
  },
  props: {
    absoluteWeekNum: {
      type: Number,
      required: true
    },
    relativeWeekNum: {
      type: Number,
      required: true
    },
    currentWeekNum: {
      type: Number,
      required: true
    }
  },
  computed: {
    icon() {
      if (this.absoluteWeekNum === this.currentWeekNum) {
        return 'hourglass-half'
      } else if (this.absoluteWeekNum < this.currentWeekNum) {
        return 'check-circle'
      }
      return undefined
    },
    completedClass() {
      if (this.absoluteWeekNum < this.currentWeekNum) {
        return ' completed'
      }
      return ''
    }
  }
}
</script>

<style lang="sass">
@import "~bulma/sass/utilities/_all"

.week
  position: relative
  display: inline-block
  background-color: $scheme-main
  box-shadow: 0 0.5em 1em -0.125em rgba($scheme-invert, 0.1), 0 0px 0 1px rgba($scheme-invert, 0.02)
  border-radius: 8px
  color: $text
  text-align: center
  user-select: none

  width: 50px
  height: 50px
  font-size: $size-6
  &:not(:first-child)
    margin-left: 0.75rem

  +tablet-only
    font-size: $size-7
    width: 35px
    height: 35px
    &:not(:first-child)
      margin-left: 0.5rem

  +widescreen
    font-size: $size-5
    width: 65px
    height: 65px
    &:not(:first-child)
      margin-left: 0.75rem

.weekicon
  position: absolute
  bottom: -10px
  right: -5px
  &.completed
    color: $green

.weeknum
  color: $grey
  &:before
    content: ''
    display: inline-block
    vertical-align: middle
    height: 100%
</style>
