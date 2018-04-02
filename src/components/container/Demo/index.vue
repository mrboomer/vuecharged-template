<template>
  <section class="demo">
    <div class="container">
      <!-- Logo -->
      <img
        src="./img/VueChargedLogo.png"
        alt="VueCharged Logo">

      <!-- Input Example -->
      <i18n
        tag="h2"
        path="message.h2">
        <span
          place="name"
          v-text="name" />
      </i18n>
      <input
        :placeholder="name"
        type="text"
        @input="updateName">

      <!-- Counter Example -->
      <i18n
        tag="h3"
        path="message.h3">
        <span
          place="count"
          v-text="count" />
      </i18n>
      <div>
        <i18n
          tag="button"
          type="button"
          path="message.decrement"
          @click="decrement" />
        <i18n
          tag="button"
          type="button"
          path="message.increment"
          @click="increment" />
      </div>

      <!-- Getter Example -->
      <i18n
        tag="h4"
        path="message.h4">
        <span
          place="positiveCount"
          v-text="positiveCount" />
        <span
          place="fibonacciNumber"
          v-text="fibonacciNumber" />
      </i18n>

      <!-- Async Example -->
      <i18n
        tag="p"
        path="message.p">
        <a
          :href="redditTopPostUrl"
          target="_blank"
          place="redditTopPostTitle"
          v-text="redditTopPostTitle" />
      </i18n>
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import messages from './messages';

// Namespaced Helper
const { mapState, mapGetters } = createNamespacedHelpers('demo');

export default {
  name: 'Demo',
  i18n: { messages },
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
