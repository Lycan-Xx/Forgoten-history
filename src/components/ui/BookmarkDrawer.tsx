import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookMarked, Calendar } from 'lucide-react';
import { BookmarkedStory } from '../../types';
import Button from './Button';

interface BookmarkDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarkedStories: BookmarkedStory[];
  onStoryClick: (storyId: string) => void;
  onRemoveBookmark: (storyId: string) => void;
}

const BookmarkDrawer: React.FC<BookmarkDrawerProps> = ({
  isOpen,
  onClose,
  bookmarkedStories,
  onStoryClick,
  onRemoveBookmark
}) => {
  const drawerVariants = {
    closed: { x: '100%' },
    open: { x: 0 }
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={onClose}
          />
          
          {/* Drawer */}
          <motion.div
            className="fixed right-0 top-0 h-full w-full md:w-96 bg-brown-dark z-50 overflow-y-auto"
            variants={drawerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: 'tween', duration: 0.3 }}
          >
            {/* Header */}
            <div className="sticky top-0 bg-brown-dark border-b border-brown-light p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <BookMarked className="h-5 w-5 text-copper mr-2" />
                  <h2 className="font-playfair text-xl font-bold text-white">
                    Bookmarked Stories
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-brown-light transition-colors"
                  aria-label="Close bookmarks"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              {bookmarkedStories.length === 0 ? (
                <div className="text-center py-12">
                  <BookMarked className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg mb-2">No bookmarks yet</p>
                  <p className="text-gray-500 text-sm">
                    Start exploring stories and bookmark your favorites
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {bookmarkedStories.map((story) => (
                    <div
                      key={story.id}
                      className="bg-glass-light backdrop-blur-sm rounded-lg overflow-hidden cursor-pointer hover:bg-glass-dark transition-colors"
                      onClick={() => onStoryClick(story.id)}
                    >
                      <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-3">
                        <h3 className="font-playfair text-sm font-bold text-white mb-1 line-clamp-2">
                          {story.title}
                        </h3>
                        <p className="text-gray-300 text-xs line-clamp-2 mb-2">
                          {story.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-gray-400 text-xs">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>Bookmarked</span>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onRemoveBookmark(story.id);
                            }}
                            className="p-1 rounded text-copper hover:bg-copper/10 transition-colors"
                            aria-label="Remove bookmark"
                          >
                            <BookMarked className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookmarkDrawer;