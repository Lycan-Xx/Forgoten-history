# Forgotten History

A modern, interactive web application built with React and TypeScript that showcases forgotten historical events. The project aims to bring lesser-known historical events to light through an engaging and accessible interface.

## Key Objectives

- Present historical events in an engaging, modern interface
- Provide an interactive timeline of forgotten historical events
- Allow users to bookmark and save their favorite historical stories
- Implement smooth animations and transitions for better user experience
- Ensure accessibility and responsive design across all devices

## Technical Implementation

### Core Technologies

- **React** with **TypeScript** for robust frontend development
- **Vite** as the build tool for fast development and optimized production builds
- **Tailwind CSS** for responsive and customizable styling
- **Local Storage** for client-side data persistence (bookmarks and stories)

### Key Features

- **Responsive Layout**: Implements a modern, mobile-first design approach
- **Custom Hooks**: 
  - `useBookmark`: Manages user's bookmarked stories
  - `useScrollAnimation`: Handles scroll-based animations
- **Component Structure**:
  - Event components for displaying historical events
  - Layout components for consistent UI structure
  - UI components for interactive elements
- **Data Management**: 
  - Local storage integration for persistent data
  - Modular service layer for data operations

### Performance Optimizations

- Lazy loading images for better performance
- Optimized animations using CSS transitions
- Efficient state management using React hooks
- Glass morphism effects for modern UI elements

### Styling

- Custom color palette with copper and brown themes
- Smooth transitions and animations
- Responsive typography using Playfair Display and Source Sans 3
- Glass effect components for modern UI elements

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── events/         # Event-related components
│   ├── home/          # Homepage components
│   ├── layout/        # Layout components
│   └── ui/            # Generic UI components
├── data/              # Static data and constants
├── hooks/             # Custom React hooks
├── services/          # Business logic and data services
└── types/             # TypeScript type definitions
```

## Deployment

The project is configured for deployment on GitHub Pages with the base URL set to '/Forgoten-history/'.

## Future Enhancements

- Integration with a backend API for dynamic content
- User authentication and profiles
- Social sharing capabilities
- Interactive timeline visualization
- Community contributions and story submissions
