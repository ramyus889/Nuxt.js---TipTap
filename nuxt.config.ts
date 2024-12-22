export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "vuetify-nuxt-module",
    "@vueuse/nuxt",
    "@nuxt/fonts",
    "@pinia/nuxt",
  ],
  css: ["./css/style.css"],
  app: {
    pageTransition: { name: "slide-left", mode: "out-in" },
  },
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      theme: {
        defaultTheme: "dark",
      },
      icons: {
        defaultSet: "mdi",
        sets: ["mdi", "fa"],
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
