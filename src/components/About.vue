<template>
  <header class="about">
    <div class="about--container container">
      <h1 class="about--heading" v-html="heading"></h1>
      <div class="about--description" v-html="description"></div>
    </div>
    <div class="about--arrow">
      <a
        v-html="chevrons"
        :data-scroll-to="scrollTo"
        class="about--arrow-link"
      ></a>
    </div>
  </header>
</template>

<script>
import feather from 'feather-icons'

export default {
  name: 'About',
  props: {
    heading: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    scrollTo: {
      type: String,
      default: 'body'
    }
  },
  computed: {
    chevrons: () => feather.icons['chevrons-down'].toSvg()
  },
  mounted () {
    this.$el.setAttribute('style', `--top-offset: ${this.$el.offsetTop}px;`)
  }
}
</script>

<style lang="sass">
@import 'About'

.about
  display: flex
  flex-direction: column

  &--container
    display: flex
    flex-direction: column
    justify-content: center
    flex-grow: 1

  &--arrow
    display: flex
    justify-content: center

    @media (max-width: 960px)
      display: none
</style>
