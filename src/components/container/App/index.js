/**
 * App
 */

import Header from 'presentational/Header';
import Footer from 'presentational/Footer';

// StyleSheet
import './style.scss';

export default {
  name: 'App',
  el: '#app',
  components: {
    Header,
    Footer,
  },
  template: `
    <div id="app">
      <Header />
      <router-view />
      <Footer />
    </div>
  `,
};
