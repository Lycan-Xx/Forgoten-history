import { HistoricalEvent } from '../types';
import { historicalEvents as initialEvents } from '../data/events';

const STORAGE_KEY = 'forgotten-history-stories';

// Initialize stories in localStorage if not present
const initializeStories = (): HistoricalEvent[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (error) {
      console.error('Failed to parse stored stories:', error);
      // Fall back to initial events if parsing fails
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialEvents));
      return initialEvents;
    }
  }
  
  // First time - store initial events
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialEvents));
  return initialEvents;
};

// Get all stories
export const getStories = (): HistoricalEvent[] => {
  return initializeStories();
};

// Get a single story by ID
export const getStoryById = (id: string): HistoricalEvent | null => {
  const stories = getStories();
  return stories.find(story => story.id === id) || null;
};

// Update a story
export const updateStory = (id: string, updates: Partial<HistoricalEvent>): HistoricalEvent | null => {
  const stories = getStories();
  const storyIndex = stories.findIndex(story => story.id === id);
  
  if (storyIndex === -1) {
    console.error(`Story with id ${id} not found`);
    return null;
  }
  
  // Update the story
  stories[storyIndex] = { ...stories[storyIndex], ...updates };
  
  // Save back to localStorage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stories));
  
  return stories[storyIndex];
};

// Add a new story
export const addStory = (story: HistoricalEvent): HistoricalEvent => {
  const stories = getStories();
  
  // Check if story with same ID already exists
  if (stories.find(s => s.id === story.id)) {
    throw new Error(`Story with id ${story.id} already exists`);
  }
  
  stories.push(story);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stories));
  
  return story;
};

// Delete a story
export const deleteStory = (id: string): boolean => {
  const stories = getStories();
  const filteredStories = stories.filter(story => story.id !== id);
  
  if (filteredStories.length === stories.length) {
    console.error(`Story with id ${id} not found`);
    return false;
  }
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredStories));
  return true;
};

// Reset stories to initial state
export const resetStories = (): HistoricalEvent[] => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialEvents));
  return initialEvents;
};

// Get stories by category
export const getStoriesByCategory = (category: string): HistoricalEvent[] => {
  const stories = getStories();
  if (category === 'all') {
    return stories;
  }
  return stories.filter(story => story.category === category);
};

// Search stories
export const searchStories = (query: string): HistoricalEvent[] => {
  const stories = getStories();
  const lowercaseQuery = query.toLowerCase();
  
  return stories.filter(story => 
    story.title.toLowerCase().includes(lowercaseQuery) ||
    story.description.toLowerCase().includes(lowercaseQuery) ||
    story.period.toLowerCase().includes(lowercaseQuery) ||
    story.year.toLowerCase().includes(lowercaseQuery)
  );
};