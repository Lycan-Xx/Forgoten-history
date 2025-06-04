<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const scrollToCards = () => {
  document.querySelector('#card-grid')?.scrollIntoView({ behavior: 'smooth' });
};

const goToDemo = () => {
  router.push('/demo');
};
</script>

<template>
  <header id="hero-header" class="relative">
    <button 
      @click="goToDemo"
      class="demo-cta"
    >
      View Interactive Demo
    </button>
    <div class="overlay"></div>
    <div class="header-content">
      <h1>Forgotten Infographics: Untold Stories of Steam, Power & Travel</h1>
      <h2>Explore how Trevithick's rails, Watt's "horsepower," and Thomas Cook's first excursion changed the world—one infographic at a time.</h2>
      <p>Click any card below to dive deeper into each story.</p>
      <a href="#card-grid" class="cta-button" @click.prevent="scrollToCards">Explore the Stories</a>
    </div>
    <div class="scroll-cue">↓</div>
  </header>
</template>

<style scoped>
.demo-cta {
  position: fixed;
}
</style>