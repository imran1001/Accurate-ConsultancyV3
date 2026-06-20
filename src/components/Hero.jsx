import React, { useEffect, useMemo, useState } from 'react';

const MARKETS = [
  { code: 'US', name: 'United States', angle: 0 },
  { code: 'UK', name: 'United Kingdom', angle: 60 },
  { code: 'CA', name: 'Canada', angle: 120 },
  { code: 'AU', name: 'Australia', angle: 180 },
  { code: 'EU', name: 'Europe', angle: 240 },
  { code: 'NZ', name: 'New Zealand', angle: 300 },
];

const STATS = [
  { end: 19, suffix: '+', label: 'Years Experience' },
  { end: 90, suffix: '%', label: 'Visa Success Rate' },
  { end: 2000, suffix: '+', label: 'Applications Approved' },
  { end: 50, suffix: '+', label: 'Countries Covered' },
];

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (!window.matchMedia) return undefined;

    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(query.matches);

    updatePreference();
    query.addEventListener('change', updatePreference);

    return () => query.removeEventListener('change', updatePreference);
  }, []);

  return prefersReducedMotion;
}

function useCounter(end, duration = 1600, start = 0) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [count, setCount] = useState(prefersReducedMotion ? end : start);

  useEffect(() => {
    if (prefersReducedMotion) {
      setCount(end);
      return undefined;
    }

    let frameId;
    let startTime;

    const animate = (currentTime) => {
      startTime ??= currentTime;

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(easedProgress * (end - start) + start));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [duration, end, prefersReducedMotion, start]);

  return count;
}

function ContinentsMap() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 960 600"
      className="h-full w-full opacity-70 transition-opacity duration-500 group-hover/globe:opacity-90"
    >
      <defs>
        <linearGradient id="hero-map-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.14" />
          <stop offset="50%" stopColor="#F3D976" stopOpacity="0.38" />
          <stop offset="100%" stopColor="#A87D16" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <rect fill="transparent" width="960" height="600" />
      <g
        fill="url(#hero-map-gradient)"
        stroke="#D4AF37"
        strokeDasharray="1 1"
        strokeOpacity="0.45"
        strokeWidth="1"
      >
        <path d="M120 140Q180 110 220 150T190 240Z" />
        <path d="M280 220Q340 190 380 260T290 340Z" />
        <path d="M400 120Q480 95 520 180T420 260Z" />
        <path d="M580 220Q690 195 720 310T630 360Z" />
        <path d="M720 380Q840 365 850 440T760 490Z" />
        <path d="M180 440Q240 410 270 480T190 520Z" />
      </g>
