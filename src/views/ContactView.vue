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

        &:-webkit-any-link
            color: $font-color
            text-decoration: none

@media (max-width: $small-max-screen-mobile)
#contact
        @include set-size($width: calc(15rem - 2rem), $height: calc(45rem - 2rem))
        .contact-way
            gap: 0.25rem
            font-size: 0.6rem
            img
                @include set-size($width: 3rem, $height: 3rem)

@media (min-width: $big-min-screen-mobile)
    #contact
        @include set-size($width: calc(19rem - 2rem), $height: calc(45rem - 2rem))
        .contact-way
            gap: 0.25rem
            font-size: 0.85rem
            img
                @include set-size($width: 3rem, $height: 3rem)

@media (min-width: $small-min-screen)
    #contact
        @include set-size($width: calc(25rem - 2rem), $height: calc(45rem - 2rem))
        .contact-way
            gap: 1rem
            font-size: 1rem
            img
                @include set-size($width: 5rem, $height: 5rem)

@media (min-width: $screen-medium-min)
    #contact
        @include set-size($width: calc(40rem - 2rem), $height: calc(35rem - 2rem))

@media (min-width: $screen-big-min)
    #contact
        @include set-size($width: calc(42rem - 2rem), $height: calc(30rem - 2rem))
</style>