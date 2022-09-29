const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");
const SitemapPlugin = require("sitemap-webpack-plugin").default;
const routes = require("./routes.match");

module.exports = {
  configureWebpack: () => {
    if (process.env.NODE_ENV !== "production") return;
    return {
      plugins: [
        //PreRender
        new PrerenderSPAPlugin(path.resolve(__dirname, "dist"), routes),

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
