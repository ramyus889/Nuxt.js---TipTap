import Aura from "@primevue/themes/aura";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: [
    "@nuxt/icon",
    "@primevue/nuxt-module",
    "vuetify-nuxt-module",
  ],
  css: ["primeicons/primeicons.css", "./css/style.css"],
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
  icon: {
    serverBundle: {
      collections: ["uil", "devicon", "svg-spinners"],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});