import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookMarked, X } from 'lucide-react';
import { HistoricalEvent } from '../../types';

const BookmarkDrawer: React.FC<{ bookmarkedEvents: HistoricalEvent[]; onClose: () => void }> = ({ bookmarkedEvents, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Bookmarked Stories</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-400 hover:text-black transition-colors"
            aria-label="Close drawer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bookmarkedEvents.map((event, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <h3 className="text-lg font-bold mb-2">{event.title}</h3>
              <p className="text-sm text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BookmarkDrawer;