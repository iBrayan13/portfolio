<template>
    <div class="project">
        <div class="project-left">
            <h1 class="project-title">{{ project.name }}</h1>
            <img class="project-img" :src="project.img" />
        </div>

        <div class="project-right">
            <p class="project-description">{{ project.description }}</p>
            <p class="project-obj">Goal: {{ project.objetive }}</p>
            <div class="project-techs">
                <img v-for="tech in project.technologies" :key="tech.img" :src="tech.img" :alt="tech.name" />
            </div>
            <a
                :href="project.public ? project.url : 'javascript:void(0)'"
                class="project-url"
                :target="project.public ? '_blank' : null"
            >
                {{ project.public ? 'Visit project' : 'Private Project' }}
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: {
        project: {
            type: Object,
            required: true
        },
    },
}
</script>

<style lang="sass" scoped>
@media (max-width: $small-max-screen-mobile)
    .project
        @include set-size($width: calc(13rem - 2rem), $height: calc(40rem - 2rem))
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center

        .project-left
            .project-img
                @include set-size($width: 11rem, $height: 8rem)
        
        .project-right
            .project-techs
                @include set-size($width: 11rem, $height: 5rem)
                img
                    @include set-size($width: 2.5rem, $height: 2.5rem)

@media (min-width: $big-min-screen-mobile)
    .project
        @include set-size($width: calc(17rem - 2rem), $height: calc(40rem - 2rem))
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center

        .project-left
            .project-img
                @include set-size($width: 16rem, $height: 13rem)
        
        .project-right
            .project-techs
                @include set-size($width: 12rem, $height: 5rem)
                img
                    @include set-size($width: 2.5rem, $height: 2.5rem)

@media (min-width: $small-min-screen)
    .project
        @include set-size($width: calc(24rem - 2rem), $height: calc(40rem - 2rem))

        .project-left
            .project-img
                @include set-size($width: 20rem, $height: 15rem)
        
        .project-right
            .project-techs
                @include set-size($width: 12rem, $height: 5rem)
                img
                    @include set-size($width: 2.5rem, $height: 2.5rem)

@media (min-width: $screen-medium-min)
    .project
        @include set-size($width: calc(39rem - 2rem), $height: calc(22rem - 2rem))
        display: flex
        flex-direction: row
        justify-content: center
        align-items: center

        .project-left
            .project-img
                @include set-size($width: 20rem, $height: 15rem)
        
        .project-right
            width: calc( 18rem - 2rem )
            .project-techs
                @include set-size($width: 10rem, $height: 5rem)
                img
                    @include set-size($width: 2.5rem, $height: 2.5rem)

.project
    padding: 1rem
    background-color: rgba(0, 0, 0, 0.8)
    border: 0
    border-radius: $radius-avg
    box-shadow: 1rem 1rem 0.4rem rgba(0, 0, 0, 0.4)
    gap: 1rem

    .project-left
        .project-title
            color: $font-third-color
        
    .project-right
        display: flex
        flex-direction: column
        justify-content: space-between

        .project-description
            color: $font-third-color
            font-size: 1rem
        .project-obj
            color: $font-second-color
            font-size: 0.8rem
        .project-url
            color: $font-second-color
            font-size: 1.2rem
            display: flex
            justify-content: center

        .project-techs
            display: flex
            justify-content: center
            align-items: center
            flex-direction: row
            gap: 8px
            width: auto
</style>