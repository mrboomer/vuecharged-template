/**
 * Internationalization Plugin
 *
 * Further Reading: http://kazupon.github.io/vue-i18n/en/
 */

import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './en';
import es from './es';

Vue.use(VueI18n);

export default new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  silentTranslationWarn: true,
  messages: {
    en,
    es,
  },
});
