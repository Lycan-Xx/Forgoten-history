import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookMarked, Calendar, X, ExternalLink } from 'lucide-react';
import { HistoricalEvent } from '../../types';
import Button from '../ui/Button';
import { useBookmark } from '../../hooks/useBookmark';

interface EventCardProps {
  event: HistoricalEvent;
  index: number;
  onCardToggle?: (isExpanded: boolean, eventId: string) => void;
  onBookmarkActionReload?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ 
  event, 
  index, 
  onCardToggle, 
  onBookmarkActionReload 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isBookmarked, toggleBookmark } = useBookmark();
  const bookmarked = isBookmarked(event.id);

  const handleToggleExpand = () => {
    const newExpandedState = !isExpanded;
    setIsExpanded(newExpandedState);
    onCardToggle?.(newExpandedState, event.id);
  };

  const handleBookmarkToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    try {
      // Update the bookmark state
      toggleBookmark(event.id);
      
      // Small delay to ensure the bookmark state is saved to localStorage
      setTimeout(() => {
        // Call the reload function if provided
        if (onBookmarkActionReload) {
          onBookmarkActionReload();
        }
      }, 50);
    } catch (error) {
      console.error('Failed to toggle bookmark:', error);
      
      // Show user-friendly error message
      alert('Failed to update bookmark. Please try again.');
    }
  };

  // Theme color based on event category
  const getThemeColor = () => {
    switch (event.category) {
      case 'technology': return 'rgba(187, 107, 0, 0.6)'; // copper shade
      case 'science': return 'rgba(0, 127, 170, 0.6)'; // blue shade
      case 'culture': return 'rgba(114, 46, 209, 0.6)'; // purple shade
      case 'war': return 'rgba(170, 24, 24, 0.6)'; // red shade
      case 'politics': return 'rgba(21, 101, 50, 0.6)'; // green shade
      case 'arts': return 'rgba(255, 123, 0, 0.6)'; // orange shade
      default: return 'rgba(187, 107, 0, 0.6)'; // default copper
    }
  };

  // Improved staggered animation variants with smoother easing
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1], // cubic-bezier easing for smoother motion
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
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1],
      }
    })
  };

  const sourceVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.4,
        ease: [0.215, 0.61, 0.355, 1],
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2 + (i * 0.1),
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1],
      }
    })
  };

  // Helper function to insert images into the story text
  const renderStoryWithImages = () => {
    if (!event.fullStory || !event.storyImages || event.storyImages.length === 0) {
      return <p className="text-gray-200 text-lg leading-relaxed">{event.fullStory || event.description}</p>;
    }

    // Split the story into paragraphs
    const paragraphs = event.fullStory.split('\n\n');
    
    // Create an array to hold JSX elements
    const storyWithImages: JSX.Element[] = [];
    
    // Distribute images throughout the story
    paragraphs.forEach((paragraph, index) => {
      // Add the paragraph
      storyWithImages.push(
        <p key={`p-${index}`} className="text-gray-200 text-lg leading-relaxed mb-4">
          {paragraph}
        </p>
      );
      
      // Add an image after certain paragraphs if available
      // This simple algorithm places images after paragraphs 2, 5, and 8
      if ((index === 2 || index === 5 || index === 8) && event.storyImages && index/3 < event.storyImages.length) {
        const imageIndex = Math.floor(index/3);
        const image = event.storyImages[imageIndex];
        storyWithImages.push(
          <motion.div 
            key={`img-${index}`} 
            className="my-6"
            variants={imageVariants}
            custom={imageIndex}
            initial="hidden"
            animate="visible"
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-auto max-h-80 object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
            <p className="text-sm text-gray-300 italic mt-2">{image.caption}</p>
          </motion.div>
        );
      }
    });
    
    return storyWithImages;
  };

  return (
    <>
      {/* Expanded Card - Fixed Position */}
      {isExpanded && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            onClick={handleToggleExpand}
          />
          
          {/* Card Content */}
          <motion.div
            className="relative bg-brown-dark rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
            layout
          >
            <div className="p-6 md:p-8">
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
                    }}
                    className="p-2 rounded-full text-gray-400 hover:text-white transition-colors"
                    aria-label="Close details"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Expanded content */}
              <div className="space-y-8">
                {/* Main Image */}
                <div>
                  <img
                    src={event.mainImageUrl}
                    alt={event.mainImageAlt}
                    className="w-full h-72 md:h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>

                {/* Story with embedded images */}
                <div className="space-y-6">
                  <div>
                    {renderStoryWithImages()}
                  </div>

                  <div>
                    <h3 className="font-playfair text-xl font-bold text-white mb-3">Key Facts</h3>
                    <ul className="space-y-3">
                      {event.bulletPoints.map((point, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start"
                          variants={bulletVariants}
                          custom={i}
                          initial="hidden"
                          animate="visible"
                        >
                          <span className="inline-block h-2 w-2 bg-copper rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-200 text-lg">{point}</span>
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
          </motion.div>
        </motion.div>
      )}

      {/* Collapsed Card */}
      {!isExpanded && (
        <motion.div
          className="card cursor-pointer overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          custom={index}
          variants={cardVariants}
          onClick={handleToggleExpand}
          layout
          whileHover={{ y: -5 }}
          transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
        >
          {/* Image with shadow overlay */}
          <div className="relative h-48 md:h-56 overflow-hidden">
            <img 
              src={event.mainImageUrl} 
              alt={event.mainImageAlt} 
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
            />
            {/* Gradient shadow overlay with theme color */}
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"
              style={{ 
                backgroundImage: `linear-gradient(to top, black 0%, ${getThemeColor()} 50%, transparent 100%)` 
              }}
            ></div>
            <div className="absolute top-2 right-2">
              <button
                onClick={handleBookmarkToggle}
                className={`p-1.5 rounded-full transition-colors ${
                  bookmarked ? 'text-copper bg-black/50' : 'text-gray-200 bg-black/30 hover:text-copper'
                }`}
                aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
              >
                <BookMarked className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="p-5">
            <h2 className="font-playfair text-xl font-bold text-copper mb-2">{event.title}</h2>
            
            <div className="flex items-center text-gray-300 text-sm mb-3">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{event.period}, {event.year}</span>
            </div>
            
            <p className="text-gray-200 text-base line-clamp-3 mb-4">
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
        </motion.div>
      )}
    </>
  );
};

export default EventCard;