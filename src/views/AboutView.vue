<template>
  <div id="about" class="view">
    <div class="presentation">
      <img class="hidden" src="../../public/img/me.png" alt="me">
      
      <div class="presentation-text">
        <h1>Brayan Barreto</h1>
        <h2>Full Stack Developer</h2>
        <p>
          Specialist in Python language, focusing in development with functionality, security and simplify.
        </p>
      </div>
    </div>

    <TechsBar />
  </div>
</template>

<script>
import TechsBar from '@/components/TechsBar.vue';

export default {
  name: 'AboutView',
  components: {
    TechsBar
  }
}
</script>

<style scoped lang="sass">
#about
  @include set-size($width: 100%, $height: 100%)
  display: flex
  flex-direction: column
  justify-content: center
  align-content: center
  gap: 1rem

  .presentation
    display: flex
    flex-direction: row
    justify-content: center

    img
      margin-right: 2rem

    .presentation-text

      h1
        @include reset-pm()
        font-size: 3rem
      
      h2
        font-size: 1.5rem
        margin-top: 0.5rem
        margin-bottom: 2rem
      
      p
        color: $font-second-color
        margin-bottom: 6rem

@media (min-width: $small-min-screen)
  .presentation
    @include set-size($width: 25rem, $height: 20rem)

    img
      display: none
    .presentation-text
      @include set-size($width: 25rem, $height: 18rem)

      p
        font-size: 1.4rem
  
@media (min-width: $screen-medium-min)
  .presentation
    @include set-size($width: 36rem, $height: 25rem)

    img
      display: flex
      @include set-size($width: 13rem, $height: 18rem)
    .presentation-text
      @include set-size($width: 23rem, $height: 18rem)

      p
        font-size: 1.4rem

@media (min-width: $screen-big-min)
  .presentation
    @include set-size($width: 46rem, $height: 15rem)

    img
      @include set-size($width: 11rem, $height: 15rem)
    .presentation-text
      @include set-size($width: 30rem, $height: 15rem)

      p
        font-size: 1rem
</style>