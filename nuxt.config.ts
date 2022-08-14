import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  generate: {
    routes: function () {
      const fs = require("fs");
      const path = require("path");
      return fs.readdirSync("./content/blog").map((file) => {
        return {
          route: `/blog/${path.parse(file).name}`, // Return the slug
          payload: require(`./content/blog/${file}`),
        };
      });
    },
  },
  modules: ["@nuxt/content"],
  content: {
    // Options
  },
  target: "static",
});
