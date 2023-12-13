<template>
    <div class="navbar">
        <ul>
            <router-link to="/">About</router-link>
            <router-link to="/projects">Projects</router-link>
            <a href="https://drive.google.com/uc?export=download&id=1bydG--d_Lahmc5RVI8Q8SYPNVCvz5Kfl" target="_blank">Resume</a>
            <router-link to="/contact">Contact</router-link>
        </ul>
    </div>
</template>
  
<script>
export default {
    name: 'NavBar'
}
</script>
  
<style scoped lang="sass">
.navbar
    @include reset-pm()
    background-color: $background-second-color
    border: 0
    border-radius: calc($radius-avg - 0.1rem)
    @include delete-border-radius($bottom-right: 'true', $bottom-left: 'true')
    display: flex
    justify-content: center
    
    ul
        background-color: $background-third-color
        border-radius: $radius-avg
        list-style: none
        display: flex
        flex-direction: row
        align-items: center
        justify-content: center
        padding: 0.5rem
        margin-top: 1.5rem
        margin-bottom: 0.5rem

        a
            transition: all ease 0.25s

            &:-webkit-any-link
                color: $font-color
                text-decoration: none

            &:hover
                cursor: pointer
                color: $background-second-color

@media (max-width: $small-max-screen-mobile)
    .navbar
        @include set-size($width: 15rem, $height: 5rem)

        ul
            @include set-size($width: calc(14rem - 1rem), $height: calc(3rem - 1rem))
            gap: 0.5rem
            font-size: 0.8rem

@media (min-width: $big-min-screen-mobile)
    .navbar
        @include set-size($width: 20rem, $height: 5rem)

        ul
            @include set-size($width: calc(18rem - 1rem), $height: calc(3rem - 1rem))
            gap: 0.5rem

@media (min-width: $small-min-screen)
    .navbar
        @include set-size($width: 30rem, $height: 5rem)

        ul
            @include set-size($width: calc(25rem - 1rem), $height: calc(3rem - 1rem))
            gap: 1.5rem

@media (min-width: $screen-medium-min)
    .navbar
        @include set-size($width: 45rem, $height: 5rem)

        ul
            @include set-size($width: calc(25rem - 1rem), $height: calc(3rem - 1rem))
            gap: 1.5rem

@media (min-width: $screen-big-min)
    .navbar
        @include set-size($width: 55rem, $height: 5rem)

        ul
            @include set-size($width: calc(25rem - 1rem), $height: calc(3rem - 1rem))
            gap: 1.5rem
</style>