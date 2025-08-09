// main.js

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Tailwind and animations
import './assets/tailwind.css'
import 'aos/dist/aos.css'

// AOS
import AOS from 'aos'

// ✅ Font Awesome setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// Add all solid and brand icons to the library
library.add(fas, fab)

// Create app
const app = createApp(App)

app.use(router)

// ✅ Register Font Awesome component globally
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')

// ✅ Initialize AOS
AOS.init({
  duration: 800,
  once: true,
  easing: 'ease-in-out',
  offset: 50,
})
