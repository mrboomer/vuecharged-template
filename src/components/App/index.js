import Header from '../Header';
import Footer from '../Footer';
import './style.scss';

export default {
  el: '#app',
  components: {
    Header,
    Footer,
  },
  template: `
    <div id="app">
      <Header />
      <!-- Components matched by the route will render here. -->
      <router-view />
      <Footer />
    </div>
  `,
};
