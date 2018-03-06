/**
 * Example Container
 */

import Vue from 'vue';

export default Vue.component('ExampleContainer', {
  methods: {
    increment() {
      this.$store.dispatch('exampleContainer/incrementCounter');
    },
    decrement() {
      this.$store.dispatch('exampleContainer/decrementCounter');
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
        <h1 class="mt-5">Name: <span v-text="this.$store.state.name"></span></h1>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="update-name">Update Name</span>
          </div>
          <input type="text" class="form-control" aria-describedby="update-name" :placeholder="this.$store.state.name" @input="this.updateName">
        </div>
      </div>

      <!-- Counter Example -->
      <div class="container">
        <h2 class="mt-5">Count: <span v-text="this.$store.state.count"></span></h2>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-secondary" @click="this.decrement">Decrement</button>
          <button type="button" class="btn btn-secondary" @click="this.increment">Increment</button>
        </div>
      </div>

      <!-- State Data -->
      <div class="container">
        <h2 class="mt-5">Vuex State Data:</h2>
        <pre v-text="this.$store.state"></pre>
      </div>
    </section>
  `,
});
