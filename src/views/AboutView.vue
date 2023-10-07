<template>
  <div id="about" class="view">
    <img src="../../public/Me.png" alt="me">
    <div class="presentation">
      <h1>Brayan Barreto</h1>
      <h2>Full Stack Developer</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style lang="sass">
#about
  @include set-size($width: 90%, $height: 95%)
  display: flex

  img
    @include set-size($width: 10rem, $height: 15rem)
    margin-right: 2rem

  .presentation

    h1
      @include reset-pm()
      font-size: 3rem
    
    h2
      font-size: 1.5rem
      margin-top: 0.5rem
      margin-bottom: 1rem
</style>