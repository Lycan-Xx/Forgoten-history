import React, { useState, useEffect, useCallback } from 'react';
import { ArrowUp, Bookmark } from 'lucide-react';
import { useBookmark } from '../../hooks/useBookmark';

interface FloatingActionButtonProps {
  onBookmarkClick: () => void;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onBookmarkClick }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { bookmarks } = useBookmark();

  const handleScroll = useCallback(() => {
    setShowScrollTop(window.scrollY > 500);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="fixed bottom-8 right-8 flex flex-col space-y-3 z-40">
      {bookmarks.bookmarked.length > 0 && (
        <button
          className="bg-copper text-white p-3 rounded-full shadow-lg hover:bg-copper-light transition-all duration-300 relative"
          onClick={onBookmarkClick}
          aria-label="View bookmarks"
        >
          <Bookmark className="h-6 w-6" />
          <span className="absolute -top-2 -right-2 bg-brown text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {bookmarks.bookmarked.length}
          </span>
        </button>
      )}
      
      {showScrollTop && (
        <button
          className="bg-brown-light text-white p-3 rounded-full shadow-lg hover:bg-brown transition-all duration-300"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}

export default FloatingActionButton;