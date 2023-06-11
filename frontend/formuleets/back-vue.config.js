const path = require("path");
const PrerendererWebpackPlugin = require("@prerenderer/webpack-plugin");
const SitemapPlugin = require("sitemap-webpack-plugin").default;
const routes = require("./routes.match");

export default {
  configureWebpack: () => {
    if (process.env.NODE_ENV !== "production") return;
    return {
      plugins: [
        //PreRender
        new PrerendererWebpackPlugin({
          // Required - Routes to render.
          routes,
          //renderer: '@prerenderer/renderer-jsdom', // Uncomment if you want to use jsdom
        }),

        //Generate SiteMap for google indexation
        new SitemapPlugin({ base: "https://formule-ets.ca", paths: routes }),
      ],
    };
  },

  pluginOptions: {
    i18n: {
      locale: "fr",
      fallbackLocale: "en",
      localeDir: "locales",
      enableLegacy: true,
      fullInstall: true,
    },
  },
};
