<template>
  <footer class="footer-container">
    

    <!-- Copyright -->
   <p class="copyright">
  © {{ currentYear }} Lael Mulenga. All rights reserved. | Designed by Lael Mulenga
   <!-- <a href="" target="_blank" class="hover:underline">Lael Mulenga</a> --> 
</p>

  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer-container {
  background-color: rgba(15, 23, 42, 0.8); /* matches nav bg */
  color: #38bdf8; /* neon cyan */
  text-shadow: 0 0 6px rgba(56, 189, 248, 0.9);
  border-radius: 2rem;
  max-width: 650px;
  margin: 2rem auto;
  padding: 1.5rem 2rem;
  text-align: center;
  backdrop-filter: blur(10px);
  box-shadow:
    0 0 10px rgba(56, 189, 248, 0.6),
    inset 0 0 8px rgba(56, 189, 248, 0.3);
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.8rem;
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
}

.link {
  color: #38bdf8;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease, transform 0.3s ease;
  cursor: pointer;
}

.link:hover {
  color: white;
  transform: scale(1.1);
}

.icon {
  width: 20px;
  height: 20px;
  fill: currentColor;
  transition: fill 0.3s ease;
}

.copyright {
  font-size: 0.85rem;
  font-weight: 600;
  user-select: none;
}
</style>
