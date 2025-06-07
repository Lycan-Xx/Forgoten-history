export interface HistoricalEvent {
  id: string;
  title: string;
  period: string;
  year: string;
  description: string;
  fullStory?: string;
  bulletPoints: string[];
  mainImageUrl: string;
  mainImageAlt: string;
  storyImages?: StoryImage[];
  sources: Source[];
  category: EventCategory;
}

export interface StoryImage {
  url: string;
  alt: string;
  caption: string;
}

export interface Source {
  text: string;
  url?: string;
}

export type EventCategory = 
  | 'science'
  | 'war'
  | 'culture'
  | 'politics'
  | 'technology'
  | 'arts';

export interface BookmarkState {
  bookmarked: string[];
}

export interface BookmarkedStory {
  id: string;
  title: string;
  excerpt: string;
  image: string;
}