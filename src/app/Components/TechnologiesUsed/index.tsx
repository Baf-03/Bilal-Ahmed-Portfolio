"use client";

import React, { useEffect, useRef } from "react";
import Head from "next/head";
import {
  FaPython, FaJava, FaJs, FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt,
  FaBootstrap, FaDatabase, FaCloud, FaLock, FaGoogle, FaUbuntu, FaServer, FaDocker
} from 'react-icons/fa';
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql,
  SiMysql, SiExpress, SiNestjs, SiChakraui, SiVisualstudiocode,
  SiPostman, SiRedux, SiFirebase, SiStyledcomponents, SiGreensock,
  SiPrisma, SiOpenai, SiGraphql, SiNginx, SiPm2, SiAmazonaws, SiGithubactions, SiRedis,
  SiGrafana, SiSumologic, SiFlask, SiApachekafka, SiSocketdotio, SiDigitalocean, SiSwagger
} from 'react-icons/si';
import { DiMaterializecss } from "react-icons/di";
import { GrGatsbyjs } from "react-icons/gr";
import { TbBrandReactNative } from "react-icons/tb";
import { Code, Database, Wrench, Globe, Sparkles, Terminal, Brain, BotMessageSquare } from "lucide-react";
import { VscAzure } from "react-icons/vsc";

interface TechCategory {
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  technologies: { name: string; icon: React.ReactNode }[];
}

