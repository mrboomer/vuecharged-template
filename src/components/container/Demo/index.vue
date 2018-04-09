<template>
  <section class="demo">
    <div class="container">
      <!-- Input Example -->
      <div class="ex-input">
        <i18n
          tag="h3"
          path="name">
          <span
            place="name"
            v-text="name" />
        </i18n>
        <input
          :placeholder="name"
          type="text"
          @input="updateName">
      </div>

      <!-- Counter Example -->
      <div class="ex-counter">
        <i18n
          tag="h4"
          path="count">
          <span
            place="count"
            v-text="count" />
        </i18n>
        <button
          type="button"
          @click="decrement"
          v-text="$t('decrement')" />
        <button
          type="button"
          @click="increment"
          v-text="$t('increment')" />
      </div>

      <!-- Getter Example -->
      <div class="ex-getter">
        <i18n
          tag="h4"
          path="fibonacci">
          <span
            place="positiveCount"
            v-text="positiveCount" />
          <span
            place="fibonacciNumber"
            v-text="fibonacciNumber" />
        </i18n>
      </div>

      <!-- Async Example -->
      <div class="ex-async">
        <h4 v-text="$t('reddit')" />
        <a
          :href="redditTopPostUrl"
          target="_blank"
          v-text="redditTopPostTitle" />
      </div>

      <!-- Language -->
      <div class="ex-language">
        <label
          for="locale"
          v-text="$t('language')" />
        <select
          id="locale"
          :value="locale"
          @change="updateLocale">
          <option>en</option>
          <option>es</option>
        </select>
      </div>
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
      locale: (state) => state.locale,
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
    updateLocale(e) {
      const locale = e.target.value;
      const payload = {
        locale,
      };

      this.$store.dispatch('demo/updateLocale', payload);
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

div[class^="ex-"] {
  padding: 10px;
  border-top: 1px dashed #ebebeb;
}

h2, h3, h4 {
  margin: 10px 0;
}

p {
  font-weight: 600;
}

a {
  display: inline-block;
  font-weight: 400;
  text-decoration: none;
  color: #35485d;
}

input, button, a {
  margin-bottom: 10px;
}
</style>
