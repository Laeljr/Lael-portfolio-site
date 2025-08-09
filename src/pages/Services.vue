<template>
  <div class="bg-[#1f1f2e] text-white font-[Poppins]">
    <!-- Services Section -->
    <section class="py-16 px-6">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-12">
          My <span class="text-cyan-400">Services</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(category, index) in groupedSkills"
            :key="index"
            class="bg-[#2b2b3c] rounded-xl p-6 shadow-lg hover:shadow-cyan-500/30 transition"
            :data-aos="index % 2 === 0 ? 'fade-up' : 'fade-down'"
            :data-aos-delay="index * 100"
          >
            <div class="text-5xl mb-4 text-cyan-400">
              <font-awesome-icon :icon="category.skills[0].icon" />
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ category.title }}</h3>
            <p class="text-gray-300 text-sm mb-4">
              Offering services like:
              <span class="font-semibold text-cyan-300">
                {{ category.skills.slice(0, 3).map(skill => skill.name).join(', ') }}
              </span>
              and more.
            </p>
            <a
              :href="'https://wa.me/260777873514?text=Hi%2C%20I%27m%20interested%20in%20your%20' + encodeURIComponent(category.title) + ' services.'"
              target="_blank"
              rel="noopener"
              class="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium inline-block"
            >
              Hire Me on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Professional CTA Section -->
    <section class="py-20 px-6 bg-[#15151f] border-t border-gray-700">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white mb-6 drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">
          Ready to Elevate Your Digital Presence?
        </h2>
        <p class="text-gray-400 text-lg mb-6">
          Whether you need a fast website, expert tech support, or tailored digital solutions —
          I bring skill and passion to every project.
        </p>
        <a
          href="https://wa.me/260777873514?text=Hi%2C%20I%27d%20like%20to%20hire%20you!"
          target="_blank"
          rel="noopener"
          class="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Contact Me on WhatsApp
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const groupedSkills = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML & CSS', level: 95, icon: ['fab', 'html5'] },
      { name: 'JavaScript', level: 90, icon: ['fab', 'js'] },
      { name: 'Vue.js', level: 85, icon: ['fab', 'vuejs'] },
    ],
  },
  {
    title: 'Backend & DevOps',
    skills: [
      { name: 'RESTful APIs', level: 80, icon: ['fas', 'cloud'] },
      { name: 'SQL / NoSQL', level: 75, icon: ['fas', 'database'] },
    ],
  },
  {
    title: 'Website Maintenance & Updates',
    skills: [
      { name: 'Website Fixes', level: 85, icon: ['fas', 'wrench'] },
      { name: 'Speed Optimization', level: 80, icon: ['fas', 'tachometer-alt'] },
      { name: 'Content Updates', level: 90, icon: ['fas', 'sync'] },
    ],
  },
  {
    title: 'CCTV Installations',
    skills: [
      { name: 'Camera Setup', level: 95, icon: ['fas', 'video'] },
      { name: 'Remote Monitoring', level: 90, icon: ['fas', 'mobile-alt'] },
      { name: 'Troubleshooting', level: 85, icon: ['fas', 'tools'] },
    ],
  },
  {
    title: 'IT Support',
    skills: [
      { name: 'System Troubleshooting', level: 90, icon: ['fas', 'laptop-medical'] },
      { name: 'Network Setup', level: 80, icon: ['fas', 'network-wired'] },
    ],
  },
  {
    title: 'Tutoring & Office Tools',
    skills: [
      { name: 'Office Apps (Word/Excel)', level: 92, icon: ['fas', 'file-word'] },
      { name: 'Tutoring & Lesson Planning', level: 95, icon: ['fas', 'chalkboard-teacher'] },
    ],
  },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
</style>
