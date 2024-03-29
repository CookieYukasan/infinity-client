export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Elo Infinity',
    htmlAttrs: {
      lang: 'pt-br',
      class: 'no-js',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js',
        integrity:
          'sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4',
        crossorigin: 'anonymous',
      },
      {
        src: 'https://kit.fontawesome.com/0d46dca18d.js',
        crossorigin: 'anonymous',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css',
        integrity:
          'sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x',
        crossorigin: 'anonymous',
      },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/sass/style.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/hcaptcha.js' },
    { src: '~/plugins/sentry-capture-exception.js' },
    { src: '~/plugins/vuelidate.js' },
    { src: '~/plugins/infinity-plugins.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/device',
    '@nuxtjs/dayjs',
    '@nuxtjs/proxy',
  ],

  server: {
    port: 3000,
    host: '0.0.0.0',
  },

  router: {
    middleware: ['getCurrentUser'],
  },

  dayjs: {
    locales: ['pt-br'],
    defaultLocale: 'pt-br',
    defaultTimeZone: 'America/Sao_Paulo',
    plugins: ['utc', 'timezone'],
  },

  device: {
    refreshOnResize: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
  },

  publicRuntimeConfig: {
    isDev: process.env.NODE_ENV !== 'production',
    discordInviteLink:
      process.env.DISCORD_INVITE_LINK || 'https://discord.gg/T2BRpfxmSc',
    hcaptcha: {
      disabled: process.env.NODE_ENV !== 'production',
      siteKey:
        process.env.HCAPTCHA_SITE_KEY || 'ec317b25-78ba-48bd-b479-9180acc7d4fd',
    },
  },

  proxy: {
    '/api/': {
      target: process.env.BACKEND_URL || 'http://localhost:5000',
      pathRewrite: { '^/api/': '' },
      changeOrigin: true,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
  },
}
