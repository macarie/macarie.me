<template>
  <nav class="navbar">
    <a href="/" class="navbar--logo-link">
      <img :src="logo" class="navbar--logo-image">
    </a>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    logo: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="sass">
@import 'NavBar'
</style>
