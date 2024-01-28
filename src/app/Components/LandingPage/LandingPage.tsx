import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import Typewriter from "typewriter-effect";
import { FiLinkedin } from "react-icons/fi";
import { BiLogoUpwork } from "react-icons/bi";
import { SiFiverr } from "react-icons/si";
import TyperEffect from "./TyperEffect";

function LandingPage() {
  return (
    <div className="w-[100%] flex flex-wrap justify-center mt-[15%] sm:mt-[8%] md:mt-[5%] items-center border-gray-900 border-b-[1px] pb-[100px] min-h-[80vh]">
      <div
        className="textside w-[100%] md:text-start lg:w-[60%]"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h3 className="">WELCOME TO MY WORLD</h3>
        <h1 className="font-bold mt-3  text-[1.8rem] lg:mt-0 lg:text-[4rem] xl:text-[3.5rem]">
          <div className="flex text-[1.8rem] md:text-[2.5rem]">Hi,</div>{" "}
          <span className="imintro">I’m </span>
          <span className="backgroundimage">
            <strong className="font-bold">Bilal Ahmed</strong>
          </span>
        </h1>
        <div className="flex font-bold text-[3rem] ">
          {/* <TyperEffect/> */}
        </div>
        <div className="w-[100%] text-[0.85rem] font-light pt-5 text-start md:pe-5 m-auto md:m-0  md:break-normal md:text-[1.3rem] md:w-[90%] ">
          I am <strong>Bilal Ahmed</strong> a persistent Computer Science
          undergraduate in a wellrecognized institute University of Karachi 
          UBIT having knowledge of Web Development I am Skilled in designing
          creative Web Pages and Patterns. A technology enthusiast who believes
          in the technology revolution. I keep myself updated on the upcoming
          technologies which will revolutionize the digital world in the future
          and will solve modernday life problems.
          <div className="flex gap-6 mt-[15%] items-center text-[2rem] md:text-[3rem] lg:gap-11">
            <div className="cursor-pointer">
              <FiLinkedin />
            </div>
            <div className=" cursor-pointer">
              <BiLogoUpwork />
            </div>
            <div className=" cursor-pointer">
              <SiFiverr />
            </div>
          </div>
        </div>
      </div>

      <div className="imageside w-[100%] mt-5 flex justify-center relative rounded-lg ml-[5%] lg:mt-0 lg:w-[30%] lg:h-[40vh]">
        {/* <img
          src="https://grademiners.com/wp-content/themes/grademiners.com/page-money-back/images/hero.png"
          className="  bottom-0 left-1 w-fit"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        
        /> */}
      </div>
    </div>
  );
}

export default LandingPage;
