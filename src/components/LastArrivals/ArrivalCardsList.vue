<template>
  <div class="cards-list">
    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

      <h1 class="mb-2 text-4xl text-left title">Derniers arrivages</h1>
      <h2 class="mt-5 mb-5 text-3xl text-left title">Jazz</h2>

      <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
        <template v-for="arrival in arrival_jazz" :key="arrival.id">
          <div class="group">
            <arrival-card 
              :id="arrival.id" 
              genre="jazz"
              :name="arrival.name" 
              :artist="arrival.artist"
              :pressInfos="arrival.pressInfos" 
              :imageSource="arrival.imageFileName" 
              :label="arrival.label"
            ></arrival-card>  
          </div>
        </template>
      </div>
    </div>

    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="mt-4 mb-5 text-3xl text-left title">Rap et HipHop</h2>

      <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
        <template v-for="arrival in arrival_rap" :key="arrival.id">
          <div class="group">
            <arrival-card 
              :id="arrival.id" 
              genre="rap"
              :name="arrival.name" 
              :artist="arrival.artist"
              :pressInfos="arrival.pressInfos" 
              :imageSource="arrival.imageFileName" 
              :label="arrival.label"
            ></arrival-card>  
          </div>
        </template>
      </div>
    </div>

  </div>
</template>

<script>

import ArrivalCard from './ArrivalCard.vue'
import ArrivalJazz from '../../data/ArrivalJazz.json'
import ArrivalRap from '../../data/ArrivalRap.json'


export default {
  name: 'ArrivalCardsList',

  components: {
    ArrivalCard,
  },

  data() {
    console.log(ArrivalJazz)
    console.log(ArrivalRap)
    return {
      arrival_jazz: ArrivalJazz,
      arrival_rap: ArrivalRap,
    }
  },
  
}

</script>

<style>
  .title{
    color: #BBE1FA;
  }
  .cards-list{
    background-color: #1B262C;
  }
</style>
