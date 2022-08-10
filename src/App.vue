<template>
  <NavbarItem />
  <main>
    <router-view />
  </main>
  <Footer />
</template>

<script>
import NavbarItem from './Component/NavbarItem.vue';
import Footer from './Component/Footer.vue';

export default {
  name: 'App',
  components: {
    NavbarItem,Footer
  },
};
</script>
