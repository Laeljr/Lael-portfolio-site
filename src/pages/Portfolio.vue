<template>
  <section class="portfolio-section p-8 max-w-5xl mx-auto">
    <h2 class="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-blue drop-shadow-[0_0_15px_rgba(0,240,255,0.6)] mb-6">Portfolio</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="card p-4 rounded shadow">
        <h3 class="font-semibold text-lg mb-2 text-white">Personal Portfolio Website</h3>
        <p class="text-gray-300">Built with Vue and Tailwind. Fully responsive and professional layout.</p>
      </div>
      <div class="card p-4 rounded shadow">
        <h3 class="font-semibold text-lg mb-2 text-white">Network Setup for Office</h3>
        <p class="text-gray-300">Configured reliable office internet and file sharing systems for a local business.</p>
      </div>
      <div class="card p-4 rounded shadow">
        <h3 class="font-semibold text-lg mb-2 text-white">Beginner Coding Lessons</h3>
        <p class="text-gray-300">Taught HTML & CSS to adult learners using practical, project-based examples.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.portfolio-section {
  position: relative;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  background: radial-gradient(circle at center, #0f172a 0%, #020617 80%);
  color: #e0e7ff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  z-index: 1;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

/* subtle glowing blue radial behind content */
.portfolio-section::before {
  content: "";
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: 320px;
  height: 320px;
  background: radial-gradient(circle, #2563eb88, transparent 70%);
  filter: blur(60px);
  pointer-events: none;
  z-index: 0;
}

.portfolio-section > * {
  position: relative;
  z-index: 1;
}

/* Neon blue text */
.text-neon-blue {
  color: #2563eb;
  text-align: center;
}

/* Cards styling */
.card {
  background-color: #1e293b;
  box-shadow: 0 4px 6px rgb(15 23 42 / 0.4);
  transition: box-shadow 0.3s ease;
  color: #cbd5e1;
  border-radius: 0.5rem;
}

.card:hover {
  box-shadow: 0 8px 15px rgb(37 99 235 / 0.7);
}

h3.text-white {
  color: white;
}

p.text-gray-300 {
  color: #cbd5e1;
}
</style>
