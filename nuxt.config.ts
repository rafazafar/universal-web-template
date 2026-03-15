// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/hints",
    "@nuxt/scripts",
    "@nuxt/ui",
    "@nuxtjs/i18n",
    // "@nuxtjs/kinde",
    "@vueuse/nuxt",
    "nuxt-nodemailer",
  ],

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  routeRules: {
    "/api/**": {
      cors: true,
    },
  },

  runtimeConfig: {
    somePrivateData: "This is private data that can only be accessed on the server side.",
    public: {
      someData: "This is public data that can be accessed on both the server and client side.",
    }
  },


  // Kinde Authentication - https://docs.kinde.com/developer-tools/sdks/backend/nuxt-module/
  // kinde: {
  //   debug: true,
  //   // This is true by default and adds 'auth-logged-in' and 'auth-logged-out'
  //   // middleware to your Nuxt application.
  //   // 
  //   middleware: false,
  //   // 
  //   // Set custom endpoints in case you use any of the default routes for other purposes
  //   // endpoints: {
  //   //   callback: '/api/callback',
  //   //   login: '/api/login',
  //   //   register: '/api/register',
  //   //   health: '/api/health', (if debug is true)
  //   //   logout: '/api/logout'
  //   //   access: '/api/access'
  //   //   portal: '/api/portal'
  //   // }
  // },

  nodemailer: {
    from: '"Universal Web Template" <no-reply@example.com>',
    host: "smtp.example.com",
    port: 587,
    secure: false,
    auth: {
      user: "smtp-user",
      pass: "",
    },
  },

  i18n: {
    defaultLocale: "ja",
    baseUrl: "https://cis-internal.org",
    strategy: "prefix_except_default",
    locales: [
      { code: "ja", name: "日本語", language: "ja-JP", file: "ja.json" },
      { code: "en", name: "English", language: "en-US", file: "en.json" },
      { code: "fr", name: "Français", language: "fr-FR", file: "fr.json" },
      { code: "de", name: "Deutsch", language: "de-DE", file: "de.json" },
    ],
  },

  compatibilityDate: "2024-07-11",

  vite: {
    optimizeDeps: {
      include: ["date-fns", "@internationalized/date", "@unovis/vue", "zod", '@tanstack/table-core'],
    },
  },
});
