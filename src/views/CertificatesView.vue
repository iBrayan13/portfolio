<template>
    <div class="view" id="certificates">
        <h1>Brayan's Certificates & Badges</h1>

        <div class="certificates-container">
            <img src="../../public/img/arrow.png" alt="arrow" class="previousBtn CertificateBtn">

            <a target="_blank" :href="currentCertificate.link"><img :src="currentCertificate.img" alt="certificate" class="certificate"></a>

            <img src="../../public/img/arrow.png" alt="arrow" class="nextBtn CertificateBtn">
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'

const certificates = [
    {
        link: 'https://www.udemy.com/certificate/UC-888ae0e7-f456-49d2-892a-d53796547e88/',
        img: 'https://udemy-certificate.s3.amazonaws.com/image/UC-888ae0e7-f456-49d2-892a-d53796547e88.jpg?v=1690577810000'
    },
    {
        link: 'https://www.linkedin.com/learning/certificates/fef8901a90078562c5338f0406ec09d3a934654e8588e0dcf591fb3c43438546?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BlM%2FYMwMJQaejvuuKZHgkjA%3D%3D',
        img: 'https://media.licdn.com/dms/image/D4E22AQFBXJF8Y2icew/feedshare-shrink_1280/0/1687987058804?e=1707955200&v=beta&t=YfHjTQEPkQQnXn-dxg9BXCehHdFJinq8iTehJhb7FLU'},
    {
        link: 'https://www.sololearn.com/certificates/CC-3MWZG4UB',
        img: 'https://api2.sololearn.com/v2/certificates/CC-3MWZG4UB/image/jpg'
    },
    
    {
        link: 'https://www.sololearn.com/certificates/CC-E4V2XDXV',
        img: 'https://api2.sololearn.com/v2/certificates/CC-E4V2XDXV/image/jpg'
    },
]

let currentCertificateindex = ref(0)
let currentCertificate = ref(certificates[currentCertificateindex.value])

const setPreviousBtn = () => {
    document.querySelector('.previousBtn').addEventListener('click', e => {
        e.preventDefault()

        if(currentCertificateindex.value > 0){
            currentCertificateindex.value --
        }
        else { currentCertificateindex.value = certificates.length - 1 }

        currentCertificate.value = certificates[currentCertificateindex.value]
    })
}
const setNextBtn = () => {
    document.querySelector('.nextBtn').addEventListener('click', e => {
        e.preventDefault()

        if(currentCertificateindex.value < certificates.length-1){
            currentCertificateindex.value ++
        }
        else { currentCertificateindex.value = 0 }

        currentCertificate.value = certificates[currentCertificateindex.value]
    })
}

export default {
    name: 'CertificatesView',
    mounted(){
        setPreviousBtn()
        setNextBtn()
    },
    data(){
        return {currentCertificate}
    }
}
</script>

<style lang="sass" scoped>
@media (max-width: $small-max-screen-mobile)
    .certificates-container
        flex-direction: column
        .certificate
            max-width: 220px
        .previousBtn
            rotate: 270deg
        .nextBtn
            rotate: 90deg

@media (min-width: $big-min-screen-mobile)
    .certificates-container
        flex-direction: column
        .certificate
            max-width: 300px
        .previousBtn
            rotate: 270deg
        .nextBtn
            rotate: 90deg

@media (min-width: $small-min-screen)
    .certificates-container
        .certificate
            max-width: 415px

@media (min-width: $screen-medium-min)
    .certificates-container
        flex-direction: row
        .certificate
            max-width: 530px
        .previousBtn
            rotate: 180deg
        .nextBtn
            rotate: 0deg

@media (min-width: $screen-big-min)
    .certificates-container
        flex-direction: row
        .certificate
            max-height: 360px

#certificates
    display: flex
    flex-direction: column
    align-items: center

    h1
        margin-bottom: 2rem

    .certificates-container
        display: flex
        justify-content: center
        align-items: center
        gap: 3rem

        .certificate
            cursor: pointer
            box-shadow: -0.05rem -0.05rem 0.7rem 0.7rem rgba(0, 0, 0, 0.12)
            transition: transform ease 0.3s

            &:hover
                transform: scale(1.02)
        .CertificateBtn
            @include set-size(40px, 40px)
            cursor: pointer
</style>