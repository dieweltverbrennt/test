const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/_variables.scss";
                         @import "@/assets/styles/_fonts.scss";`
      }
    }
  }
})
