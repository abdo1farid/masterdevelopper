<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <div id="app">
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Contact />
  </div>
</template>

<style scoped>
#app {
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
</style>

<style>
:root {
  --bp-lg: 1024px;
  --bp-md: 768px;
  --bp-sm: 480px;
  --bp-xs: 380px;
  --bp-xxs: 357px;
  --container-max: 1100px;
  --gap: 1.5rem;
  --brand-cyan: #00d4ff;
  --brand-blue: #0a9cff;
}
</style>
