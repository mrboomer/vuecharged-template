<template>
  <main>
    <ExampleContainer />
  </main>
</template>

<script>
// Lazy Load Components
const ExampleContainer = () => import('container/ExampleContainer');

export default {
  components: {
    ExampleContainer,
  },
};
</script>
