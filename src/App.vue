<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0f172a] text-white font-sans">
    <!-- Navigation Bar -->
    <Navbar />

    <!-- Routed Content -->
    <main class="flex-grow mt-20">
      <router-view />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
body {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
