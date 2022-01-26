<template>
  <div class="head dark">
    <Navbar/>
  </div>

  <div class="content dark">
    <div class="grid grid-rows-1">
      <Carousel/>
    </div>
    
    <!-- Listes des arrivages par genre -->
    <div class="cards-list">
      <div class="max-w-2xl mx-auto px-4 xs:py-14 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="list-container reveal fade-right">
          <h2 class="mt-5 mb-5 text-3xl pt-6 text-left title">Arrivages Jazz 
            <font-awesome-icon class="logo" size="2x" icon="music" />
          </h2>
          <ArrivalCardsList genre="Jazz"/>
        </div>
      </div>

      <div class="max-w-2xl mx-auto px-4 xs:py-14 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="list-container reveal fade-left">
          <h2 class="mb-5 text-3xl text-left title">Arrivages Rap & Hip-Hop
            <font-awesome-icon class="logo" size="2x" icon="music" />
          </h2>
          <ArrivalCardsList genre="Rap"/>
        </div>
      </div>
    </div>

    <div>
      <Contact/>
    </div>
    
  </div>
  
</template>

<script>
import Navbar from '../components/Layout/Navbar.vue'
import Carousel from '../components/Carousel.vue'
import ArrivalCardsList from '../components/LastArrivals/ArrivalCardsList.vue'
import Contact from '../components/Contact.vue';
import '../../node_modules/animate.css/animate.min.css';
import '../components/Reveal.js';


export default {
  name: 'Home',

  components: {
    Navbar,
    Carousel,
    ArrivalCardsList,
    Contact,
  },  
}
</script>

<style>
 .content {
    height: 100%;
    width: 100%;
    background-color: #1B262C;
  }
  
  .title{
    color: #61befb;
  }

  .cards-list{
    background-color: #1B262C;
  }

 .reveal {
    position: relative;
    opacity: 0;
  }

  .reveal.active {
    opacity: 1;
  }

  .active.fade-right {
    animation: fade-right 0.5s ease-in;
  }

  .active.fade-left {
    animation: fade-left 0.5s ease-in;
  }

  @keyframes fade-right {
    0% {
      transform: translateX(50px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes fade-left {
    0% {
      transform: translateX(-50px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
</style>