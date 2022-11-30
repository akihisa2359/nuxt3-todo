// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: "123",
    secretTestValue: process.env.TEST_VALUE,
    public: {
      apiBase: "/api",
      publicTestValue: process.env.TEST_VALUE,
    },
  },
  css: ["@/assets/main.scss", "@/assets/sanitize.css"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_variables.scss" as *;',
        },
      },
    },
  },
});
