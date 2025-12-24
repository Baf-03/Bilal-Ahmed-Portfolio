"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronDown, ChevronUp, MapPin, Calendar, Award, ExternalLink } from "lucide-react"
import { usePerformance } from "@/contexts/PerformanceContext";

interface EducationItem {
  institutionKey: string
  degreeKey: string
  periodKey: string
  locationKey: string
  descriptionKey: string
  achievementKeys: string[]
  certifications?: {
    nameKey: string
    issuerKey: string
    date: string
    credentialLink?: string
  }[]
  logo?: string
  color?: string
}

const educationData: EducationItem[] = [
  {
    institutionKey: "edu_uok_institution",
    degreeKey: "edu_uok_degree",
    periodKey: "edu_uok_period",
    locationKey: "edu_uok_location",
    descriptionKey: "edu_uok_description",
    achievementKeys: [
      "edu_uok_achievement_1",
      "edu_uok_achievement_2",
      "edu_uok_achievement_3",
    ],
    logo: "/ubitt.png",
    color: "#4f46e5",
  },
  {
    institutionKey: "edu_smit_institution",
    degreeKey: "edu_smit_degree",
    periodKey: "edu_smit_period",
    locationKey: "edu_smit_location",
    descriptionKey: "edu_smit_description",
    achievementKeys: [
      "edu_smit_achievement_1",
      "edu_smit_achievement_2",
      "edu_smit_achievement_3",
    ],
    certifications: [
      {
        nameKey: "edu_smit_cert_name",
        issuerKey: "edu_smit_cert_issuer",
        date: "2024",
        credentialLink: "https://drive.google.com/file/d/1hHZvRgVk6GTWD-34-tFVG67BVMOWiIZD/view?usp=sharing",
      },
    ],
    logo: "/smit.png",
    color: "#0ea5e9",
  },
  {
    institutionKey: "edu_meta_institution",
    degreeKey: "edu_meta_degree",
    periodKey: "edu_meta_period",
    locationKey: "edu_meta_location",
    descriptionKey: "edu_meta_description",
    achievementKeys: [
      "edu_meta_achievement_1",
      "edu_meta_achievement_2",
    ],
    certifications: [
      {
        nameKey: "edu_meta_cert_name",
        issuerKey: "edu_meta_cert_issuer",
        date: "2023",
        credentialLink: "https://www.coursera.org/account/accomplishments/professional-cert/example",
      },
    ],
    logo: "/meta.png",
    color: "#0668E1",
  },
  {
    institutionKey: "edu_devtown_institution",
    degreeKey: "edu_devtown_degree",
    periodKey: "edu_devtown_period",
    locationKey: "edu_devtown_location",
    descriptionKey: "edu_devtown_description",
    achievementKeys: [
      "edu_devtown_achievement_1",
      "edu_devtown_achievement_2",
    ],
    certifications: [
      {
        nameKey: "edu_devtown_cert_name",
        issuerKey: "edu_devtown_cert_issuer",
        date: "2022",
        credentialLink: "https://drive.google.com/file/d/1gvm6cPC0ZZK7N1D2DCceHjl9NEDniGd-/view?usp=sharing",
      },
    ],
    logo: "/devTown.png",
    color: "#00a4ef",
  },
  {
    institutionKey: "edu_hackerrank_institution",
    degreeKey: "edu_hackerrank_degree",
    periodKey: "edu_hackerrank_period",
    locationKey: "edu_hackerrank_location",
    descriptionKey: "edu_hackerrank_description",
    achievementKeys: [
      "edu_hackerrank_achievement_1",
      "edu_hackerrank_achievement_2",
    ],
    certifications: [
      {
        nameKey: "edu_hackerrank_cert_1_name",
        issuerKey: "edu_hackerrank_cert_1_issuer",
        date: "2023",
        credentialLink: "https://www.hackerrank.com/profile/bilalahmedfaroo1",
      },
      {
        nameKey: "edu_hackerrank_cert_2_name",
        issuerKey: "edu_hackerrank_cert_2_issuer",
        date: "2023",
        credentialLink: "https://www.hackerrank.com/profile/bilalahmedfaroo1",
      },
    ],
    logo: "/hackerRank.png",
    color: "#2ec866",
  },
]

