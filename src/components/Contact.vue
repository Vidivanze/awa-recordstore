<template>
  <div id="contact" class="contact">
    
    <div class="flex h-screen">
      <div class="m-auto">
        <div class="grid w-100 grid-cols-2 auto-rows-max gap-y-10 xs:grid-rows-2 xs:grid-cols-1 sm:grid-cols-1 gap-x-10 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8 content-center items-center">  
          <div class="card reveal fade-top content-center items-center">
            <a href="#contact" class="block p-11 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 class="mb-2 text-2xl font-bold tracking-tight card-title">Retrouvez nous ici</h5>
              <p class="font-normal card-text">Avenue de la gare 14, 1450 Sainte-Croix</p>
              <div class="mt-5">
                <font-awesome-icon class="logo" size="7x" icon="map-marker-alt" />
              </div>
            </a>
          </div>
          <div class="card reveal fade-top">
            <a href="#contact" class="block p-9 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 class="mb-2 text-2xl font-bold tracking-tight card-title">Horaires</h5>
              <p class="font-normal card-text">Ouvert mardi, mercredi, jeudi, vendredi, samedi, de 10h à 18h</p>
              <div class="mt-4">
                <font-awesome-icon class="logo" size="3x" icon="store" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
}
</script>

<style>
  .contact { 
    width: 100%;
    height: 100vh; 
    background-color: #1B262C;
    background-image: url('/img/contact.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .active.fade-top {
    animation: fade-top 0.7s ease-in;
  }

  @keyframes fade-top {
    0% {
      transform: translateY(-100px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
</style>