<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

interface Props {
  cardType: string;
  onClose: () => void;
}

const props = defineProps<Props>();
const expandedCard = ref<HTMLElement | null>(null);

// Trap focus inside expanded card
function trapFocus(e: KeyboardEvent) {
  if (!expandedCard.value) return;
  
  const focusable = expandedCard.value.querySelectorAll<HTMLElement>(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (e.key === 'Tab') {
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
  
  if (e.key === 'Escape') {
    props.onClose();
  }
}

onMounted(() => {
  document.addEventListener('keydown', trapFocus);
  // Focus close button on mount
  const closeButton = expandedCard.value?.querySelector('#close-expanded');
  if (closeButton instanceof HTMLElement) {
    closeButton.focus();
  }
});

onUnmounted(() => {
  document.removeEventListener('keydown', trapFocus);
});

const cardContent = {
  railway: {
    title: "Who Really \"Invented\" the Railway?",
    content: `<p>In February 1804, Richard Trevithick rolled his Penydarren locomotive—fully steam-powered—along nine miles of cast-iron plate rails in South Wales. The train was so heavy that brittle rails often fractured under it. Yet, this audacious experiment proved that steam on rails was viable. <sup>1</sup></p>
    <p>Two decades later, George Stephenson, a self-taught engineer in the Northumberland coalfields, absorbed Trevithick's daring. Instead of building from scratch, Stephenson focused on stronger wrought-iron rails—courtesy of William Losh—and reliable boilers with flanged wheels for better traction. When his Locomotion No. 1 chugged along the Stockton & Darlington Railway in September 1825, investors finally believed that steam could haul both coal and passengers. <sup>2</sup></p>
    <blockquote>"Stephenson didn't invent steam engines—but he taught the world how to build railways."</blockquote>
    <p>At the Rainhill Trials of October 1829, the Stephenson-designed Rocket won convincingly, cementing his status as the "Father of Railways." Yet, his true genius lay not in a single invention, but in weaving existing technologies into a replicable network that reshaped transportation forever. <sup>3</sup></p>`,
    timeline: [
      { year: '1804', event: 'Trevithick\'s Penydarren Engine runs on rails.' },
      { year: '1821', event: 'Stephenson develops wrought-iron rails.' },
      { year: '1825', event: 'Stockton & Darlington Railway opens.' },
      { year: '1829', event: 'Rocket wins Rainhill Trials.' }
    ],
    facts: [
      'Stephenson\'s 4 ft 8½ in gauge still underpins 60 % of global track today.',
      'Early cast-iron rails often cracked under Trevithick\'s locomotive weight!'
    ],
    image: 'https://images.pexels.com/photos/2790396/pexels-photo-2790396.jpeg',
    imageAlt: 'Stephenson boiler cross-section',
    references: [
      { text: 'Richard Trevithick\'s Penydarren locomotive, 1804', url: 'https://en.wikipedia.org/wiki/Richard_Trevithick' },
      { text: 'Stephenson\'s Stockton & Darlington Railway, 1825', url: 'https://en.wikipedia.org/wiki/Stockton_and_Darlington_Railway' },
      { text: 'Rainhill Trials documentation, 1829', url: 'https://en.wikipedia.org/wiki/Rainhill_Trials' }
    ],
    nextStory: 'horsepower'
  },
  horsepower: {
    title: "Watt's Genius: Selling Steam in \"Horsepower\"",
    content: `<p>By 1776, James Watt had perfected his separate-condenser design—slashing fuel consumption by roughly 75 % compared to Newcomen engines. Yet, to convince mine operators and mill owners to adopt his improved steam engine, he needed a familiar comparison. <sup>1</sup></p>
    <p>Watt observed that an average mine horse could lift 550 pounds one foot in one second. He defined this as <strong>1 horsepower</strong> (550 ft·lb/s). Now, instead of advertising "20 indicated horsepower," Watt could say, "This engine is as powerful as 20 horses," making it instantly understandable. <sup>2</sup></p>
    <blockquote>"One horsepower is the power needed to move 550 pounds one foot in one second."</blockquote>
    <p>This simple yet brilliant marketing term helped drive rapid adoption of steam power across industries. Today, "horsepower" still appears on every automobile dashboard. <sup>3</sup></p>`,
    timeline: [
      { year: '1769', event: 'Watt patents separate condenser.' },
      { year: '1776', event: 'Watt begins using horsepower unit.' },
      { year: '1783', event: 'Watt\'s engines widely installed in mills.' }
    ],
    facts: [
      'Watt\'s "horsepower" was originally overestimated; actual mine horses often varied in output.',
      'Modern cars still use "hp" as a legacy measurement, even though kilowatts are more precise.'
    ],
    image: 'https://images.pexels.com/photos/5088239/pexels-photo-5088239.jpeg',
    imageAlt: 'Steam engine sectional diagram',
    references: [
      { text: 'James Watt\'s separate condenser, 1776', url: 'https://en.wikipedia.org/wiki/James_Watt' },
      { text: 'Watt\'s "horsepower" marketing, late 1770s', url: 'https://en.wikipedia.org/wiki/Horsepower' },
      { text: 'Industrial adoption of Watt\'s engines', url: 'https://www.britannica.com/biography/James-Watt' }
    ],
    nextStory: 'cook'
  },
  cook: {
    title: "How Thomas Cook Built the First Travel Agency",
    content: `<p>On July 5, 1841, Thomas Cook organized a special train for 540 temperance supporters to travel 11 miles from Leicester to Loughborough—each passenger paying one shilling for fare and a meal. <sup>1</sup></p>
    <p>Cook realized he wasn't just selling a ticket; he was selling an experience—fellowship, food, and convenience. He started offering transport, accommodations, and guided itineraries as a single package, laying the groundwork for modern package tourism. <sup>2</sup></p>
    <blockquote>"Cook didn't just rent seats; he packaged adventure on rails."</blockquote>
    <p>By the mid-1850s, "Thomas Cook & Son" arranged European grand tours, hotel stays, and meals—becoming the world's first travel agency. <sup>3</sup></p>`,
    timeline: [
      { year: '1841', event: 'Cook\'s first temperance excursion for 540 parishioners.' },
      { year: '1845', event: 'Cook begins offering railway tickets to Europe.' },
      { year: '1855', event: '"Thomas Cook & Son" formalized as travel agency.' }
    ],
    facts: [
      'Cook\'s original train trip sold out in hours—proof that packaged leisure had demand.',
      'By 1865, Cook\'s agency sold 150,000 rail tickets annually.'
    ],
    image: 'https://images.pexels.com/photos/2536275/pexels-photo-2536275.jpeg',
    imageAlt: 'Thomas Cook\'s Victorian-era tour illustration',
    references: [
      { text: 'Cook\'s first excursion, July 1841', url: 'https://en.wikipedia.org/wiki/Thomas_Cook' },
      { text: 'Early Thomas Cook & Son operations, 1840s–1850s', url: 'https://www.britannica.com/biography/Thomas-Cook' },
      { text: 'Growth of Cook\'s travel agency in 1860s', url: 'https://www.history.com/topics/19th-century/thomas-cook' }
    ]
  }
};
</script>

<template>
  <div class="expanded-overlay" @click="onClose"></div>
  <div 
    ref="expandedCard"
    id="expanded-card" 
    class="expanded-card" 
    role="dialog" 
    aria-modal="true" 
    :aria-labelledby="'expanded-title-' + cardType"
  >
    <div class="expanded-header">
      <h2 :id="'expanded-title-' + cardType">{{ cardContent[cardType].title }}</h2>
      <button id="close-expanded" @click="onClose" aria-label="Close">×</button>
    </div>
    
    <div class="expanded-body">
      <div class="expanded-text" v-html="cardContent[cardType].content"></div>
      
      <aside class="expanded-sidebar">
        <div class="mini-timeline">
          <h4>Key Dates</h4>
          <ul>
            <li v-for="(item, index) in cardContent[cardType].timeline" :key="index">
              <strong>{{ item.year }}:</strong> {{ item.event }}
            </li>
          </ul>
        </div>
        
        <div class="fact-bubbles">
          <div 
            v-for="(fact, index) in cardContent[cardType].facts" 
            :key="index"
            class="bubble"
          >
            {{ fact }}
          </div>
        </div>
        
        <div class="illustration-detail">
          <img 
            :src="cardContent[cardType].image" 
            :alt="cardContent[cardType].imageAlt"
          >
        </div>
      </aside>
      
      <div class="expanded-footer">
        <h4>References</h4>
        <ol>
          <li v-for="(ref, index) in cardContent[cardType].references" :key="index">
            {{ ref.text }}: <a :href="ref.url" target="_blank" rel="noopener">Wikipedia</a>
          </li>
        </ol>
        <button 
          v-if="cardContent[cardType].nextStory"
          id="next-story" 
          @click="$emit('next-story', cardContent[cardType].nextStory)"
        >
          Next Story →
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.expanded-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  z-index: 5;
}

.expanded-card {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 900px;
  height: 90vh;
  max-height: 800px;
  background-color: #FFF;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  overflow-y: auto;
  z-index: 10;
}

.expanded-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #E0E0E0;
  background-color: var(--color-bg-header);
}

