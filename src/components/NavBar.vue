<template>
    <div class="navbar">
        <ul>
            <router-link to="/">About</router-link>
            <router-link to="/projects">Projects</router-link>
            <a href="https://drive.google.com/file/d/12aQn96OeEpH7Xj2ZmpuVOUz5e4KhJSnp/view?usp=share_link" target="_blank">Resume</a>
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
</style>