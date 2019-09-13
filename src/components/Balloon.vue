<template>
  <div class="balloon"></div>
</template>

<script>
export default {
  name: 'Balloon'
}
</script>

<style lang="sass">
@import 'Balloon'

.balloon
  --balloon-content: none
  --balloon-x: 0px
  --balloon-y: 0px

  &::before
    content: var(--balloon-content)
    position: absolute
    top: 0
    left: 0
    transform: translateX(calc(var(--balloon-x) - 50%)) translateY(calc(var(--balloon-y) - 100%))
</style>
