<template>
  <main>
    <Example />
  </main>
</template>

<script>
// Lazy Load Components
const Example = () => import('@/components/container/Example');

export default {
  name: 'Home',
  components: {
    Example,
  },
};
</script>

<style lang="scss" scoped>

</style>
