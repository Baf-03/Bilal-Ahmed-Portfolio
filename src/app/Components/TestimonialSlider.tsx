"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Quote } from "lucide-react"
import coverAvatar from "../../../public/profile.png"
interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  avatar: any
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Hardik Vij",
    role: "Software Engineer",
    content:
      "Great freelancer",
    avatar:coverAvatar,
  },
  {
    id: 2,
    name: "AppSynergies",
    role: ".",
    content:
      "I highly recommend working with him as he is great at meeting his deadlines. Also, has great Communication and Technical knowledge and is available to work on any issues at any point of time with utmost enthusiasm.",
      avatar:coverAvatar,
  },
  {
    id: 3,
    name: "",
    role: "Senior Software Engineer",
    content:
      "I have worked with Bilal and can confirm that he is a reliable and motivated individual. He consistently meets his targets on time and brings a fresh perspective to the table. Bilal is a valuable team member who demonstrates a strong work ethic and enthusiasm for his work. I am confident that he will continue to deliver solid results in his future endeavors",
      avatar:coverAvatar,
  },
  {
    id: 4,
    name: "smit hackathon",
    role: "..",
    content:
      "I've worked with many teams over the years, but none have matched the combination of technical expertise and creative innovation that this group brings to the table.",
      avatar:coverAvatar,
  },
]

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-[600px]  flex flex-col items-center justify-center overflow-hidden px-4">
         <h2 className="backgroundimage text-center text-2xl md:text-3xl font-bold pt-9">
         Testimonials 
        </h2>
      <div className="relative w-full max-w-7xl">
        <div className="relative h-[400px]">
          {" "}
          {/* Fixed height container */}
          {testimonials.map((testimonial, index) => {
            // Calculate the offset from the active index
            const offset = (index - activeIndex + testimonials.length) % testimonials.length
            let xPosition = "0%"
            let scale = 1
            let opacity = 1
            let zIndex = 10

            if (offset === 0) {
              // Active slide
              xPosition = "0%"
              scale = 1
              opacity = 1
              zIndex = 20
            } else if (offset === 1 || offset === testimonials.length - 1) {
              // Adjacent slides
              xPosition = offset === 1 ? "100%" : "-100%"
              scale = 0.85
              opacity = 0.4
              zIndex = 10
            } else {
              // Hidden slides
              xPosition = offset > 1 ? "200%" : "-200%"
              scale = 0.7
              opacity = 0
              zIndex = 5
            }

            return (
              <div
                key={testimonial.id}
                className="absolute top-1/2 left-1/2 w-full max-w-md transition-all duration-700 ease-in-out"
                style={{
                  transform: `translate(-50%, -50%) translateX(${xPosition}) scale(${scale})`,
                  opacity,
                  zIndex,
                }}
              >
                <div className="bg-white rounded-lg p-8 shadow-xl">
                  <Quote className="w-12 h-12 text-gray-200 mb-6" />
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-4">{testimonial.content}</p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-blue-500">{testimonial.name}</h3>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-white w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

