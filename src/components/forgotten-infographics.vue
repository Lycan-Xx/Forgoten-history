<script setup lang="ts">
import { ref } from 'vue';
import { X, ChevronDown, Mail, Twitter, Linkedin, ArrowRight, Calendar, Download } from 'lucide-vue-next';

interface TimelineItem {
  year: string;
  event: string;
}

interface FullStory {
  title: string;
  content: string[];
  timeline: TimelineItem[];
  facts: string[];
}

interface Card {
  id: string;
  marker: string;
  icon: string;
  headline: string;
  highlights: string[];
  fullStory: FullStory;
}

const expandedCard = ref<Card | null>(null);
const email = ref('');
const subscribed = ref(false);

const cards = ref<Card[]>([
  {
    id: 'railway',
    marker: '1804 → 1829',
    icon: '🚂',
    headline: "Who Really 'Invented' the Railway?",
    highlights: [
      "1804: Richard Trevithick runs the first steam locomotive",
      "1825: Stephenson's Locomotion No. 1 inaugurates Stockton & Darlington",
      "He combined high-pressure steam with durable track design"
    ],
    fullStory: {
      title: "The Railway Revolution: More Than One Inventor's Dream",
      content: [
        'The story of the railway is one of the great tales of the Industrial Revolution, interweaving the lives of visionaries, engineers, and entrepreneurs.',
        'In 1804, Richard Trevithick, a British engineer, built the first full-scale working railway steam locomotive.',
        'However, it was George Stephenson, another British engineer, who became known as the "Father of Railways" for his pioneering work on the Locomotion No. 1 in 1825.',
        'The railway rapidly evolved, with innovations like the steam locomotive, iron rails, and the telegraph revolutionizing transport and communication.',
        'By the 1850s, railways had spread across Europe and North America, symbolizing progress and industrial might.',
        'The expansion of the railway network facilitated global trade, migration, and the spread of ideas, playing a crucial role in shaping the modern world.',
        'Today, we explore the untold stories and the real impact of the railway on society, economy, and the environment.',
        'Join us as we uncover the layers of history and the legacy of the railway that continues to influence us today.'
      ],
      timeline: [
        { year: '1804', event: 'First steam locomotive built by Richard Trevithick.' },
        { year: '1825', event: 'George Stephenson\'s Locomotion No. 1 runs on the Stockton and Darlington Railway.' },
        { year: '1830s', event: 'Railways begin to spread rapidly across Europe and North America.' },
        { year: '1850s', event: 'The railway network becomes a symbol of progress and industrial power.' }
      ],
      facts: [
        'The first railways were built in the early 17th century, but they were very different from the ones we know today.',
        'The term "railway" originally referred to the wooden or metal rails on which horse-drawn vehicles would run.',
        'The first recorded proposal for a steam locomotive was made by Jonathan Hulls in 1804, but it was Trevithick who built the first successful one.',
        'George Stephenson also invented the first public railway to use steam locomotives, the Stockton and Darlington Railway.',
        'The rapid expansion of the railway network in the 19th century was a key factor in the Industrial Revolution, enabling faster transport of goods and people.'
      ]
    }
  },
  {
    id: 'horsepower',
    marker: '1776 → 1783',
    icon: '🐎',
    headline: "Watt's Genius: Selling Steam in 'Horsepower'",
    highlights: [
      'James Watt developed the steam engine and introduced the term "horsepower" in the late 18th century.',
      'Horsepower was based on the work done by horses and provided a relatable measure of engine power.',
      'One horsepower is equivalent to 550 foot-pounds per second, or about 746 watts.',
      'Horsepower remains a standard unit of measurement for power in various fields today.'
    ],
    fullStory: {
      title: "Watt's Genius: Selling Steam in 'Horsepower'",
      content: [
        'The term "horsepower" was coined by James Watt, the Scottish inventor, and mechanical engineer, in the late 18th century.',
        'Watt was looking for a way to market his steam engines, and he needed a unit of measurement that would help people understand the power of his engines in relatable terms.',
        'He based his concept of horsepower on the amount of work a horse could do in a minute, which was a common point of reference for people at the time.',
        'One horsepower is equivalent to 550 foot-pounds per second, or about 746 watts.',
        'Watt\'s introduction of horsepower as a unit of measurement was crucial in the widespread adoption of steam power, as it provided a clear and understandable way to compare the power of steam engines to the traditional horse-drawn power.',
        'Today, horsepower is still used as a standard unit of measurement for power in many fields, including automotive and mechanical engineering.'
      ],
      timeline: [
        { year: '1776', event: 'James Watt begins developing his steam engine.' },
        { year: '1781', event: 'Watt demonstrates his steam engine, showing its potential power.' },
        { year: '1783', event: 'The term "horsepower" is coined by James Watt.' }
      ],
      facts: [
        'The term "horsepower" was originally used to sell steam engines to people who were used to measuring power in terms of the work done by horses.',
        'Watt\'s steam engine was a key driver in the Industrial Revolution, enabling a wide range of new machines and technologies.',
        'The concept of horsepower has evolved, with different standards of horsepower being used for different types of engines and motors.',
        'Today, the term "horsepower" is commonly used to describe the power of car engines, among other applications.'
      ]
    }
  },
  {
    id: 'travel',
    marker: '1841 → 1850s',
    icon: '🎫',
    headline: "How Thomas Cook Built the First Travel Agency",
    highlights: [
      'Thomas Cook is considered the pioneer of the modern travel agency, founding Thomas Cook & Son in the 1850s.',
      'Cook organized the first package tour in 1841, taking a group on a train from Leicester to Loughborough.',
      'He published the first travel guidebook in 1845, providing essential information for travelers.',
      'Cook\'s innovations made leisure travel accessible to the middle class and laid the groundwork for the modern travel industry.'
    ],
    fullStory: {
      title: "How Thomas Cook Built the First Travel Agency",
      content: [
        'Thomas Cook, an English businessman, is considered the pioneer of the modern travel agency.',
        'In 1841, Cook organized the first package tour, taking a group of temperance supporters on a train from Leicester to Loughborough.',
        'His successful organization of this trip led to the founding of Thomas Cook & Son, the first travel agency in the modern sense.',
        'Cook\'s agency offered a wide range of travel services, including railway tickets, hotel bookings, and guided tours.',
        'He was instrumental in popularizing the concept of leisure travel and making it accessible to the middle class.',
        'Thomas Cook also published the first travel guidebook, providing travelers with essential information and tips.',
        'His innovations and vision laid the groundwork for the modern travel industry, influencing how people travel to this day.'
      ],
      timeline: [
        { year: '1841', event: 'Thomas Cook organizes the first package tour by train.' },
        { year: '1845', event: 'Cook publishes the first-ever travel guidebook.' },
        { year: '1850s', event: 'Thomas Cook & Son becomes the first modern travel agency.' }
      ],
      facts: [
        'Thomas Cook was originally a cabinet maker and had no formal training in travel or tourism.',
        'The first package tour organized by Cook in 1841 was a huge success, leading to the rapid expansion of his travel business.',
        'Cook\'s travel agency was the first to offer inclusive tours, covering all aspects of travel from transport to accommodation.',
        'The concept of the travel agency quickly spread across Europe and North America, revolutionizing the travel industry.'
      ]
    }
  }
]);

