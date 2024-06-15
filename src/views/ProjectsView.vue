<template>
    <div id="projects" class="view">
        <h1>Brayan's Projects</h1>
        <div class="projects-container">
            <img src="../../public/img/arrow.png" alt="arrow" class="previousBtn projectBtn">

            <ProjectCard :project="currentProject"/>

            <img src="../../public/img/arrow.png" alt="arrow" class="nextBtn projectBtn">

        </div>
    </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'
import { ref } from 'vue'

const techsImgs = {
    python: 'https://th.bing.com/th/id/R.10327dc6812b05b66a2b6b44c55a097c?rik=nKIXnE7Aetd6Uw&pid=ImgRaw&r=0',
    fastapi: 'https://innoboon.com/wp-content/uploads/elementor/thumbs/fastapi-logo-pmqh868lsg9moelfgsgtuijyqj8o9zgvmhce0puq2w.png',
    sass: 'https://th.bing.com/th/id/R.698519595d5bbc042a250fc356b4d12c?rik=gbCWwaLCVyHz9w&pid=ImgRaw&r=0',
    vuejs: 'https://s3.amazonaws.com/media-p.slid.es/uploads/320262/images/6946205/logo.png',
    sql: 'https://www.shareicon.net/data/2015/09/07/97430_document_512x512.png'
}

let projects = [
{
        id: 'project-1',
        name: 'Transcribe BOT',
        img: 'https://th.bing.com/th/id/OIP.aw82cU6MWGShQaqJv7waEAAAAA?rs=1&pid=ImgDetMain',
        description: "Transcribe BOT is a tool that allow to become your voice messages to text only send them to its telegram chat.",
        objetive: 'Know what any voice message say with not listen it.',
        technologies: [{name: 'python', img: techsImgs.python}],
        url: 'https://github.com/iBrayan13/Transcribe-BOT',
    },
    {
        id: 'project-0',
        name: 'T-GPT',
        img: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihavKCqr49bPETaWXp4x6ETTthP2KwnN1f1EeKnGMPZZ75PrMrad3g83wWOdnjWjSUicIfXJw-8XbUmTrKDZIV-VpS5B6a4Ih3s=w1357-h663',
        description: "T-GPT is a simple search that return chat-gpt's answer. Ask whatever you want and chat-gpt will response to you.",
        objetive: 'Give access to chat-gpt services for countries that is not available.',
        technologies: [{name: 'python', img: techsImgs.python}, {name: 'fastapi', img: techsImgs.fastapi}, {name: 'vuejs', img: techsImgs.vuejs}, {name: 'sass', img: techsImgs.sass}],
        url: 'https://t-gpt.onrender.com',
    },
]

let currentProjectindex = ref(0)
let currentProject = ref(projects[currentProjectindex.value])

const setPreviousBtn = () => {
    document.querySelector('.previousBtn').addEventListener('click', e => {
        e.preventDefault()

        if(currentProjectindex.value > 0){
            currentProjectindex.value --
        }
        else { currentProjectindex.value = projects.length - 1 }

        currentProject.value = projects[currentProjectindex.value]
    })
}
const setNextBtn = () => {
    document.querySelector('.nextBtn').addEventListener('click', e => {
        e.preventDefault()

        if(currentProjectindex.value < projects.length-1){
            currentProjectindex.value ++
        }
        else { currentProjectindex.value = 0 }

        currentProject.value = projects[currentProjectindex.value]
    })
}

export default {
    name: 'ProjectsView',
    components: {
        ProjectCard
    },
    mounted(){
        setPreviousBtn()
        setNextBtn()
    },
    data(){
        return {currentProject}
    }
}
</script>

<style lang="sass" scoped>
@media (max-width: $small-max-screen-mobile)
    .projects-container
        flex-direction: column

        .previousBtn
            rotate: 270deg
        .nextBtn
            rotate: 90deg

@media (min-width: $big-min-screen-mobile)
    .projects-container
        flex-direction: column

        .previousBtn
            rotate: 270deg
        .nextBtn
            rotate: 90deg
        

@media (min-width: $small-min-screen)
    #projects


@media (min-width: $screen-medium-min)
    #projects
        margin-top: 3rem

        .projects-container
            flex-direction: row
            
            .previousBtn
                rotate: 180deg
            .nextBtn
                rotate: 0deg

@media (min-width: $screen-big-min)
    #projects
        margin-top: 0

#projects
    display: flex
    flex-direction: column
    align-items: center

    .projects-container
        display: flex
        justify-content: space-between
        align-items: center

        img
            @include set-size(40px, 40px)
        
        .projectBtn
            cursor: pointer
</style>
