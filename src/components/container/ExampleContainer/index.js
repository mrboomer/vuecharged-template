/**
 * Example Container
 */

import Vue from 'vue';
import { createNamespacedHelpers } from 'vuex';

// Namespaced Helper
const { mapState, mapGetters } = createNamespacedHelpers('exampleContainer');

export default Vue.component('ExampleContainer', {
  computed: {
    ...mapState({
      name: (state) => state.name,
      count: (state) => state.count,
    }),
    ...mapGetters([
      'fibonacciNumber',
    ]),
  },
  methods: {
    increment() {
      this.$store.dispatch('exampleContainer/incrementCounter');
    },
    decrement() {
      if (this.count > 0) {
        this.$store.dispatch('exampleContainer/decrementCounter');
      }
    },
    updateName(e) {
      const nameInputed = e.target.value;
      const payload = {
        name: nameInputed || 'John Doe',
      };

      this.$store.dispatch('exampleContainer/updateName', payload);
    },
  },
  template: `
    <section class="example-container">
      <!-- Input Example -->
      <div class="container">
        <h1 class="mt-5">Name: <span v-text="this.name"></span></h1>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="update-name">Update Name</span>
          </div>
          <input type="text" class="form-control" aria-describedby="update-name" :placeholder="this.name" @input="this.updateName">
        </div>
      </div>

      <!-- Counter Example -->
      <div class="container">
        <h2 class="mt-5">Count: <span v-text="this.count"></span></h2>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-secondary" @click="this.decrement">Decrement</button>
          <button type="button" class="btn btn-secondary" @click="this.increment">Increment</button>
        </div>
      </div>

      <!-- Getter Example -->
      <div class="container">
        <h3 class="mt-5">Fibonacci Number <span v-text="this.count"></span>: <span v-text="this.fibonacciNumber"></span></h3>
      </div>
    </section>
  `,
});
