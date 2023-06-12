import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import routes from "./routes.match";
import prerender from "./plugins/prerender";
import sitemap from "./plugins/sitemap";

const isProd = process.env.NODE_ENV === "production";
const buildDir = path.resolve(__dirname, "./dist");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    prerender({ buildDir, routes }),
    sitemap({ buildDir, routes, website: "https://formule-ets.ca/" }),
  ],

  resolve: {
    alias: {
      "./locales": path.resolve("./src/locales"),
    },
  },
});
