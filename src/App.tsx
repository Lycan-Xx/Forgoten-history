import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import EventsSection from './components/events/EventsSection';
import AboutSection from './components/home/AboutSection';
import NewsletterSection from './components/home/NewsletterSection';
import FloatingActionButton from './components/ui/FloatingActionButton';
import SocialShareToolbar from './components/ui/SocialShareToolbar';

function App() {
  // Preload critical images
  useEffect(() => {
    const preloadImages = [
      'https://images.pexels.com/photos/1292998/pexels-photo-1292998.jpeg',
      'https://images.pexels.com/photos/4195826/pexels-photo-4195826.jpeg',
      'https://images.pexels.com/photos/2152958/pexels-photo-2152958.jpeg',
      'https://images.pexels.com/photos/5282567/pexels-photo-5282567.jpeg'
    ];
    
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main>
        <Hero />
        <EventsSection />
        <AboutSection />
        <NewsletterSection />
      </main>
      
      <Footer />
      
      <FloatingActionButton />
      <SocialShareToolbar title="Forgotten History - Rediscover the Past" />
    </div>
  );
}

export default App;