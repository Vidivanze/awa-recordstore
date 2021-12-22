<template>
  <div class="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
    <img :src="`/img/products/` + imageSource" class="w-full h-full object-center object-cover group-hover:opacity-75 hover:object-scale-down" />
  </div>
  <h3 class="mt-4 text-lg text-white">
    {{ name }}
  </h3>
  <h3 class="mt-1 text-base text-white">
    {{ artist }}
  </h3>
  <p class="mt-1 text-sm font-medium text-white">
    {{ pressInfos }}
  </p>
</template>

<script>

export default {
  name: 'ArrivalCard',
  props: { 
    name: String,
    artist: String,
    pressInfos: Number,
    imageSource: String,
    imageAlt: String,
  },

  setup(){
    const image = true
    return {
      image,
    }
  },

}
</script>

<style>

</style>