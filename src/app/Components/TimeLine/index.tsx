"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"

interface ExpInt {
  comp_name: string
  designation: string
  startDate: Date | string
  present?: boolean
  imgurl: string
  skills: string[]
}

export default function ActivitiesTimeline() {
  const experience: ExpInt[] = [
    {
      comp_name: "Solar Citizen",
      designation: "Full Stack Developer",
      startDate: new Date("March 2024"),
      present: true,
      imgurl:
        "https://media.licdn.com/dms/image/C4E0BAQGwp-6SYqgdmQ/company-logo_200_200/0/1676910205768/jarvis_tech_global_logo?e=2147483647&v=beta&t=9hfUf8yhUyoVVs1yrxojd-uaWU7Gw3bENdyDXVIegWY",
      skills: ["Reactjs", "TypeScript", "styled-components", "Tailwind CSS", "Amazon S3", "Express.js", "SQL"],
    },
    {
      comp_name: "Rawts",
      designation: "Mern Stack Developer",
      startDate: "Nov 2023 - March 2024 4mos",
      present: false,
      imgurl: "https://www.rawts.com.pk/static/RAWTS-LOGO-2242aab9f87e5e3e8e46cb0666e0ae17.svg",
      skills: ["Reactjs", "Gatsby", "TypeScript", "styled-components", "Amazon S3", "Express.js", "MongoDb"],
    },
    {
      comp_name: "CodSoft",
      designation: "Front End Developer",
      startDate: "Sep 2023 - Oct 2023 2mos",
      present: false,
      imgurl:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=608,fit=crop,q=95/Aq20eV79zLfpXV6b/logo-png-mnl7npnlXjHPl9KV.png",
      skills: ["Reactjs", "TailwindCSS", "MUI"],
    },
  ]

  const calculateDuration = (startDate: Date | string) => {
    const currentDate = new Date()
    const start = new Date(startDate)

    const monthsDiff =
      (currentDate.getFullYear() - start.getFullYear()) * 12 + (currentDate.getMonth() - start.getMonth() + 1)

    const years = Math.floor(monthsDiff / 12)
    const remainingMonths = monthsDiff % 12

    let durationString = ""

    if (years > 0) {
      durationString += `${years} ${years === 1 ? "year" : "years"}`
    }

    if (remainingMonths > 0) {
      if (years > 0) {
        durationString += " and "
      }
      durationString += `${remainingMonths} ${remainingMonths === 1 ? "month" : "months"}`
    }

    return durationString
  }

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Come back! We miss you!"
      } else {
        document.title = "Hey,Bilal! - Software Engineer - Mern Stack -FrontEnd Developer-Backend Developer"
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.title = "Experience Timeline - Web Developer-Software Engineer | Bilal Ahmed"
        } else {
          document.title = "Bilal Ahmed - Software Engineer -Mern Stack Developer - Karachi, PK"
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      },
    )

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current)
      }
    }
  }, [])

  return (
    <div className="w-full my-16 px-4 md:px-6 lg:px-8 ">
      <motion.h1
        ref={titleRef}
       className="backgroundimage text-center text-2xl md:text-3xl font-bold pt-9 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Professional Experience
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
  {experience.map((exp: ExpInt, index: number) => (
    <motion.div
    key={index}
    className="w-full h-full flex flex-col rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl md:max-w-[800px] mx-auto"
    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
  >
      <div className="p-6 md:p-8 lg:p-10 flex flex-col h-full  bg-gray-800 z-50">
        <div className="flex flex-col items-center ">
          {/* Logo Image */}
          <div className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 flex items-center justify-center">
            <Image
              src={exp.imgurl || "/placeholder.svg"}
              alt={`${exp.comp_name} logo`}
              width={100}
              height={100}
              className="object-contain rounded-full"
            />
          </div>
          {/* Title & Company */}
          <h2 className="text-2xl md:text-3xl font-bold text-center mt-4">{exp.designation}</h2>
          <h3 className="text-xl text-blue-600 dark:text-blue-400 text-center font-bold">{exp.comp_name}</h3>
        </div>

        {/* Dates & Duration */}
        <div className="flex flex-col items-center text-white dark:text-gray-300 mt-4 ">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            <span>
              {exp.present
                ? `${new Date(exp.startDate).toLocaleString("default", {
                    month: "short",
                    year: "numeric",
                  })} - Present`
                : typeof exp.startDate === "string"
                ? exp.startDate
                : exp.startDate.toLocaleString("default", {
                    month: "short",
                    year: "numeric",
                  })}
            </span>
          </div>
          {exp.present && (
            <div className="flex items-center mt-2">
              <Clock className="w-5 h-5 mr-2" />
              <span>{calculateDuration(exp.startDate)}</span>
            </div>
          )}
        </div>

        {/* Skills */}
        <div className="mt-auto">
          <h4 className="text-lg font-semibold text-center mt-6">Skills & Technologies:</h4>
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {exp.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  ))}
</div>

    </div>
  )
}

