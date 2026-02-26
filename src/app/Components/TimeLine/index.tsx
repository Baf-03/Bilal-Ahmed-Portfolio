"use client";
import React, { useState, useEffect } from "react";
import { Calendar, Clock, ChevronDown, ChevronUp, Briefcase, MapPin } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ExpInt {
  comp_name: string;
  designation: string;
  startDate: Date | string;
  present?: boolean;
  imgurl: string;
  skills: string[];
  location?: string;
  descriptions?: string[];
  description?: string; // fallback
}

const experience: ExpInt[] = [
  {
    comp_name: "Progziel Technologies",
    designation: "Backend Developer",
    startDate: new Date("March 2025"),
    present: true,
    imgurl: "/progziel.png",
    location: "Karachi, Pakistan",
    skills: ["Node.js", "Express", "TypeScript", "JavaScript", "Prisma", "TypeORM", "MongoDB", "PostgreSQL", "Docker", "Kafka", "Flask", "Python", "Stripe", "WebSockets", "Google Maps API", "ResNet18", "CLIP", "FAISS", "Pinecone"],
    descriptions: [
      "Design and maintain scalable backend services using Node.js, TypeScript, Nestjs, Expressjs, Flask, MongoDB, Prisma and PostgreSQL.",
      "Led development of an AI-powered image similarity search system using ResNet-18, CLIP, and FAISS, implementing data scraping, embedding generation, and high-speed vector retrieval.",
      "Built a production-grade AI chatbot using RAG architecture with OpenAI, Gemini, Pinecone, and LangChain, including local model fallback for service reliability.",
      "Implemented geospatial intelligence features including geofencing, speed monitoring, curfew enforcement, and real-time tracking using Haversine formula and Ray Casting algorithms.",
      "Designed and enforced RBAC and fine-grained permission systems across distributed services.",
      "Integrated microservices using Kafka and deployed containerized applications with Docker and Docker Compose.",
      "Designed and implemented real-time communication architecture using WebSockets, enabling live tracking, event broadcasting, and instant status synchronization across clients.",
      "Optimized database queries and ensured transactional consistency in high-critical business operations.",
      "Collaborated with frontend engineers, designers, and stakeholders in agile sprints to align backend systems with product requirements."
    ],
  },
  {
    comp_name: "Solar Citizen",
    designation: "Full Stack Developer",
    startDate: "October 2024 - February 2025",
    present: false,
    imgurl: "/solarCitizen.png",
    location: "Karachi, Pakistan",
    skills: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
    descriptions: [
      "Designed and developed a custom ERP platform using React.js, Node.js, Express.js, and PostgreSQL.",
      "Implemented inventory management, reporting dashboards, and workflow automation modules, improving operational efficiency by 60%.",
      "Built secure REST APIs with RBAC-based access control.",
      "Worked closely with business teams to translate operational requirements into scalable technical solutions."
    ],
  },
  {
    comp_name: "Rawts",
    designation: "Front-End Developer",
    startDate: "January 2023 - September 2024",
    present: false,
    imgurl: "https://www.rawts.com.pk/static/RAWTS-LOGO-2242aab9f87e5e3e8e46cb0666e0ae17.svg",
    skills: ["React.js", "Gatsby", "TypeScript", "styled-components", "Amazon S3"],
    descriptions: [
      "Developed high-performance, SEO-optimized web applications using React and Gatsby.",
      "Reduced page load times by 50% through performance optimization techniques."
    ],
  },
];

