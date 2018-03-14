/**
 * Root
 *
 */

import Header from 'presentational/Header';
import Footer from 'presentational/Footer';

// StyleSheet
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
      <!-- Components matched by a route will render here. -->
      <router-view />
      <Footer />
    </div>
  `,
};
