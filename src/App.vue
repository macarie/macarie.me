<template>
  <div id="app">
    <nav-bar
      :logo="footer.logo"
    ></nav-bar>
    <about
      :heading="about.heading"
      :description="about.description"
      scrollTo="#projects"
    ></about>
    <projects
      :projects="projects"
      id="projects"
    ></projects>
    <balloon
      ref="balloon"
    ></balloon>
    <simple-footer
      :logo="footer.logo"
      :socials="footer.socials"
    ></simple-footer>
  </div>
</template>

<script>
import throttle from 'lodash.throttle'

import about from '../data/about.js'
import projects from '../data/projects.js'
import footer from '../data/footer.js'

import NavBar from '@/components/NavBar.vue'
import About from '@/components/About.vue'
import Projects from '@/components/Projects.vue'
import Balloon from '@/components/Balloon.vue'
import SimpleFooter from '@/components/SimpleFooter.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    About,
    Projects,
    Balloon,
    SimpleFooter
  },
  data: () => {
    return {
      about,
      projects,
      footer
    }
  },
  methods: {
    fillBalloon (e) {
      this.$refs.balloon.$el.style.setProperty('--balloon-content', `'${e.target.getAttribute('data-balloon')}'`)
    },
    moveBalloon (e) {
      this.$refs.balloon.$el.style.setProperty('--balloon-x', `${e.pageX}px`)
      this.$refs.balloon.$el.style.setProperty('--balloon-y', `${e.pageY}px`)
    },
    emptyBalloon (e) {
      this.$refs.balloon.$el.style.setProperty('--balloon-content', null)
    },
    scrollTo (e) {
      const element = document.querySelector(e.target.getAttribute('data-scroll-to'))

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        })
      }

      e.preventDefault()
    }
  },
  mounted () {
    const throttledMoveBalloon = throttle(this.moveBalloon, 12.5)

    this.$el.querySelectorAll('[data-balloon]')
      .forEach(link => {
        link.addEventListener('mouseenter', this.fillBalloon)
        link.addEventListener('mousemove', throttledMoveBalloon)
        link.addEventListener('mouseleave', this.emptyBalloon)
      })

    this.$el.querySelectorAll('[data-scroll-to]')
      .forEach(link => {
        link.addEventListener('click', this.scrollTo, true)
      })
  }
}
</script>

<style lang="sass">
@import 'App'
</style>
