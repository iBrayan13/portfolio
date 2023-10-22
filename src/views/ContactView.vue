<template>
    <div id="contact" class="view">
        <p>If you are intrested in <strong>hiring me</strong>, <strong>call</strong> me, <strong>email</strong> me 
            or connect and <strong>chat</strong> with me via LinkedIn!</p>
        <a href="https://www.linkedin.com/in/brayan-barreto/" target="_blank" class="contact-way">
            <img src="../../public/img/linkedin_black.svg" alt="linkedin" />
            <h3>Brayan Barreto</h3>
        </a>
        <a href="mailto:brayanbarreto1130@gmail.com" target="_blank" class="contact-way">
            <img src="../../public/img/email-black.svg" alt="email" />
            <h3>brayanbarreto1130@gmail.com</h3>
        </a>
        <a href="tel:+584121738328" class="contact-way">
            <img src="../../public/img/mobile-phone-black.svg" target="_blank" alt="cellphone" />
            <h3>+58 412 1738328</h3>
        </a>
    </div>
</template>

<script>


export default {
    name: 'ContactView'
}
</script>

<style scoped lang="sass">
#contact
    @include set-size($width: calc(40rem - 2rem), $height: calc(30rem - 2rem))
    padding: 1rem
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    gap: 1rem
    border: 0
    border-radius: 2rem

    p
        font: $font-second-color
        font-size: 1.5rem
        font-weight: 500
        text-align: center

        strong
            font-size: 1.52rem
            font-weight: 700

    .contact-way
        display: flex
        flex-direction: row
        align-items: center
        gap: 1rem

        &:-webkit-any-link
            color: $font-color
            text-decoration: none

        img
            @include set-size($width: 5rem, $height: 5rem)
</style>