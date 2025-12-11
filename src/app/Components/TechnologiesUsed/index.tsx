import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import "./tech.css";
import {
  FaPython, FaJava, FaJs, FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt,
  FaBootstrap, FaDatabase, FaCloud, FaLock, FaGoogle
} from 'react-icons/fa';
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql,
  SiMysql, SiExpress, SiNestjs, SiChakraui, SiVisualstudiocode,
  SiPostman, SiRedux, SiFirebase, SiStyledcomponents, SiGreensock,
  SiPrisma,
  SiOpenai,
  SiGraphql
} from 'react-icons/si';
import { DiMaterializecss } from "react-icons/di";
import { GrGatsbyjs } from "react-icons/gr";

const TechUsed = ({ language }: { language: any }) => {
  const cardsData = [
    {
      name: language["programming_languages"] || "Programming Languages",
      para: "code .",
      option: [
        { name: "Python", icon: <FaPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "Javascript", icon: <FaJs /> },
        { name: "typescript", icon: <SiTypescript /> },
      ],
    },
    {
      name: language["frontend"] || "Front-End",
      para: language["frontend_description"] || "WebApps, specific features, maintenance and more.",
      option: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript ES6", icon: <FaJs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "GatsBy", icon: <GrGatsbyjs /> },
        { name: "Redux Toolkit", icon: <SiRedux /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "styled-components", icon: <SiStyledcomponents /> },
        { name: "Material UI", icon: <DiMaterializecss /> },
        { name: "shadcn", icon: <FaReact /> },
        { name: "ChakraUi", icon: <SiChakraui /> },
        { name: "Particlejs", icon: <FaJs /> },
        { name: "AOS animation", icon: <FaCss3Alt /> },
        { name: "framer-motion", icon: <FaReact /> },
        { name: "gsap", icon: <SiGreensock /> },
      ],
    },
    {
      name: language["backend"] || "Back-End",
      para: language["backend_description"] || "Server-side development and database management.",
      option: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Nestjs", icon: <SiNestjs /> },
        { name: "typeorm", icon: <FaDatabase /> },
        { name: "Prisma", icon: <SiPrisma /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "postgresql", icon: <SiPostgresql /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Sessions", icon: <FaLock /> },
        { name: "JWT", icon: <FaLock /> },
        { name: "Passportjs", icon: <FaLock /> },
        { name: "OAuth2", icon: <FaLock /> },
        { name: "GraphQl", icon: <SiGraphql /> },
        { name: "rbac", icon: <FaLock /> },
        { name: "Cloudinary", icon: <FaCloud /> },
        { name: "AWS S3", icon: <FaCloud /> },
        { name: "Firebase", icon: <SiFirebase /> },
      ],
    },
    {
      name: language["tools"] || "Tools",
      para: language["tools_description"] || "Essential tools for development and collaboration.",
      option: [
        { name: "Git & GitHub", icon: <FaGitAlt /> },
        { name: "Google Analytics", icon: <FaGoogle /> },
        { name: "Google Tag Manager", icon: <FaGoogle /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "VSCode", icon: <SiVisualstudiocode /> },
        { name: "ChatGPT", icon: <SiOpenai /> },
      ],
    },
  ];

  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.title =
            "Technologies Used - Engineer | Bilal Ahmed | MERN Stack";
        } else {
          document.title =
            "Hey, Bilal! - Software Engineer - MERN Stack Developer";
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      }
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
        <title>Technologies Used - Web Developer | Bilal Ahmed</title>
        <meta
          name="description"
          content="Explore the technologies used by Bilal Ahmed, a skilled web developer. Learn about UI/UX design, front-end development, and back-end technologies."
        />
        <meta
          name="keywords"
          content="technologies used, web development technologies, UI/UX design, front-end development, back-end development, Figma, HTML5, CSS3, JavaScript, TypeScript, React, Redux Toolkit, Next.js, Express.js, MongoDB"
        />
      </Head>

      <div className="flex flex-col justify-center w-[96%] lg:w-full m-auto mb-9 gap-5 3xl:text-[1.5rem] relative">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {language["tech_stack_badge"] || "My Technical Arsenal"}
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-teal-400">
              {language["technologies_used"] || "Technologies Used"}
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed">
            {language["tech_description"] || "Each project has its needs, and choosing the right tools makes all the difference. As a communicator, web developer, and designer, I have listed below the main stacks that I usually use in each type of project."}
          </p>
        </motion.div>

        <div
          ref={titleRef}
          className="mt-9 flex flex-wrap gap-12 justify-center"
        >
          {cardsData.map((element, index) => (
            <div
              key={index}
              className="Card w-[95%] sm:w-[60%] md:w-[45%] lg:w-[30%] p-4 shadow-lg rounded-2xl flex flex-col"
            >
              <div className="flex flex-col items-center w-full py-5">
                <h2 className="font-bold text-[1.5rem] 3xl:text-[2.4rem] text-[#3b82f6]">
                  {element.name}
                </h2>
                <p className="w-[85%] mx-auto text-center 3xl:text-[1.5rem]">
                  {element.para}
                </p>
              </div>
              <div className="p-2 text-[0.9rem] 3xl:text-[1.5rem] 3xl:p-4 flex flex-wrap gap-2 font-bold mt-2">
                {element.option.map((feature, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 px-3 3xl:px-5 py-1 3xl:py-3 rounded-full flex items-center gap-2 tech-item"
                  >
                    <span className="tech-icon">{feature.icon}</span>
                    {feature.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechUsed;