<template>
  <Navbar/>
  <div class="content">
    <div class="grid grid-rows-1">
      <Carousel/>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Layout/Navbar.vue'
import Carousel from '../components/Carousel.vue'

export default {
    name: 'Home',

    components: {
      Navbar,
      Carousel,
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