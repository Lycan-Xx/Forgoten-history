import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Eye, Clock, LightbulbIcon } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6 text-copper" />,
      title: 'Well-Researched',
      description: 'Every historical event is carefully researched and fact-checked from multiple credible sources.'
    },
    {
      icon: <Eye className="h-6 w-6 text-copper" />,
      title: 'Hidden Stories',
      description: 'We focus on events that are often overlooked or forgotten in mainstream historical narratives.'
    },
    {
      icon: <Clock className="h-6 w-6 text-copper" />,
      title: 'Timeless Knowledge',
      description: 'Our curated collection spans from ancient civilizations to the modern era across all continents.'
    },
    {
      icon: <LightbulbIcon className="h-6 w-6 text-copper" />,
      title: 'Perspective',
      description: 'Gain fresh insights into how these forgotten events shaped our world in unexpected ways.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section id="about" className="section bg-gradient-to-b from-black to-brown-dark">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About <span className="text-copper">Forgotten History</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our mission is to uncover and preserve the overlooked stories that have shaped human history, 
            bringing to light the events that time has obscured but still influence our world today.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-glass-dark backdrop-blur-sm rounded-lg p-6 text-center"
              variants={itemVariants}
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-brown-light/50">
                {feature.icon}
              </div>
              <h3 className="font-playfair text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;