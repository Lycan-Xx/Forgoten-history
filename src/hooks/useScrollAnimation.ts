import { useEffect, useState, useCallback } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px' } = options;
  const [elements, setElements] = useState<HTMLElement[]>([]);
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);

  const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    setEntries(entries);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      threshold,
      rootMargin,
    });

    elements.forEach(element => observer.observe(element));

    return () => {
      elements.forEach(element => observer.unobserve(element));
    };
  }, [elements, observerCallback, threshold, rootMargin]);

  const observe = useCallback((element: HTMLElement | null) => {
    if (element && !elements.includes(element)) {
      setElements(prev => [...prev, element]);
    }
  }, [elements]);

  const unobserve = useCallback((element: HTMLElement | null) => {
    if (element) {
      setElements(prev => prev.filter(el => el !== element));
    }
  }, []);

  return { observe, unobserve, entries };
}