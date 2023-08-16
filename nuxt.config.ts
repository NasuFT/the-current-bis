// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    shim: false,
  },
  modules: ["@nuxt/image", "@nuxtjs/tailwindcss"],
  css: [
    "normalize.css/normalize.css",
    "primevue/resources/themes/lara-dark-indigo/theme.css",
  ],
  build: {
    transpile: ["primevue"],
  },
  ssr: true,
});
