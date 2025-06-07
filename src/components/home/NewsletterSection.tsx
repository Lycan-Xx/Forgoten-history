import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '../ui/Button';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      return;
    }
    
    // Simulate subscription success
    // In a real app, you would make an API call to your backend here
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 500);
  };
  
  return (
    <section id="newsletter" className="section bg-brown-dark">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="bg-gradient-to-r from-copper-dark to-copper rounded-lg p-8 md:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-3">
                  Join Our Newsletter
                </h2>
                <p className="text-white/90">
                  Get notified about new historical discoveries and stories.
                </p>
              </div>
              
              <div className="w-full md:w-auto">
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input 
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setStatus('idle');
                      }}
                      placeholder="Your email address"
                      className="block w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                      required
                      aria-label="Email address"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="primary"
                    className="w-full bg-brown text-white hover:bg-brown-light"
                  >
                    Subscribe
                  </Button>
                  
                  {status === 'success' && (
                    <div className="flex items-center text-green-300 text-sm">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      <span>Thank you! You're now subscribed.</span>
                    </div>
                  )}
                  
                  {status === 'error' && (
                    <div className="flex items-center text-red-300 text-sm">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      <span>Please enter a valid email address.</span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;