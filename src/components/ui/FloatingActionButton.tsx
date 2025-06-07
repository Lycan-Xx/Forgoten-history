import React, { useState, useEffect } from 'react';
import { ArrowUp, Bookmark } from 'lucide-react';
import { useBookmark } from '../../hooks/useBookmark';

const FloatingActionButton: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { bookmarks } = useBookmark();
  const hasBookmarks = bookmarks.bookmarked.length > 0;

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBookmarks = () => {
    // This function would be expanded to actually show bookmarked events
    // For now, we'll just scroll to the events section
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col space-y-3 z-40">
      {hasBookmarks && (
        <button
          className="bg-copper text-white p-3 rounded-full shadow-lg hover:bg-copper-light transition-all duration-300"
          onClick={scrollToBookmarks}
          aria-label="View bookmarks"
        >
          <Bookmark className="h-6 w-6" />
        </button>
      )}
      
      {showScrollTop && (
        <button
          className="bg-brown-light text-white p-3 rounded-full shadow-lg hover:bg-brown transition-all duration-300"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default FloatingActionButton;