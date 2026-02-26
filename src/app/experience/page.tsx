"use client";

import React, { useState, useEffect } from "react";
import { Calendar, MapPin, Briefcase, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import en from "@/app/locales/en.json";
import es from "@/app/locales/es.json";
import de from "@/app/locales/de.json";
import ar from "@/app/locales/ar.json";

interface ExpInt {
    comp_name: string;
    designation: string;
    startDate: string;
    present?: boolean;
    imgurl: string;
    skills: string[];
    location?: string;
    descriptions?: string[];
}

export default function ExperiencePage() {
    const [langData, setLangData] = useState<any>(en);
    const router = useRouter();

    useEffect(() => {
        const savedLang = localStorage.getItem("language");
        if (savedLang === "es") setLangData(es);
        else if (savedLang === "de") setLangData(de);
        else if (savedLang === "ar") setLangData(ar);
        else setLangData(en);
    }, []);

    const experience: ExpInt[] = [
        {
            comp_name: langData["exp_progziel_comp"] || "Progziel Technologies",
            designation: langData["exp_progziel_role"] || "Backend Developer",
            startDate: langData["exp_progziel_date"] || "March 2024",
            present: true,
            imgurl: "/progziel.png",
            location: langData["exp_progziel_loc"] || "Karachi, Pakistan",
            skills: ["Node.js", "Express", "TypeScript", "JavaScript", "Prisma", "TypeORM", "MongoDB", "PostgreSQL", "Docker", "Kafka", "Flask", "Python", "Stripe", "WebSockets", "Google Maps API", "ResNet18", "CLIP", "FAISS", "Pinecone"],
            descriptions: [
                langData["exp_progziel_desc_1"] || "Design and maintain scalable backend services using Node.js, TypeScript, Nestjs, Expressjs, Flask, MongoDB, Prisma and PostgreSQL.",
                langData["exp_progziel_desc_2"] || "Led development of an AI-powered image similarity search system using ResNet-18, CLIP, and FAISS, implementing data scraping, embedding generation, and high-speed vector retrieval.",
                langData["exp_progziel_desc_3"] || "Built a production-grade AI chatbot using RAG architecture with OpenAI, Gemini, Pinecone, and LangChain, including local model fallback for service reliability.",
                langData["exp_progziel_desc_4"] || "Implemented geospatial intelligence features including geofencing, speed monitoring, curfew enforcement, and real-time tracking using Haversine formula and Ray Casting algorithms.",
                langData["exp_progziel_desc_5"] || "Designed and enforced RBAC and fine-grained permission systems across distributed services.",
                langData["exp_progziel_desc_6"] || "Integrated microservices using Kafka and deployed containerized applications with Docker and Docker Compose.",
                langData["exp_progziel_desc_7"] || "Designed and implemented real-time communication architecture using WebSockets, enabling live tracking, event broadcasting, and instant status synchronization across clients.",
                langData["exp_progziel_desc_8"] || "Optimized database queries and ensured transactional consistency in high-critical business operations.",
                langData["exp_progziel_desc_9"] || "Collaborated with frontend engineers, designers, and stakeholders in agile sprints to align backend systems with product requirements."
            ],
        },
        {
            comp_name: langData["exp_solar_comp"] || "Solar Citizen",
            designation: langData["exp_solar_role"] || "Full Stack Developer",
            startDate: langData["exp_solar_date"] || "October 2024 - February 2025",
            present: false,
            imgurl: "/solarCitizen.png",
            location: langData["exp_solar_loc"] || "Karachi, Pakistan",
            skills: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
            descriptions: [
                langData["exp_solar_desc_1"] || "Designed and developed a custom ERP platform using React.js, Node.js, Express.js, and PostgreSQL.",
                langData["exp_solar_desc_2"] || "Implemented inventory management, reporting dashboards, and workflow automation modules, improving operational efficiency by 60%.",
                langData["exp_solar_desc_3"] || "Built secure REST APIs with RBAC-based access control.",
                langData["exp_solar_desc_4"] || "Worked closely with business teams to translate operational requirements into scalable technical solutions."
            ],
        },
        {
            comp_name: langData["exp_rawts_comp"] || "Rawts",
            designation: langData["exp_rawts_role"] || "Front-End Developer",
            startDate: langData["exp_rawts_date"] || "January 2023 - September 2024",
            present: false,
            imgurl: "https://www.rawts.com.pk/static/RAWTS-LOGO-2242aab9f87e5e3e8e46cb0666e0ae17.svg",
            skills: ["React.js", "Gatsby", "TypeScript", "styled-components", "Amazon S3"],
            descriptions: [
                langData["exp_rawts_desc_1"] || "Developed high-performance, SEO-optimized web applications using React and Gatsby.",
                langData["exp_rawts_desc_2"] || "Reduced page load times by 50% through performance optimization techniques."
            ],
        },
    ];

    return (
        <div className="min-h-screen pt-24 pb-12 md:pt-32 md:pb-24 bg-[#e7e5e4] dark:bg-[#1c1e21] transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Navigation & Header */}
                <div className="mb-12">
                    <button
                        onClick={() => router.back()}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-white/50 dark:hover:bg-gray-800/50 backdrop-blur-md transition-all text-sm font-medium mb-8 text-gray-700 dark:text-gray-300 group"
                    >
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        {langData["back_home"] || "Back to Home"}
                    </button>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white">
                        {langData["exp_page_title_part1"] || "Professional"} <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
                            {langData["exp_page_title_part2"] || "Experience."}
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                        {langData["exp_page_subtitle"] || langData["experience_subtitle"] || "A detailed overview of my career journey, technical leadership, and engineering achievements."}
                    </p>
                </div>

                {/* Professional Timeline Layout */}
                <div className="space-y-16 lg:space-y-32 relative mt-20">
                    {/* Vertical Connecting Line */}
                    <div className="absolute left-[39px] lg:left-[calc(30%-20px)] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-teal-400/20 to-transparent hidden md:block"></div>

                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="relative flex flex-col lg:flex-row gap-8 lg:gap-16 group"
                        >
                            {/* Left Column: Metadata & Sticky Container */}
                            <div className="lg:w-[30%] relative">
                                {/* Timeline Orb */}
                                <div className="absolute -left-[44px] top-6 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] hidden lg:block z-10 transition-transform group-hover:scale-150"></div>

                                <div className="sticky top-32">
                                    <div className="flex items-center gap-5 mb-6">
                                        <div className="w-16 h-16 relative flex-shrink-0 bg-white dark:bg-gray-900 rounded-2xl p-2.5 border border-gray-200/50 dark:border-gray-800 shadow-sm">
                                            <Image
                                                src={exp.imgurl || "/placeholder.svg"}
                                                alt={`${exp.comp_name} logo`}
                                                fill
                                                className="object-contain p-1"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.comp_name}</h3>
                                            <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 mt-1">
                                                <MapPin className="w-3.5 h-3.5" />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3 pl-2">
                                        <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                            <Calendar className="w-4 h-4 text-blue-500/70" />
                                            <span>{exp.startDate} {exp.present && `— ${langData["present"] || "Present"}`}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                                            <Briefcase className="w-4 h-4 text-blue-500/70" />
                                            <span className="uppercase tracking-wider text-xs font-bold pt-0.5">{exp.designation}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Deep Content */}
                            <div className="lg:w-[70%] bg-white/40 dark:bg-gray-800/20 backdrop-blur-xl border border-white/50 dark:border-gray-700/30 rounded-3xl p-6 sm:p-10 shadow-lg hover:shadow-xl hover:bg-white/60 dark:hover:bg-gray-800/40 transition-all duration-500">
                                <h4 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {exp.designation}
                                </h4>

                                {/* Bullets */}
                                <ul className="space-y-5 mb-10">
                                    {exp.descriptions?.map((desc, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500/80 flex-shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)] group-hover:bg-blue-400 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.9)] transition-all" />
                                            <span className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">{desc}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Tech Stack Pills */}
                                <div>
                                    <h5 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                                        {langData["technologies_used"] || "Technologies Utilized"}
                                    </h5>
                                    <div className="flex flex-wrap gap-2.5">
                                        {exp.skills.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="px-4 py-1.5 text-xs sm:text-sm font-semibold bg-gray-100 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700/50 rounded-full hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-default"
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
        </div>
    );
}
