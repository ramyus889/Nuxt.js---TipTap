// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@vueuse/nuxt", "@nuxt/icon"],
  icon: {
    serverBundle: {
      collections: ["mdi"],
    },
  },
  css: ["./css/main.css"],
  // app: {
  //   pageTransition: { name: "slide-left", mode: "out-in" },
  // },
  vite: {
    plugins: [tailwindcss()],
  },
});
