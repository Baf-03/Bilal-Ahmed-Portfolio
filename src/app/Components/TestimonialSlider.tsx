"use client"

import { useRef, useState, useEffect, useCallback, useMemo } from "react"
import Image from "next/image"
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

// Testimonial Card Component
const TestimonialCard = ({ testimonial, language }: { testimonial: Testimonial; language: any }) => (
  <div className="relative group h-full">
    {/* Gradient Border Effect */}
    <div className={`absolute -inset-0.5 bg-gradient-to-r ${testimonial.accentColor} rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500`} />

    <div className="relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 h-full border border-gray-200/50 dark:border-gray-700/50 shadow-2xl shadow-gray-200/40 dark:shadow-black/20">
      {/* Decorative Corner Gradient */}
      <div className={`absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br ${testimonial.accentColor} opacity-10 rounded-tr-3xl rounded-bl-full`} />

      {/* Header with Quote Icon */}
      <div className="flex items-start justify-between mb-4 md:mb-6 relative">
        <div
          className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${testimonial.accentColor} rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300`}
        >
          <Quote className="w-6 h-6 md:w-7 md:h-7 text-white" fill="white" />
        </div>

        {/* Star Rating */}
        <div className="flex gap-0.5 md:gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-yellow-400 drop-shadow-sm" />
          ))}
        </div>
      </div>

      {/* Content */}
      <p className="text-gray-700 dark:text-gray-300 mb-6 md:mb-8 leading-relaxed text-sm md:text-base font-medium">
        &quot;{language[testimonial.contentKey] || testimonial.contentKey}&quot;
      </p>

      {/* Author Section */}
      <div className="flex items-center gap-3 md:gap-4 pt-4 md:pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
        {/* Avatar with Ring */}
        <div className="relative">
          <div className={`absolute -inset-1 bg-gradient-to-r ${testimonial.accentColor} rounded-full opacity-75 blur-sm`} />
          <Image
            src={testimonial.avatar}
            alt={language[testimonial.nameKey] || testimonial.nameKey}
            width={48}
            height={48}
            className="relative rounded-full border-2 border-white dark:border-gray-800 object-cover w-12 h-12 md:w-14 md:h-14"
          />
          {/* Online Indicator */}
          <div className="absolute -bottom-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 flex items-center justify-center">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full" />
          </div>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 dark:text-white text-base md:text-lg">
            {language[testimonial.nameKey] || testimonial.nameKey}
          </h4>
          <p className={`text-xs md:text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r ${testimonial.accentColor}`}>
            {language[testimonial.roleKey] || testimonial.roleKey}
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default function TestimonialSlider({ language }: { language: any }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [cardWidth, setCardWidth] = useState(400)
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null)
  const touchStartX = useRef<number>(0)

  const totalItems = testimonials.length
  const gap = 32 // gap-8

  // Update card width based on screen size
  useEffect(() => {
    const updateCardWidth = () => {
      if (window.innerWidth < 640) {
        // Mobile: full width minus padding
        setCardWidth(window.innerWidth - 80)
      } else if (window.innerWidth < 768) {
        // Small tablet
        setCardWidth(340)
      } else {
        // Desktop
        setCardWidth(400)
      }
    }

    updateCardWidth()
    window.addEventListener('resize', updateCardWidth)
    return () => window.removeEventListener('resize', updateCardWidth)
  }, [])

  const itemWidth = cardWidth + gap

  // Clear auto-scroll
  const clearAutoScroll = useCallback(() => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current)
      autoScrollRef.current = null
    }
  }, [])

  // Start auto-scroll
  const startAutoScroll = useCallback(() => {
    clearAutoScroll()
    autoScrollRef.current = setInterval(() => {
      if (!isPaused) {
        setActiveIndex(prev => (prev + 1) % totalItems)
      }
    }, 5000)
  }, [clearAutoScroll, isPaused, totalItems])

  // Navigate
  const navigate = useCallback((direction: "left" | "right") => {
    if (direction === "right") {
      setActiveIndex(prev => (prev + 1) % totalItems)
    } else {
      setActiveIndex(prev => (prev - 1 + totalItems) % totalItems)
    }
    startAutoScroll()
  }, [totalItems, startAutoScroll])

  // Touch handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    setIsPaused(true)
  }, [])

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX

    if (Math.abs(diff) > 50) {
      navigate(diff > 0 ? "right" : "left")
    }
    setIsPaused(false)
  }, [navigate])

  // Initialize auto-scroll
  useEffect(() => {
    startAutoScroll()
    return () => clearAutoScroll()
  }, [startAutoScroll, clearAutoScroll])

  // Transform style
  const transformStyle = useMemo(() => ({
    transform: `translateX(-${activeIndex * itemWidth}px)`,
    transition: 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)',
    willChange: 'transform',
  }), [activeIndex, itemWidth])

  return (
    <section
      className="w-full py-12 md:py-24 px-2 md:px-4 relative overflow-hidden"
      id="testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16 px-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-4 md:mb-6">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-xs md:text-sm font-medium text-blue-600 dark:text-blue-400">
              {language["testimonials_badge"] || "Trusted by Amazing Clients"}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-teal-400">
              {language["client_stories"] || "Client Stories"}
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed">
            {language["client_stories_subtitle"] || "What my clients say about working with me"}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative md:px-16">
          {/* Left Arrow */}
          <button
            onClick={() => navigate("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full shadow-lg shadow-blue-500/25 flex items-center justify-center hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label={language["scroll_left"] || "Scroll left"}
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => navigate("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full shadow-lg shadow-blue-500/25 flex items-center justify-center hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label={language["scroll_right"] || "Scroll right"}
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden mx-6 md:mx-10">
            <div
              className="flex gap-8 py-4"
              style={transformStyle}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0"
                  style={{ width: cardWidth }}
                >
                  <TestimonialCard testimonial={testimonial} language={language} />
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index)
                  startAutoScroll()
                }}
                className={`transition-all duration-300 rounded-full ${activeIndex === index
                  ? "w-10 h-3 bg-gradient-to-r from-blue-500 to-teal-400"
                  : "w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-blue-300 dark:hover:bg-blue-700"
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
