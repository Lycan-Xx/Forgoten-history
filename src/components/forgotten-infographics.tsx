import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronDown, Mail, Twitter, Linkedin, ArrowRight, Calendar, Download } from 'lucide-react';

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

const ForgottenInfographics: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<Card | null>(null);
  const [email, setEmail] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const cards: Card[] = [
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
          "The story of the railway isn't about a single eureka moment—it's a tale of brilliant minds building upon each other's work across decades of innovation.",
          "Richard Trevithick, the Cornish engineer, made history on February 21, 1804, when his locomotive hauled 10 tons of iron and 70 passengers along nine miles of tramway in Wales. But his high-pressure engines were ahead of their time—the brittle cast-iron rails couldn't handle the power.",
          "Enter George Stephenson, the 'Father of Railways.' Two decades later, he didn't just build better engines; he revolutionized the entire system. His wrought-iron rails could withstand the pressure, his locomotives were more reliable, and his standard gauge of 4 feet 8½ inches became the global standard.",
          "The 1829 Rainhill Trials proved Stephenson's supremacy when his 'Rocket' outpaced all competitors, reaching an unprecedented 30 mph. This wasn't just about speed—it was about proving that steam railways could be practical, profitable, and safe.",
          "Today, 60% of the world's railways still use Stephenson's gauge, a testament to the power of good engineering standards."
        ],
        timeline: [
          { year: '1804', event: "Trevithick's Penydarren Engine cracks brittle rails" },
          { year: '1821', event: "Stephenson refines wrought-iron rails" },
          { year: '1825', event: "Stockton & Darlington Railway opens" },
          { year: '1829', event: "Rocket triumphs at Rainhill Trials" }
        ],
        facts: [
          "Stephenson's gauge—4 ft 8½ in—remains standard for 60% of world tracks",
          "The Rocket could haul 13 tons at 24 mph consistently",
          "Trevithick's first journey covered 9 miles in 4 hours"
        ]
      }
    },
    {
      id: 'horsepower',
      marker: '1776 → 1783',
      icon: '🐎',
      headline: "Watt's Genius: Selling Steam in 'Horsepower'",
      highlights: [
        "1776: Watt patents separate condenser, slashes fuel usage",
        "He defines 1 HP = 550 ft·lb/s, equating a steam engine to horses",
        "A marketing masterstroke that spurred industrial adoption"
      ],
      fullStory: {
        title: "The Marketing Genius Behind the Industrial Revolution",
        content: [
          "James Watt didn't just improve the steam engine—he revolutionized how we sell technology by creating a unit of measurement that everyone could understand.",
          "In 1776, Watt's separate condenser reduced fuel consumption by 75%, making steam engines finally economical. But he faced a classic problem: how do you convince customers to buy something they don't understand?",
          "Watt's stroke of genius was 'horsepower.' He calculated that a strong draft horse could lift 550 pounds one foot in one second, then marketed his engines in terms everyone knew: 'This engine does the work of 10 horses.'",
          "This wasn't just measurement—it was psychology. Mill owners could immediately grasp the value proposition. Instead of explaining complex thermodynamics, Watt simply said, 'Replace your 20 horses with this 20-horsepower engine.'",
          "The term was so intuitive that it survived the transition to automobiles, electricity, and even modern appliances. Today's Tesla Model S produces 1,020 horsepower—a unit coined 250 years ago to sell steam engines."
        ],
        timeline: [
          { year: '1769', event: "Watt patents first improvement to Newcomen engine" },
          { year: '1776', event: "Separate condenser patent granted" },
          { year: '1781', event: "Rotary motion adaptation perfected" },
          { year: '1783', event: "Horsepower measurement standardized" }
        ],
        facts: [
          "Watt's engines used 75% less fuel than predecessors",
          "One horsepower equals 746 watts (named after James Watt)",
          "The term 'horsepower' predates the automobile by over 100 years"
        ]
      }
    },
    {
      id: 'travel',
      marker: '1841 → 1850s',
      icon: '🎫',
      headline: "How Thomas Cook Built the First Travel Agency",
      highlights: [
        "July 5, 1841: 540 parishioners travel to Loughborough for £0.05 each",
        "Cook packages transportation, meals, and fellowship—blueprint for modern tours",
        "By 1855, 'Thomas Cook & Son' sells Continental excursions & hotel bookings"
      ],
      fullStory: {
        title: "The Temperance Trip That Created Modern Tourism",
        content: [
          "What started as a simple train ride to a temperance meeting accidentally invented the entire travel industry as we know it today.",
          "On July 5, 1841, Baptist minister Thomas Cook chartered a train from Leicester to Loughborough for a temperance rally. He negotiated a group rate, arranged refreshments, and organized the entire experience for 540 passengers—each paying just one shilling.",
          "Cook realized he'd stumbled onto something revolutionary: people would pay for convenience and organization, not just transportation. He had created the world's first package tour.",
          "By 1845, Cook was organizing commercial pleasure trips. By 1855, his company was booking Continental tours, complete with hotels, meals, and guided experiences. He had essentially invented the travel agency.",
          "Cook's innovation wasn't technology—it was service design. He understood that travel anxiety was the biggest barrier to tourism, so he eliminated it by handling every detail. His 'circular notes' even became the predecessor to traveler's checks."
        ],
        timeline: [
          { year: '1841', event: "First organized excursion to Loughborough" },
          { year: '1845', event: "First commercial pleasure trips begin" },
          { year: '1851', event: "Cook organizes trips to Great Exhibition" },
          { year: '1855', event: "Continental tours and hotel bookings launched" }
        ],
        facts: [
          "Cook's first trip carried 540 passengers for 1 shilling each",
          "His 'circular notes' were the first traveler's checks",
          "By 1872, Cook was organizing round-the-world tours"
        ]
      }
    }
  ];

  const handleSubscribe = () => {
    if (email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToCards = () => {
    document.getElementById('card-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        </div>

        {/* Hero Content */}
        <div 
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
        >
          <h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Forgotten Infographics
          </h1>
          
          <h2 
            className="text-xl md:text-2xl text-slate-300 italic mb-8 font-light"
          >
            Untold Stories of Steam, Power & Travel
          </h2>
          
          <p 
            className="text-lg text-slate-200 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Discover how Trevithick, Watt, and Thomas Cook shaped the modern world—one engine, one measurement, one journey at a time. Each story invites you to explore a snapshot, then dive deeper with a single click.
          </p>
          
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            onClick={scrollToCards}
          >
            Explore the Stories
          </button>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div
            className="text-white cursor-pointer animate-bounce"
            onClick={scrollToCards}
          >
            <ChevronDown size={32} />
          </div>
        </div>
      </div>

      {/* Card Grid Section */}
      <div id="card-grid" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          {/* Timeline curve */}
          <div 
            className="relative mb-16"
          >
            <svg className="w-full h-16" viewBox="0 0 800 64">
              <path
                d="M 50 32 Q 200 8 400 32 T 750 32"
                stroke="#334155"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
              />
              {cards.map((card, index) => (
                <g key={card.id}>
                  <circle
                    cx={50 + index * 350}
                    cy={32}
                    r="6"
                    fill="#1e40af"
                    className="drop-shadow-sm"
                  />
                  <text
                    x={50 + index * 350}
                    y={20}
                    textAnchor="middle"
                    className="fill-slate-600 text-xs font-medium"
                  >
                    {card.marker}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-slate-100 transform hover:scale-105 hover:-translate-y-2"
                onClick={() => setExpandedCard(card)}
              >
                <div className="text-6xl mb-6 text-center">{card.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-slate-800 text-center">
                  {card.headline}
                </h3>
                <ul className="space-y-3 text-slate-600">
                  {card.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-sm leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Expanded Card Modal */}
      {expandedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setExpandedCard(null)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl max-h-[90vh] overflow-y-auto m-6 w-full transform transition-all duration-300 scale-100">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex justify-between items-center rounded-t-2xl">
              <h2 className="text-2xl font-bold text-slate-800">
                {expandedCard.fullStory.title}
              </h2>
              <button
                onClick={() => setExpandedCard(null)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="md:col-span-2 space-y-6">
                  {expandedCard.fullStory.content.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-slate-700 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Timeline */}
                  <div className="bg-slate-50 rounded-xl p-6">
                    <h4 className="font-bold text-slate-800 mb-4 flex items-center">
                      <Calendar size={20} className="mr-2" />
                      Timeline
                    </h4>
                    <div className="space-y-3">
                      {expandedCard.fullStory.timeline.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start"
                        >
                          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded font-semibold mr-3 flex-shrink-0">
                            {item.year}
                          </span>
                          <span className="text-sm text-slate-600">{item.event}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Facts */}
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h4 className="font-bold text-slate-800 mb-4">Fun Facts</h4>
                    <div className="space-y-3">
                      {expandedCard.fullStory.facts.map((fact, idx) => (
                        <div
                          key={idx}
                          className="bg-white rounded-lg p-3 text-sm text-slate-700 shadow-sm"
                        >
                          {fact}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap gap-4 justify-between items-center">
                <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  <Download size={20} className="mr-2" />
                  Download PDF
                </button>
                
                <div className="flex gap-4">
                  {cards.map((card, idx) => {
                    const currentIndex = cards.findIndex(c => c.id === expandedCard.id);
                    const nextCard = cards[(currentIndex + 1) % cards.length];
                    if (card.id === nextCard.id) {
                      return (
                        <button
                          key={card.id}
                          onClick={() => setExpandedCard(card)}
                          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                        >
                          Next Story
                          <ArrowRight size={20} className="ml-2" />
                        </button>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* References */}
            <div>
              <h3 className="text-xl font-bold mb-6">References & Sources</h3>
              <div className="space-y-4 text-slate-300">
                <div>
                  <h4 className="font-semibold text-white mb-2">Railways Story:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Trevithick's first locomotive, 1804</li>
                    <li>• Stephenson's Stockton & Darlington, 1825</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Horsepower Story:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Watt's separate condenser patent, 1776</li>
                    <li>• Horsepower marketing details</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Thomas Cook Story:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Cook's first excursion, July 1841</li>
                    <li>• Early Thomas Cook & Son operations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <p className="text-slate-300">Jane Doe, Content Curator & Historian</p>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    <Twitter size={24} />
                  </a>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    <Mail size={24} />
                  </a>
                </div>
                <p className="text-sm text-slate-400 italic">
                  Passionate about uncovering the stories behind everyday innovations.
                </p>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-6">Subscribe for More Forgotten Infographics</h3>
              <div className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button
                  onClick={handleSubscribe}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                >
                  Subscribe
                </button>
                {subscribed && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-sm"
                  >
                    Thank you for subscribing!
                  </motion.p>
                )}
                <p className="text-xs text-slate-400">
                  We respect your privacy. No spam—promise.
                </p>
                </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Forgotten Infographics. All rights reserved. Designed with passion for history.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ForgottenInfographics;