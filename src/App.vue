<template>
  <div class="content-container">
    <NavBar />
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
  
export default {
  name: 'ContentComponent',
  components: {
    NavBar
  }
}
</script>

<style lang="sass">
body
  background-color: $background-color
  font-family: 'Rubik', sans-serif
  color: $font-color
  display: flex
  justify-content: center

#app
  @include set-size($width: calc(80% - 2rem), $height: calc(40rem - 2rem))
  background-color: $background-third-color
  border: 2rem solid
  border-bottom-color: $background-second-color
  @include delete-border($top: 'true', $bottom: 'false', $right: 'true', $left: 'true')
  border-radius: $radius-avg
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4)

  .content
    margin: 2rem
    border: 0.1rem solid
    @include delete-border($top: 'true', $bottom: 'false', $right: 'true', $left: 'true')
    border-bottom-color: $font-color
</style>
