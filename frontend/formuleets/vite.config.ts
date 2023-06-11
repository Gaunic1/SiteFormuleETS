import path from "path";
import { PluginOption, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import PrerendererWebpackPlugin from "@prerenderer/webpack-plugin";
import SitemapPlugin from "sitemap-webpack-plugin";
import routes from "./routes.match";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    //Prerendering
    // process.env.NODE_ENV === "production" &&
    //   (new PrerendererWebpackPlugin({
    //     routes,
    //   }) as any),

    // // Generate SiteMap for Google indexation
    // process.env.NODE_ENV === "production" &&
    //   new SitemapPlugin({ base: "https://formule-ets.ca", paths: routes }),
  ].filter(Boolean),

  resolve: {
    alias: {
      "./locales": path.resolve("./src/locales"),
    },
  },
});