const TechUsed = ({ language }: { language: any }) => {
  const cardsData: TechCategory[] = [
    {
      name: "Programming Languages",
      description: language["programming_languages_description"] || "Core languages I use to build software",
      icon: <Code className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      technologies: [
        { name: "Python", icon: <FaPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
      ],
    },
    {
      name: "Front-End",
      description: language["frontend_description"] || "Building beautiful user interfaces",
      icon: <Globe className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      technologies: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "React", icon: <FaReact /> },
        { name: "React Native", icon: <TbBrandReactNative /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "GatsBy", icon: <GrGatsbyjs /> },
        { name: "Redux Toolkit", icon: <SiRedux /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "NativeWind", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "styled-components", icon: <SiStyledcomponents /> },
        { name: "Material UI", icon: <DiMaterializecss /> },
        { name: "shadcn/ui", icon: <FaReact /> },
        { name: "Chakra UI", icon: <SiChakraui /> },
        { name: "Framer Motion", icon: <FaReact /> },
        { name: "GSAP", icon: <SiGreensock /> },
        { name: "Particle.js", icon: <Sparkles className="w-4 h-4" /> },
      ],
    },
    {
      name: "Back-End",
      description: language["backend_description"] || "Server-side development & APIs",
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500 to-teal-500",
      technologies: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Nest.js", icon: <SiNestjs /> },
        { name: "TypeORM", icon: <FaDatabase /> },
        { name: "Prisma", icon: <SiPrisma /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "GraphQL", icon: <SiGraphql /> },
        { name: "JWT", icon: <FaLock /> },
        { name: "Passport.js", icon: <FaLock /> },
        { name: "OAuth2", icon: <FaLock /> },
        { name: "RBAC", icon: <FaLock /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Redis", icon: <SiRedis /> },
        { name: "Flask", icon: <SiFlask /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "Apache Kafka", icon: <SiApachekafka /> },
        { name: "RESTful APIs", icon: <FaServer /> },
        { name: "WebSocket (Socket.IO)", icon: <SiSocketdotio /> },
      ],
    },
    {
      name: "DevOps & Cloud",
      description: language["devops_description"] || "Infrastructure, deployment & scaling",
      icon: <Terminal className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      technologies: [
        { name: "AWS EC2", icon: <SiAmazonaws /> },
        { name: "AWS RDS", icon: <SiAmazonaws /> },
        { name: "AWS ECS", icon: <SiAmazonaws /> },
        { name: "AWS S3", icon: <FaCloud /> },
        { name: "IAM", icon: <SiAmazonaws /> },
        { name: "Ubuntu", icon: <FaUbuntu /> },
        { name: "Nginx", icon: <SiNginx /> },
        { name: "PM2", icon: <SiPm2 /> },
        { name: "CI/CD & GitHub Actions", icon: <SiGithubactions /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "AWS CloudFront", icon: <SiAmazonaws /> },
        { name: "Azure", icon: <VscAzure /> },
        { name: "Hostinger", icon: <FaServer /> },
        { name: "Cloudinary", icon: <FaCloud /> },
        { name: "Grafana", icon: <SiGrafana /> },
        { name: "Promtail", icon: <FaServer /> },
        { name: "Loki", icon: <FaDatabase /> },
        { name: "SumoLogic", icon: <SiSumologic /> },
        { name: "BlueHost", icon: <FaServer /> },
        { name: "Docker Compose", icon: <FaDocker /> },
        { name: "Digital Ocean", icon: <SiDigitalocean /> },
        { name: "Railway", icon: <FaServer /> },
      ],
    },
    {
      name: "AI & Machine Learning",
      description: language["ai_description"] || "Building intelligent systems & data pipelines",
      icon: <Brain className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500",
      technologies: [
        { name: "Fine Tuning", icon: <SiOpenai /> },
        { name: "ResNet-18", icon: <Brain className="w-4 h-4" /> },
        { name: "RAG Pipelines", icon: <BotMessageSquare className="w-4 h-4" /> },
        { name: "Similarity Search", icon: <FaDatabase /> },
        { name: "Selenium", icon: <FaPython /> },
        { name: "Beautiful Soup", icon: <FaPython /> },
        { name: "Data Cleaning", icon: <FaDatabase /> },
        { name: "LangChain", icon: <SiOpenai /> },
        { name: "Pinecone", icon: <FaDatabase /> },
        { name: "FAISS", icon: <FaDatabase /> },
        { name: "AWS Bedrock", icon: <SiAmazonaws /> },
        { name: "Mistral AI", icon: <BotMessageSquare className="w-4 h-4" /> },
        { name: "CLIP", icon: <Brain className="w-4 h-4" /> },
        { name: "Embeddings", icon: <FaDatabase /> },
        { name: "Vector Similarity Search", icon: <FaDatabase /> },
        { name: "Data Scraping", icon: <FaPython /> },
        { name: "Image-to-Image Similarity", icon: <Code className="w-4 h-4" /> },
        { name: "Text-to-Image Search", icon: <Code className="w-4 h-4" /> },
      ],
    },
    {
      name: "Tools",
      description: language["tools_description"] || "Essential tools for productivity",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
      technologies: [
        { name: "Git & GitHub", icon: <FaGitAlt /> },
        { name: "VS Code", icon: <SiVisualstudiocode /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "ChatGPT", icon: <SiOpenai /> },
        { name: "Google Analytics", icon: <FaGoogle /> },
        { name: "Google Tag Manager", icon: <FaGoogle /> },
        { name: "Bitbucket", icon: <FaGitAlt /> },
        { name: "Google Maps API", icon: <FaGoogle /> },
        { name: "Firebase Analytics", icon: <SiFirebase /> },
        { name: "Swagger", icon: <SiSwagger /> },
      ],
    },
  ];

  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.title = "Technologies Used - Bilal Ahmed | Software Engineer";
        } else {
          document.title = "Bilal Ahmed - Software Engineer";
        }
      },
      { root: null, rootMargin: "0px", threshold: 0 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Technologies Used - Software Engineer | Bilal Ahmed</title>
        <meta
          name="description"
          content="Explore the technologies used by Bilal Ahmed, including React, Node.js, AWS, and more."
        />
      </Head>

      <section className="py-12 md:py-24 px-4 w-full relative" id="technologies">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-4 md:mb-6">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="text-xs md:text-sm font-medium text-blue-600 dark:text-blue-400">
                {language["tech_stack_badge"] || "My Technical Arsenal"}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-teal-400">
                {language["technologies_used"] || "Technologies Used"}
              </span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed">
              {language["tech_description"] || "Each project has its needs, and choosing the right tools makes all the difference."}
            </p>
          </div>

          {/* Cards Grid */}
          <div
            ref={titleRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {cardsData.map((category, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Gradient Border Effect on hover */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500`} />

                <div className="relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 h-full border border-gray-200/50 dark:border-gray-700/50 shadow-xl shadow-gray-200/40 dark:shadow-black/20">
                  {/* Decorative Corner Gradient */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${category.color} opacity-10 rounded-tr-3xl rounded-bl-full`} />

                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                      <span className="text-white">{category.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs md:text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                      >
                        <span className="text-base">{tech.icon}</span>
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TechUsed;