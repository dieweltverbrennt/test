<template>
  <Header />
  <div class="content">
    <router-view/>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
</script>

<style lang="scss">
#app {
  font-family: 'Roboto';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
main {
  max-width: 1400px;
  margin: 40px auto 0;
}
</style>
