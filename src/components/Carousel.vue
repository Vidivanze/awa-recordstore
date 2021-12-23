<template>
  <Splide :options="{ 
    autoplay: true, 
    pauseOnHover: false,
    rewind: true, 
    interval: '4000', 
    type: 'fade', 
    width: '100vw', 
    height: '93vh', 
		cover: true,
		heightRatio: 0.5, }">
    <SplideSlide>
      <img src="/img/carousel/1.jpg" alt="Sample 1">
    </SplideSlide>
    <SplideSlide>
      <img src="/img/carousel/2.jpg" alt="Sample 2">
    </SplideSlide>
    <SplideSlide>
      <img src="/img/carousel/3.jpg" alt="Sample 3">
    </SplideSlide>
    <SplideSlide>
      <img src="/img/carousel/4.jpg" alt="Sample 4">
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