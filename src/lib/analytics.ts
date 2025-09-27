import posthog from 'posthog-js';

// Initialize PostHog
export const initAnalytics = () => {
  if (typeof window !== 'undefined') {
    posthog.init('phc_YOUR_PROJECT_KEY_HERE', {
      api_host: 'https://app.posthog.com',
      // Enable session recordings and heatmaps
      capture_pageview: true,
      capture_pageleave: true,
      session_recording: {
        maskAllInputs: false,
      },
      // Track user activity
      autocapture: true,
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') posthog.debug();
      }
    });
  }
};

// Track page views
export const trackPageView = (pageName: string) => {
  posthog.capture('page_view', {
    page: pageName,
    timestamp: new Date().toISOString(),
  });
};

// Track user engagement
export const trackEngagement = (action: string, details?: any) => {
  posthog.capture('user_engagement', {
    action,
    ...details,
    timestamp: new Date().toISOString(),
  });
};

// Track time spent on page
export const trackTimeOnPage = (pageName: string, timeSpent: number) => {
  posthog.capture('time_on_page', {
    page: pageName,
    time_spent_seconds: timeSpent,
    timestamp: new Date().toISOString(),
  });
};

// Track button clicks and interactions
export const trackInteraction = (element: string, action: string, details?: any) => {
  posthog.capture('user_interaction', {
    element,
    action,
    ...details,
    timestamp: new Date().toISOString(),
  });
};

// Identify user (when they provide contact info)
export const identifyUser = (userId: string, properties?: any) => {
  posthog.identify(userId, properties);
};

export default posthog;