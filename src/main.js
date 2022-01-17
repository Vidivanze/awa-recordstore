
import { createApp } from 'vue'
import App from './App.vue'
import './css/tailwind.css'
import './assets/tailwind.css'
import FontAwesomeIcon  from "./assets/FontAwesomeIcon";


createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')
