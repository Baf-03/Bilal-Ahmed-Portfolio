"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react"; // For arrow icons

const features = [
  {
    title: "feature_minimal_design", // Key for the title
    description: "feature_minimal_design_description", // Key for the description
    icon: "✨",
  },
  {
    title: "feature_responsive",
    description: "feature_responsive_description",
    icon: "📱",
  },
  {
    title: "feature_fast_performance",
    description: "feature_fast_performance_description",
    icon: "⚡",
  },
  {
    title: "feature_accessibility",
    description: "feature_accessibility_description",
    icon: "🌈",
  },
  {
    title: "feature_seo_optimized",
    description: "feature_seo_optimized_description",
    icon: "🔍",
  },
];

const FeatureCarousel= ({ language }:any) => {
  const [width, setWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carousel = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const controls = useAnimation();

  // Calculate the width of the carousel for drag constraints
  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused) return;

    const autoScroll = setInterval(() => {
      const currentX = x.get();
      if (currentX <= -width) {
        controls.start({ x: 0, transition: { duration: 0.5 } });
      } else {
        controls.start({
          x: currentX - 300, // Move by the width of one card
          transition: { duration: 0.5 },
        });
      }
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(autoScroll);
  }, [isPaused, width, x, controls]);

  // Handle drag end to snap back within bounds
  const handleDragEnd = () => {
    const currentX = x.get();
    if (currentX > 0) {
      controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } });
    } else if (currentX < -width) {
      controls.start({ x: -width, transition: { type: "spring", stiffness: 300, damping: 30 } });
    }
  };

  // Handle arrow navigation
  const handleNext = () => {
    const currentX = x.get();
    if (currentX > -width) {
      controls.start({
        x: Math.max(currentX - 300, -width),
        transition: { type: "spring", stiffness: 300, damping: 30 },
      });
    }
  };

  const handlePrev = () => {
    const currentX = x.get();
    if (currentX < 0) {
      controls.start({
        x: Math.min(currentX + 300, 0),
        transition: { type: "spring", stiffness: 300, damping: 30 },
      });
    }
  };

  return (
    <div
      className="py-16 md:py-20  w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="w-full sm:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          {language["why_choose_me"]} {/* This will be fetched from the language JSON */}
        </h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2  p-1 sm:p-3 rounded-full shadow-lg   transition-colors z-10"
            aria-label="Previous Feature"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2  p-1 sm:p-3 rounded-full shadow-lg  transition-colors z-10"
            aria-label="Next Feature"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel */}
          <motion.div ref={carousel} className="cursor-grab overflow-hidden sm:max-w-7xl m-auto">
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              whileTap={{ cursor: "grabbing" }}
              animate={controls}
              style={{ x }}
              onDragEnd={handleDragEnd}
              className="flex gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="min-w-[280px] sm:min-w-[300px] h-[220px] p-6  rounded-2xl shadow-md flex flex-col justify-between transition-all duration-300 ease-in-out border-2 border-transparent hover:border-blue-500/20 hover:shadow-lg hover:-translate-y-1"
                  whileHover={{ scale: 1.02 }}
                >
                  <div>
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2  dark:text-gray-100">
                      {language[feature.title]} {/* Fetching title from language JSON */}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {language[feature.description]} {/* Fetching description from language JSON */}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCarousel;
