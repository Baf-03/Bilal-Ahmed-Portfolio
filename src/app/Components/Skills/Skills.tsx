import React from "react";
import Head from "next/head";
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

const Skills = () => {
  let skills = [
    {
      icon: TbBrandNextjs,
      name: "Next.js",
      color: "text-cyan-400",
    },
    {
      icon: RiReactjsLine,
      name: "React.js",
      color: "text-cyan-400",
    },
    {
      icon: SiExpress,
      name: "Express.js",
      color: "text-cyan-400",
    },
    {
      icon: FaNode,
      name: "Node.js",
      color: "text-green-400",
    },
    {
      icon: TbBrandRedux,
      name: "Redux",
      color: "text-purple-600",
    },
    {
      icon: TbBrandFirebase,
      name: "Firebase",
      color: "text-yellow-800",
    },
    {
      icon: SiMui,
      name: "Material UI",
      color: "text-blue-600",
    },
    {
      icon: SiTailwindcss,
      name: "Tailwind CSS",
      color: "text-blue-400",
    },
    {
      icon: SiBootstrap,
      name: "Bootstrap",
      color: "text-purple-800",
    },
    {
      icon: TfiHtml5,
      name: "HTML5",
      color: "text-orange-700",
    },
    {
      icon: TiCss3,
      name: "CSS3",
      color: "text-blue-700",
    },
    {
      icon: TbBrandJavascript,
      name: "JavaScript",
      color: "text-amber-800",
    },
    {
      icon: SiTypescript,
      name: "TypeScript",
      color: "text-blue-800",
    },
    {
      icon: BiLogoJava,
      name: "Java",
      color: "text-blue-800",
    },
    {
      icon: TbBrandPython,
      name: "Python",
      color: "text-yellow-500",
    },
    {
      icon: SiMongodb,
      name: "MongoDB",
      color: "text-green-500",
    },
    {
      icon: GrMysql,
      name: "Sql",
      color: "text-blue-800",
    },
    {
      icon: SiNetlify,
      name: "Netlify",
      color: "text-blue-500",
    },
    {
      icon: BsGithub,
      name: "GitHub",
      color: "text-white",
    },
    {
      icon: SiAmazons3,
      name: "Amazon S3",
      color: "text-white",
    },
    {
      icon: SiJsonwebtokens ,
      name: "Json Web Token",
      color: "text-red-400",
    },
  ];

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

      <div id="skills" className="flex flex-col items-center  w-[100%] gap-9">
        <h1 className="backgroundimage text-center text-[2rem] md:text-[3rem] font-bold  pt-9">
          Skills & Abilities
        </h1>
        <div className="flex flex-wrap justify-center gap-10 sm:w-[85%]  p-5">
          {skills.map((element, index) => {
            return (
              <div
                className={`flex flex-col gap-3 items-center bg-gray-900 p-5 rounded-md w-[8rem] sm:w-[15rem] md:w-[15vw] lg:w-[12vw]  ${element.color} hover:text-[#3b82f6] `}
                key={index}
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <div className="hover:-translate-y-2 transition-transform duration-200 text-[2.2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem]">
                  <element.icon />
                </div>
                <div className="text-center">{element.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
