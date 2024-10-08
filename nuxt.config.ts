// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Belleza: [400, 700, 900],
          Parisienne: [400],
        },
      },
    ],
    "@nuxt/eslint",
  ],
});
