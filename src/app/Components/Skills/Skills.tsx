import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import {motion} from "framer-motion"
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { TbBrandFirebase } from "react-icons/tb";
import { SiMui } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { TfiHtml5 } from "react-icons/tfi";
import { TiCss3 } from "react-icons/ti";
import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoJava } from "react-icons/bi";
import { TbBrandPython } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { TbBrandNextjs } from "react-icons/tb";
import { SiAmazons3 } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiTypescript } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";
import { usePerformance } from "@/contexts/PerformanceContext";

const Skills = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const { isLowPerformance } = usePerformance();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  const skills = [
    { icon: TbBrandNextjs, name: "Next.js", color: "text-cyan-400" },
    { icon: RiReactjsLine, name: "React.js", color: "text-cyan-400" },
    { icon: SiExpress, name: "Express.js", color: "text-cyan-400" },
    { icon: FaNode, name: "Node.js", color: "text-green-400" },
    { icon: TbBrandRedux, name: "Redux", color: "text-purple-600" },
    { icon: TbBrandFirebase, name: "Firebase", color: "text-yellow-800" },
    { icon: SiMui, name: "Material UI", color: "text-blue-600" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-blue-400" },
    { icon: SiBootstrap, name: "Bootstrap", color: "text-purple-800" },
    { icon: TfiHtml5, name: "HTML5", color: "text-orange-700" },
    { icon: TiCss3, name: "CSS3", color: "text-blue-700" },
    { icon: TbBrandJavascript, name: "JavaScript", color: "text-amber-800" },
    { icon: SiTypescript, name: "TypeScript", color: "text-blue-800" },
    { icon: BiLogoJava, name: "Java", color: "text-blue-800" },
    { icon: TbBrandPython, name: "Python", color: "text-yellow-500" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
    { icon: GrMysql, name: "SQL", color: "text-blue-800" },
    { icon: SiNetlify, name: "Netlify", color: "text-blue-500" },
    { icon: BsGithub, name: "GitHub", color: "text-white" },
    { icon: SiAmazons3, name: "Amazon S3", color: "text-white" },
    { icon: SiJsonwebtokens, name: "Json Web Token", color: "text-red-400" },
  ];

  const displayedSkills = isLowPerformance ? skills.slice(0, 10) : skills;

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollAnimationRef = useRef<number | null>(null);
  const isInteractingRef = useRef(false);
  const startScrolling = () => {
    if (scrollContainerRef.current && !isInteractingRef.current) {
      if (scrollAnimationRef.current) {
        cancelAnimationFrame(scrollAnimationRef.current); // Cancel any existing animation
      }
  
      const scrollContainer = scrollContainerRef.current;
      const scrollIncrement = 0.5; // Set a constant increment
  
      scrollContainer.scrollLeft += scrollIncrement;
  
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      }
  
      scrollAnimationRef.current = requestAnimationFrame(startScrolling);
    }
  };

  const stopScrolling = () => {
    if (scrollAnimationRef.current) {
      cancelAnimationFrame(scrollAnimationRef.current);
      scrollAnimationRef.current = null;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        stopScrolling(); // Stop scrolling on small screens
      } else {
        stopScrolling(); // Stop any existing scrolling
        startScrolling(); // Start scrolling on larger screens
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      let isDown = false;
      let startX: number;
      let scrollLeft: number;

      const handleMouseDown = (e: MouseEvent) => {
        isDown = true;
        isInteractingRef.current = true;
        stopScrolling();
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
      };

      const handleMouseMove = (e: MouseEvent) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 1; // Scroll-fast
        scrollContainer.scrollLeft = scrollLeft - walk;
      };

      const handleMouseUp = () => {
        isDown = false;
        isInteractingRef.current = false;
        startScrolling();
      };

      const handleTouchStart = (e: TouchEvent) => {
        isDown = true;
        isInteractingRef.current = true;
        stopScrolling();
        startX = e.touches[0].pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
      };

      const handleTouchMove = (e: TouchEvent) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 1; // Scroll-fast
        scrollContainer.scrollLeft = scrollLeft - walk;
      };

      const handleTouchEnd = () => {
        isDown = false;
        isInteractingRef.current = false;
        startScrolling();
      };

      scrollContainer.addEventListener("mousedown", handleMouseDown);
      scrollContainer.addEventListener("mousemove", handleMouseMove);
      scrollContainer.addEventListener("mouseup", handleMouseUp);
      scrollContainer.addEventListener("mouseleave", handleMouseUp);
      scrollContainer.addEventListener("touchstart", handleTouchStart);
      scrollContainer.addEventListener("touchmove", handleTouchMove);
      scrollContainer.addEventListener("touchend", handleTouchEnd);

      return () => {
        scrollContainer.removeEventListener("mousedown", handleMouseDown);
        scrollContainer.removeEventListener("mousemove", handleMouseMove);
        scrollContainer.removeEventListener("mouseup", handleMouseUp);
        scrollContainer.removeEventListener("mouseleave", handleMouseUp);
        scrollContainer.removeEventListener("touchstart", handleTouchStart);
        scrollContainer.removeEventListener("touchmove", handleTouchMove);
        scrollContainer.removeEventListener("touchend", handleTouchEnd);
      };
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once on mount

    return () => {
      window.removeEventListener("resize", handleResize);
      stopScrolling();
    };
  }, []);
  
  return (
    <>
      <Head>
        <title>Skills & Abilities - Web Developer | Bilal Ahmed</title>
        <meta
          name="description"
          content="Explore the skills and abilities of Bilal Ahmed, a talented web developer. Learn about technologies like Next.js, React.js, Express.js, and more."
        />
        <meta
          name="keywords"
          content="skills, abilities, web developer skills, web development technologies, Next.js, React.js, Express.js, Redux, Firebase, Material UI, Tailwind CSS, Bootstrap, HTML5, CSS3, JavaScript, Java, Python, MongoDB, Netlify, GitHub, Amazon S3"
        />
      </Head>

      <div id="skills" className="flex flex-col items-center w-full gap-9 z-10">
      {isLargeScreen ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Skills</h2>
        </motion.div>
      ) : (
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Skills</h2>
        </div>
      )}

        <div className="block lg:hidden overflow-hidden whitespace-nowrap w-full" ref={scrollContainerRef}>
          <div className="flex gap-10 w-max">
            {skills.concat(skills).map((element, index) => (
              <div
                key={index}
                className={`flex-shrink-0 flex flex-col gap-3 items-center bg-gray-900 p-5 rounded-md w-48 ${element.color}`}
              >
                <div className="text-4xl">
                  <element.icon />
                </div>
                <div className="text-center">{element.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex flex-wrap justify-center gap-10 sm:w-[85%] lg:w-[85%] xl:w-[85%] p-5">
          {displayedSkills.map((element, index) => (
            <div
              className={`flex flex-wrap flex-col gap-3 items-center bg-gray-900 p-10 sm:p-9 md:p-8 lg:p-7 xl:p-5 rounded-md w-[12rem] sm:w-[11rem] md:w-[20vw] lg:w-[15vw] m-auto justify-center ${element.color} hover:text-[#3b82f6] `}
              key={index}
            >
              <div className="hover:-translate-y-2 transition-transform duration-200 text-[2.2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] 3xl:text-[6rem]">
                <element.icon />
              </div>
              <div className="text-center 3xl:text-[1.5rem]">{element.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