const EducationCard = ({ item, index, language }: { item: EducationItem; index: number; language: any }) => {
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
      className="rounded-2xl shadow-lg bg-white dark:bg-gray-800 overflow-hidden hover:shadow-xl transition-all duration-300 mb-8 border border-gray-200 dark:border-gray-700"
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
                    alt={`${language[item.institutionKey] || item.institutionKey} logo`}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              )}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
                  {language[item.institutionKey] || item.institutionKey}
                </h3>
                <p className="text-base sm:text-lg font-medium" style={{ color: item.color || "#4f46e5" }}>
                  {language[item.degreeKey] || item.degreeKey}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 ml-auto mt-2 sm:mt-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label={isExpanded ? (language["collapse_details"] || "Collapse details") : (language["expand_details"] || "Expand details")}
              >
                {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </motion.button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3 mt-3 sm:mt-4">
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs sm:text-sm bg-gray-50 dark:bg-gray-700 px-2 sm:px-3 py-1 rounded-full">
              <Calendar size={12} className="mr-1" />
              {language[item.periodKey] || item.periodKey}
            </div>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs sm:text-sm bg-gray-50 dark:bg-gray-700 px-2 sm:px-3 py-1 rounded-full">
              <MapPin size={12} className="mr-1" />
              {language[item.locationKey] || item.locationKey}
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
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      {language[item.descriptionKey] || item.descriptionKey}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white flex items-center mb-2 sm:mb-3 text-sm sm:text-base">
                      <Award size={16} className="mr-2" style={{ color: item.color || "#4f46e5" }} />
                      {language["key_achievements"] || "Key Achievements"}
                    </h4>
                    <ul className="space-y-2">
                      {item.achievementKeys.map((achievementKey, idx) => (
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
                          <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                            {language[achievementKey] || achievementKey}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  {item.certifications && item.certifications.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white flex items-center mb-2 sm:mb-3 text-sm sm:text-base">
                        <Award size={16} className="mr-2" style={{ color: item.color || "#4f46e5" }} />
                        {language["certifications"] || "Certifications"}
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
                                  {language[cert.nameKey] || cert.nameKey}
                                </p>
                                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                  {language[cert.issuerKey] || cert.issuerKey} • {cert.date}
                                </p>
                              </div>
                              {cert.credentialLink && (
                                <a
                                  href={cert.credentialLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-500 hover:text-blue-600 dark:text-blue-400 flex items-center text-xs sm:text-sm"
                                  aria-label={`${language["view_credential"] || "View"} ${language[cert.nameKey] || cert.nameKey}`}
                                >
                                  <span className="mr-1">{language["view_credential"] || "View"}</span> <ExternalLink size={14} />
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
                      {language["learn_more"] || "Learn more"} <ExternalLink size={12} className="ml-1" />
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

const Education = ({ language }: { language: any }) => {
  const [showAll, setShowAll] = useState(false)
  const initialItemsToShow = 2
  const sectionRef = useRef<HTMLElement>(null)
  const { isLowPerformance } = usePerformance();

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
    <section ref={sectionRef} className="py-10 sm:py-24 w-full relative overflow-hidden" id="education">


      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={isLowPerformance ? undefined : { opacity: 1, y: 0 }}
          animate={isLowPerformance ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={isLowPerformance ? undefined : { opacity: 1, scale: 1 }}
            animate={isLowPerformance ? { opacity: 1, scale: 1 } : undefined}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-blue-500/10 border border-indigo-500/20 mb-6"
          >
            <div className={`w-2 h-2 rounded-full bg-indigo-500 ${!isLowPerformance && "animate-pulse"}`} />
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              {language["academic_journey"] || "Academic Journey"}
            </span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-500 to-teal-400">
              {language["education_training"] || "Education & Training"}
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed">
            {language["education_subtitle"] || "My academic background, professional training, and industry certifications that have shaped my skills and knowledge."}
          </p>
        </motion.div>

        <div className="space-y-4 sm:space-y-6">
          <AnimatePresence>
            {displayedItems.map((item, index) => (
              <EducationCard key={item.institutionKey} item={item} index={index} language={language} />
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
                  {language["see_less"] || "See Less"} <ChevronUp size={16} className="sm:size-18" />
                </>
              ) : (
                <>
                  {language["see_more"] || "See More"} ({educationData.length - initialItemsToShow} {language["more"] || "more"}){" "}
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
            {language["continuously_learning"] || "Continuously learning and expanding my knowledge in the field of technology."}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
