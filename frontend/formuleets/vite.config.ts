import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import routes from "./routes.match";
import prerender from "./plugins/prerender";

const isProd = process.env.NODE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    prerender({ buildDir: path.resolve(__dirname, "./dist"), routes }),
  ],

  resolve: {
    alias: {
      "./locales": path.resolve("./src/locales"),
    },
  },
});
