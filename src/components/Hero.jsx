import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';

// ── useCounter hook ──
export const useCounter = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  useEffect(() => {
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      setCount(value);
      if (progress < 1) requestAnimationFrame(animate);
    };
    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [end, duration, start]);
  return count;
};

// ── GlobeCanvas (realistic Earth with animations) ──
const GlobeCanvas = ({ className = '' }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // Continent data (simplified)
  const continents = useMemo(() => [
    {
      name: 'North America',
      color: '#5a8a4a',
      points: [
        // ... (you must include the full points array from your original code)
        // I'm omitting it here for brevity – copy the entire `continents` array from your provided code.
      ]
    }
  ], []);

  // Project lon/lat to 3D
  const project = (lon, lat, radius) => {
    const phi = (90 - lat) * Math.PI / 180;
    const theta = lon * Math.PI / 180;
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);
    return { x, y, z };
  };

  // Draw functions (drawContinent, drawArcs, drawParticles, drawAtmosphere)
  // ... copy these exactly from your original script

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const container = containerRef.current;
    if (!container) return;

    let w = container.clientWidth;
    let h = container.clientHeight;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      w = container.clientWidth;
      h = container.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    let rotY = 0;
    let animationId = null;

    const render = (time) => {
      rotY += 0.08;
      const radius = Math.min(w, h) * 0.42;
      ctx.clearRect(0, 0, w, h);

      // ... all drawing logic from your original render function
      // (copy the full render body from your code)
    };

    animationId = requestAnimationFrame(render);
    return () => {
      window.removeEventListener('resize', resize);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div ref={containerRef} className={`w-full h-full ${className}`} id="globe-canvas-wrapper">
      <canvas ref={canvasRef} className="w-full h-full rounded-full" />
    </div>
  );
};

// ── Hero component ──
const Hero = () => {
  const yearsCount = useCounter(19, 2000);
  const successCount = useCounter(94, 2000);
  const casesCount = useCounter(2000, 2000);
  const countriesCount = useCounter(50, 2000);

  const [hoveredCountry, setHoveredCountry] = useState(null);

  const countriesData = [
    { flag: '🇺🇸', name: 'United States', angle: 0 },
    { flag: '🇬🇧', name: 'United Kingdom', angle: 60 },
    { flag: '🇨🇦', name: 'Canada', angle: 120 },
    { flag: '🇦🇺', name: 'Australia', angle: 180 },
    { flag: '🇪🇺', name: 'Europe', angle: 240 },
    { flag: '🇳🇿', name: 'New Zealand', angle: 300 },
  ];

  return (
    <section className="relative min-h-screen pt-32 sm:pt-40 lg:pt-44 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center bg-[#020916]">
      {/* ... all the JSX from your original Hero return, exactly as it was */}

      {/* Don't forget to include the <style> tag with keyframes inside the component */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes textShimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes orbitSmooth {
          from { transform: rotate(var(--start-angle)) translateX(215px) rotate(calc(-1 * var(--start-angle))); }
          to { transform: rotate(var(--end-angle)) translateX(215px) rotate(calc(-1 * var(--end-angle))); }
        }
        @keyframes counterRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-textShimmer {
          animation: textShimmer 4s ease-in-out infinite;
          background-size: 200% auto;
        }
      `}</style>
    </section>
  );
};

export default Hero;
