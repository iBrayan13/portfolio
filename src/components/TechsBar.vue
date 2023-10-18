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
    {name: 'flask', img: 'https://flask-training-courses.uk/images/flask-logo.png'},
    {name: 'vue', img: 'https://s3.amazonaws.com/media-p.slid.es/uploads/320262/images/6946205/logo.png'},
    {name: 'sass', img: 'https://th.bing.com/th/id/R.698519595d5bbc042a250fc356b4d12c?rik=gbCWwaLCVyHz9w&pid=ImgRaw&r=0'},
    {name: 'git', img: 'https://th.bing.com/th/id/OIP.Xa0BEkwl0Zx4qnY9lMbD7gHaHa?pid=ImgDet&rs=1'},
    {name: 'sql', img: 'https://www.shareicon.net/data/2015/09/07/97430_document_512x512.png'},
    {name: 'mongodb', img: 'https://th.bing.com/th/id/OIP.q9t19LtUF9JPagepl7ed5QAAAA?pid=ImgDet&w=356&h=356&rs=1'}
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
    @include set-size($width: calc(46rem - 4rem), $height: 10rem)
    border: 2rem solid
    border-color: $background-second-color
    @include delete-border($top: 'true', $bottom: 'true')
    border-radius: 1rem
    box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.3)

    h3
        @include set-size($width: calc(10rem - 1.6rem), $height: calc(2rem - 1rem))
        text-align: center
        margin-top: 5px
        margin-left: 16rem
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
                @include set-size($width: 5rem, $height: 5rem)
                margin: 0 1rem
</style>