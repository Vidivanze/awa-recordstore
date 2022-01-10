<template>
  <div class="contact">
    <div class="h-80 grid grid-cols-2 content-center">
      <div class="">
        <h1 class="mb-2 text-4xl pt-5 pb-5 text-center title">Adresse</h1>
      </div>
      <div class="">
        <h1 class="mb-2 text-4xl pt-5 pb-5 text-center title">Contactez nous wesh</h1>
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
    animation: fade-top 1s ease-in;
  }

  @keyframes fade-top {
    0% {
      transform: translateY(100px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
</style>