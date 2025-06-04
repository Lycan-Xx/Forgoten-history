<script setup lang="ts">
import { ref } from 'vue';
import ExpandedCard from './ExpandedCard.vue';

interface Card {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  bullets: string[];
  year: string;
}

const cards: Card[] = [
  {
    id: 'railway',
    title: 'Who Really "Invented" the Railway?',
    image: 'https://images.pexels.com/photos/2790396/pexels-photo-2790396.jpeg',
    imageAlt: 'Trevithick and Stephenson locomotives',
    bullets: [
      '<strong>1804:</strong> Richard Trevithick\'s Penydarren Engine runs on rails (cast-iron fractures).<sup>1</sup>',
      '<strong>1825:</strong> Stephenson\'s Locomotion No. 1 inaugurates Stockton & Darlington Railway.<sup>2</sup>',
      'He integrated steam tech with durable track design and standardized gauge.'
    ],
    year: '1804 → 1829'
  },
  {
    id: 'horsepower',
    title: 'Watt\'s Genius: Selling Steam in "Horsepower"',
    image: 'https://images.pexels.com/photos/5088239/pexels-photo-5088239.jpeg',
    imageAlt: 'Draft horse morphing into steam piston',
    bullets: [
      '<strong>1776:</strong> Watt patents separate condenser, cutting fuel use ~75 %.<sup>1</sup>',
      'He defines <em>1 HP = 550 ft·lb/s</em>, equating engine power to horses.<sup>2</sup>',
      'Marketing "horsepower" spurred broad steam adoption.'
    ],
    year: '1776 → 1783'
  },
  {
    id: 'cook',
    title: 'How Thomas Cook Built the First Travel Agency',
    image: 'https://images.pexels.com/photos/2536275/pexels-photo-2536275.jpeg',
    imageAlt: 'Victorian train carriage full of passengers',
    bullets: [
      '<strong>July 5, 1841:</strong> 540 parishioners travel to Loughborough for one shilling each.<sup>1</sup>',
      'Cook bundles tickets, meals, fellowship—blueprint for package travel.',
      'By the 1850s, Thomas Cook & Son sells Continental tours.<sup>2</sup>'
    ],
    year: '1841 → 1850s'
  }
];

const expandedCardType = ref<string | null>(null);

const handleCardClick = (cardId: string) => {
  expandedCardType.value = cardId;
};

const handleClose = () => {
  expandedCardType.value = null;
};

const handleNextStory = (nextCardId: string) => {
  expandedCardType.value = nextCardId;
};
</script>

<template>
  <section id="card-grid">
    <svg class="timeline-svg" viewBox="0 0 800 600" preserveAspectRatio="none" aria-hidden="true">
      <path d="M150,120 C300,20 500,20 650,120 S850,220 650,320"
            fill="none" stroke="rgba(150,150,150,0.5)" stroke-dasharray="5,5" stroke-width="2" />
      <circle cx="150" cy="120" r="6" fill="var(--color-primary)" />
      <text x="150" y="105" text-anchor="middle" font-size="12" fill="var(--color-primary)">{{ cards[0].year }}</text>
      <circle cx="450" cy="40" r="6" fill="var(--color-primary)" />
      <text x="450" y="25" text-anchor="middle" font-size="12" fill="var(--color-primary)">{{ cards[1].year }}</text>
      <circle cx="500" cy="320" r="6" fill="var(--color-primary)" />
      <text x="500" y="305" text-anchor="middle" font-size="12" fill="var(--color-primary)">{{ cards[2].year }}</text>
    </svg>
    <div class="grid-container">
      <div v-for="card in cards" 
           :key="card.id" 
           :class="['card', `card-${card.id}`]" 
           tabindex="0" 
           :data-card="card.id"
           @click="handleCardClick(card.id)"
           @keydown.enter="handleCardClick(card.id)">
        <div class="card-icon">
          <img :src="card.image" :alt="card.imageAlt">
        </div>
        <h3 class="card-title">{{ card.title }}</h3>
        <ul class="card-bullets">
          <li v-for="(bullet, index) in card.bullets" :key="index" v-html="bullet"></li>
        </ul>
      </div>
    </div>
    <ExpandedCard
      v-if="expandedCardType"
      :cardType="expandedCardType"
      @close="handleClose"
      @next-story="handleNextStory"
    />
  </section>
</template>

<style scoped>
#card-grid {
  position: relative;
  background-color: var(--color-bg-main);
  padding: 4rem 2rem;
  overflow: hidden;
}

.grid-container {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-gap: 2rem;
  justify-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.card-cook {
  grid-column: 1 / span 2;
  justify-self: center;
}

.timeline-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.card {
  position: relative;
  z-index: 1;
  width: 300px;
  height: 400px;
  background-color: #FFF;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  padding: 1.5rem;
  text-align: center;
  font-family: var(--font-body);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  overflow: hidden;
}

.card:hover,
.card:focus {
  transform: scale(1.02);
  box-shadow: 0 6px 15px rgba(0,0,0,0.15);
  outline: none;
}

.card-icon img {
  height: 120px;
  width: auto;
  margin: 0 auto 1rem auto;
  object-fit: contain;
}

.card-title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.card-bullets {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
  font-size: 0.9rem;
  line-height: 1.4;
}

.card-bullets li {
  margin: 0.25rem 0;
}

.card-bullets sup {
  font-size: 0.75rem;
}

@media (max-width: 640px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
  .card-cook {
    grid-column: auto;
  }
}
</style>