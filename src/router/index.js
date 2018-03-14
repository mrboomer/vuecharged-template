/**
 * Router
 *
 * This creates and mounts the root instance.
 *
 * Further Reading: https://router.vuejs.org/en/
 *
 */

import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router);

export default new Router({
  routes,
});
