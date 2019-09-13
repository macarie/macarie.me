<template>
  <div class="projects">
    <div class="projects--container container">
      <h1 class="projects--heading">
        Projects
      </h1>
      <div
        v-for="project in projects"
        :key="project.name"
        class="projects--project"
      >
        <div class="projects--project-text">
          <h1 class="projects--project-heading">
            {{ project.name }}
          </h1>
          <h2 class="projects--project-subheading">
            {{ project.subheading }}
          </h2>
          <div class="projects--project-description" v-html="project.description"></div>
          <p class="projects--project-links">
            <a
              v-for="link in project.links"
              :key="link.name"
              v-html="feather.icons[link.icon].toSvg()"
              :href="link.link"
              :data-balloon="link.name"
              :title="link.name"
              class="projects--project-link"
            ></a>
          </p>
        </div>
        <div class="projects--project-cover">
          <img
            :src="project.image.link"
            :alt="project.image.description"
            class="projects--project-cover-image"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import feather from 'feather-icons'

export default {
  name: 'Projects',
  props: {
    projects: {
      type: Array,
      default: () => []
    }
  },
  data: function () {
    return {
      feather
    }
  }
}
</script>

<style lang="sass">
@import 'Projects'

.projects
  &--project
    display: flex
    flex-direction: row
    flex-wrap: nowrap

    @media (max-width: 960px)
      flex-direction: column-reverse
</style>
