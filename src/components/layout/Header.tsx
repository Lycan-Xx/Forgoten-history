import React, { useState, useEffect } from 'react';
import { Menu, X, Clock, BookMarked } from 'lucide-react';
import Button from '../ui/Button';
import BookmarkDrawer from '../ui/BookmarkDrawer';
import { useBookmark } from '../../hooks/useBookmark';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookmarkDrawerOpen, setIsBookmarkDrawerOpen] = useState(false);
  const { getBookmarkedStories, removeBookmark } = useBookmark();

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleBookmarkDrawer = () => {
    setIsBookmarkDrawerOpen(!isBookmarkDrawerOpen);
  };

  const handleStoryClick = (storyId: string) => {
    // Close the drawer
    setIsBookmarkDrawerOpen(false);
    
    // Scroll to the events section and highlight the story
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const bookmarkedStories = getBookmarkedStories();

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-custom ${
          isScrolled 
            ? 'bg-brown py-2 shadow-md' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <Clock className="h-8 w-8 text-copper mr-2" />
            <span className="font-playfair text-xl md:text-2xl font-bold text-white">
              Forgotten <span className="text-copper">History</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#events" className="text-white hover:text-copper transition-colors duration-300">
              Events
            </a>
            <a href="#about" className="text-white hover:text-copper transition-colors duration-300">
              About
            </a>
            <a href="#newsletter" className="text-white hover:text-copper transition-colors duration-300">
              Subscribe
            </a>
            <Button 
              variant="outline"
              size="sm"
              icon={<BookMarked size={16} />}
              onClick={toggleBookmarkDrawer}
            >
              Bookmarks {bookmarkedStories.length > 0 && `(${bookmarkedStories.length})`}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden absolute top-full left-0 w-full bg-brown-dark transform transition-transform duration-300 ease-custom ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a 
              href="#events" 
              className="text-white hover:text-copper py-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </a>
            <a 
              href="#about" 
              className="text-white hover:text-copper py-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#newsletter" 
              className="text-white hover:text-copper py-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Subscribe
            </a>
            <Button 
              variant="outline"
              size="sm"
              icon={<BookMarked size={16} />}
              className="self-start"
              onClick={() => {
                setIsMenuOpen(false);
                toggleBookmarkDrawer();
              }}
            >
              Bookmarks {bookmarkedStories.length > 0 && `(${bookmarkedStories.length})`}
            </Button>
          </div>
        </div>
      </header>

      {/* Bookmark Drawer */}
      <BookmarkDrawer
        isOpen={isBookmarkDrawerOpen}
        onClose={() => setIsBookmarkDrawerOpen(false)}
        bookmarkedStories={bookmarkedStories}
        onStoryClick={handleStoryClick}
        onRemoveBookmark={removeBookmark}
      />
    </>
  );
};

export default Header;