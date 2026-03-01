"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Handshake, Lightbulb, BarChart, Star, Target, Code, Shield, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { usePerformance } from "@/contexts/PerformanceContext";

const featuresData = [
  {
    titleKey: "feature_ontime_delivery",
    descriptionKey: "feature_ontime_delivery_description",
    icon: Clock,
    color: "from-blue-500 to-indigo-500",
  },
  {
    titleKey: "feature_reliable_secure",
    descriptionKey: "feature_reliable_secure_description",
    icon: Shield,
    color: "from-emerald-500 to-teal-500",
  },
  {
    titleKey: "feature_support",
    descriptionKey: "feature_support_description",
    icon: Handshake,
    color: "from-orange-500 to-amber-500",
  },
  {
    titleKey: "feature_results_driven",
    descriptionKey: "feature_results_driven_description",
    icon: Target,
    color: "from-rose-500 to-pink-500",
  },
  {
    titleKey: "feature_innovative",
    descriptionKey: "feature_innovative_description",
    icon: Lightbulb,
    color: "from-purple-500 to-violet-500",
  },
  {
    titleKey: "feature_data_strategy",
    descriptionKey: "feature_data_strategy_description",
    icon: BarChart,
    color: "from-cyan-500 to-blue-500",
  },
  {
    titleKey: "feature_client_satisfaction",
    descriptionKey: "feature_client_satisfaction_description",
    icon: Star,
    color: "from-yellow-400 to-orange-400",
  },
  {
    titleKey: "feature_tailored_solutions",
    descriptionKey: "feature_tailored_solutions_description",
    icon: Code,
    color: "from-indigo-500 to-purple-500",
  },
];

const FeatureCard = React.memo(({ feature }: { feature: any }) => {
  const Icon = feature.icon;
  return (
    <div className="relative group h-full">
      {/* Gradient Border Effect on hover */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500`} />

      <div className="relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 h-full border border-gray-200/50 dark:border-gray-700/50 shadow-xl shadow-gray-200/40 dark:shadow-black/20">
        {/* Decorative Corner Gradient */}
        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${feature.color} opacity-10 rounded-tr-3xl rounded-bl-full`} />

        {/* Icon */}
        <div className={`relative w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
          <Icon className="w-7 h-7 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900 dark:text-white">
          {feature.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
          {feature.description}
        </p>
      </div>
    </div>
  );
});

FeatureCard.displayName = "FeatureCard";

const FeatureCarousel = React.memo(({ language }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(320);
  const [isRTL, setIsRTL] = useState(false);

  // Check RTL once on mount
  useEffect(() => {
    setIsRTL(document.documentElement.dir === 'rtl');
  }, []);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number>(0);
  const { isLowPerformance } = usePerformance();

  // Memoize features list with translated content
  const features = useMemo(() => {
    const baseFeatures = isLowPerformance ? featuresData.slice(0, 5) : featuresData;
    return baseFeatures.map(feature => ({
      ...feature,
      title: language[feature.titleKey] || feature.titleKey,
      description: language[feature.descriptionKey] || feature.descriptionKey,
    }));
  }, [isLowPerformance, language]);

  const totalItems = features.length;
  const gap = 32; // gap-8 = 32px

  // Update card width based on screen size
  useEffect(() => {
    const updateCardWidth = () => {
      if (window.innerWidth < 640) {
        // Mobile: full width minus padding
        setCardWidth(window.innerWidth - 80);
      } else if (window.innerWidth < 768) {
        // Small tablet
        setCardWidth(320);
      } else {
        // Desktop
        setCardWidth(380);
      }
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);

  const itemWidth = cardWidth + gap;

  // Clear auto-scroll timer
  const clearAutoScroll = useCallback(() => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  }, []);

  // Start auto-scroll
  const startAutoScroll = useCallback(() => {
    if (isLowPerformance) return; // Disable auto-scroll on low-spec devices

    clearAutoScroll();
    autoScrollRef.current = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex(prev => (prev + 1) % totalItems);
      }
    }, 4000);
  }, [clearAutoScroll, isPaused, totalItems, isLowPerformance]);

  // Handle navigation
  const goToNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % totalItems);
    startAutoScroll();
  }, [totalItems, startAutoScroll]);

  const goToPrev = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + totalItems) % totalItems);
    startAutoScroll();
  }, [totalItems, startAutoScroll]);

  // Touch handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (isRTL) {
        if (diff < 0) {
          goToNext();
        } else {
          goToPrev();
        }
      } else {
        if (diff > 0) {
          goToNext();
        } else {
          goToPrev();
        }
      }
    }
    setIsPaused(false);
  }, [goToNext, goToPrev, isRTL]);

  // Initialize auto-scroll
  useEffect(() => {
    startAutoScroll();
    return () => clearAutoScroll();
  }, [startAutoScroll, clearAutoScroll]);

  // Handle mouse enter/leave for pause
  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  // Calculate transform
  const transformStyle = useMemo(() => {
    const translateValue = isRTL
      ? currentIndex * itemWidth
      : -(currentIndex * itemWidth);

    return {
      transform: `translateX(${translateValue}px)`,
      transition: 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)',
      willChange: 'transform',
    };
  }, [currentIndex, itemWidth, isRTL]);

  return (
    <section className="py-12 md:py-24 px-2 md:px-4 w-full relative overflow-hidden" id="why-choose-me">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-8 md:mb-16 px-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-4 md:mb-6">
            <div className={`w-2 h-2 rounded-full bg-purple-500 ${!isLowPerformance && "animate-pulse"}`} />
            <span className="text-xs md:text-sm font-medium text-purple-600 dark:text-purple-400">
              {language["stats_badge"] || "Why Work With Me"}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              {language["why_choose_me"]}
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed">
            {language["what_sets_me_apart"] || "What sets me apart as your developer"}
          </p>
        </div>

        {/* Features Carousel */}
        <div
          className="relative  md:px-16"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Arrows - Styled like Client Stories */}
          <button
            onClick={isRTL ? goToNext : goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full shadow-lg shadow-blue-500/25 flex items-center justify-center hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label={isRTL ? "Next" : "Previous"}
          >
            {isRTL ? <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" /> : <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />}
          </button>

          <button
            onClick={isRTL ? goToPrev : goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full shadow-lg shadow-blue-500/25 flex items-center justify-center hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label={isRTL ? "Previous" : "Next"}
          >
            {isRTL ? <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" /> : <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />}
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden mx-6 md:mx-10">
            <div
              className="flex gap-8 py-4"
              style={transformStyle}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {features.map((feature, index) => (
                <div
                  key={`feature-${index}`}
                  className="flex-shrink-0"
                  style={{ width: cardWidth }}
                >
                  <FeatureCard feature={feature} />
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators - Styled like Client Stories */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {features.map((_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => {
                  setCurrentIndex(index);
                  startAutoScroll();
                }}
                className={`transition-all duration-300 rounded-full ${index === currentIndex
                  ? 'w-10 h-3 bg-gradient-to-r from-blue-500 to-teal-400'
                  : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-blue-300 dark:hover:bg-blue-700'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

FeatureCarousel.displayName = "FeatureCarousel";

export default FeatureCarousel;
