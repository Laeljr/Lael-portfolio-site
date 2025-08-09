// main.js

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/tailwind.css'
import 'aos/dist/aos.css'
import AOS from 'aos'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

AOS.init({
  duration: 800,
  once: true,
  easing: 'ease-in-out',
  offset: 50,
})

// ✅ Check for redirect query param and navigate
const params = new URLSearchParams(window.location.search)
const redirect = params.get('redirect')
if (redirect) {
  router.replace(redirect)
}
