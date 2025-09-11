import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const useGoogleAnalytics = () => {
  const location = useLocation();
  const isFirstLoadRef = useRef(true);

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      // Avoid double-counting: initial page_view is sent by index.html snippet
      if (isFirstLoadRef.current) {
        isFirstLoadRef.current = false;
        return;
      }

      window.gtag('config', 'G-MPL1M94Y56', {
        page_path: location.pathname + location.search,
      });
      // console.debug('GA4 page_view sent via config:', location.pathname + location.search);
    }
  }, [location]);
};

// Helper function to track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};