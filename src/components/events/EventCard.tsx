import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookMarked, Calendar, X, ExternalLink } from 'lucide-react';
import { HistoricalEvent } from '../../types';
import Button from '../ui/Button';
import { useBookmark } from '../../hooks/useBookmark';

interface EventCardProps {
  event: HistoricalEvent;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentExpandedCard, setCurrentExpandedCard] = useState<number | null>(null);
  const { isBookmarked, toggleBookmark, bookmarkedEvents } = useBookmark();
  const bookmarked = isBookmarked(event.id);

  useEffect(() => {
    if (currentExpandedCard !== index) {
      setIsExpanded(false);
    }
  }, [currentExpandedCard, index]);

  const handleToggleExpand = () => {
    setCurrentExpandedCard(isExpanded ? null : index);
    setIsExpanded(!isExpanded);
  };

  const handleBookmarkToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleBookmark(event.id);
  };

  // Staggered animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      }
    })
  };

  const bulletVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3 + (i * 0.1),
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      }
    })
  };

  const sourceVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      }
    }
  };

  return (
    <motion.div
      className={`card ${isExpanded ? 'md:col-span-3 fixed inset-0 z-50 flex items-center justify-center bg-black/50' : ''} cursor-pointer`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      custom={index}
      variants={cardVariants}
      onClick={handleToggleExpand}
      layout
    >
      {isExpanded ? (
        <div className="p-6 md:p-8 bg-white rounded-lg max-w-4xl w-full">
          {/* Header with close button */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-copper mb-2">{event.title}</h2>
              <div className="flex items-center text-gray-300 text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{event.period}, {event.year}</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={handleBookmarkToggle}
                className={`p-2 rounded-full transition-colors ${
                  bookmarked ? 'text-copper bg-copper/10' : 'text-gray-400 hover:text-copper'
                }`}
                aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
              >
                <BookMarked className="h-5 w-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(false);
                  setCurrentExpandedCard(null);
                }}
                className="p-2 rounded-full text-gray-400 hover:text-white transition-colors"
                aria-label="Close details"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Expanded content */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Image */}
            <div className="md:col-span-1">
              <img
                src={event.imageUrl}
                alt={event.imageAlt}
                className="w-full h-64 md:h-full object-cover rounded-lg"
              />
            </div>

            {/* Description and bullet points */}
            <div className="md:col-span-2 space-y-6">
              <p className="text-gray-200 leading-relaxed">
                {event.description}
              </p>

              <div>
                <h3 className="font-playfair text-xl font-bold text-white mb-3">Key Facts</h3>
                <ul className="space-y-2">
                  {event.bulletPoints.map((point, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start"
                      variants={bulletVariants}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                    >
                      <span className="inline-block h-2 w-2 bg-copper rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-200">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Sources */}
              <motion.div
                variants={sourceVariants}
                initial="hidden"
                animate="visible"
              >
                <h3 className="font-playfair text-lg font-bold text-white mb-2">Sources</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  {event.sources.map((source, i) => (
                    <li key={i} className="flex items-start">
                      {source.url ? (
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-copper hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {source.text}
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      ) : (
                        <span>{source.text}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      ) : (
        // Collapsed card
        <div className="h-full p-6 flex flex-col card-hover">
          <div className="flex justify-between items-start">
            <h2 className="font-playfair text-xl font-bold text-copper mb-2">{event.title}</h2>
            <button
              onClick={handleBookmarkToggle}
              className={`p-1.5 rounded-full transition-colors ${
                bookmarked ? 'text-copper bg-copper/10' : 'text-gray-400 hover:text-copper'
              }`}
              aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
            >
              <BookMarked className="h-4 w-4" />
            </button>
          </div>
          
          <div className="flex items-center text-gray-300 text-sm mb-3">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{event.period}, {event.year}</span>
          </div>
          
          <p className="text-gray-200 line-clamp-3 mb-4">
            {event.description}
          </p>
          
          <div className="mt-auto">
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full"
              onClick={handleToggleExpand}
            >
              Read More
            </Button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default EventCard;