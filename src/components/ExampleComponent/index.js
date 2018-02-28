import Vue from 'vue';
import './style.scss';

export default Vue.component('ExampleComponent', {
  methods: {
    increment() {
      this.$store.dispatch('incrementCounter');
    },
    decrement() {
      this.$store.dispatch('decrementCounter');
    },
  },
  template: `
    <section class="example-component">
      <div>
        <span v-text="this.$store.state.count"></span>
      </div>
      <button @click="this.decrement">Decrement</button>
      <button @click="this.increment">Increment</button>
    </section>
  `,
});
