<template>
  <AnimatedCircles />
  <div class="content-container">
    <NavBar />
    <div class="content">
      <a target="_blank" id="cvDownload" href="https://drive.google.com/uc?export=download&id=1Jg9TCnPf0p-EmBtKC2e8unSyRLBICXnh"><img src="https://icon-library.com/images/icon-cv/icon-cv-11.jpg" alt="CV"></a>
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import AnimatedCircles from '@/components/AnimatedCircles.vue'
  
export default {
  name: 'ContentComponent',
  components: {
    NavBar,
    AnimatedCircles
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

.circles-container 
  width: 100%
  height: 100%
  overflow: hidden
  position: absolute
  top: 0
  left: 0

.content-container
  background-color: $background-third-color
  border: 2rem solid
  border-bottom-color: $background-second-color
  @include delete-border($top: 'true', $bottom: 'false', $right: 'true', $left: 'true')
  border-radius: $radius-avg
  margin-top: 2rem
  margin-bottom: 2rem
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4)
  display: flex
  flex-direction: column
  align-items: center
  position: relative

  .content
    display: flex
    flex-direction: column
    align-items: center

    #cvDownload
      position: absolute
      right: 0
      top: 6rem

@media (max-width: $small-max-screen-mobile)
  .content-container
    @include set-size($width: 15rem, $height: calc(60rem - 3rem))

    .content
      @include set-size($width: calc(14rem - 4rem), $height: calc(57rem - 8rem))
      margin: 1rem

      #cvDownload
        img
          @include set-size($width: auto, $height: 3rem)

@media (min-width: $big-min-screen-mobile)
  .content-container
    @include set-size($width: 20rem, $height: calc(60rem - 3rem))

    .content
      @include set-size($width: calc(19rem - 4rem), $height: calc(57rem - 8rem))
      margin: 1rem

      #cvDownload
        top: 9.8rem
        right: 1rem
        img
          @include set-size($width: auto, $height: 3rem)

@media (min-width: $small-min-screen)
  .content-container
    @include set-size($width: 30rem, $height: calc(60rem - 3rem))

    .content
      @include set-size($width: calc(25rem - 4rem), $height: calc(57rem - 8rem))
      margin: 2rem

      #cvDownload
        top: 9.2rem
        right: 0
        img
          @include set-size($width: auto, $height: 4rem)

@media (min-width: $screen-medium-min)
  .content-container
    @include set-size($width: 45rem, $height: calc(50rem - 3rem))

    .content
      @include set-size($width: calc(40rem - 4rem), $height: calc(47rem - 8rem))
      margin: 2rem

      #cvDownload
        top: 6rem
        right: 0
        img
          @include set-size($width: auto, $height: 5rem)

@media (min-width: $screen-big-min)
  .content-container
    @include set-size($width: 55rem, $height: calc(40rem - 3rem))

    .content
      @include set-size($width: calc(50rem - 4rem), $height: calc(37rem - 8rem))
      margin: 2rem

      #cvDownload
        top: 6rem
        right: 0
        img
          @include set-size($width: auto, $height: 6rem)
</style>