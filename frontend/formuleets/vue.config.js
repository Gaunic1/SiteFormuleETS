const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const routes = require('./routes.match');

console.log('Automated pre-rendering: ', routes);

module.exports = {
  configureWebpack: () => {
    if (process.env.NODE_ENV !== 'production') return;
    return {
      plugins: [
        new PrerenderSPAPlugin(
          // Absolute path to compiled SPA
          path.resolve(__dirname, 'dist'),
          // List of routes to prerender
          routes,
          {
            // options
          }
        ),
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
