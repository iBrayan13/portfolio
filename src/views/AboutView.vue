<template>
  <div id="about" class="view">
    <img src="../../public/Me.png" alt="me">
    <div class="presentation">
      <h1>Brayan Barreto</h1>
      <h2>Full Stack Developer</h2>
      <p>
        Specialist in Python language, focusing in development with functionality, security and simplify.
      </p>
    </div>
    <div class="technologies">
      <ul>
        <li>Backend</li>
        <li>Frontend</li>
        <li>Others</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped lang="sass">
#about
  @include set-size($width: 90%, $height: 95%)
  display: flex
  justify-content: center

  img
    @include set-size($width: 13rem, $height: 14rem)
    margin-right: 2rem

  .presentation

    h1
      @include reset-pm()
      font-size: 3rem
    
    h2
      font-size: 1.5rem
      margin-top: 0.5rem
      margin-bottom: 2rem
    
    p
      font-size: 1rem
      color: $font-second-color
      margin-bottom: 6rem

  .technologies
    display: none

    ul
      list-style: none
      display: flex
      flex-direction: row
      gap: 2rem

      li
        font-size: 1.5rem
        padding: 1rem

</style>