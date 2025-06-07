import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import { getStories } from '../../services/storyService';
import EventCard from './EventCard';
import { EventCategory, HistoricalEvent } from '../../types';

interface EventsSectionProps {
  onBookmarkActionReload?: () => void;
}

const EventsSection: React.FC<EventsSectionProps> = ({ onBookmarkActionReload }) => {
  const [activeFilter, setActiveFilter] = useState<EventCategory | 'all'>('all');
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [events, setEvents] = useState<HistoricalEvent[]>([]);

  // Load events from the story service
  useEffect(() => {
    const loadedEvents = getStories();
    setEvents(loadedEvents);
  }, []);

  const categories: { id: EventCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'All Events' },
    { id: 'science', label: 'Science' },
    { id: 'war', label: 'War' },
    { id: 'culture', label: 'Culture' },
    { id: 'politics', label: 'Politics' },
    { id: 'technology', label: 'Technology' },
    { id: 'arts', label: 'Arts' },
  ];

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.category === activeFilter);

  const handleCardToggle = (isExpanded: boolean, eventId: string) => {
    if (isExpanded) {
      // Close any other expanded cards before opening this one
      setExpandedCard(eventId);
    } else {
      setExpandedCard(null);
    }
  };

  return (
    <section id="events" className="section bg-black">
      <div className="container-custom">
        <div className="mb-10">
          <motion.h2 
            className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Forgotten <span className="text-copper">Events</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore historical events that time forgot — extraordinary moments that shaped our world but vanished from collective memory.
          </motion.p>
          
          {/* Filter Categories - Temporarily commented out */}
          {/*
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
            <Filter className="h-4 w-4 text-copper mr-1" />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-3 py-1 text-sm rounded-full whitespace-nowrap transition-colors ${
                  activeFilter === category.id 
                    ? 'bg-copper text-white' 
                    : 'bg-brown-light text-gray-300 hover:bg-brown hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          */}
        </div>
        
        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <EventCard 
              key={event.id} 
              event={event} 
              index={index}
              onCardToggle={handleCardToggle}
              onBookmarkActionReload={onBookmarkActionReload}
            />
          ))}
        </div>
        
        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No events found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;