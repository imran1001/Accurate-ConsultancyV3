import { useState, useEffect, useRef } from 'react';

/**
 * Returns [ref, isVisible].
 * Attach `ref` to any DOM element; `isVisible` flips to true once it
 * enters the viewport (fires once — useful for enter animations).
 */
export function useIntersectionObserver(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // fire once
      }
    }, { threshold: 0.15, ...options });

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [options]);

  return [ref, isVisible];
}
