/* eslint import/prefer-default-export: 0 */

/**
 * Internationalization Plugin
 *
 * Further Reading: http://kazupon.github.io/vue-i18n/en/
 */

import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export const i18n = new VueI18n({
  fallbackLocale: 'en',
  silentTranslationWarn: true,
});

// Set i18n Language Helper
export const setI18nLanguage = (lang) => {
  i18n.locale = lang;

  const headers = new Headers();
  headers.set('Accept-Language', lang);

  document.querySelector('html').setAttribute('lang', lang);

  return lang;
};

// Language Init
setI18nLanguage('en');
