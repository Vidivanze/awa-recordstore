<template>
  <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
    <template v-for="arrival in arrival_list" :key="arrival.id">
      <div class="group">
        <arrival-card 
          :id="arrival.id" 
          :genre="genre"
          :name="arrival.name" 
          :artist="arrival.artist"
          :pressInfos="arrival.pressInfos" 
          :imageSource="arrival.imageFileName" 
          :label="arrival.label"
          :songs="arrival.songs"
        ></arrival-card>  
      </div>
    </template>
  </div>
</template>

<script>
import ArrivalCard from './ArrivalCard.vue'
import ArrivalJazz from '../../data/ArrivalJazz.json'
import ArrivalRap from '../../data/ArrivalRap.json'

export default {
  name: 'ArrivalCardsList',

  props: {
    genre: String
  },

  components: {
    ArrivalCard,
  },

  data(props) {
    //Choose the source of the list depending on the parameter
    if(props.genre == "Jazz"){
      return {
        arrival_list: ArrivalJazz,
      }
    }
    
    if(props.genre == "Rap"){
      return {
        arrival_list: ArrivalRap,
      }
    }
  },
}

</script>

