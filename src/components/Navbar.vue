<template>
  <section>
    <nav
      :class="[
        'fixed top-0 w-full z-50 flex items-center px-6 transition-all duration-300 backdrop-blur-sm',
        isShrunk ? 'py-2 bg-dark-surface/90 shadow-md' : 'py-4 bg-dark-surface/80 shadow-md'
      ]"
    >
      <!-- 🔹 Logo (Clickable: Name + Profile Pic) -->
      <router-link
        to="/"
        class="flex items-center space-x-3 hover:opacity-90 transition"
      >
        <img
          src="/src/assets/pro.jpg"
          alt="Profile"
          class="w-10 h-10 rounded-full border-2 border-neon-blue shadow-glow"
        />
        <span class="text-white font-bold text-lg name-glow">Lael Mulenga</span>
      </router-link>

      <!-- Desktop Navigation (Centered) -->
      <ul
        class="hidden md:flex items-center space-x-8 px-6 py-2 rounded-full bg-dark-card/70 shadow-neon text-white font-semibold text-lg absolute left-1/2 transform -translate-x-1/2"
      >
        <li v-for="link in links" :key="link.to">
          <router-link
            :to="link.to"
            exact-active-class="text-neon-blue font-bold"
            class="relative group transition duration-200 hover:text-neon-blue"
          >
            {{ link.name }}
            <span
              class="absolute left-0 -bottom-1 h-[2px] w-0 bg-neon-blue transition-all duration-300 group-hover:w-full"
            ></span>
          </router-link>
        </li>
      </ul>

      <!-- 🔹 Mobile Button (Menu Text Instead of Hamburger) -->
      <button
        @click="toggleMenu"
        class="md:hidden text-white ml-auto font-semibold text-lg"
      >
        {{ menuOpen ? 'Close' : 'Menu' }}
      </button>

      <!-- Mobile Dropdown -->
      <transition name="fade">
        <ul
          v-if="menuOpen"
          class="md:hidden absolute top-full left-0 w-full bg-dark-card/90 py-6 space-y-4 text-center text-white text-lg shadow-lg"
        >
          <li v-for="link in links" :key="link.to">
            <router-link
              :to="link.to"
              class="transition duration-200 hover:text-neon-blue"
              @click.native="menuOpen = false"
            >
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </transition>
    </nav>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const menuOpen = ref(false)
const isShrunk = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const handleScroll = () => {
  isShrunk.value = window.scrollY > 30
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

const links = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Projects', to: '/projects' },
  { name: 'Skills', to: '/skills' },
  { name: 'Contact', to: '/contact' },
]
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* 🔹 Neon Glow Effect for Profile Pic */
.shadow-glow {
  box-shadow: 0 0 10px #00f0ff, 0 0 20px #00f0ff, 0 0 40px #00f0ff;
  transition: box-shadow 0.3s ease;
}
.shadow-glow:hover {
  box-shadow: 0 0 15px #00f0ff, 0 0 30px #00f0ff, 0 0 60px #00f0ff;
}

/* 🔹 Neon Glow Effect for Name */
.name-glow {
  transition: text-shadow 0.3s ease, color 0.3s ease;
}
.name-glow:hover {
  color: #00f0ff;
  text-shadow: 0 0 10px #00f0ff, 0 0 20px #00f0ff, 0 0 40px #00f0ff;
}
</style>
