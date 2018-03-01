import Vue from 'vue';
import Router from 'vue-router';

// Lazy Load Routes
const Home = () => import('views/Home');

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: Home,
  },
];

export default new Router({
  routes,
});
