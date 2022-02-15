export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SafeGuard',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/styles.scss'],

  styleResources: {
    scss: ['./assets/scss/_vars.scss', './bootstrap/scss/_mixins.scss'],
  },

  webfontloader: {
    events: false,
    google: {
      families: ['Saira:400,500,700&display=swap', 'Ubuntu:700&display=swap'],
    },
    timeout: 5000,
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-plyr', mode: 'client' },
    // { src: '~/plugins/change-scroll', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    'bootstrap-vue/nuxt',
    'nuxt-webfontloader',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'nuxt-lazy-load'
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['gsap'],
  },

  // generate: {
  //   fallback: "404.html"
  // },
}
