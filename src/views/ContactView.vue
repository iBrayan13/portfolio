<template>
    <div id="contact" class="view">
        <form method="post">
            <label for="name">Name</label>
            <input type="text" name="name" id="input-name" placeholder="Brayan" required>
            <br>
            <label for="email">Email</label>
            <input type="email" name="email" id="input-email" placeholder="brayan@info.com" required>
            <br>
            <label for="message">Message</label>
            <input type="text" name="message" id="input-message" placeholder="Type a message" required>
            <br>
            <input type="submit" id="input-submit" value="Send">
        </form>
    </div>
</template>

<script>


export default {
    name: 'ContactView',
    mounted(){
        document.querySelector('form').addEventListener('submit', e => {
            e.preventDefault();
            console.log(document.querySelector('#input-name').value)
            console.log(document.querySelector('#input-email').value)
            console.log(document.querySelector('#input-message').value)
        })
    }
}
</script>

<style scoped lang="sass">
#contact
    @include set-size($width: calc(30rem - 2rem), $height: calc(25rem - 2rem))
    background-color: $background-color
    padding: 1rem
    display: flex
    justify-content: center
    align-items: center
    border: 0
    border-radius: 2rem


    form
        @include set-size($width: calc(27.5rem - 2rem), $height: calc(22.5rem - 2rem))
        padding: 1rem
        display: flex
        flex-direction: column
        justify-content: center
        gap: 2px
        font-size: 0.8rem

        label, input
            margin-left: 2.4rem

        input
            @include set-size($width: calc(20rem - 1rem), $height: 0.75rem)
            padding: 0.5rem
            border: 0
            border-radius: 0.4rem
            box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.25)

        #input-message
            @include set-size($width: calc(20rem - 1rem), $height: 7.5rem)
            text-align: left
        
        #input-submit
            @include set-size($width: 4rem, $height: 1.5rem)
            transition: all ease 0.2s
            margin-left: 20rem 
            padding: 0.25rem
            color: $font-third-color
            background-color: $background-second-color

            &:hover
                cursor: pointer
                color: $background-second-color
                background-color: $font-third-color
</style>