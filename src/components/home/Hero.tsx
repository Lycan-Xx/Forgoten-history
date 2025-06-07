import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToEvents = () => {
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: `url('https://images.pexels.com/photos/1292998/pexels-photo-1292998.jpeg')`,
          filter: 'brightness(0.4)'
        }}
        ref={parallaxRef}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-hero-pattern"></div>
      
      {/* Content */}
      <div className="container-custom relative z-20 text-center">
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in text-shadow">
          Forgotten <span className="text-copper">History</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8 animate-slide-up text-shadow stagger-delay-1">
          Rediscover the lost stories that shaped our world but vanished from memory
        </p>
        
        <Button 
          onClick={scrollToEvents}
          variant="primary" 
          size="lg" 
          className="animate-slide-up stagger-delay-2"
        >
          Explore Events
        </Button>
        
        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={scrollToEvents}
          aria-hidden="true"
        >
          <ArrowDown className="h-8 w-8 text-copper" />
        </div>
      </div>
    </section>
  );
};

export default Hero;