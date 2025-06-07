import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import EventsSection from './components/events/EventsSection';
import AboutSection from './components/home/AboutSection';
import NewsletterSection from './components/home/NewsletterSection';
import FloatingActionButton from './components/ui/FloatingActionButton';
import SocialShareToolbar from './components/ui/SocialShareToolbar';
import BookmarkDrawer from './components/ui/BookmarkDrawer';
import { useBookmark } from './hooks/useBookmark';
import { BookmarkedStory } from './types';

function App() {
  const [isBookmarkDrawerOpen, setIsBookmarkDrawerOpen] = useState(false);
  const [bookmarkedStories, setBookmarkedStories] = useState<BookmarkedStory[]>([]);
  const { getBookmarkedStories, removeBookmark, bookmarks } = useBookmark();

  // Update bookmarked stories whenever bookmarks change
  useEffect(() => {
    setBookmarkedStories(getBookmarkedStories());
  }, [bookmarks, getBookmarkedStories]);

  // Preload critical images
  useEffect(() => {
    const preloadImages = [
      'https://images.pexels.com/photos/1292998/pexels-photo-1292998.jpeg',
      'https://images.pexels.com/photos/4195826/pexels-photo-4195826.jpeg',
      'https://images.pexels.com/photos/2152958/pexels-photo-2152958.jpeg',
      'https://images.pexels.com/photos/5282567/pexels-photo-5282567.jpeg',
      'https://images.pexels.com/photos/258045/pexels-photo-258045.jpeg'
    ];
    
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // App reload function with confirmation dialog
  const reloadApp = useCallback(() => {
    const confirmReload = window.confirm(
      'This will refresh the page to update the bookmark status. Any unsaved changes will be lost. Do you want to continue?'
    );
    
    if (confirmReload) {
      try {
        // Small delay to ensure any pending state updates are completed
        setTimeout(() => {
          window.location.reload();
        }, 100);
      } catch (error) {
        console.error('Failed to reload the application:', error);
        // Fallback: try alternative reload method
        window.location.href = window.location.href;
      }
    }
  }, []);

  const handleBookmarkClick = useCallback(() => {
    setIsBookmarkDrawerOpen(true);
  }, []);

  const handleStoryClick = useCallback(() => {
    setIsBookmarkDrawerOpen(false);
    
    // Scroll to the events section
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleRemoveBookmark = useCallback((id: string) => {
    removeBookmark(id);
  }, [removeBookmark]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main>
        <Hero />
        <EventsSection onBookmarkActionReload={reloadApp} />
        <AboutSection />
        <NewsletterSection />
      </main>
      
      <Footer />
      
      <FloatingActionButton 
        onBookmarkClick={handleBookmarkClick}
      />
      <SocialShareToolbar title="Forgotten History - Rediscover the Past" />
      
      <BookmarkDrawer
        isOpen={isBookmarkDrawerOpen}
        onClose={() => setIsBookmarkDrawerOpen(false)}
        bookmarkedStories={bookmarkedStories}
        onStoryClick={handleStoryClick}
        onRemoveBookmark={handleRemoveBookmark}
      />
    </div>
  );
}

export default App;