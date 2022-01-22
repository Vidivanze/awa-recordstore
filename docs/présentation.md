# AWA Record Store
## Sources
### Librairies
- Vue 3 :  [here](https://v3.vuejs.org/)
- Tailwindcss : [here](https://tailwindcss.com/)
- Splide.js : [here](https://splidejs.com/)
- Animate.css : [here](https://animate.style/) 

### cosmétiques et composant utilisés
- Color Theme : [here](https://colorhunt.co/palette/1b262c0f4c753282b8bbe1fa)
- Tailwind Navbar : [here](https://tailwindui.com/components/application-ui/navigation/navbars)
- Card flip : [here](https://dev.to/michaelburrows/how-to-create-an-animated-flip-card-with-css-3d-transforms-4ckj)
- Animation on scroll : [here](https://alvarotrigo.com/blog/css-animations-scroll/)

## Code
### Liste des vinyles
Le composant générant la liste des vinyles est appelé dans home et est parametrable selon le genre musicale
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
