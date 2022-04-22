export default {
  target: 'static',
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'REFORM Barbershop | Rivne',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Наша ідея - реформувати думку людей про те, що барбершоп це дороговартісне «лакшері» задоволення! Адже ми досвідчені майстри, які прагнуть надавати якісні послуги, з хорошим сервісом та за адекватною ціною!' },
      { name: 'google-site-verification', content: 'P1_QoNSxQPGWfwUpmQPZ2QmPZ9L-sJHoAl1TvtiCuts' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'REFORM Barbershop | Rivne' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Наша ідея - реформувати думку людей про те, що барбершоп це дороговартісне «лакшері» задоволення! Адже ми досвідчені майстри, які прагнуть надавати якісні послуги, з хорошим сервісом та за адекватною ціною!' },
      { hid: 'twitter:image', name: 'twitter:image', content: '/og-image.png' },
      { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'REFORM Barbershop | Rivne' },
      { hid: 'og:title', name: 'og:title', content: 'REFORM Barbershop | Rivne' },
      { hid: 'og:description', name: 'og:description', content: 'Наша ідея - реформувати думку людей про те, що барбершоп це дороговартісне «лакшері» задоволення! Адже ми досвідчені майстри, які прагнуть надавати якісні послуги, з хорошим сервісом та за адекватною ціною!' },
      { hid: 'og:image', name: 'og:image', content: '/og-image.png' },
      { hid: 'og:image:secure_url', name: 'og:image:secure_url', content: '/og-image.png' },
      { hid: 'og:image:alt', name: 'og:image:alt', content: 'REFORM Barbershop | Rivne' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  css: ['@/assets/css/main'],
  loading: '~/components/Loading.vue',

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/element-ui.js' },
    { src: '~/plugins/lightbox.js' },
    {
      src: '~/plugins/vue-gtag.js',
      mode: 'client'
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-vue-select',
    ['nuxt-tailvue', { toast: true }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
