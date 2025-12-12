"use client";
import React, { useState, useEffect } from "react";
import { Calendar, Clock, ChevronDown, ChevronUp, Briefcase } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ExpInt {
  comp_name: string;
  designation: string;
  startDate: Date | string;
  present?: boolean;
  imgurl: string;
  skills: string[];
  description?: string;
}

const experience: ExpInt[] = [
  {
    comp_name: "Progziel Technologies",
    designation: "Backend Developer",
    startDate: new Date("March 2025"),
    present: true,
    imgurl: "/progziel.png",
    skills: ["Express.js", "Nest.js", "TypeScript", "Javascript", "Node.js", "MongoDb", "PostgreSql", "Prisma ORM", "TypeOrm", "GraphQl", "socket.io", "Amazon Web Services(AWS)", "Rest Apis", "Google Maps APIs", "fe-dev-for-testing"],
    description: "At Progziel Technologies, I build and maintain the backbone of our applications. I use Node.js, Express.js, and Nest.js to create reliable systems, work with databases like MongoDB and PostgreSQL, and integrate essential third-party tools. I enjoy solving challenges and ensuring our products run smoothly.",
  },
  {
    comp_name: "Solar Citizen",
    designation: "Full Stack Developer",
    startDate: "March 2024 - March 2025 1-year & 1-month",
    present: false,
    imgurl: "/solarCitizen.png",
    skills: ["Reactjs", "TypeScript", "styled-components", "Tailwind CSS", "Amazon S3", "Express.js", "SQL"],
    description: "Developing and maintaining full-stack web applications for renewable energy solutions.",
  },
  {
    comp_name: "Rawts",
    designation: "Mern Stack Developer",
    startDate: "Nov 2023 - March 2024 4mos",
    present: false,
    imgurl: "https://www.rawts.com.pk/static/RAWTS-LOGO-2242aab9f87e5e3e8e46cb0666e0ae17.svg",
    skills: ["Reactjs", "Gatsby", "TypeScript", "styled-components", "Amazon S3", "Express.js", "MongoDb"],
    description: "Built scalable web applications using the MERN stack and implemented cloud-based solutions.",
  },
  {
    comp_name: "CodSoft",
    designation: "Front End Developer",
    startDate: "Sep 2023 - Oct 2023 2mos",
    present: false,
    imgurl:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=608,fit=crop,q=95/Aq20eV79zLfpXV6b/logo-png-mnl7npnlXjHPl9KV.png",
    skills: ["Reactjs", "TailwindCSS", "MUI"],
    description: "Developed responsive and user-friendly interfaces using modern front-end technologies.",
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
            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-[51%] transform -translate-x-1/2 md:-translate-x-5 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800 z-10 transition-all duration-300 group-hover:scale-125"></div>

            {/* Timeline Card */}
            <div
              className={`relative w-full md:w-[45%] p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
            >
              <div className="flex items-start gap-4">
                {/* Company Logo */}
                <div className="w-12 h-12 relative flex-shrink-0">
                  <Image
                    src={exp.imgurl || "/placeholder.svg"}
                    alt={`${exp.comp_name} logo`}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-full"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">{exp.designation}</h2>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{exp.comp_name}</p>

                  {/* Date and Duration */}
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-2">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {exp.present
                        ? `${new Date(exp.startDate).toLocaleString("default", {
                          month: "short",
                          year: "numeric",
                        })} - ${language["present"]}`
                        : typeof exp.startDate === "string"
                          ? exp.startDate.split(" - ").slice(0, 2).join(" - ")
                          : exp.startDate.toLocaleString("default", {
                            month: "short",
                            year: "numeric",
                          })}
                    </span>
                    {exp.present && (
                      <>
                        <Clock className="h-4 w-4 ml-2" />
                        <span>{calculateDuration(exp.startDate)}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Expand/Collapse Button */}
                <button
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  aria-label={expandedIndex === index ? language["collapse_details"] : language["expand_details"]}
                >
                  {expandedIndex === index ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
              </div>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="mt-4"
                  >
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full transition-all duration-300 hover:bg-blue-200 dark:hover:bg-blue-800"
                        >
                          {skill}
                        </span>
                      ))}
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
