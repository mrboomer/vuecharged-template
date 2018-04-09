<i18n>
{
  "en": {
    "title": "Examples"
  },
  "es": {
    "title": "Ejemplos"
  }
}
</i18n>

<template>
  <main>
    <h2 v-text="$t('title')" />
    <Demo />
  </main>
</template>

<script>
// Lazy Load Components
const Demo = () => import('@/components/container/Demo');

export default {
  name: 'Examples',
  components: {
    Demo,
  },
};
</script>

<style lang="scss" scoped>

</style>
