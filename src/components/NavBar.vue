<template>
    <div class="navbar">
        <ul>
            <router-link to="/">About</router-link>
            <router-link to="/projects">Projects</router-link>
            <router-link to="/resume">Resume</router-link>
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
@media (width >= $screen-big)
    ul
        @include set-size($width: calc(25rem - 1rem), $height: calc(3rem - 1rem))
        padding: 0.5rem
        margin-top: 1.5rem
        margin-bottom: 0.5rem
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

        a
            transition: all ease 0.25s

            &:-webkit-any-link
                color: $font-color
                text-decoration: none

            &:hover
                cursor: pointer
                color: $background-second-color
</style>