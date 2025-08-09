<template>
  <section class="project-section p-8 max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold text-blue-400 mb-8 text-center" data-aos="fade-up">
      My Projects
    </h2>

    <!-- Project Cards -->
    <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(project, index) in projects"
        :key="index"
        @click="openModal(index)"
        class="card cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
        data-aos="fade-up"
        :data-aos-delay="index * 100"
      >
        <img
          :src="project.screenshots[0]"
          loading="lazy"
          :alt="project.title"
          class="w-full h-40 object-cover"
        />
        <div class="p-4">
          <h3 class="font-bold text-lg text-blue-400 mb-2">{{ project.title }}</h3>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <transition name="fade-scale">
      <div
        v-if="modalOpen"
        class="modal-overlay"
        @click.self="closeModal"
        tabindex="0"
        ref="modalRef"
        role="dialog"
        aria-modal="true"
      >
        <div class="modal-content" @keydown.esc.prevent="closeModal">
          <button @click="closeModal" class="close-button" aria-label="Close modal">
            &times;
          </button>

          <!-- Navigation Buttons -->
          <div class="absolute top-1/2 left-2 transform -translate-y-1/2">
            <button @click.stop="prevProject" class="text-blue-300 hover:text-white text-2xl font-bold">&lt;</button>
          </div>
          <div class="absolute top-1/2 right-2 transform -translate-y-1/2">
            <button @click.stop="nextProject" class="text-blue-300 hover:text-white text-2xl font-bold">&gt;</button>
          </div>

          <!-- Modal Content -->
          <h3 class="text-2xl font-bold text-blue-400 mb-4 text-center">
            {{ projects[selectedProject].title }}
          </h3>
          <p class="mb-4 text-center text-slate-300">
            {{ projects[selectedProject].description }}
          </p>

          <!-- Tags -->
          <div class="flex flex-wrap justify-center gap-2 mb-4">
            <span
              v-for="(tag, i) in projects[selectedProject].tags"
              :key="i"
              class="bg-blue-700 text-white text-xs px-2 py-1 rounded-full"
            >
              {{ tag }}
            </span>
          </div>

          <!-- Screenshots -->
          <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6">
            <button
              v-for="(img, i) in projects[selectedProject].screenshots"
              :key="i"
              @click.stop="openFullscreen(img)"
              class="focus:outline-none"
            >
              <img
                :src="img"
                class="w-full h-72 object-cover rounded shadow hover:scale-105 transition"
                :alt="`${projects[selectedProject].title} screenshot ${i + 1}`"
                data-aos="zoom-in"
                :data-aos-delay="i * 100"
              />
            </button>
          </div>

          <!-- Link -->
          <div v-if="projects[selectedProject].link" class="text-center">
            <a
              :href="projects[selectedProject].link"
              target="_blank"
              rel="noopener"
              class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition"
            >
              Visit Project
            </a>
          </div>
        </div>
      </div>
    </transition>

    <!-- Fullscreen Image Viewer -->
    <transition name="fade-scale">
      <div v-if="fullscreenImage" class="fullscreen-overlay" @click.self="fullscreenImage = null">
        <img :src="fullscreenImage" class="fullscreen-image" alt="Full screenshot" />
        <button @click="fullscreenImage = null" class="close-button top-4 right-6 text-4xl">&times;</button>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Project images
import andy1 from '@/assets/andy1.png'
import andy2 from '@/assets/andy2.png'
import andy3 from '@/assets/andy3.png'

import byte1 from '@/assets/byte1.png'
import byte2 from '@/assets/byte2.png'
import byte3 from '@/assets/byte3.png'

import tutor1 from '@/assets/tutor1.png'
import tutor2 from '@/assets/tutor2.png'
import tutor3 from '@/assets/tutor3.png'

import church1 from '@/assets/church1.png'
import church2 from '@/assets/church2.png'
import church3 from '@/assets/church3.png'

onMounted(() => {
  AOS.init({ once: true })
})

const projects = ref([
  {
    title: 'Online Billing System',
    description: 'Manage invoices, payments, and clients with export features.',
    screenshots: [tutor1, tutor2, tutor3],
    tags: ['Vue', 'Tailwind', 'Firebase'],
    link: 'https://billing.bytegurus.com',
  },
  {
    title: 'Business Website',
    description: 'Responsive homepage with service showcase and contact form.',
    screenshots: [byte1, byte2, byte3],
    tags: ['Vue', 'Tailwind', 'Vite'],
    link: 'https://bytegurus.com',
  },
  {
    title: 'Tutoring Platform',
    description: 'Booking dashboard, session tracking, and analytics.',
    screenshots: [andy1, andy2, andy3],
    tags: ['Vue', 'Tailwind', 'Chart.js'],
    link: 'https://tutor.bytegurus.com',
  },
  {
    title: 'Church Website',
    description: 'A modern responsive site for a local church, featuring sermons, events, and donation options.',
    screenshots: [church1, church2, church3],
    tags: ['Vue', 'Tailwind', 'Vue Router'],
    link: 'https://church.bytegurus.com',
  },
])

const modalOpen = ref(false)
const selectedProject = ref(0)
const modalRef = ref(null)
const fullscreenImage = ref(null)

function openModal(index) {
  selectedProject.value = index
  modalOpen.value = true
  nextTick(() => modalRef.value?.focus())
}

function closeModal() {
  modalOpen.value = false
}

function prevProject() {
  selectedProject.value = (selectedProject.value - 1 + projects.value.length) % projects.value.length
}

function nextProject() {
  selectedProject.value = (selectedProject.value + 1) % projects.value.length
}

function openFullscreen(img) {
  fullscreenImage.value = img
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.project-section {
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  background: radial-gradient(circle at center, #0f172a 0%, #020617 80%);
  color: #e0e7ff;
  position: relative;
}

.project-section::before {
  content: "";
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #2563eb88, transparent 70%);
  filter: blur(60px);
  z-index: 0;
  pointer-events: none;
}

.project-section > * {
  position: relative;
  z-index: 1;
}

.card {
  background-color: #1e293b;
  color: #cbd5e1;
  box-shadow: 0 4px 6px rgb(15 23 42 / 0.4);
}
.card:hover {
  box-shadow: 0 8px 15px rgb(37 99 235 / 0.7);
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(8, 11, 26, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
  padding: 1rem;
  outline: none;
}

.modal-content {
  background-color: #0f172a;
  color: #e0e7ff;
  max-width: 60rem;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 2rem;
  border-radius: 0.5rem;
  position: relative;
  box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
}

.close-button {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  font-size: 2rem;
  font-weight: 700;
  color: #93c5fd;
  background: transparent;
  border: none;
  cursor: pointer;
  line-height: 1;
}
.close-button:hover {
  color: #bfdbfe;
}

.fullscreen-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 60;
}

.fullscreen-image {
  max-width: 95vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 0.5rem;
}

.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
.fade-scale-enter-to,
.fade-scale-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
