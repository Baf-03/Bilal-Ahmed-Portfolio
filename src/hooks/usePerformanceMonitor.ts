import { useState, useEffect, useRef } from 'react';
import { usePerformance } from '@/contexts/PerformanceContext';

export const usePerformanceMonitor = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { setLowPerformance } = usePerformance();
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const fpsRef = useRef(60);
  const monitoringStartedRef = useRef(false);

  useEffect(() => {
    // Only monitor on small screens
    if (typeof window === 'undefined' || window.innerWidth >= 768) return;

    // Start monitoring after initial load (5 seconds delay)
    const startMonitoring = () => {
      if (monitoringStartedRef.current) return;
      monitoringStartedRef.current = true;

      const measureFPS = () => {
        const now = performance.now();
        frameCountRef.current++;

        if (now - lastTimeRef.current >= 1000) {
          fpsRef.current = (frameCountRef.current * 1000) / (now - lastTimeRef.current);
          frameCountRef.current = 0;
          lastTimeRef.current = now;

          if (fpsRef.current < 25) {
            setLowPerformance(true);
            setShowPopup(true);
            // Hide popup after 5 seconds
            setTimeout(() => setShowPopup(false), 5000);
          }
        }

        requestAnimationFrame(measureFPS);
      };

      requestAnimationFrame(measureFPS);
    };

    // Delay monitoring start
    setTimeout(startMonitoring, 5000);

    return () => {
      monitoringStartedRef.current = false;
    };
  }, [setLowPerformance]);

  return { showPopup, setShowPopup };
};