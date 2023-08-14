// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    shim: false,
  },
  modules: ["@nuxtjs/tailwindcss"],
  css: [
    "normalize.css/normalize.css",
    "primevue/resources/themes/lara-dark-indigo/theme.css",
  ],
  build: {
    transpile: ["primevue"],
  },
});