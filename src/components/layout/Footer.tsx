import React from 'react';
import { Clock, Heart, Mail, Twitter, Facebook, Instagram, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brown-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Clock className="h-6 w-6 text-copper mr-2" />
              <span className="font-playfair text-xl font-bold">
                Forgotten <span className="text-copper">History</span>
              </span>
            </div>
            <p className="text-sm text-gray-300 max-w-xs">
              Rediscovering historical events that have been overlooked, forgotten, or misunderstood throughout human history.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#events" className="text-gray-300 hover:text-copper transition-colors duration-300">
                  Historical Events
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-copper transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#newsletter" className="text-gray-300 hover:text-copper transition-colors duration-300">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-copper transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-playfair text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-300 hover:text-copper transition-colors duration-300" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-copper transition-colors duration-300" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-copper transition-colors duration-300" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-copper transition-colors duration-300" aria-label="Github">
                <Github className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-gray-300">
              Contact us: <a href="mailto:info@forgottenhistory.com" className="text-copper hover:underline">info@forgottenhistory.com</a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Forgotten History. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-2 md:mt-0 flex items-center">
            Made with <Heart className="h-4 w-4 text-copper mx-1" /> for history enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;