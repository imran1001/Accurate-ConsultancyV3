import { useState, useEffect } from 'react';

/**
 * Returns true when the page has been scrolled past `threshold` pixels.
 * Used for sticky-nav transparency toggling.
 */
export function useScrollEffect(threshold = 50) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    handleScroll(); // check on mount

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
}
