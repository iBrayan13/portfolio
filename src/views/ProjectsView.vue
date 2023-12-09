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
        img: 'https://lh3.googleusercontent.com/fife/AK0iWDzfyg0t0s4Wb3pHYK6r3xk-bWbd42YsufhBN0ii7Y11D-ZObqSpIMINBFQ9NeODJJywVcXcctcVOmKr1RxOmTiqOD06hDEsG6w1-TDeSHucxIk-N-nxKlA_CyxMNxKphJuWTbXz7Ms9zKR-iuu8Uo7CviIY-qzrRhd9CCyNPXz7eFGMCzTtelc-UuNgXIx83V3JyiZl61nbErMEU8gng94PzdPrs8v49nyUul3VvHKGUxqKly5Nccq0EE9wGX06qVZcTo_7KI4bMzFvqAmV8NOkXZYW1afG8HTVANIJbyc3XYVgvoSzFHEIjdhGVx5t2dmy0M4tFG8WG-IIqxY4iXbs4tb7I0jfiSwdBVLkO_2iAjrVO-bPBQ0rWr_56b1LFbrKNXL5h40Y35JjsVYqYhf9skdHPsw1ANszDEUfXMR6KmkFo-677XLU3ZfAxILFRAfRjWkVroXm2oAMu6pbMEjNHynycfzGUHQd6kXcmjA3JcOWy38FaCJ_PCoIftm8VzeS9oM2s1JA-QQsa8yLEytpHZQn8pF2AorMrF1TS2PakmnSUe-p3ZaAbMtDR3gpESN7rqQwHu5WQDlAjs0vV9IoquuEYXoamx__TPekOgbK22uDlzAbZW0em6b3hZo5zazYbwoQmLzPT2BjIy9M-xNUKvcwcC7T0Wy_R18v4XJnmJEngPYP5_B3aJuayYD94gMlC-VXdKNbCv6JCb4gwu5ovzsycUqRBSGbGbKEGP6ZOnA_zWOlfbXE4iDpH_d7LD7Gmu4y4-yiWyjiJ8pFxQAZ1EPtAQzE7pKMwZvuwJy2Tck4g4fh6D06EMYDNmGEP3VepDsCSWA7dWDB2KLVxaSUtI7vEy5FNq3_hKO1AY0ZybotJHPEGd7FsIraUDZTLTUAfHpPpq6u6YwNECBBn_sW3AEJzO4WSnGzlpWOpqGH60t62YQhdbXdPeULW4-iHMR9NNFM7WDypaPqnj49FhCeUiEdD6SE_Q5S3erd_HOSFl8K1eF4RiAGAiB5PHrLDg119ILHnyiCAQ7OhiK6JBnvbYEgqPZOX9Z-2nq3wwsUVnz3XcnV_QjNPYv9qhKS6K4tHggo70E5Z0NhFQaW7LmASFyzzEtU96bKWBI70Ds0JwLyiXR4SvyjocO1G65ZiYW8vQ1qeUQqpvVVSCMHXaQ5btiDasIz9IJRy89jn5QTqvbYCFGv_Am7a7-oStEWI8S2sne2qqtSP2TeWCH4ZKE1US1YxxDAubVEwjt6XlhR1l6qmm30b0HMxy-Iy7Pqf0RKum9ehVKHKXHjp8A-Km62Qhlony9fDUtsojM-7Rrt-OQpgdenDy8gHvN79jGoCR5W41Xk1CXbOQm0P1bUkZVIHio8ulRNF4UW3RQfSZtPRtIiU5p5Spq5z5gswVvPiwKuHg9066KHVgWf5Qx6ZGBpkdPO8jqoEmpkUbLZpaucC3Uwv7skBJLWlGIxtVwapIjCUn2Lt3HqcAUnu5nBkj1J0BWPEYe0aPs4B5G-Kgw0gUNNSEW-x9QC-LwhCJ9ne-T_u05VktsmbtindRNXDy7_qWWY1OVBJ3sWLO_-AW6OIbr43K9rPr16QMIVfUGAu2CtqusJyPo=w1357-h663',
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

@media (max-width: $small-max-screen-mobile)
    #projects

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
                    margin-left: 0.5rem
                    img
                        @include set-size($width: 2.5rem, $height: 2.5rem)

@media (min-width: $big-min-screen-mobile)
    #projects

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
                    margin-left: 1.5rem
                    img
                        @include set-size($width: 2.5rem, $height: 2.5rem)

@media (min-width: $small-min-screen)
    #projects

        .project
            @include set-size($width: calc(24rem - 2rem), $height: calc(40rem - 2rem))

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
