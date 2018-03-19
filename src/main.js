/**
 * Entry
 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import App from '@/components/container/App';
import store from './store';
import router from './router';

sync(store, router);

Vue.config.productionTip = false;

const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});

// Install ServiceWorker at the end since it's not most
// important operation and if main code fails, we do not
// want it installed
/* istanbul ignore next */
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}

export default app;
