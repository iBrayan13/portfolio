<template>
  <div class="home">
    <ContentComponent />
  </div>
</template>

<script>
import ContentComponent from '@/components/ContentComponent.vue'

export default {
  name: 'HomeView',
  components: {
    ContentComponent
  }
}
</script>

<style lang="sass">
.home
  display: flex
  justify-content: center
</style>
