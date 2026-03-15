// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/hints",
    "@nuxt/scripts",
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@nuxtjs/kinde",
    "@vueuse/nuxt",
    "nuxt-nodemailer",
  ],

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  // Authentication - https://docs.kinde.com/developer-tools/sdks/backend/nuxt-module/
  kinde: {
    debug: true,
  },

  // SMTP EMAIL
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

  compatibilityDate: "2026-03-15",

  // SCRIPTS https://scripts.nuxt.com/scripts
  scripts: {
    registry: {
      googleAnalytics: {
        id: "G-XXXXXXXX",
      },
    },
  },

  nitro: {
    experimental: {
      database: true,
      openAPI: true,
      tasks: true,
    },

    // DATABASE: https://v2.nitro.build/guide/database
    database: {
      default: {
        connector: "sqlite",
        options: {},
      },
    },
  },

  vite: {
    optimizeDeps: {
      include: [
        "date-fns",
        "@internationalized/date",
        "@unovis/vue",
        "zod",
        "@tanstack/table-core",
      ],
    },
  },
});
