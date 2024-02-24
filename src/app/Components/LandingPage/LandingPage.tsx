import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import TyperEffect from "./TyperEffect";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import SocialLinks from "./SocialLinks";



function LandingPage() {
  return (
    <div id="about" className="w-[100%] flex flex-wrap justify-center mt-[15%] sm:mt-[8%] md:mt-[5%] items-center border-gray-900 border-b-[1px] pb-[100px] min-h-[80vh]">
      <div
        className="ps-2 textside w-[100%] md:text-start lg:w-[60%]"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h3 className="">WELCOME TO MY WORLD</h3>
        <h1 className="font-bold mt-3  text-[1.8rem] lg:text-[2.5rem] xl:text-[3rem]">
          <div className="flex text-[1.8rem] md:text-[2.5rem] lg:text-[2rem] xl:text-[2.5rem]">Hi,</div>{" "}
          <span className="imintro">I’m </span>
          <span className="backgroundimage">
            <strong className="font-bold">Bilal Ahmed</strong>
          </span>
        </h1>
        <div className="flex font-bold text-[3rem] ">
          <TyperEffect/>
        </div>
        <div className="w-[90%] text-[0.85rem] font-light pt-5 text-start md:pe-5  md:m-0  md:break-normal xl:text-[1rem] md:w-[90%] ">
          I am <strong className="text-red-500">Bilal Ahmed</strong> a persistent Computer Science
          undergraduate in a wellrecognized institute University of Karachi UBIT
          having knowledge of Web Development I am Skilled in designing creative
          <strong className="text-red-500"> Web Pages</strong> and <strong className="text-red-500">Patterns.</strong> A technology enthusiast who believes in the
          technology revolution. I keep myself updated on the upcoming
          technologies which will revolutionize the digital world in the future
          and will solve modern day life problems.
          <div className="mt-5 flex gap-5">
            <div className="flex gap-2 items-center text-red-500" ><FaLocationDot /><strong className="font-bold text-black">Karachi,PK</strong></div>
            <div className="flex gap-2 items-center text-red-500" ><FaCheck /><strong className="font-bold text-black">Available for jobs</strong></div>
          </div>
            
          <div className="flex gap-6 mt-[15%] items-center text-[2rem] md:text-[3rem] lg:gap-11">
            <SocialLinks/>
          </div>
        </div>
      </div>

      <div className="imageside w-[70%] mt-5 flex justify-center relative rounded-lg ml-[5%] lg:mt-0 sm:w-[50%] md:w-[40%] lg:w-[35%] ">
        <Image
          src={"https://grademiners.com/wp-content/themes/grademiners.com/page-money-back/images/hero.png"}
          alt="bilal portfolio"
          layout="responsive"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}

export default LandingPage;
