<template>
  <nav class="navbar">
    <div class="navbar--container container" ref="container">
      <template v-if="navigationItems.length > 0">
        <a
          v-for="navigationItem in navigationItems"
          :key="navigationItem.name"
          :href="navigationItem.link"
          :class="{
            'navbar--navigation-link': true,
            'active': window.location.pathname === navigationItem.link
          }"
        >
          <div
            v-if="Boolean(navigationItem.icon)"
            v-html="icons[navigationItem.icon].toSvg()"
            class="navbar--icon"
          ></div>
          {{ navigationItem.name }}
        </a>
      </template>
    </div>
  </nav>
</template>

<script>
import feather from 'feather-icons'

export default {
  name: 'NavBar',
  props: {
    navigationItems: {
      type: Array,
      default: () => []
    },
    options: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      window
    }
  },
  computed: {
    icons () {
      const icons = {}

      this.navigationItems.forEach(({ icon }) => {
        if (feather.icons.hasOwnProperty(icon) && icons.hasOwnProperty(icon) === false) {
          icons[icon] = Object.create(feather.icons[icon])

          if (this.options.doubleIcon) {
            icons[icon].contents += icons[icon].contents
          }
        }
      })

      return icons
    }
  },
  mounted () {
    const svgIcons = this.$refs.container.querySelectorAll('svg')

    svgIcons.forEach(icon => {
      let paths = icon.querySelectorAll('*')

      if (this.options.doubleIcon) {
        paths = [...paths].slice(paths.length / 2, paths.length)
      }

      paths.forEach(path => path.setAttribute('style', `--path-length: ${path.getTotalLength()};`))
    })
  }
}
</script>

<style lang="sass" scoped>
.navbar
  &--container
    display: flex
    flex-wrap: nowrap
    justify-content: space-between
    align-items: stretch

  &--navigation-link, &--icon
    display: flex
    justify-content: center
    align-items: center
</style>