const ActivitiesTimeline = ({ language }: any) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const calculateDuration = (startDate: Date | string) => {
    if (typeof startDate === "string") {
      return startDate.split(" - ")[2] || "";
    }
    const currentDate = new Date();
    const start = new Date(startDate);
    const monthsDiff =
      (currentDate.getFullYear() - start.getFullYear()) * 12 +
      (currentDate.getMonth() - start.getMonth() + 1);
    const years = Math.floor(monthsDiff / 12);
    const remainingMonths = monthsDiff % 12;

    let durationString = "";
    if (years > 0) {
      durationString += `${years} ${years === 1 ? language["year"] : language["years"]}`;
    }
    if (remainingMonths > 0) {
      if (years > 0) durationString += " " + language["and"] + " ";
      durationString += `${remainingMonths} ${remainingMonths === 1 ? language["month"] : language["months"]}`;
    }
    return durationString;
  };


  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Come back! We miss you!";
      } else {
        document.title = "Hey, Bilal! - Software Engineer - Mern Stack - Full Stack Developer";
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  return (
    <section className="w-full py-12 md:py-24 px-4 sm:px-6 lg:px-8" id="experience">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-4 md:mb-6">
          <Briefcase className="w-4 h-4 text-blue-500" />
          <span className="text-xs md:text-sm font-medium text-blue-600 dark:text-blue-400">
            {language["experience_badge"] || "My Career Journey"}
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            {language["professional_experience"]}
          </span>
        </h2>
        <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed">
          {language["experience_subtitle"] || "Building impactful solutions across various companies and industries"}
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Vertical Line */}
        <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-teal-400 z-0"></div>

        {experience.map((exp, index) => (
          <motion.div
            key={index}
            className={`relative mb-12 flex items-start w-full group ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Timeline Glow Dot */}
            <div className={`absolute left-4 md:left-[50%] transform -translate-x-[11px] md:-translate-x-[11px] w-[22px] h-[22px] bg-gradient-to-tr from-blue-600 to-teal-400 rounded-full border-4 border-white dark:border-[#0a0f18] z-10 transition-all duration-500 group-hover:scale-150 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]`}></div>

            {/* Timeline Card */}
            <div
              className={`relative w-full md:w-[45%] p-6 md:p-8 bg-white/60 dark:bg-gray-800/40 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/20 group-hover:-translate-y-2 ${index % 2 === 0 ? "md:mr-auto pl-12 md:pl-8" : "md:ml-auto pl-12 md:pl-8"
                }`}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6">
                {/* Company Logo */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 relative flex-shrink-0 bg-white dark:bg-gray-900 rounded-xl p-2 border border-gray-200 dark:border-gray-700 shadow-sm group-hover:shadow-md transition-shadow">
                  <Image
                    src={exp.imgurl || "/placeholder.svg"}
                    alt={`${exp.comp_name} logo`}
                    fill
                    className="object-contain p-1"
                  />
                </div>

                {/* Content Header */}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 group-hover:from-blue-600 group-hover:to-teal-500 dark:group-hover:from-blue-400 dark:group-hover:to-teal-300 transition-all duration-300">
                    {exp.designation}
                  </h3>
                  <p className="text-base font-semibold text-blue-600 dark:text-blue-400 mt-1">{exp.comp_name}</p>

                  {/* Date and Duration */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 mt-3">
                    <div className="flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800/50 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>
                        {exp.present
                          ? `${new Date(exp.startDate).toLocaleString("default", {
                            month: "short",
                            year: "numeric",
                          })} - ${language["present"] || "Present"}`
                          : typeof exp.startDate === "string"
                            ? exp.startDate.split(" - ").slice(0, 2).join(" - ")
                            : exp.startDate.toLocaleString("default", {
                              month: "short",
                              year: "numeric",
                            })}
                      </span>
                    </div>
                    {exp.present && (
                      <div className="flex items-center gap-1.5 bg-green-500/10 text-green-600 dark:text-green-400 px-3 py-1.5 rounded-full border border-green-500/20">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{calculateDuration(exp.startDate)}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Expand/Collapse Button */}
              <button
                className="w-full flex items-center justify-between p-3 mt-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800/50 transition-all duration-300"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                aria-label={expandedIndex === index ? language["collapse_details"] : language["expand_details"]}
              >
                <span className="text-sm font-semibold tracking-wide">
                  {expandedIndex === index ? (language["hide_details"] || "Hide Details") : (language["view_details"] || "View Details")}
                </span>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown className="h-5 w-5" />
                </motion.div>
              </button>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 rounded-xl bg-white/40 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800">
                      {/* Location Metadata */}
                      {exp.location && (
                        <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-sm font-medium mb-4 pb-4 border-b border-gray-200 dark:border-gray-800/60">
                          <MapPin className="w-4 h-4 text-blue-500" />
                          <span>{exp.location}</span>
                        </div>
                      )}

                      {/* Descriptions List */}
                      {exp.descriptions ? (
                        <ul className="space-y-3 mb-6">
                          {exp.descriptions.map((desc, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                              <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium">{desc}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium mb-6">
                          {exp.description}
                        </p>
                      )}

                      <div className="space-y-3">
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">{language["technologies_used"] || "Technologies Used"}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1.5 text-xs font-semibold bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20 rounded-lg shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-blue-500/20 hover:scale-105"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ActivitiesTimeline;