.expanded-header h2 {
  font-family: var(--font-heading);
  font-size: 1.75rem;
  color: var(--color-primary);
  margin: 0;
}

#close-expanded {
  background: none;
  border: none;
  font-size: 2rem;
  color: #333;
  cursor: pointer;
}

.expanded-body {
  display: flex;
  flex-direction: row;
  padding: 1.5rem;
}

.expanded-text {
  flex: 2;
  padding-right: 2rem;
  font-family: var(--font-body);
  line-height: 1.6;
}

.expanded-text :deep(p) {
  margin-bottom: 1rem;
  font-size: 1rem;
}

.expanded-text :deep(blockquote) {
  margin: 1.5rem 0;
  padding: 1rem;
  background-color: #F0F0F0;
  border-left: 4px solid var(--color-primary);
  font-style: italic;
  font-size: 1.1rem;
}

.expanded-sidebar {
  flex: 1;
  max-width: 240px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-family: var(--font-body);
}

.mini-timeline h4,
.expanded-footer h4 {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.mini-timeline ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
}

.fact-bubbles .bubble {
  background-color: #FFF9E5;
  border-radius: 8px;
  padding: 0.75rem;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.illustration-detail img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

.expanded-footer {
  border-top: 1px solid #E0E0E0;
  padding: 1rem 1.5rem;
}

.expanded-footer ol {
  margin: 0;
  padding-left: 1.25rem;
  font-size: 0.9rem;
}

#next-story {
  margin-top: 1rem;
  background: var(--color-primary);
  color: #FFF;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .expanded-body {
    flex-direction: column;
  }
  
  .expanded-text {
    padding-right: 0;
    margin-bottom: 1.5rem;
  }
  
  .expanded-sidebar {
    max-width: 100%;
  }
}
</style>