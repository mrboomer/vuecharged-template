/**
 * Routes
 *
 * This maps our view components to routes and lets vue-router know where to
 * render them.
 *
 * Further Reading: https://router.vuejs.org/en/api/options.html#routes
 *
 */

// Lazy Load Routes
const Home = () => import('views/Home');

export default [
  {
    path: '/',
    component: Home,
  },
];
