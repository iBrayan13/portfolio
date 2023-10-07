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
  @include reset-pm()
  background-color: $background-color
  font-family: 'Rubik', sans-serif
  color: $font-color
  display: flex
  justify-content: center
  overflow: hidden

.content-container
  @include set-size($width: 50rem, $height: calc(40rem - 3rem))
  margin-top: 1rem
  background-color: $background-third-color
  border: 2rem solid
  border-bottom-color: $background-second-color
  @include delete-border($top: 'true', $bottom: 'false', $right: 'true', $left: 'true')
  border-radius: $radius-avg
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4)

  .content
    @include set-size($width: calc(50rem - 4rem), $height: calc(37rem - 8rem))
    margin: 2rem
    display: flex
    flex-direction: column
    align-items: center
</style>