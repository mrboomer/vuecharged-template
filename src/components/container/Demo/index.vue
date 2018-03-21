<template>
  <section class="demo">
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

      <!-- Async Example -->
      <p>
        Current Reddit Top Post:
        <a
          :href="redditTopPostUrl"
          target="_blank"><span v-text="redditTopPostTitle" /></a>
      </p>
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

// Namespaced Helper
const { mapState, mapGetters } = createNamespacedHelpers('demo');

export default {
  name: 'Demo',
  computed: {
    ...mapState({
      name: (state) => state.name,
      count: (state) => state.count,
    }),
    ...mapGetters([
      'positiveCount',
      'fibonacciNumber',
      'redditTopPostTitle',
      'redditTopPostUrl',
    ]),
  },
  mounted() {
    this.$store.dispatch('demo/getRedditPosts');
  },
  methods: {
    updateName(e) {
      const nameInputed = e.target.value;
      const payload = {
        name: nameInputed || 'John Doe',
      };

      this.$store.dispatch('demo/updateName', payload);
    },
    increment() {
      this.$store.dispatch('demo/incrementCounter');
    },
    decrement() {
      this.$store.dispatch('demo/decrementCounter');
    },
  },
};
</script>

<style lang="scss" scoped>
.demo {
  margin-bottom: 20px;
}

.container {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 15px;
}

h2, h3, h4 {
  margin-top: 20px;
}

p {
  font-weight: 600;
}

a {
  font-weight: 400;
  text-decoration: none;
  color: #35485d;
}
</style>
