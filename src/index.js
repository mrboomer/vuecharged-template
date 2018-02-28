/**
 * App Entry
 */

import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import router from 'router';
import store from 'store';
import App from 'container/App';

sync(store, router);

const app = new Vue({
  router,
  store,
  ...App,
});

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}

export default app;
