import { useState, useEffect, useCallback } from 'react';
import { BookmarkState, BookmarkedStory } from '../types';
import { getStories } from '../services/storyService';

export function useBookmark() {
  const [bookmarks, setBookmarks] = useState<BookmarkState>(() => {
    const savedBookmarks = localStorage.getItem('bookmarks');
    if (savedBookmarks) {
      try {
        return JSON.parse(savedBookmarks);
      } catch (error) {
        console.error('Failed to parse bookmarks:', error);
        return { bookmarked: [] };
      }
    }
    return { bookmarked: [] };
  });

  // Save bookmarks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = useCallback((id: string) => {
    setBookmarks(prev => {
      const isBookmarked = prev.bookmarked.includes(id);
      const updatedBookmarks = isBookmarked
        ? prev.bookmarked.filter(bookmarkId => bookmarkId !== id)
        : [...prev.bookmarked, id];

      return {
        ...prev,
        bookmarked: updatedBookmarks
      };
    });
  }, []);

  const isBookmarked = useCallback((id: string): boolean => {
    return bookmarks.bookmarked.includes(id);
  }, [bookmarks.bookmarked]);

  const getBookmarkedStories = useCallback((): BookmarkedStory[] => {
    const allStories = getStories(); // Get stories from the service instead of direct import
    
    return bookmarks.bookmarked
      .map(id => {
        const event = allStories.find(e => e.id === id);
        if (!event) return null;
        
        return {
          id: event.id,
          title: event.title,
          excerpt: event.description.substring(0, 120) + '...',
          image: event.mainImageUrl
        };
      })
      .filter((story): story is BookmarkedStory => story !== null);
  }, [bookmarks.bookmarked]);

  const removeBookmark = useCallback((id: string) => {
    setBookmarks(prev => ({
      ...prev,
      bookmarked: prev.bookmarked.filter(bookmarkId => bookmarkId !== id)
    }));
  }, []);

  return {
    bookmarks,
    toggleBookmark,
    isBookmarked,
    getBookmarkedStories,
    removeBookmark
  };
}