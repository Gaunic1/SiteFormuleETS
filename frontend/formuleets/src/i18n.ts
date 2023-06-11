import { createI18n } from "vue-i18n";

function loadLocaleMessages() {
  const locales = import.meta.globEager("./locales/*.ts");
  const messages = {};
  Object.keys(locales).forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales[key].default;
    }
  });
  return messages;
}

const i18n = createI18n({
  locale: import.meta.env.VUE_APP_I18N_LOCALE || "en",
  fallbackLocale: import.meta.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: loadLocaleMessages(),
});

export default i18n;
