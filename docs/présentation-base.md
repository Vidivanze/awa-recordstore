# AWA Record Store
Il s'agît d'un projet fictif sur le thême "Record Store" (Magasin de vente de vinyl)
## Sources
### Librairies
- Vue 3 :  [here](https://v3.vuejs.org/)
- Tailwindcss : [here](https://tailwindcss.com/)
- Splide.js : [here](https://splidejs.com/)
- Animate.css : [here](https://animate.style/) 

### Cosmétiques et composant utilisés
- Color Theme : [here](https://colorhunt.co/palette/1b262c0f4c753282b8bbe1fa)
- Tailwind Navbar : [here](https://tailwindui.com/components/application-ui/navigation/navbars)
- Card flip : [here](https://dev.to/michaelburrows/how-to-create-an-animated-flip-card-with-css-3d-transforms-4ckj)
- Animation on scroll : [here](https://alvarotrigo.com/blog/css-animations-scroll/)

## Code
### Liste des arrivages
Le composant générant cette liste est appelé dans home et est parametrable selon le genre musical
```js
<!-- Listes des vinyles par genre -->
<div class="cards-list">
  <div class="max-w-2xl mx-auto px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="list-container reveal fade-right">
      <h2 class="mt-5 mb-5 text-3xl pt-6 text-left title">Arrivages Jazz</h2>
      <ArrivalCardsList genre="Jazz"/>
    </div>
  </div>

  <div class="max-w-2xl mx-auto px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="list-container reveal fade-right">
      <h2 class="mb-5 text-3xl text-left title">Arrivages Rap & Hip-Hop</h2>
      <ArrivalCardsList genre="Rap"/>
    </div>
  </div>
</div>
```

Les données sont stockées en json 
```js
[
  {
      "id": 1,
      "name": "2 Hot!",
      "artist": "Peaches & Herb",
      "pressInfos": "USA  - 1978",
      "imageFileName": "1.jpg",
      "label": "Polydor"
  },
```
Elles sont ensuite chargées depuis le composant de liste selon le genre passé en paramêtre
```js
import ArrivalCard from './ArrivalCard.vue'
import ArrivalJazz from '../../data/ArrivalJazz.json'
import ArrivalRap from '../../data/ArrivalRap.json'

...

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
```

Pour chaque enregistrement du json, est généré un composant card

```html
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
        ></arrival-card>  
      </div>
    </template>
  </div>
</template>
```

Chaque card affiche les informations du vinyl

```html
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
          
          <font-awesome-icon class="logo" size="2x" icon="record-vinyl" />

        </div>
      </div>
    </div>
  </div>  
  <h3 class="mt-4 text-lg card-title">
    {{ name }}
  </h3>
</template>
```

