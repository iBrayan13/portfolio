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
        id: 'project-0',
        name: 'T-GPT',
        img: 'https://lh3.googleusercontent.com/fife/AK0iWDzfyg0t0s4Wb3pHYK6r3xk-bWbd42YsufhBN0ii7Y11D-ZObqSpIMINBFQ9NeODJJywVcXcctcVOmKr1RxOmTiqOD06hDEsG6w1-TDeSHucxIk-N-nxKlA_CyxMNxKphJuWTbXz7Ms9zKR-iuu8Uo7CviIY-qzrRhd9CCyNPXz7eFGMCzTtelc-UuNgXIx83V3JyiZl61nbErMEU8gng94PzdPrs8v49nyUul3VvHKGUxqKly5Nccq0EE9wGX06qVZcTo_7KI4bMzFvqAmV8NOkXZYW1afG8HTVANIJbyc3XYVgvoSzFHEIjdhGVx5t2dmy0M4tFG8WG-IIqxY4iXbs4tb7I0jfiSwdBVLkO_2iAjrVO-bPBQ0rWr_56b1LFbrKNXL5h40Y35JjsVYqYhf9skdHPsw1ANszDEUfXMR6KmkFo-677XLU3ZfAxILFRAfRjWkVroXm2oAMu6pbMEjNHynycfzGUHQd6kXcmjA3JcOWy38FaCJ_PCoIftm8VzeS9oM2s1JA-QQsa8yLEytpHZQn8pF2AorMrF1TS2PakmnSUe-p3ZaAbMtDR3gpESN7rqQwHu5WQDlAjs0vV9IoquuEYXoamx__TPekOgbK22uDlzAbZW0em6b3hZo5zazYbwoQmLzPT2BjIy9M-xNUKvcwcC7T0Wy_R18v4XJnmJEngPYP5_B3aJuayYD94gMlC-VXdKNbCv6JCb4gwu5ovzsycUqRBSGbGbKEGP6ZOnA_zWOlfbXE4iDpH_d7LD7Gmu4y4-yiWyjiJ8pFxQAZ1EPtAQzE7pKMwZvuwJy2Tck4g4fh6D06EMYDNmGEP3VepDsCSWA7dWDB2KLVxaSUtI7vEy5FNq3_hKO1AY0ZybotJHPEGd7FsIraUDZTLTUAfHpPpq6u6YwNECBBn_sW3AEJzO4WSnGzlpWOpqGH60t62YQhdbXdPeULW4-iHMR9NNFM7WDypaPqnj49FhCeUiEdD6SE_Q5S3erd_HOSFl8K1eF4RiAGAiB5PHrLDg119ILHnyiCAQ7OhiK6JBnvbYEgqPZOX9Z-2nq3wwsUVnz3XcnV_QjNPYv9qhKS6K4tHggo70E5Z0NhFQaW7LmASFyzzEtU96bKWBI70Ds0JwLyiXR4SvyjocO1G65ZiYW8vQ1qeUQqpvVVSCMHXaQ5btiDasIz9IJRy89jn5QTqvbYCFGv_Am7a7-oStEWI8S2sne2qqtSP2TeWCH4ZKE1US1YxxDAubVEwjt6XlhR1l6qmm30b0HMxy-Iy7Pqf0RKum9ehVKHKXHjp8A-Km62Qhlony9fDUtsojM-7Rrt-OQpgdenDy8gHvN79jGoCR5W41Xk1CXbOQm0P1bUkZVIHio8ulRNF4UW3RQfSZtPRtIiU5p5Spq5z5gswVvPiwKuHg9066KHVgWf5Qx6ZGBpkdPO8jqoEmpkUbLZpaucC3Uwv7skBJLWlGIxtVwapIjCUn2Lt3HqcAUnu5nBkj1J0BWPEYe0aPs4B5G-Kgw0gUNNSEW-x9QC-LwhCJ9ne-T_u05VktsmbtindRNXDy7_qWWY1OVBJ3sWLO_-AW6OIbr43K9rPr16QMIVfUGAu2CtqusJyPo=w1357-h663',
        description: "T-GPT is a simple search that return chat-gpt's answer. Ask whatever you want and chat-gpt will response to you.",
        objetive: 'Give access to chat-gpt services for countries that is not available.',
        technologies: [{name: 'python', img: techsImgs.python}, {name: 'fastapi', img: techsImgs.fastapi}, {name: 'vuejs', img: techsImgs.vuejs}, {name: 'sass', img: techsImgs.sass}],
        url: 'https://t-gpt.onrender.com',
    },
    {
        id: 'project-1',
        name: 'Transcribe BOT',
        img: 'https://th.bing.com/th/id/OIP.aw82cU6MWGShQaqJv7waEAAAAA?rs=1&pid=ImgDetMain',
        description: "Transcribe BOT is a tool that allow to become your voice messages to text only send them to its telegram chat.",
        objetive: 'Know what any voice message say with not listen it.',
        technologies: [{name: 'python', img: techsImgs.python}],
        url: 'https://github.com/iBrayan13/Transcribe-BOT',
    },
    /*{
        id: 'project-2',
        name: 'MyTokens',
        img: 'https://lh3.googleusercontent.com/fife/AGXqzDlacVhOylCoTPS4W8DV_wn1Mnp8J99Fexp3S3doNfMtHThCNbS0r9SWkD10mlWbkVYebmp4q3yIb1B7ioKw8DSoHCWsHSbyIuF0MD0mTnypTpe8M0CcdDPfyHvn3Hn98tVNAsN6nyqe6e3-4lUllFmQBiP85nx-nA8MuJyZzmbHwkUvZm2oiToWLxQyeLFTuEkdUatbR9uenk7JGVF8mid74D8yCmo5dYXgPjxEMhjl7Ht2C9CPIitfi4Uk-gsSf4xbh9-p1m8slCrqhvSZBo2qsj5lWAxfor3tXcX2VsKpWr2kxoM-jwWhX03URDfCq-0TNw54oxwu5opZswD9vYS1Imv3fubrw6-vC6Gt0hSUoFxPq8OyN_Ct7FnPihJbUf14dAmqUDZh-nmKre-HHMsi5XtHm_qjX0Y8dLOR3Zidj62aQ7oFjkFbUR4wFJ_lREDNcaAs1ZSMB8MBugBQtQNTY44zt2EStHtT9-e85Q6xusgBWGLd6DCx-mazWfQt6VW1uVJUCsjOpBZS4KSxbMdEbXsyx8PN2QF-M14IJ-gHnEVtR90PLQN3rnY4OZRz9owo1Qo-jb2EKiR9TgQTz_5TMAcm0-u0un14jtNlo3KGPXyPE4Qp2_AFPn5JZJgxOPHKnmM2ThHau4xKf61UwOU86ATt-zvharoX-XMRJ2lDMzwACqSTyLbBLRPnuSrLsLlzI_LEPPEUmBV4k87ZND_NWaWbldxVgCP8NbRwaZCQgq2z42AH27G_BJ6VDyxtNbl6HyNSw-bf_dmyURPkfvR7CovN2MHmT7mUElnyBw2a0mlX7oQiSfvLBEo5BauNifyx2VNO3Fr6MQZ5DHidhudIHJN68xcC9761wCJixqqzC7l55yGiXfwQDLnC2fMlMACahXD10lLP7I0eavZ3bIQihrS5gmWv-iwJD2R2pGSagq3iu3idR64c05WcXN5Knodi6O5AjkhBh31dlTFbQNxRgR97WEzolQQPv4ZMzsUrDs9oT1YPfSwKDfdeQhmNkPZjBwxudgiqP3Gbbq-1S3BlGPkRt-WH_LiKVLjpC6r13BnU7WEacLUUGK8O79zzycdXLOjU7d4oMAU-KgD92MPqzxmyaDhD9rIClSiVwMmmhkIPmuWhdaXRYRUFUB8iLjTb29I6PzcxSpAVEepqrxVkqQGBBjwgO-ewFV6yz5G6_aAjjP7ddHYWt_smbssA_GSdlej9TGxDWwixE62TRO2_5-UgZUBnw_Fow0-6nzF9lVl_xjd6mHg2eGT3YwSsVMPwdJBYAjJkWPrJQiMhx655r6RzcbXeRMz9sUJw-2n6ONb_APcUTXRt_32bP-uoOZkIsYS7lmscvf3m20QyCWAaPZcLBmfh544hqgLTEBDEsxLYJJMvIEDWMA9tCbqqB_xwLE91_Nuwta1wqVF_NHo-Sl5gR-XZ2fszkxXnM2HvrX4ohcR78JFXIbsU2g0XvsUhI41GFxV2RI2rco-FXVLOZLm8-O-iQvFnHoiYdWqwvF5y5uUjttIO40qBl7BwkRfzrRoSdEBIIWpxgTwNC3wSyQ2ie07PLA546fXvz8RzEi3RLpMyRlURq2_hcop6zJ-_oHM0qeU=w1357-h663',
        description: "MyTokens is a place where gamers can look for match in solo or with friends and get rewards.",
        objetive: 'Give enjoying to gamers in a secure website.',
        technologies: [{name: 'python', img: techsImgs.python}, {name: 'fastapi', img: techsImgs.fastapi}, {name: 'sql', img: techsImgs.sql}, {name: 'vuejs', img: techsImgs.vuejs}, {name: 'sass', img: techsImgs.sass}],
        url: 'In process...',
    },*/
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
