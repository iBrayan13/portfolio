<template>
    <div id="technologies">
        <h3>Technologies</h3>
        <div class="techs-container">
            <div class="techs-slide">
                <img class="tech" v-for="tech in techs" :key="tech.name" :src="tech.img" :alt="tech.name">
            </div>
            <div class="techs-slide">
                <img class="tech" v-for="tech in techs" :key="tech.name" :src="tech.img" :alt="tech.name">
            </div>
        </div>
    </div>
</template>

<script>
const techs = [
    {name: 'python', img: 'https://th.bing.com/th/id/R.10327dc6812b05b66a2b6b44c55a097c?rik=nKIXnE7Aetd6Uw&pid=ImgRaw&r=0'},
    {name: 'fastapi', img: 'https://innoboon.com/wp-content/uploads/elementor/thumbs/fastapi-logo-pmqh868lsg9moelfgsgtuijyqj8o9zgvmhce0puq2w.png'},
    {name: 'django', img: 'https://cdn.freebiesupply.com/logos/large/2x/django-logo-png-transparent.png'},
    {name: 'numpy', img: 'https://user-images.githubusercontent.com/98330/63813335-20cd4b80-c8e2-11e9-9c04-e4dbf7285aa1.png'},
    {name: 'pandas', img: 'https://destinytoolbox.net/python/pics/pandas_logo.png'},
    {name: 'flask', img: 'https://themesbrand.com/steex/layouts/assets/images/learning/flask.png'},
    {name: 'vue', img: 'https://s3.amazonaws.com/media-p.slid.es/uploads/320262/images/6946205/logo.png'},
    {name: 'git', img: 'https://th.bing.com/th/id/OIP.Xa0BEkwl0Zx4qnY9lMbD7gHaHa?pid=ImgDet&rs=1'},
    {name: 'sql', img: 'https://www.shareicon.net/data/2015/09/07/97430_document_512x512.png'},
    {name: 'firebase', img: 'https://th.bing.com/th/id/R.c521e7e67222276a6860665a46813cc6?rik=B6RIySVyHjydAg&pid=ImgRaw&r=0'}
]

export default {
    name: 'TechsBar',
    data(){
        return{techs}
    }
}
</script>

<style lang="sass">
@keyframes slide
  from
    transform: translateX(0)
  to
    transform: translateX(-100%)

#technologies
    border-radius: 1rem
    box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.3)

    h3
        @include set-size($width: calc(10rem - 1.6rem), $height: calc(2rem - 1rem))
        text-align: center
        margin-top: 5px
        padding: 0.8rem
        background-color: $background-second-color
        border: 0
        border-radius: 1rem
        color: $font-third-color

    .techs-container
        overflow: hidden
        white-space: nowrap
        position: relative

        .techs-slide
            display: inline-block
            animation: 35s slide infinite linear

            .tech
                margin: 0 1rem

@media (max-width: $small-max-screen-mobile)
    #technologies
        @include set-size($width: calc(15rem - 4rem), $height: 10rem)
        margin-top: 2rem
        border: 2rem solid
        border-color: $background-second-color
        @include delete-border($right: 'true', $left: 'true')

        h3
            margin-left: 10px

        .tech
            @include set-size($width: auto, $height: 4rem)

@media (min-width: $big-min-screen-mobile)
    #technologies
        @include set-size($width: calc(19rem - 4rem), $height: 12rem)
        margin-top: 2rem
        border: 2rem solid
        border-color: $background-second-color
        @include delete-border($right: 'true', $left: 'true')

        h3
            margin-left: 2.5rem

        .tech
            @include set-size($width: auto, $height: 5rem)

@media (min-width: $small-min-screen)
    #technologies
        @include set-size($width: calc(25rem - 4rem), $height: 12rem)
        @include delete-border($right: 'true', $left: 'true')

        h3
            margin-left: 5.5rem

        .tech
            @include set-size($width: auto, $height: 5.5rem)

@media (min-width: $screen-medium-min)
    #technologies
        @include set-size($width: calc(36rem - 4rem), $height: 16rem)
        border: 2rem solid
        border-color: $background-second-color
        @include delete-border($top: 'true', $bottom: 'true')
        margin-top: 0
        margin-bottom: 3rem

        h3
            margin-left: 11rem

        .tech
            @include set-size($width: auto, $height: 8rem)

@media (min-width: $screen-big-min)
    #technologies
        @include set-size($width: calc(46rem - 4rem), $height: 10rem)

        h3
            margin-left: 16rem

        .tech
            @include set-size($width: auto, $height: 5rem)
</style>