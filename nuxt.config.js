const pkg = require('./package')

module.exports = {
  mode: 'universal',

  //Env variable
  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxtjs-blog-55a0d-default-rtdb.firebaseio.com',
    siteName: process.env.SITE_NAME || 'WB Blog',
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ff0000' },
  // loadingIndicator: {
  //   name: 'circle',
  //   color: '#ff0000'
  // },
  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css'
  ],

  transition: {
    name: 'fade',
    mode: 'out-in',
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },
}
