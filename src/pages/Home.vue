<template>
  <section class="min-h-screen bg-[#0f172a] text-white font-[Poppins] relative">
    <!-- 🔹 Hero Section -->
    <div class="max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col items-center md:flex-row justify-between gap-12">
      <div class="w-full md:w-1/2 text-center md:text-left space-y-6" data-aos="fade-up">
        <p class="text-lg text-gray-400">Hello, It's Me</p>
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight">
          Lael Mulenga <br />
          <span id="typed-text" class="text-cyan-400 inline-block"></span>
        </h1>

        <p class="text-gray-300 text-base md:text-lg">
          I craft modern, accessible web interfaces with clean code, responsive design, and engaging UI/UX experiences.
        </p>

        <!-- 🔗 Buttons -->
        <div class="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <a
            href="https://wa.me/260777873514?text=Hi%20Lael!%20I%20saw%20your%20portfolio%20and%20I'm%20interested%20in%20working%20with%20you."
            class="bg-cyan-400 text-black font-semibold px-6 py-3 rounded-md shadow-[0_0_20px_#06b6d4] hover:shadow-[0_0_35px_#22d3ee] transition duration-300"
            target="_blank"
          >
            📞 Hire Me
          </a>
          <div class="flex gap-4 text-xl text-cyan-400">
            <a href="https://github.com/Laeljr" target="_blank"><i class="fab fa-github hover:text-white"></i></a>
            <a href="https://www.linkedin.com/in/lael-mulenga-57193a1a7/" target="_blank"><i class="fab fa-linkedin hover:text-white"></i></a>
            <a href="https://web.facebook.com/la.el.866665" target="_blank"><i class="fab fa-facebook-f hover:text-white"></i>
</a>
           </div>
        </div>
      </div>

      <!-- 🔸 Hero Image -->
      <div class="relative w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-cyan-400 to-[#0f172a] p-1 shadow-[0_0_30px_#0ff]">
        <img
          src="/src/assets/pro.jpg"
          alt="Lael Mulenga"
          class="rounded-full w-full h-full object-cover"
        />
      </div>
    </div>

    <!-- 🔻 About Section -->
    <div class="max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
      <!-- 🔹 About Image -->
      <div class="relative w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-cyan-400 to-[#0f172a] p-1 shadow-[0_0_30px_#0ff]">
        <img
          src="/src/assets/pro.jpg"
          alt="About Lael"
          class="rounded-full w-full h-full object-cover"
        />
      </div>

      <!-- 🔸 About Text -->
      <div class="w-full md:w-1/2 text-center md:text-left space-y-6" data-aos="fade-up">
        <h2 class="text-3xl md:text-4xl font-bold">
          About <span class="text-cyan-400">Me</span>
        </h2>
        <p class="text-gray-300 text-base md:text-lg">
          I'm a frontend developer with a passion for clean design, intuitive interfaces, and scalable components.
          I specialize in Vue, Tailwind, and building beautiful, responsive user experiences.
        </p>

        <a
          href="https://wa.me/260777873514?text=Hi%20Lael!%20Let's%20talk%20about%20a%20project."
          class="bg-cyan-400 text-black font-semibold px-6 py-3 rounded-md shadow-[0_0_20px_#06b6d4] hover:shadow-[0_0_35px_#22d3ee] transition duration-300 inline-block"
        >
          📞 Let's Talk
        </a>
      </div>
    </div>

    <!-- 🌟 Floating WhatsApp Button (All screens) -->
    <a
      href="https://wa.me/260777873514?text=Hi%20Lael!%20I'm%20interested%20in%20working%20with%20you."
      class="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center glow-btn hover:scale-110 transition-transform duration-300"
      target="_blank"
      aria-label="Chat on WhatsApp"
    >
      <i class="fab fa-whatsapp text-white text-3xl"></i>
    </a>

    <!-- ⬆️ Scroll To Top Button -->
    <button
      v-show="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full bg-cyan-500 text-white flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform duration-300"
    >
      ↑
    </button>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import TypeIt from "typeit";

// Typing effect
onMounted(() => {
  new TypeIt("#typed-text", {
    strings: ["I'm a Frontend Developer", "I'm a UI/UX Designer", "I'm a Tech Problem Solver"],
    speed: 80,
    breakLines: false,
    loop: true,
    nextStringDelay: 1000,
    deleteSpeed: 40,
  }).go();
});

// Scroll to top button
const showScrollTop = ref(false);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", () => {
    showScrollTop.value = window.scrollY > 300;
  });
});
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');

.glow-btn {
  animation: glow 1.8s infinite ease-in-out;
}

@keyframes glow {
  0% {
    box-shadow: 0 0 5px #25d366, 0 0 10px #25d366, 0 0 15px #25d366;
  }
  50% {
    box-shadow: 0 0 10px #25d366, 0 0 20px #25d366, 0 0 30px #25d366;
  }
  100% {
    box-shadow: 0 0 5px #25d366, 0 0 10px #25d366, 0 0 15px #25d366;
  }
}
</style>
