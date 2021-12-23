<template>
  <div class="head dark">
    <Navbar/>
  </div>
  <div class="content dark">
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
    height: 100%;
    width: 100%;
    background-color: #1B262C;
  }
</style>