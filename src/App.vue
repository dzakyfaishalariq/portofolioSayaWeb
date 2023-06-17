<template>
  <body>
    <Navbar />
    <router-view />
  </body>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
<style>
body {
  background: rgb(80, 80, 79) !important;
}
</style>