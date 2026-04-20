// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-04-20",

  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],

  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
});
