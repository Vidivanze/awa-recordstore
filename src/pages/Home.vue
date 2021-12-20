<template>
  <Navbar/>
</template>

<script>
import Navbar from '../components/Layout/Navbar.vue'

export default {
    name: 'Home',

    components: {
      Navbar,
    },
}
</script>

<style>
 .content {
    background: black;
    height: 100%;
    width: 100%;
  }
</style>