import { useState, useEffect, useRef } from 'react';

export const usePerformanceMonitor = () => {
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const fpsRef = useRef(60);

  useEffect(() => {
    // Only monitor on small screens
    if (typeof window === 'undefined' || window.innerWidth >= 768) return;

    const measureFPS = () => {
      const now = performance.now();
      frameCountRef.current++;

      if (now - lastTimeRef.current >= 1000) {
        fpsRef.current = (frameCountRef.current * 1000) / (now - lastTimeRef.current);
        frameCountRef.current = 0;
        lastTimeRef.current = now;

        if (fpsRef.current < 30 && !isLowPerformance) {
          setIsLowPerformance(true);
          setShowPopup(true);
          // Hide popup after 5 seconds
          setTimeout(() => setShowPopup(false), 5000);
        }
      }

      requestAnimationFrame(measureFPS);
    };

    requestAnimationFrame(measureFPS);

    return () => {
      // Cleanup if needed
    };
  }, [isLowPerformance]);

  return { isLowPerformance, showPopup, setShowPopup };
};