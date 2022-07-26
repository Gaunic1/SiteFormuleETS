const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const routes = require('./routes.match');

module.exports = {
  configureWebpack: () => {
    if (process.env.NODE_ENV !== 'production') return;
    return {
      plugins: [
        new PrerenderSPAPlugin(
          path.resolve(__dirname, 'dist'),
          routes
        ), //Pre render
        new SitemapPlugin({ base: 'https://formule-ets.ca', paths: routes }) //Sitemap for google indexation
      ]
    }
  },


  pluginOptions: {
    i18n: {
      locale: 'fr',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: true,
      fullInstall: true
    }
  }
}
