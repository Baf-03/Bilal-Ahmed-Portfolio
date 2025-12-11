"use client";

import React from "react";
import TyperEffect from "./TyperEffect";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import SocialLinks from "./SocialLinks";
import "./LandingPage.css"
import Head from "next/head";
import coverimg from "../../../../public/coverImgSvg.svg";
import { FaCode, FaLightbulb, FaRocket } from "react-icons/fa";
import { Code, Lightbulb, Rocket } from "lucide-react";

function LandingPage({ language }: any) {
  return (
    <>
      <Head>
        <title>Bilal Ahmed - Software Engineer | Karachi, PK</title>
        <meta
          name="description"
          content="Bilal Ahmed is a skilled Software Engineer based in Karachi, Pakistan. Explore his portfolio and services. Available for jobs."
        />
        <meta
          name="keywords"
          content="Bilal Ahmed, web developer, Karachi, Pakistan, portfolio, services, jobs"
        />
        <link rel="icon" type="image/png" href="../../favicon.ico" />
      </Head>

      <div
        id="about"
        className={`w-full flex flex-wrap overflow-x-hidden  lg:overflow-x-visible justify-center mt-[15%] sm:mt-[8%] md:mt-[5%] items-center border-gray-900 border-b-[1px] pb-[100px] min-h-[80vh] relative dark-theme-bg `}
      >
        <div
          className="ps-2 textside w-[100%] md:text-start md:w-[100vw] lg:w-[50%] xl:w-[60%] z-30"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h3 className="text-lg md:text-xl lg:text-2xl mb-4 font-semibold mt-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            {language["welcome_to_my_world"]}
          </h3>
          <h1 className="font-bold mt-3 text-[1.8rem] lg:text-[2.5rem] xl:text-[3rem] text-highlight">
            <div className="flex text-[1.8rem] md:text-[2.5rem] lg:text-[2rem] xl:text-[2.5rem] 3xl:text-[4.2rem]">
              {language["hi"]},
            </div>{" "}
            <span className="imintro 3xl:text-[4rem]">{language["im_bilal_ahmed"]} </span>
            <span className="backgroundimage 3xl:text-[4.2rem]">
              <strong className="font-bold">{language["bilal_ahmed"]}</strong>
            </span>
          </h1>
          <div className="flex font-bold text-[3rem] 3xl:text-[4.2rem] text-highlight">
            <TyperEffect />
          </div>
          <div className="w-[90%] text-[0.85rem] font-[400]  md:font-[20] pt-5 text-start md:pe-5 md:m-0 md:break-normal xl:text-[1.2rem] 3xl:text-[1.5rem] md:w-[90%] leading-6 3xl:leading-10 text-highlight 3xl:mt-3 ">
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="bg-blue-500/10 p-2 rounded-full mr-3 flex-shrink-0 ">
                  <Lightbulb className="text-blue-500 w-5 h-5" />
                </span>
                <span>
                  <strong className="text-blue-500 font-medium">{language["years_of_experience"]}</strong>{" "}
                  {language["experience_description"]}
                </span>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-500/10 p-2 rounded-full mr-3 flex-shrink-0">
                  <Code className="text-blue-500 w-5 h-5" />
                </span>
                <span>
                  {language["expertise_in_clean_code"]}{" "}
                  <strong className="text-blue-500 font-medium">{language["user_friendly_experiences"]}</strong>
                </span>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-500/10 p-2 rounded-full mr-3 flex-shrink-0">
                  <Rocket className="text-blue-500 w-5 h-5" />
                </span>
                <span>
                  {language["passionate_about_problem_solving"]},{" "}
                  <strong className="text-blue-500 font-medium">{language["leadership"]}</strong>, and leveraging{" "}
                  <strong className="text-blue-500 font-medium">{language["cutting_edge_technologies"]}</strong>
                </span>
              </li>
            </ul>
            <div className="mt-5 flex gap-5  md:mt-12">
              <div className="flex items-center gap-2 text-blue-400 bg-blue-500/10 px-4 py-2 rounded-full">
                <FaLocationDot />
                <span className="font-bold text-sm md:text-base">{language["karachi_pk"]}</span>
              </div>
              <div className="flex items-center gap-2 text-blue-400 bg-blue-500/10 px-4 py-2 rounded-full">
                <FaCheck />
                <span className="font-bold text-sm md:text-base">{language["available_for_jobs"]}</span>
              </div>
            </div>

            <div className="flex gap-6 mt-[15%] items-center text-[2rem] md:text-[3rem] 3xl:text-[4.2rem]  lg:gap-11">
              <SocialLinks />
            </div>
          </div>
        </div>

        <div className="imageside mt-10 w-full sm:w-[70%] flex justify-center relative rounded-lg ml-0 lg:mt-0 lg:ml-[5%] md:w-[50%] lg:w-[45%] xl:w-[35%]">
          <div className="relative w-full aspect-square max-w-md">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-teal-400/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <Image
              src={coverimg}
              alt="Bilal portfolio"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain relative z-10"
              priority
            />
          </div>
          <div className="floating-icons z-99">
            <div className="icon icon1"></div>
            <div className="icon icon2"></div>
            <div className="icon icon3"></div>
            <div className="icon icon4"></div>
          </div>

        </div>
      </div>
    </>
  );
}

export default LandingPage;
