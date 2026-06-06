import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 animate-slideInLeft"
          style={{
            background: 'linear-gradient(135deg, #c9a55a, #f0c040)',
            boxShadow: '0 8px 25px rgba(201,165,90,0.4)',
            border: 'none',
            cursor: 'pointer'
          }}
          aria-label="Scroll to top"
          title="Back to top"
        >
          <ChevronUp size={22} style={{ color: '#0a1628' }} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;