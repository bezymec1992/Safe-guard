const isProd = process.env.NODE_ENV === 'prod';
const API_URL = isProd ? process.env.API_URL_PROD : process.env.API_URL_DEV;



export default {
  publicRuntimeConfig: {
    apiURL: API_URL,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SafeGuard',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=0' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/styles.scss'],

  styleResources: {
    scss: ['./assets/scss/_vars.scss', "./assets/scss/_mixins.scss", './bootstrap/scss/_mixins.scss'],
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
    { src: '@/plugins/vue-plyr', mode: 'client' },
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
    'nuxt-lazysizes',
    'nuxt-webfontloader',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],


  // lazySizes: {
  //   extendAssetUrls: {
  //     img: ['src', 'srcset', 'data-src', 'data-srcset'],
  //     source: ['src', 'srcset', 'data-src', 'data-srcset'],
  //   },
  // },


  lazySizes: {
    extendAssetUrls: {
      img: ['src', 'srcset', 'data-src', 'data-srcset'],
      source: ['src', 'srcset', 'data-src', 'data-srcset'],

      // Example for a custom component
      AppImage: ['source-md-url', 'image-url'],
    },
    throttleDelay: 100,
    ricTimeout: 400,
    preloadAfterLoad: false,
    loadMode: 1,
  },

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
