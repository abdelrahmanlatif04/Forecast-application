import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["./assets/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: "E-commerce",
      link: [{ rel: "icon", href: "/logo.svg" }],
    },
  },
  router: {
    options: {
      linkActiveClass: "active invert",
      linkExactActiveClass: "exact-active",
    },
  },
});
