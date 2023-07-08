// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0",
      title: "Artstation",
      meta: [
        {
          name: "description",
          content:
            "A sandbox project for documenting UI components found on the internet.",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.ico",
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  tailwindcss: {
    configPath: "./tailwind.config.js",
    cssPath: "./assets/css/styles.css",
    viewer: false,
  },
  css: ["~/assets/css/global.css"],
  colorMode: {
    preference: "dark",
    fallback: "light",
    classSuffix: "",
  },
  experimental: {
    componentIslands: true,
  },
});
