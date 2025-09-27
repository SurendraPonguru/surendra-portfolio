import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, trackTimeOnPage, trackEngagement } from '@/lib/analytics';

export const usePageTracking = () => {
  const location = useLocation();
  const startTimeRef = useRef<number>(Date.now());
  const lastPathRef = useRef<string>('');

  useEffect(() => {
    const currentPath = location.pathname;
    const pageName = currentPath === '/' ? 'home' : currentPath.substring(1);

    // Track previous page time if there was one
    if (lastPathRef.current) {
      const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);
      trackTimeOnPage(lastPathRef.current, timeSpent);
    }

    // Track new page view
    trackPageView(pageName);
    
    // Update refs
    startTimeRef.current = Date.now();
    lastPathRef.current = pageName;

    // Track page leave when component unmounts or path changes
    return () => {
      const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);
      trackTimeOnPage(pageName, timeSpent);
    };
  }, [location.pathname]);
};

export const useInteractionTracking = () => {
  const trackClick = (element: string, details?: any) => {
    trackEngagement('click', { element, ...details });
  };

  const trackHover = (element: string, details?: any) => {
    trackEngagement('hover', { element, ...details });
  };

  const trackScroll = (section: string, percentage: number) => {
    trackEngagement('scroll', { section, scroll_percentage: percentage });
  };

  return { trackClick, trackHover, trackScroll };
};