import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import routes from "./routes.match";
import prerender from "@prerenderer/rollup-plugin";

const isProd = process.env.NODE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    // Generate SiteMap for Google indexation
    // process.env.NODE_ENV === "production" &&
    //   new SitemapPlugin({ base: "https://formule-ets.ca", paths: routes }),
    prerender({ routes }),
  ],

  resolve: {
    alias: {
      "./locales": path.resolve("./src/locales"),
    },
  },
});
