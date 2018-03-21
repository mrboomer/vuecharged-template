<template>
  <main>
    <Demo />
  </main>
</template>

<script>
// Lazy Load Components
const Demo = () => import('@/components/container/Demo');

export default {
  name: 'Home',
  components: {
    Demo,
  },
};
</script>

<style lang="scss" scoped>

</style>
