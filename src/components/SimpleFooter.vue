<template>
  <footer class="footer">
    <div class="footer--container container">
      <div class="footer--logo">
        <a href="/" class="footer--logo-link">
          <img
            :src="logo"
            class="footer--logo-image"
          >
        </a>
      </div>
      <div class="footer--socials">
        <a
          v-for="social in socials"
          :key="social.name"
          :href="social.link"
          :class="`footer--social socials--${social.name}`"
          v-text="social.name"
        >
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SimpleFooter',
  props: {
    logo: {
      type: String,
      default: ''
    },
    socials: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="sass">
@import 'SimpleFooter'

.footer
  &--container
    display: flex
    flex-wrap: nowrap
    justify-content: space-between
    align-items: center

    @media (max-width: 960px)
      flex-direction: column
</style>
