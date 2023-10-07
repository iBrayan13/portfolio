<template>
    <div class="navbar">
        <ul>
            <li>Home</li>
            <li>Portfolio</li>
            <li>Resume</li>
            <li>Contact</li>
        </ul>
    </div>
</template>
  
<script>
export default {
    name: 'NavBar'
}
</script>
  
<style lang="sass">
.navbar
    @include reset-pm()
    background-color: $background-second-color
    border: 0
    border-radius: $radius-avg
    @include delete-border-radius($bottom-right: 'true', $bottom-left: 'true')
    display: flex
    justify-content: center
    ul
        @include set-size($width: 40%, $height: calc(3rem - 1rem))
        background-color: $background-third-color
        border-radius: $radius-avg
        padding: 0.5rem
        margin-top: 1.5rem
        margin-bottom: 0.5rem
        list-style: none
        display: flex
        flex-direction: row
        align-items: center
        justify-content: center
        gap: $radius-avg

        li
            transition: all ease 0.25s

            &:hover
                cursor: pointer
                color: $background-second-color
        
</style>