const handleSubscribe = () => {
  if (email.value.includes('@')) {
    subscribed.value = true;
    email.value = '';
    setTimeout(() => subscribed.value = false, 3000);
  }
};

const scrollToCards = () => {
  document.getElementById('card-grid')?.scrollIntoView({ behavior: 'smooth' });
};

const getNextCard = (currentCard: Card) => {
  const currentIndex = cards.value.findIndex(c => c.id === currentCard.id);
  return cards.value[(currentIndex + 1) % cards.value.length];
};
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-white">
    <!-- Header Section -->
    <div class="relative h-screen flex items-center justify-center overflow-hidden">
      <!-- Background with overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
      </div>

      <!-- Hero Content -->
      <div class="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Forgotten Infographics
        </h1>
        
        <h2 class="text-xl md:text-2xl text-slate-300 italic mb-8 font-light">
          Untold Stories of Steam, Power & Travel
        </h2>
        
        <p class="text-lg text-slate-200 mb-12 max-w-2xl mx-auto leading-relaxed">
          Discover how Trevithick, Watt, and Thomas Cook shaped the modern world—one engine, one measurement, one journey at a time.
        </p>
        
        <button
          class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          @click="scrollToCards"
        >
          Explore the Stories
        </button>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div
          class="text-white cursor-pointer animate-bounce"
          @click="scrollToCards"
        >
          <ChevronDown :size="32" />
        </div>
      </div>
    </div>

    <!-- Card Grid Section -->
    <div id="card-grid" class="py-20 px-6 bg-slate-50">
      <div class="max-w-6xl mx-auto">
        <!-- Timeline curve -->
        <div class="relative mb-16">
          <svg class="w-full h-16" viewBox="0 0 800 64">
            <path
              d="M 50 32 Q 200 8 400 32 T 750 32"
              stroke="#334155"
              stroke-width="2"
              stroke-dasharray="5,5"
              fill="none"
            />
            <g v-for="(card, index) in cards" :key="card.id">
              <circle
                :cx="50 + index * 350"
                :cy="32"
                r="6"
                fill="#1e40af"
                class="drop-shadow-sm"
              />
              <text
                :x="50 + index * 350"
                :y="20"
                text-anchor="middle"
                class="fill-slate-600 text-xs font-medium"
              >
                {{ card.marker }}
              </text>
            </g>
          </svg>
        </div>

        <!-- Cards Grid -->
        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(card, index) in cards"
            :key="card.id"
            class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-slate-100 transform hover:scale-105 hover:-translate-y-2"
            @click="expandedCard = card"
          >
            <div class="text-6xl mb-6 text-center">{{ card.icon }}</div>
            <h3 class="text-xl font-bold mb-4 text-slate-800 text-center">
              {{ card.headline }}
            </h3>
            <ul class="space-y-3 text-slate-600">
              <li v-for="(highlight, idx) in card.highlights" :key="idx" class="flex items-start">
                <span class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span class="text-sm leading-relaxed">{{ highlight }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Expanded Card Modal -->
    <div v-if="expandedCard" class="fixed inset-0 z-50 flex items-center justify-center">
      <!-- Backdrop -->
      <div
        class="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        @click="expandedCard = null"
      />
      
      <!-- Modal Content -->
      <div class="relative bg-white rounded-2xl shadow-2xl max-w-4xl max-h-[90vh] overflow-y-auto m-6 w-full transform transition-all duration-300 scale-100">
        <!-- Header -->
        <div class="sticky top-0 bg-white border-b border-slate-200 p-6 flex justify-between items-center rounded-t-2xl">
          <h2 class="text-2xl font-bold text-slate-800">
            {{ expandedCard.fullStory.title }}
          </h2>
          <button
            @click="expandedCard = null"
            class="p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X :size="24" />
          </button>
        </div>

        <div class="p-6 md:p-8">
          <div class="grid md:grid-cols-3 gap-8">
            <!-- Main Content -->
            <div class="md:col-span-2 space-y-6">
              <p
                v-for="(paragraph, idx) in expandedCard.fullStory.content"
                :key="idx"
                class="text-slate-700 leading-relaxed"
              >
                {{ paragraph }}
              </p>
            </div>

            <!-- Sidebar -->
            <div class="space-y-6">
              <!-- Timeline -->
              <div class="bg-slate-50 rounded-xl p-6">
                <h4 class="font-bold text-slate-800 mb-4 flex items-center">
                  <Calendar :size="20" class="mr-2" />
                  Timeline
                </h4>
                <div class="space-y-3">
                  <div
                    v-for="(item, idx) in expandedCard.fullStory.timeline"
                    :key="idx"
                    class="flex items-start"
                  >
                    <span class="bg-blue-500 text-white text-xs px-2 py-1 rounded font-semibold mr-3 flex-shrink-0">
                      {{ item.year }}
                    </span>
                    <span class="text-sm text-slate-600">{{ item.event }}</span>
                  </div>
                </div>
              </div>

              <!-- Facts -->
              <div class="bg-blue-50 rounded-xl p-6">
                <h4 class="font-bold text-slate-800 mb-4">Fun Facts</h4>
                <div class="space-y-3">
                  <div
                    v-for="(fact, idx) in expandedCard.fullStory.facts"
                    :key="idx"
                    class="bg-white rounded-lg p-3 text-sm text-slate-700 shadow-sm"
                  >
                    {{ fact }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Actions -->
          <div class="mt-8 pt-6 border-t border-slate-200 flex flex-wrap gap-4 justify-between items-center">
            <button class="flex items-center text-blue-600 hover:text-blue-700 font-medium">
              <Download :size="20" class="mr-2" />
              Download PDF
            </button>
            
            <div class="flex gap-4">
              <button
                v-if="expandedCard"
                @click="expandedCard = getNextCard(expandedCard)"
                class="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Next Story
                <ArrowRight :size="20" class="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Section -->
    <footer class="bg-slate-800 text-white py-16">
      <!-- ...existing footer content... -->
    </footer>
  </div>
</template>