"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronDown, ChevronUp, MapPin, Calendar, Award, ExternalLink } from "lucide-react"

interface EducationItem {
  institution: string
  degree: string
  period: string
  location: string
  description: string
  achievements: string[]
  certifications?: {
    name: string
    issuer: string
    date: string
    credentialLink?: string
  }[]
  logo?: string
  color?: string
}

const educationData: EducationItem[] = [
  {
    institution: "University Of Karachi",
    degree: "Bachelor of Science in Computer Science",
    period: "2021 - 2025",
    location: "Karachi, PK",
    description: "Focused on software engineering and web development",
    achievements: [
      "Under-graduate (3.58 GPA)",
      "Active Member of GDGoC-University of Karachi",
      "Received Prime-minister youth Laptop on basis of good gpa",
    ],
    logo: "/ubitt.png",
    color: "#4f46e5",
  },
  {
    institution: "Saylani Mass IT Training",
    degree: "Web & App Development Certification",
    period: "2023 - 2024",
    location: "Karachi, PK",
    description: "Professional certification in web and mobile application development",
    achievements: [
      "Completed comprehensive curriculum covering front-end and back-end technologies",
      "Developed 100+ projects as part of the certification requirements",
      "Gained hands-on experience with industry-standard tools and frameworks",
    ],
    certifications: [
      {
        name: "Web & App Development",
        issuer: "Saylani Mass IT Training",
        date: "2024",
        credentialLink: "https://drive.google.com/file/d/1hHZvRgVk6GTWD-34-tFVG67BVMOWiIZD/view?usp=sharing",
      },
    ],
    logo: "/smit.png",
    color: "#0ea5e9",
  },
  {
    institution: "Meta",
    degree: "Professional Certification",
    period: "2023",
    location: "Online",
    description: "Advanced React.js certification from Meta (formerly Facebook)",
    achievements: [
      "Mastered advanced React concepts including hooks, context, and performance optimization",
      "Completed all coursework with distinction",
    ],
    certifications: [
      {
        name: "Advanced React.js",
        issuer: "Meta",
        date: "2023",
        credentialLink: "https://www.coursera.org/account/accomplishments/professional-cert/example",
      },
    ],
    logo: "/meta.png",
    color: "#0668E1",
  },
  {
    institution: "DevTown",
    degree: "Professional Certification",
    period: "2023",
    location: "Online,India",
    description: "Front-End Web Development certification focusing on JavaScript and React.js",
    achievements: [
      "Developed comprehensive understanding of modern front-end development practices",
      "Built portfolio projects demonstrating React.js proficiency",
    ],
    certifications: [
      {
        name: "Front-End Web Development with JavaScript and React.js",
        issuer: "devTown Bootcamp ---Microsoft,Google Students club ",
        date: "2022",
        credentialLink: "https://drive.google.com/file/d/1gvm6cPC0ZZK7N1D2DCceHjl9NEDniGd-/view?usp=sharing",
      },
    ],
    logo: "/devTown.png",
    color: "#00a4ef",
  },
  {
    institution: "HackerRank",
    degree: "Technical Proficiency",
    period: "2022 - Present",
    location: "Online",
    description: "Demonstrated programming skills through competitive problem solving",
    achievements: ["Solved numerous algorithmic challenges", "Ranked among top performers in multiple categories"],
    certifications: [
      {
        name: "Python (5-star rating)",
        issuer: "HackerRank",
        date: "2023",
        credentialLink: "https://www.hackerrank.com/profile/bilalahmedfaroo1",
      },
      {
        name: "Problem Solving (3-star rating)",
        issuer: "HackerRank",
        date: "2023",
        credentialLink: "https://www.hackerrank.com/profile/bilalahmedfaroo1",
      },
    ],
    logo: "/hackerRank.png",
    color: "#2ec866",
  },
]

