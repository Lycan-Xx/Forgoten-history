export interface HistoricalEvent {
  id: string;
  title: string;
  period: string;
  year: string;
  description: string;
  bulletPoints: string[];
  imageUrl: string;
  imageAlt: string;
  sources: Source[];
  category: EventCategory;
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