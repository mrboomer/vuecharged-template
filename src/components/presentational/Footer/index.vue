<template>
  <footer class="footer">
    <router-link
      to="/"
      v-text="$t('home')" />
    <router-link
      to="examples"
      v-text="$t('examples')" />
    <a
      href="https://github.com/mrboomer/vuecharged-template/blob/master/README.md"
      target="_blank"
      v-text="$t('docs')" />
  </footer>
</template>

<script>
import messages from './messages';

export default {
  name: 'Footer',
  i18n: { messages },
};
</script>

<style lang="scss" scoped>
a {
  padding: 0 15px;
  color: #42b983;
}
</style>
