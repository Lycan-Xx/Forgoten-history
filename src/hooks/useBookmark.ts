import { useState, useEffect } from 'react';
import { BookmarkState } from '../types';

export function useBookmark() {
  const [bookmarks, setBookmarks] = useState<BookmarkState>({ bookmarked: [] });

  // Load bookmarks from localStorage on initial render
  useEffect(() => {
    const savedBookmarks = localStorage.getItem('bookmarks');
    if (savedBookmarks) {
      try {
        setBookmarks(JSON.parse(savedBookmarks));
      } catch (error) {
        console.error('Failed to parse bookmarks:', error);
        // Reset if data is corrupted
        localStorage.setItem('bookmarks', JSON.stringify({ bookmarked: [] }));
      }
    } else {
      // Initialize if not exists
      localStorage.setItem('bookmarks', JSON.stringify({ bookmarked: [] }));
    }
  }, []);

  // Save bookmarks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (id: string) => {
    setBookmarks(prev => {
      const isBookmarked = prev.bookmarked.includes(id);
      
      if (isBookmarked) {
        return {
          ...prev,
          bookmarked: prev.bookmarked.filter(bookmarkId => bookmarkId !== id)
        };
      } else {
        return {
          ...prev,
          bookmarked: [...prev.bookmarked, id]
        };
      }
    });
  };

  const isBookmarked = (id: string): boolean => {
    return bookmarks.bookmarked.includes(id);
  };

  return {
    bookmarks,
    toggleBookmark,
    isBookmarked
  };
}