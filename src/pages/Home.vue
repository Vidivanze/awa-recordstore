<template>
  <Navbar/>
  <div class="content">
    <div class="grid grid-rows-1">
      <Carousel/>
    </div>
    <ArrivalCardsList/>
  </div>
</template>

<script>
import Navbar from '../components/Layout/Navbar.vue'
import Carousel from '../components/Carousel.vue'
import ArrivalCardsList from '../components/LastArrivals/ArrivalCardsList.vue'

export default {
    name: 'Home',

    components: {
      Navbar,
      Carousel,
      ArrivalCardsList,
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