<template>
  <section class="skills-section px-6 py-16 max-w-6xl mx-auto">
    <h2 class="skills-title mb-12">Skills</h2>

    <div
      v-for="(category, index) in groupedSkills"
      :key="category.title"
      class="mb-12"
    >
      <h3 class="text-xl font-semibold text-blue-400 mb-4">
        {{ category.title }}
      </h3>

      <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        <div
          v-for="(skill, sIndex) in category.skills"
          :key="skill.name"
          class="skill-card"
          :data-aos="sIndex % 2 === 0 ? 'fade-left' : 'fade-right'"
          :data-aos-delay="sIndex * 100"
        >
          <div class="flex items-center space-x-3 mb-2">
            <font-awesome-icon
              :icon="skill.icon"
              class="text-blue-400 text-2xl"
            />
            <span class="text-white font-semibold">{{ skill.name }}</span>
          </div>
          <div class="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
            <div
              class="h-full bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"
              :style="{ width: skill.level + '%' }"
            ></div>
          </div>
          <p class="text-sm text-slate-300 mt-1">{{ skill.level }}%</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const groupedSkills = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML & CSS', level: 85, icon: ['fab', 'html5'] },
      { name: 'JavaScript', level: 80, icon: ['fab', 'js'] },
      { name: 'Vue.js', level: 85, icon: ['fab', 'vuejs'] },
      { name: 'Tailwind CSS', level: 75, icon: ['fas', 'palette'] },
      { name: 'Responsive Design', level: 80, icon: ['fas', 'mobile-alt'] },
      { name: 'Vite & Vue Router', level: 70, icon: ['fas', 'bolt'] },
    ],
  },
  {
    title: 'Backend & DevOps',
    skills: [
      { name: 'RESTful APIs', level: 50, icon: ['fas', 'cloud'] },
      { name: 'SQL / NoSQL', level: 75, icon: ['fas', 'database'] },
      { name: 'Linux & Windows Admin', level: 65, icon: ['fas', 'server'] },
      { name: 'Git & Version Control', level: 75, icon: ['fab', 'git-alt'] },
    ],
  },
  {
    title: 'IT Support',
    skills: [
      { name: 'System Troubleshooting', level: 90, icon: ['fas', 'tools'] },
      { name: 'Network Setup', level: 80, icon: ['fas', 'network-wired'] },
      { name: 'Hardware Repair', level: 85, icon: ['fas', 'microchip'] },
      { name: 'Printer Setup', level: 80, icon: ['fas', 'print'] },
    ],
  },
  {
    title: 'Soft Skills & Tutoring',
    skills: [
      { name: 'Office Apps (Word/Excel)', level: 92, icon: ['fas', 'file-word'] },
      { name: 'Tutoring & Lesson Planning', level: 95, icon: ['fas', 'chalkboard-teacher'] },
      { name: 'Beginner Programming', level: 90, icon: ['fas', 'laptop-code'] },
      { name: 'Communication & Patience', level: 95, icon: ['fas', 'comment-dots'] },
    ],
  },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.skills-section {
  background: radial-gradient(circle at center, #0f172a 0%, #020617 80%);
  font-family: 'Poppins', sans-serif;
  color: #e0e7ff;
  position: relative;
  z-index: 1;
}

.skills-section::before {
  content: '';
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

.skills-title {
  text-align: center;
  font-size: clamp(3rem, 8vw, 4rem);
  font-weight: 800;
  background: linear-gradient(to right, #2563eb, #ffffff, #2563eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px rgba(0, 240, 255, 0.6);
  position: relative;
  z-index: 1;
}

.skill-card {
  background-color: rgba(30, 41, 59, 0.3);
  padding: 1.25rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.2);
  transition: transform 0.3s ease;
}
.skill-card:hover {
  transform: translateY(-4px);
}
</style>
