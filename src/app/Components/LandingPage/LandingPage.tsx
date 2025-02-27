import React from "react";
import "./LandingPage.css";
import TyperEffect from "./TyperEffect";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import SocialLinks from "./SocialLinks";
import Head from "next/head";
import coverimg from "../../../../public/coverImgSvg.svg";
import { FaCode, FaLightbulb, FaRocket } from "react-icons/fa";

function LandingPage() {
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
      <link rel="icon" type="image/png" href="/public/favicon.png" />

      </Head>

      <div
        id="about"
        className= {`w-full flex flex-wrap overflow-x-hidden  lg:overflow-x-visible justify-center mt-[15%] sm:mt-[8%] md:mt-[5%] items-center border-gray-900 border-b-[1px] pb-[100px] min-h-[80vh] relative dark-theme-bg `}
      >
        

        <div
          className="ps-2 textside w-[100%] md:text-start md:w-[100vw] lg:w-[50%] xl:w-[60%] z-30"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          
        >
          <h3 className="text-lg md:text-xl lg:text-2xl mb-4 font-semibold mt-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">WELCOME TO MY WORLD</h3>
          <h1 className="font-bold mt-3 text-[1.8rem] lg:text-[2.5rem] xl:text-[3rem] text-highlight">
            <div className="flex text-[1.8rem] md:text-[2.5rem] lg:text-[2rem] xl:text-[2.5rem] 3xl:text-[4.2rem]">
              Hi,
            </div>{" "}
            <span className="imintro 3xl:text-[4rem]">I&#39;m </span>
            <span className="backgroundimage 3xl:text-[4.2rem]">
              <strong className="font-bold">Bilal Ahmed</strong>
            </span>
          </h1>
          <div className="flex font-bold text-[3rem] 3xl:text-[4.2rem] text-highlight">
            <TyperEffect />
          </div>
          <div className="w-[90%] text-[0.85rem] font-[400]  md:font-[20] pt-5 text-start md:pe-5 md:m-0 md:break-normal xl:text-[1.2rem] 3xl:text-[1.5rem] md:w-[90%] leading-6 3xl:leading-10 text-highlight 3xl:mt-3 ">
            
          <ul className="space-y-4">
              <li className="flex items-start">
                <FaLightbulb className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                <span>
                   <strong className="text-primary">2+ years</strong> of experience crafting
                  innovative digital solutions
                </span>
              </li>
              <li className="flex items-start">
                <FaCode className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                <span>
                  Expertise in <strong className="text-primary">clean code</strong> and building{" "}
                  <strong className="text-primary">user-friendly experiences</strong>
                </span>
              </li>
              <li className="flex items-start">
                <FaRocket className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                <span>
                  Passionate about <strong className="text-primary">problem-solving</strong>,{" "}
                  <strong className="text-primary">leadership</strong>, and leveraging{" "}
                  <strong className="text-primary">cutting-edge technologies</strong>
                </span>
              </li>
            </ul>
            <div className="mt-5 flex gap-5  md:mt-12">
            <div className="flex items-center gap-2 text-blue-400 bg-blue-500/10 px-4 py-2 rounded-full">
            <FaLocationDot />
            <span className="font-bold text-sm md:text-base">Karachi, PK</span>
          </div>
          <div className="flex items-center gap-2 text-blue-400 bg-blue-500/10 px-4 py-2 rounded-full">
            <FaCheck />
            <span className="font-bold text-sm md:text-base">Available for jobs</span>
          </div>
            </div>

            <div className="flex gap-6 mt-[15%] items-center text-[2rem] md:text-[3rem] 3xl:text-[4.2rem]  lg:gap-11">
              <SocialLinks />
            </div>
          </div>
        </div>

        <div className="imageside mt-10 w-full sm:w-[70%] flex justify-center relative rounded-lg ml-0 lg:mt-0 lg:ml-[5%] md:w-[50%] lg:w-[45%] xl:w-[35%]">
  <div className="relative w-full h-0 pb-[56.25%]"> {/* Maintain aspect ratio */}
    <Image
      src={coverimg}
      alt="Bilal portfolio"
      layout="fill"
      objectFit="contain"
      className="dark-theme-img"
      priority // Ensures the image is preloaded for faster rendering
    />
  </div>
  <div className="floating-icons">
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
