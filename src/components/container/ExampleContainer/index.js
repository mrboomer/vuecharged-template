/**
 * Example Container
 */

import Vue from 'vue';
import { createNamespacedHelpers } from 'vuex';

// StyleSheet
import './style.scss';

// Images
import logo from './images/VueChargedLogo.png';

// Namespaced Helper
const { mapState, mapGetters } = createNamespacedHelpers('exampleContainer');

export default Vue.component('ExampleContainer', {
  computed: {
    ...mapState({
      name: (state) => state.name,
      count: (state) => state.count,
    }),
    ...mapGetters([
      'positiveCount',
      'fibonacciNumber',
    ]),
  },
  methods: {
    updateName(e) {
      const nameInputed = e.target.value;
      const payload = {
        name: nameInputed || 'John Doe',
      };

      this.$store.dispatch('exampleContainer/updateName', payload);
    },
    increment() {
      this.$store.dispatch('exampleContainer/incrementCounter');
    },
    decrement() {
      this.$store.dispatch('exampleContainer/decrementCounter');
    },
  },
  template: `
    <section class="example-container">
      <div class="container">
        <!-- Logo -->
        <img src="${logo}" alt="VueCharged Logo" />

        <!-- Input Example -->
        <h2>Name: <span v-text="this.name"></span></h2>
        <input type="text" :placeholder="this.name" @input="this.updateName">

        <!-- Counter Example -->
        <h3>Count: <span v-text="this.count"></span></h3>
        <div>
          <button type="button" @click="this.decrement">Decrement</button>
          <button type="button" @click="this.increment">Increment</button>
        </div>

        <!-- Getter Example -->
        <h4>Fibonacci Number <span v-text="this.positiveCount"></span>: <span v-text="this.fibonacciNumber"></span></h4>
      </div>
    </section>
  `,
});