const EducationCard = ({ item, index }: { item: EducationItem; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="rounded-2xl shadow-lg bg-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 mb-8 border border-gray-100 dark:border-gray-700"
    >
      <div className="relative">
        {/* Colored accent bar at the top */}
        <div className="h-2 w-full" style={{ backgroundColor: item.color || "#4f46e5" }} />

        <div className="p-4 sm:p-6 md:p-8">
          <div
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer"
            onClick={toggleExpand}
          >
            <div className="flex items-center gap-3 sm:gap-4">
              {item.logo && (
                <div className="relative flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gray-50 dark:bg-gray-700 rounded-full p-1 shadow-sm overflow-hidden">
                  <Image
                    src={item.logo || "/placeholder.svg"}
                    alt={`${item.institution} logo`}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              )}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">{item.institution}</h3>
                <p className="text-base sm:text-lg font-medium" style={{ color: item.color || "#4f46e5" }}>
                  {item.degree}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 ml-auto mt-2 sm:mt-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label={isExpanded ? "Collapse details" : "Expand details"}
              >
                {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </motion.button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3 mt-3 sm:mt-4">
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs sm:text-sm bg-gray-50 dark:bg-gray-700 px-2 sm:px-3 py-1 rounded-full">
              <Calendar size={12} className="mr-1" />
              {item.period}
            </div>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs sm:text-sm bg-gray-50 dark:bg-gray-700 px-2 sm:px-3 py-1 rounded-full">
              <MapPin size={12} className="mr-1" />
              {item.location}
            </div>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                ref={contentRef}
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: "auto",
                  opacity: 1,
                  transition: {
                    height: { duration: 0.4 },
                    opacity: { duration: 0.3, delay: 0.1 },
                  },
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                  transition: {
                    height: { duration: 0.3 },
                    opacity: { duration: 0.2 },
                  },
                }}
                className="overflow-hidden"
              >
                <div className="pt-4 sm:pt-6 space-y-3 sm:space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-3 sm:p-4 rounded-xl">
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white flex items-center mb-2 sm:mb-3 text-sm sm:text-base">
                      <Award size={16} className="mr-2" style={{ color: item.color || "#4f46e5" }} />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 + idx * 0.1 }}
                          className="flex items-start"
                        >
                          <div
                            className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5 mr-2"
                            style={{ backgroundColor: item.color || "#4f46e5" }}
                          />
                          <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  {item.certifications && item.certifications.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white flex items-center mb-2 sm:mb-3 text-sm sm:text-base">
                        <Award size={16} className="mr-2" style={{ color: item.color || "#4f46e5" }} />
                        Certifications
                      </h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {item.certifications.map((cert, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 + idx * 0.1 }}
                            className="bg-white dark:bg-gray-800 p-2 sm:p-3 rounded-lg shadow-sm"
                          >
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                              <div>
                                <p className="font-medium text-gray-800 dark:text-white text-sm sm:text-base">
                                  {cert.name}
                                </p>
                                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                  {cert.issuer} • {cert.date}
                                </p>
                              </div>
                              {cert.credentialLink && (
                                <a
                                  href={cert.credentialLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-500 hover:text-blue-600 dark:text-blue-400 flex items-center text-xs sm:text-sm"
                                  aria-label={`View credential for ${cert.name}`}
                                >
                                  <span className="mr-1">View</span> <ExternalLink size={14} />
                                </a>
                              )}
                            </div>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <motion.div
                    className="flex justify-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <button
                      className="flex items-center text-xs sm:text-sm font-medium hover:underline"
                      style={{ color: item.color || "#4f46e5" }}
                    >
                      Learn more <ExternalLink size={12} className="ml-1" />
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

const Education = () => {
  const [showAll, setShowAll] = useState(false)
  const initialItemsToShow = 2
  const sectionRef = useRef<HTMLElement>(null)

  // Items to display based on showAll state
  const displayedItems = showAll ? educationData : educationData.slice(0, initialItemsToShow)

  // Function to toggle between showing all items and limited items
  const toggleShowAll = () => {
    if (showAll && sectionRef.current) {
      // Scroll to the top of the section when collapsing
      sectionRef.current.scrollIntoView({ behavior: "smooth" })
    }
    setShowAll(!showAll)
  }

  return (
    <section ref={sectionRef} className="py-10 sm:py-16 w-full" id="education">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-2 px-3 py-1 sm:px-4 sm:py-1 bg-indigo-50 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400 text-xs sm:text-sm font-medium"
          >
            Academic Journey
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Education & Training</h2>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "60px"}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-1 bg-indigo-500 mx-auto mt-3 sm:mt-4 rounded-full"
          />

          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic background, professional training, and industry certifications that have shaped my skills and
            knowledge.
          </p>
        </motion.div>

        <div className="space-y-4 sm:space-y-6">
          <AnimatePresence>
            {displayedItems.map((item, index) => (
              <EducationCard key={item.institution} item={item} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {educationData.length > initialItemsToShow && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 sm:mt-8 flex justify-center"
          >
            <button
              onClick={toggleShowAll}
              className="flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:hover:bg-indigo-800/40 text-indigo-600 dark:text-indigo-400 rounded-full transition-all duration-300 text-sm sm:text-base font-medium"
            >
              {showAll ? (
                <>
                  See Less <ChevronUp size={16} className="sm:size-18" />
                </>
              ) : (
                <>
                  See More ({educationData.length - initialItemsToShow} more){" "}
                  <ChevronDown size={16} className="sm:size-18" />
                </>
              )}
            </button>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 sm:mt-12 text-center"
        >
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">
            Continuously learning and expanding my knowledge in the field of technology.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Education

