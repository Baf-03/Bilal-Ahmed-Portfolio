"use client";

import React, { useState, useEffect } from "react";

const AnimatedRocket: React.FC = React.memo(() => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Rocket body */}
        <path
          d="M50 10 L60 40 L50 35 L40 40 Z"
          fill="#e5e7eb"
          stroke="#374151"
          strokeWidth="1"
        />
        {/* Rocket nose */}
        <polygon points="50,10 55,20 45,20" fill="#f3f4f6" />
        {/* Rocket fins */}
        <polygon points="40,40 35,50 45,45" fill="#d1d5db" />
        <polygon points="60,40 65,50 55,45" fill="#d1d5db" />
        {/* Rocket window */}
        <circle cx="50" cy="25" r="3" fill="#3b82f6" />

        {/* Animated Fire */}
        {isLargeScreen ? (
          <g className="fire-group">
            {/* Main flame */}
            <path
              d="M45 50 Q50 45 55 50 Q52 60 50 70 Q48 60 45 50"
              fill="url(#fireGradient)"
              className="flame-main"
            />
            {/* Side flames */}
            <path
              d="M42 55 Q45 50 48 55 Q46 65 45 75"
              fill="url(#fireGradient)"
              className="flame-side1"
            />
            <path
              d="M52 55 Q55 50 58 55 Q56 65 55 75"
              fill="url(#fireGradient)"
              className="flame-side2"
            />
            {/* Small sparks */}
            <circle cx="47" cy="52" r="1" fill="#fbbf24" className="spark1" />
            <circle cx="53" cy="52" r="1" fill="#f59e0b" className="spark2" />
            <circle cx="50" cy="58" r="0.5" fill="#dc2626" className="spark3" />
          </g>
        ) : null}

        {/* Gradient for fire */}
        <defs>
          <linearGradient id="fireGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
        </defs>
      </svg>

      {/* CSS Animations */}
      {isLargeScreen && (
        <style jsx>{`
          .fire-group {
            animation: fireFlicker 0.8s ease-in-out infinite alternate;
            will-change: transform;
          }
          .flame-main {
            animation: flameWave 1.2s ease-in-out infinite;
            will-change: transform;
          }
          .flame-side1 {
            animation: flameWave 1s ease-in-out infinite reverse;
            will-change: transform;
          }
          .flame-side2 {
            animation: flameWave 1.4s ease-in-out infinite;
            will-change: transform;
          }
          .spark1 {
            animation: sparkFloat 0.6s ease-in-out infinite;
            will-change: transform, opacity;
          }
          .spark2 {
            animation: sparkFloat 0.8s ease-in-out infinite reverse;
            will-change: transform, opacity;
          }
          .spark3 {
            animation: sparkFloat 1s ease-in-out infinite;
            will-change: transform, opacity;
          }

          @keyframes fireFlicker {
            0% { opacity: 0.7; transform: scaleY(1); }
            50% { opacity: 1; transform: scaleY(1.1); }
            100% { opacity: 0.8; transform: scaleY(0.9); }
          }

          @keyframes flameWave {
            0% { transform: scaleY(1) scaleX(1); }
            25% { transform: scaleY(1.2) scaleX(0.9); }
            50% { transform: scaleY(0.8) scaleX(1.1); }
            75% { transform: scaleY(1.1) scaleX(0.95); }
            100% { transform: scaleY(1) scaleX(1); }
          }

          @keyframes sparkFloat {
            0% { transform: translateY(0) scale(1); opacity: 1; }
            50% { transform: translateY(-5px) scale(1.2); opacity: 0.8; }
            100% { transform: translateY(-10px) scale(0.8); opacity: 0; }
          }
        `}</style>
      )}
    </div>
  );
});

export default AnimatedRocket;