/**
 * Root
 */

import Header from 'presentational/Header';
import Footer from 'presentational/Footer';

// StyleSheet
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
