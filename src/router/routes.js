// Lazy Load Routes
const Home = () => import('views/Home');

export default [
  {
    path: '/',
    component: Home,
  },
];
