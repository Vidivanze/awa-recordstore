<template>
  <Splide :options="{ rewind: true, autoplay: true, type  : 'fade', width : '100vw', height: '93vh', }">
    <SplideSlide>
      <img src="../assets/1.jpg" alt="Sample 1">
    </SplideSlide>
    <SplideSlide>
      <img src="../assets/2.jpg" alt="Sample 1">
    </SplideSlide>
  </Splide>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export default {
  name: 'Carousel',
  
  components: { 
    Splide,
    SplideSlide 
  },
}
</script>

<style>
  .splide__slide img {
    width: 100%;
    height: auto;
  }
</style>