<template>
  <section
    id="about"
    class="relative bg-[#0f172a] text-white py-24 px-6 md:px-12 overflow-hidden"
    data-aos="fade-up"
  >
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <!-- 📷 Contact-like Image -->
      <div
        class="bg-white p-1 rounded-xl shadow-2xl overflow-hidden"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img
          src="/src/assets/home.jpg"
          alt="About Lael"
          class="rounded-lg w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <!-- 📝 About Content -->
      <div class="text-center md:text-left space-y-6" data-aos="fade-up" data-aos-duration="1000">
        <h2
          class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-cyan-400 drop-shadow-[0_0_25px_rgba(0,240,255,0.6)]"
        >
          About Me
        </h2>

        <!-- Typed Title -->
        <div
          id="typed-text"
          class="text-xl text-cyan-400 font-semibold h-[36px] mb-6"
        ></div>

        <p class="text-gray-300 leading-relaxed text-lg">
          I’m <span class="text-cyan-400 font-bold">Lael Mulenga</span>, a Computer Scientist and Frontend Developer passionate about crafting seamless digital experiences.
          I combine clean, efficient code with thoughtful UI/UX design to build fast, responsive, and engaging interfaces using Vue.js, Tailwind CSS, and PHP.
        </p>

        <p class="text-gray-400 text-base leading-relaxed">
          My journey began in 2015 with C++ in high school, fueling my passion for technology.
          I earned my Computer Science degree from 2019 to 2022 and have specialized in frontend development and UI/UX design since 2024, delivering projects that prioritize usability and aesthetics.
        </p>

        <!-- 🛠️ Skills -->
        <div class="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
          <span class="skill-tag">Vue.js</span>
          <span class="skill-tag">Tailwind CSS</span>
          <span class="skill-tag">UI/UX</span>
          <span class="skill-tag">PHP</span>
          <span class="skill-tag">JavaScript</span>
          <span class="skill-tag">Git</span>
        </div>

        <!-- 📆 Timeline -->
        <div class="mt-12">
          <h3 class="text-3xl font-bold mb-10 text-cyan-400" data-aos="fade-up">
            My Journey
          </h3>

          <div class="relative border-l-2 border-cyan-400 pl-6 space-y-10">
            <div class="relative" data-aos="fade-up" data-aos-delay="100">
              <div class="absolute -left-[17px] top-1 w-5 h-5 bg-cyan-400 rounded-full shadow-md animate-pulse"></div>
              <h4 class="text-xl font-semibold text-white">2015 – Sparked the Passion</h4>
              <p class="text-gray-300 text-sm mt-1">
                Learned C++ in Grade 11 and fell in love with programming and technology.
              </p>
            </div>

            <div class="relative" data-aos="fade-up" data-aos-delay="200">
              <div class="absolute -left-[17px] top-1 w-5 h-5 bg-cyan-400 rounded-full shadow-md animate-pulse"></div>
              <h4 class="text-xl font-semibold text-white">2019 – Computer Science Degree</h4>
              <p class="text-gray-300 text-sm mt-1">
                Completed a 4-year degree, building solid foundations in theory and practice.
              </p>
            </div>

            <div class="relative" data-aos="fade-up" data-aos-delay="300">
              <div class="absolute -left-[17px] top-1 w-5 h-5 bg-cyan-400 rounded-full shadow-md animate-pulse"></div>
              <h4 class="text-xl font-semibold text-white">2024 – Specialization</h4>
              <p class="text-gray-300 text-sm mt-1">
                Specialized in frontend development and UI/UX, working on real-world projects and freelancing.
              </p>
            </div>

            <div class="relative" data-aos="fade-up" data-aos-delay="400">
              <div class="absolute -left-[17px] top-1 w-5 h-5 bg-cyan-400 rounded-full shadow-md animate-pulse"></div>
              <h4 class="text-xl font-semibold text-white">2025 – Innovating Forward</h4>
              <p class="text-gray-300 text-sm mt-1">
                Continuously growing and helping clients craft world-class digital experiences.
              </p>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <a
          href="#services"
          class="mt-12 inline-block glow-button bg-cyan-400 text-black font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          View My Services
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import TypeIt from 'typeit'

onMounted(() => {
  new TypeIt('#typed-text', {
    strings: ['Frontend Developer', 'UI/UX Designer', 'Problem Solver'],
    speed: 300,
    breakLines: false,
    loop: true,
    nextStringDelay: 1200,
    deleteSpeed: 250,
  }).go()
})
</script>

<style scoped>
/* 🔷 Glow CTA */
@keyframes pulse-button {
  0%, 100% {
    box-shadow: 0 0 8px rgba(0, 255, 255, 0.4), 0 0 20px rgba(0, 255, 255, 0.3);
  }
  50% {
    box-shadow: 0 0 14px rgba(0, 255, 255, 0.6), 0 0 30px rgba(0, 255, 255, 0.4);
  }
}

.glow-button {
  animation: pulse-button 2.5s ease-in-out infinite;
}

/* 💬 Typed text */
#typed-text {
  font-size: 1.25rem;
  font-weight: 600;
  color: #67e8f9;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.4);
}

/* 🛠 Skill badge style */
.skill-tag {
  background-color: #22d3ee;
  color: black;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  box-shadow: 0 1px 4px rgba(0, 255, 255, 0.4);
  cursor: default;
  transition: all 0.2s;
}
.skill-tag:hover {
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.6);
}
</style>
