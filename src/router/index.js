import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Services from '../pages/Services.vue'
import Projects from '../pages/Projects.vue'
import Skills from '../pages/Skills.vue'      // <-- import Skills page
import Contact from '../pages/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/services', name: 'Services', component: Services },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/skills', name: 'Skills', component: Skills },    // <-- add route here
  { path: '/contact', name: 'Contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
