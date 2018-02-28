import Header from 'components/Header';
import Footer from 'components/Footer';
import './style';

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
