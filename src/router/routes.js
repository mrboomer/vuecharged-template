/**
 * Routes
 *
 * This maps our view components to routes and lets vue-router know where to
 * render them.
 *
 * Further Reading: https://router.vuejs.org/en/api/options.html#routes
 */

// Lazy Load Routes
const Home = () => import('@/views/Home');
const NotFound = () => import('@/views/NotFound');
const Examples = () => import('@/views/Examples');

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/examples',
    name: 'Examples',
    component: Examples,
  },
];
