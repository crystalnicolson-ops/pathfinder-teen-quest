import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, key } = useLocation();

  useEffect(() => {
    // Scroll to top immediately
    window.scrollTo(0, 0);
    
    // Also scroll after a short delay to handle any dynamic content loading
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname, key]);

  return null;
}