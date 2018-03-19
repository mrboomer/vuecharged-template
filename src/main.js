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

export default app;
