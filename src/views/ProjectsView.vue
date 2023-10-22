<template>
    <div id="projects" class="view">
        <h1>Brayan's Projects</h1>
        <div class="project" v-for="project in projects" :key="project.id" :id="project.id">
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
                <a :href="project.url" target="_blank" class="project-url">{{ project.url }}</a>
            </div>
        </div>
    </div>
</template>

<script>
const techsImgs = {
    python: 'https://th.bing.com/th/id/R.10327dc6812b05b66a2b6b44c55a097c?rik=nKIXnE7Aetd6Uw&pid=ImgRaw&r=0',
    fastapi: 'https://innoboon.com/wp-content/uploads/elementor/thumbs/fastapi-logo-pmqh868lsg9moelfgsgtuijyqj8o9zgvmhce0puq2w.png',
    sass: 'https://th.bing.com/th/id/R.698519595d5bbc042a250fc356b4d12c?rik=gbCWwaLCVyHz9w&pid=ImgRaw&r=0',
    vuejs: 'https://s3.amazonaws.com/media-p.slid.es/uploads/320262/images/6946205/logo.png'
}

let projects = [
    {
        id: 'project-0',
        name: 'T-GPT',
        img: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaAQDC-7W_1myiuvJZZtmUuAGiMl50gziFkjh7W4IhCn50ziIF9_vQlbtodfyo8iBg_PsySSwRI5pAXpkXzHBj2XvRma4A=w1317-h663',
        description: "T-GPT is a simple search that return chat-gpt's answer. Ask whatever you want and chat-gpt will response to you.",
        objetive: 'Give access to chat-gpt services for countries that is not available.',
        technologies: [{name: 'python', img: techsImgs.python}, {name: 'fastapi', img: techsImgs.fastapi}, {name: 'vuejs', img: techsImgs.vuejs}, {name: 'sass', img: techsImgs.sass}],
        url: 'https://t-gpt.onrender.com',
    }
]

export default {
    name: 'ProjectsView',
    data(){
        return {projects}
    }
}
</script>

<style lang="sass">

#projects
    display: flex
    flex-direction: column
    align-items: center

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
            .project-description
                color: $font-third-color
                font-size: 1rem
            .project-obj
                color: $font-second-color
                font-size: 0.8rem
            .project-url
                color: $font-second-color
                font-size: 1.2rem

            .project-techs
                margin-left: 1rem
                display: flex
                justify-content: center
                align-items: center
                flex-direction: row
                gap: 0.5rem

@media (min-width: $small-min-screen)
    #projects

        .project
            @include set-size($width: calc(24rem - 2rem), $height: calc(40rem - 2rem))
            display: flex
            flex-direction: column
            justify-content: center
            align-items: center

            .project-left
                .project-img
                    @include set-size($width: 20rem, $height: 15rem)
            
            .project-right
                .project-techs
                    @include set-size($width: 12rem, $height: 5rem)
                    margin-left: 5rem
                    img
                        @include set-size($width: 2.5rem, $height: 2.5rem)

@media (min-width: $screen-medium-min)
    #projects
        margin-top: 3rem

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
                .project-techs
                    @include set-size($width: 10rem, $height: 5rem)
                    img
                        @include set-size($width: 2.5rem, $height: 2.5rem)

@media (min-width: $screen-big-min)
    #projects
        margin-top: 0
</style>