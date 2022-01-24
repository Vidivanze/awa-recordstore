<template>
  <div class="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
    <div class="card">
      <div class="card-content">
        <div class="card-front">
          <img
            :src="`/img/products/` + genre + '/' + imageSource"
            class="w-full h-full object-center object-cover group-hover:opacity-75 hover:object-scale-down"
          />
        </div>
        <div class="card-back">
          <strong class="card-text">{{ artist }}</strong>
          <h2 class="card-text">{{ label }}</h2>
          <h2 class="card-text">{{ pressInfos }}</h2>

          <button id="show-modal" @click="showModal = true">
            <font-awesome-icon class="back-icon" size="2x" icon="info-circle" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <h3 class="mt-4 text-lg card-title">
    {{ name }}
  </h3>

  <!-- use the modal component, pass in the prop -->
  <transition name="modal">
  <modal v-bind="$attrs" v-if="showModal" @close="showModal = false">
    <!--
      you can use custom content here to overwrite
      default content
    -->
    <template v-slot:header>
      <h2>Titres</h2>
    </template>
    <template v-slot:body>
      <template v-for="song in songs" :key="song.id">
        <h3>{{song}}</h3>
      </template>
    </template>
    
    <template v-slot:footer>
      
    </template>
  </modal>
  </transition>
</template>



<script>
import Modal from '../Modal.vue';

export default {
  name: 'ArrivalCard',

  props: {
    name: String,
    genre: String,
    artist: String,
    pressInfos: Number,
    imageSource: String,
    label: String,
    songs: Array,
  },

  components: {
    Modal,
  },

  data() {
    return {
      showModal: false
    }
  },
}

</script>

<style>
  .card{
    perspective: 600px;
    text-align: center;
  }
  .card-content {
    position: relative;
    object-fit: contain;
    min-width: 100%;
    min-height: 247px;
    width: 100%;
    height: 100%;
    transition: transform 0.7s;
    transform-style: preserve-3d;
  }

  .card-title {
    color: #61befb;
  }

  .card-text {
    color: #fff;
  }

  .card:hover .card-content{
    transform: rotateY(180deg);
    transition: transform 0.6s;
  }

  .card-front {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    color: #fff;
  }

  .card-back {
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 53px;
    backface-visibility: hidden;
    color: #fff;
    background-color: #1B262C;
    transform: rotateY(180deg);
    border-right: 6px solid #3282B8;
    border-bottom: 6px solid #3282B8;
    box-shadow: 6px 6px #1B262C;
  }

  .back-icon {
    color: #3282B8 !important;
  }

  #show-modal{
    display: inline-flex;
  }

  /*Media querries for the cards size*/

   @media screen and (min-width: 1400px) {
    .card-content, .card-back {
      min-height: 218px;
    }
  }

  @media screen and (min-width: 1300px) {
    .card-content, .card-back {
      min-height: 218px;
    }
  }

  @media screen and (max-width: 1298px) {
    .card-content, .card-back {
      min-height: 214px;
    }
  }

  @media screen and (max-width: 1279px) {
    .card-content, .card-back {
      min-height: 265px;
    }
  }

  @media screen and (max-width: 1200px) {
    .card-content, .card-back {
      min-height: 244px;
    }
  }

  @media screen and (max-width: 1199px) {
    .card-content, .card-back {
      min-height: 250px;
    }
  }

  @media screen and (max-width: 1150px) {
    .card-content, .card-back {
      min-height: 251px;
    }
  }

  @media screen and (max-width: 1100px) {
    .card-content, .card-back {
      min-height: 220px;
    }
  }

  @media screen and (max-width: 1079px) {
    .card-content, .card-back {
      min-height: 218px;
    }
  }

  @media screen and (max-width: 1055px) {
    .card-content, .card-back {
      min-height: 228px;
    }
  }

  @media screen and (max-width: 1022px) {
    .card-content, .card-back {
      min-height: 300px;
      line-height: 69px;
    }
  }

  @media screen and (max-width: 800px) {
    .card-content, .card-back {
      min-height: 296px;
      line-height: 69px;
    }
  }

  @media screen and (max-width: 650px) {
    .card-content, .card-back {
      min-height: 288px;
      line-height: 69px;
    }
  }

  @media screen and (max-width: 639px) {
    .card-content, .card-back {
      min-height: 570px;
      line-height: 125px;
    }
  }

  @media screen and (max-width: 600px) {
    .card-content, .card-back {
      min-height: 568px;
      line-height: 139px;
    }
  }

  @media screen and (max-width: 575px) {
    .card-content, .card-back {
      min-height: 541px;
      line-height: 130px;
    }
  }

  @media screen and (max-width: 550px) {
    .card-content, .card-back {
      min-height: 480px;
      line-height: 112px;
    }
  }

  @media screen and (max-width: 530px) {
    .card-content, .card-back {
      min-height: 480px;
      line-height: 112px;
    }
  }

  @media screen and (max-width: 520px) {
    .card-content, .card-back {
      min-height: 433px;
      line-height: 105px;
    }
  }

  @media screen and (max-width: 450px) {
    .card-content, .card-back {
      min-height: 416px;
    }
  }

</style>
