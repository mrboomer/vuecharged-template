<template>
  <section class="example">
    <div class="container">
      <!-- Logo -->
      <img
        src="./img/VueChargedLogo.png"
        alt="VueCharged Logo">

      <!-- Input Example -->
      <h2>Name: <span v-text="name" /></h2>
      <input
        :placeholder="name"
        type="text"
        @input="updateName">

      <!-- Counter Example -->
      <h3>Count: <span v-text="count" /></h3>
      <div>
        <button
          type="button"
          @click="decrement">Decrement</button>
        <button
          type="button"
          @click="increment">Increment</button>
      </div>

      <!-- Getter Example -->
      <h4>Fibonacci Number <span v-text="positiveCount" />: <span v-text="fibonacciNumber" /></h4>
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

// Namespaced Helper
const { mapState, mapGetters } = createNamespacedHelpers('example');

export default {
  name: 'Example',
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

      this.$store.dispatch('example/updateName', payload);
    },
    increment() {
      this.$store.dispatch('example/incrementCounter');
    },
    decrement() {
      this.$store.dispatch('example/decrementCounter');
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 15px;
}

img {
  display: block;
  max-width: 100%;
  margin: 0 auto;
}

h2, h3, h4 {
  text-align: center;
}

input {
  display: block;
  margin: 0 auto;
}

div {
  text-align: center;
}
</style>
