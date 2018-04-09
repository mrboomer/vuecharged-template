<i18n>
{
  "en": {
    "title": "Welcome!",
    "getStarted": "Visit the \"src\" folder to get started."
  },
  "es": {
    "title": "¡Bienvenido!",
    "getStarted": "Visita la carpeta \"src\" para comenzar."
  }
}
</i18n>

<template>
  <main>
    <section class="home">
      <div class="container">
        <!-- Logo -->
        <img
          src="./img/VueChargedLogo.png"
          alt="VueCharged Logo">

        <!-- Get Started -->
        <h2 v-text="$t('title')" />
        <p v-text="$t('getStarted')" />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
.home {
  margin-bottom: 20px;
}

.container {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
