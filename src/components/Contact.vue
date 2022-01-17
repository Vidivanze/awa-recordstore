<template>
  <div id="contact" class="contact">
    
    <div class="max-w-2xl mx-auto px-10 lg:py-7 sm:py-96 sm:px-6 lg:max-w-7xl lg:px-16">
      <div class="grid grid-cols-2 gap-y-10 sm:grid-cols-1 gap-x-10 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">
        <div class="card reveal fade-top">
          <a href="#contact" class="block p-11 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight card-title">Retrouvez nous ici</h5>
            <p class="font-normal card-text">Avenue de la gare 14, 1450 Sainte-Croix</p>
          </a>
        </div>
        <div class="card reveal fade-top">
          <a href="#contact" class="block p-9 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight card-title">Horaires</h5>
            <p class="font-normal card-text">Ouvert mardi, mercredi, jeudi, vendredi, samedi, de 10h à 18h</p>
          </a>
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