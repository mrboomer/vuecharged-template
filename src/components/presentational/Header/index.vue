<template>
  <header class="header">
    <h1 v-text="$t('title')" />
  </header>
</template>

<script>
import messages from './messages';

export default {
  name: 'Header',
  i18n: { messages },
};
</script>

<style lang="scss" scoped>
h1 {
  font-weight: normal;
}
</style>
