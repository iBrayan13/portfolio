const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/sass/_variables.sass"
          @import "@/sass/_mixins.sass"
        `
      }
    }
  }
})