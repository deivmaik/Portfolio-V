export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Michael Juarez',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components/atoms',
    '~/components/molecules',
    '~/components/organisms',
    '~/components/templates',
    true
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ['@nuxtjs/google-fonts', { 
      Prompt: [400, 500, 600, 700],
      Poppins : [400, 500, 600],
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-svg-loader',
    'vue-scrollto/nuxt',
    '@nuxtjs/toast',
  ],

  

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
