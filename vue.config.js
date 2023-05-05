const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify',
  ],
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~vuetify/src/styles/styles";'
      }
    }
  }
})
