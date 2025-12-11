"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Quote, Star, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import coverAvatar from "../../../public/profile.png"

interface Testimonial {
  id: number
  nameKey: string
  roleKey: string
  contentKey: string
  avatar: any
  accentColor: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    nameKey: "testimonial_1_name",
    roleKey: "testimonial_1_role",
    contentKey: "testimonial_1_content",
    avatar: coverAvatar,
    accentColor: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    nameKey: "testimonial_2_name",
    roleKey: "testimonial_2_role",
    contentKey: "testimonial_2_content",
    avatar: coverAvatar,
    accentColor: "from-purple-500 to-pink-400",
  },
  {
    id: 3,
    nameKey: "testimonial_3_name",
    roleKey: "testimonial_3_role",
    contentKey: "testimonial_3_content",
    avatar: coverAvatar,
    accentColor: "from-orange-500 to-yellow-400",
  },
  {
    id: 4,
    nameKey: "testimonial_4_name",
    roleKey: "testimonial_4_role",
    contentKey: "testimonial_4_content",
    avatar: coverAvatar,
    accentColor: "from-teal-500 to-emerald-400",
  },
]

export default function TestimonialSlider({ language }: { language: any }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const cardWidth = 416 // Card width + gap

  // Scroll to specific index
  const scrollToIndex = useCallback((index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth"
      })
      setActiveIndex(index)
    }
  }, [cardWidth])

  // Navigate left/right
  const navigate = (direction: "left" | "right") => {
    let newIndex = activeIndex
    if (direction === "right") {
      newIndex = activeIndex < testimonials.length - 1 ? activeIndex + 1 : 0
    } else {
      newIndex = activeIndex > 0 ? activeIndex - 1 : testimonials.length - 1
    }
    scrollToIndex(newIndex)
  }

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      const nextIndex = activeIndex < testimonials.length - 1 ? activeIndex + 1 : 0
      scrollToIndex(nextIndex)
    }, 5000) // Auto-scroll every 5 seconds

    return () => clearInterval(interval)
  }, [activeIndex, isPaused, scrollToIndex])

  // Detect scroll position to update active index
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft
        const newIndex = Math.round(scrollLeft / cardWidth)
        if (newIndex !== activeIndex && newIndex >= 0 && newIndex < testimonials.length) {
          setActiveIndex(newIndex)
        }
      }
    }

    const scrollContainer = scrollRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll)
      return () => scrollContainer.removeEventListener("scroll", handleScroll)
    }
  }, [activeIndex, cardWidth])

  return (
    <section
      className="w-full py-24 px-4 relative overflow-hidden"
      id="testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Animated Background Elements - Removed in favor of global background */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {language["testimonials_badge"] || "Trusted by Amazing Clients"}
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-teal-400">
              {language["client_stories"] || "Client Stories"}
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed">
            {language["client_stories_subtitle"] || "What my clients say about working with me"}
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative px-16">
          {/* Left Arrow - Fixed Position */}
          <button
            onClick={() => navigate("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full shadow-lg shadow-blue-500/25 flex items-center justify-center hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label={language["scroll_left"] || "Scroll left"}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Right Arrow - Fixed Position */}
          <button
            onClick={() => navigate("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full shadow-lg shadow-blue-500/25 flex items-center justify-center hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label={language["scroll_right"] || "Scroll right"}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-8 pt-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="flex-shrink-0 w-[340px] md:w-[400px] snap-start"
              >
                {/* Card with Glassmorphism */}
                <div className="relative group h-full">
                  {/* Gradient Border Effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${testimonial.accentColor} rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500`} />

                  <div className="relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl p-8 h-full border border-gray-200/50 dark:border-gray-700/50 shadow-2xl shadow-gray-200/40 dark:shadow-black/20">
                    {/* Decorative Corner Gradient */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${testimonial.accentColor} opacity-10 rounded-tr-3xl rounded-bl-full`} />

                    {/* Header with Quote Icon */}
                    <div className="flex items-start justify-between mb-6 relative">
                      <motion.div
                        className={`w-14 h-14 bg-gradient-to-br ${testimonial.accentColor} rounded-2xl flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Quote className="w-7 h-7 text-white" fill="white" />
                      </motion.div>

                      {/* Star Rating */}
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400 drop-shadow-sm" />
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-base line-clamp-4 font-medium">
                      &quot;{language[testimonial.contentKey] || testimonial.contentKey}&quot;
                    </p>

                    {/* Author Section */}
                    <div className="flex items-center gap-4 pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
                      {/* Avatar with Ring */}
                      <div className="relative">
                        <div className={`absolute -inset-1 bg-gradient-to-r ${testimonial.accentColor} rounded-full opacity-75 blur-sm`} />
                        <Image
                          src={testimonial.avatar}
                          alt={language[testimonial.nameKey] || testimonial.nameKey}
                          width={56}
                          height={56}
                          className="relative rounded-full border-2 border-white dark:border-gray-800 object-cover"
                        />
                        {/* Online Indicator */}
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                          {language[testimonial.nameKey] || testimonial.nameKey}
                        </h4>
                        <p className={`text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r ${testimonial.accentColor}`}>
                          {language[testimonial.roleKey] || testimonial.roleKey}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Indicators / Dots */}
        <div className="flex justify-center items-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`transition-all duration-300 rounded-full ${activeIndex === index
                ? "w-10 h-3 bg-gradient-to-r from-blue-500 to-teal-400"
                : "w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-blue-300 dark:hover:bg-blue-700"
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-scroll indicator */}
        <p className="text-center text-sm text-gray-400 dark:text-gray-500 mt-4">
          {isPaused ? "⏸️ Paused" : "▶️ Auto-playing"} • Hover to pause
        </p>
      </div>
    </section>
  )
}
