// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/ui",
    "@vueuse/nuxt",
    "@nuxt/hints",
    "@nuxt/scripts",
    "@nuxtjs/i18n",
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
