import { useEffect } from 'react';
import { useInteractionTracking } from '@/hooks/useAnalytics';

interface AnalyticsWrapperProps {
  children: React.ReactNode;
  eventName: string;
  eventData?: any;
}

export const AnalyticsWrapper = ({ children, eventName, eventData }: AnalyticsWrapperProps) => {
  const { trackClick } = useInteractionTracking();

  const handleClick = () => {
    trackClick(eventName, eventData);
  };

  return (
    <div onClick={handleClick} className="analytics-wrapper">
      {children}
    </div>
  );
};

// Hook for tracking scroll events
export const useScrollTracking = () => {
  const { trackScroll } = useInteractionTracking();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      // Track scroll milestones
      if (scrollPercentage > 0 && scrollPercentage % 25 === 0) {
        trackScroll('page', scrollPercentage);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [trackScroll]);
};