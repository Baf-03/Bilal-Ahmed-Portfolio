"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, Smartphone, Zap, Palette, Search, Code, Shield, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedBackground from "../ui/AnimatedBackground";

const features = [
  {
    title: "Minimal Design",
    description: "Clean, modern interfaces that prioritize user experience and aesthetics.",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Responsive Design",
    description: "Mobile-first approach ensuring perfect display across all devices.",
    icon: Smartphone,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Fast Performance",
    description: "Optimized code and efficient architecture for lightning-fast load times.",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Accessibility",
    description: "Inclusive design practices making applications usable for everyone.",
    icon: Palette,
    color: "from-green-500 to-teal-500",
  },
  {
    title: "SEO Optimized",
    description: "Search engine friendly code structure for better visibility.",
    icon: Search,
    color: "from-red-500 to-rose-500",
  },
  {
    title: "Front End Development",
    description: "Expert in creating responsive and interactive user interfaces using React, Next.js, and modern CSS frameworks.",
    icon: Code,
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Backend Development",
    description: "Building robust server-side applications with Node.js, Express, Nest.js, and database management.",
    icon: Shield,
    color: "from-teal-500 to-blue-500",
  },
  {
    title: "DevOps",
    description: "Implementing CI/CD pipelines, cloud deployments on AWS, and ensuring scalable infrastructure.",
    icon: Clock,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "AI Chat Bots",
    description: "Developing intelligent conversational agents using modern AI technologies and integrations.",
    icon: Sparkles,
    color: "from-pink-500 to-rose-500",
  },
];

const duplicatedFeatures = [...features, features[0]];

const FeatureCarousel = React.memo(({ language }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % duplicatedFeatures.length);
    }, 5000); // Auto scroll every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = 320 + 24; // w-80 + gap-6
      carouselRef.current.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
  }, [currentIndex]);

  const pauseAutoScroll = () => {
    setIsPaused(true);
    setTimeout(() => {
      setIsPaused(false);
    }, 5000); // Resume after 5 seconds
  };

  const scrollLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + duplicatedFeatures.length) % duplicatedFeatures.length);
    pauseAutoScroll();
  };

  const scrollRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % duplicatedFeatures.length);
    pauseAutoScroll();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      scrollRight();
    }
    if (isRightSwipe) {
      scrollLeft();
    }
  };

  return (
    <section className="py-24 px-4 w-full relative overflow-hidden">
      <AnimatedBackground />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
              {language["stats_badge"] || "Why Work With Me"}
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              {language["why_choose_me"]}
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed">
            {language["what_sets_me_apart"] || "What sets me apart as your developer"}
          </p>
        </motion.div>

        {/* Features Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>

          <div className="overflow-hidden">
            <div
              ref={carouselRef}
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
            {duplicatedFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-80 snap-center bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-5 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default FeatureCarousel;

