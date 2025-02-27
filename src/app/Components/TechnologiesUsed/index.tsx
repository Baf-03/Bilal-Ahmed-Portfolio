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
  SiOpenai
} from 'react-icons/si';
import { DiMaterializecss } from "react-icons/di";

const TechUsed = () => {
  const cardsData = [
    {
      name: "Programming Languages",
      para: "code .",
      option: [
        { name: "Python", icon: <FaPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "Javascript", icon: <FaJs /> },
        { name: "typescript", icon: <SiTypescript /> },
      ],
    },
    {
      name: "Front-End",
      para: "WebApps, specific features, maintenance and more.",
      option: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript ES6", icon: <FaJs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "React", icon: <FaReact /> },
        { name: "Redux Toolkit", icon: <SiRedux /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Particlejs", icon: <FaJs /> },
        { name: "AOS animation", icon: <FaCss3Alt /> },
        { name: "Material UI", icon: <DiMaterializecss /> },
        { name: "ChakraUi", icon: <SiChakraui /> },
        { name: "shadcn", icon: <FaReact /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "styled-components", icon: <SiStyledcomponents /> },
        { name: "framer-motion", icon: <FaReact /> },
        { name: "gsap", icon: <SiGreensock /> },
      ],
    },
    {
      name: "Back-End",
      para: "Server-side development and database management.",
      option: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Nestjs", icon: <SiNestjs /> },
        { name: "typeorm", icon: <FaDatabase /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "postgresql", icon: <SiPostgresql /> },
        { name: "Sessions", icon: <FaLock /> },
        { name: "Prisma", icon: <SiPrisma /> },
        { name: "Passportjs", icon: <FaLock /> },
        { name: "OAuth2", icon: <FaLock /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "JWT", icon: <FaLock /> },
        { name: "rbac", icon: <FaLock /> },
        { name: "Cloudinary", icon: <FaCloud /> },
        { name: "AWS S3", icon: <FaCloud /> },
        { name: "Firebase", icon: <SiFirebase /> },
      ],
    },
    {
      name: "Tools",
      para: "Essential tools for development and collaboration.",
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

      <div className="flex flex-col justify-center w-[96%] lg:w-full m-auto mb-9 gap-5 3xl:text-[1.5rem] ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient !bg-clip-text !text-transparent !bg-gradient-to-r !from-blue-500 !to-teal-400">
            Technologies Used
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Each project has its needs, and{" "}
            <span className="text-[#3b82f6]">choosing the right tools</span> makes
            all the difference. As a communicator, web developer, and designer, I
            have listed below the main stacks that I usually use in each type of
            project.
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