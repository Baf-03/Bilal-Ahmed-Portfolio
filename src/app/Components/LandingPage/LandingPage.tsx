import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import TyperEffect from "./TyperEffect";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import SocialLinks from "./SocialLinks";
import Head from "next/head";


function LandingPage() {
  return (
    <>
     <Head>
        <title>Bilal Ahmed - Web Developer | Karachi, PK</title>
        <meta
          name="description"
          content="Bilal Ahmed is a skilled web developer based in Karachi, Pakistan. Explore his portfolio and services. Available for jobs."
        />
        <meta
          name="keywords"
          content="Bilal Ahmed, web developer, Karachi, Pakistan, portfolio, services, jobs"
        />
      </Head>
   
    <div id="about" className="w-[100%] flex flex-wrap justify-center mt-[15%] sm:mt-[8%] md:mt-[5%] items-center border-gray-900 border-b-[1px] pb-[100px] min-h-[80vh] relative">
    <div className="text-[10rem] fixed opacity-[0.1] text-gray-500 z-0">&#60;/&#62;</div>

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
        <div className="w-[90%] text-[0.85rem] font-[20] pt-5 text-start md:pe-5  md:m-0  md:break-normal xl:text-[0.9rem] md:w-[90%] leading-6 ">
        Hello! Im <strong className="font-bold text-red-500">Bilal</strong> , a certified  <strong className="font-bold text-red-500">Web Developer</strong> with over a year of experience and currently enhancing my skills at UBIT, Karachi University. My expertise includes <strong className="font-bold text-red-500">ReactJS, Next.js, SQL, and MongoDB,</strong> enabling me to build responsive and efficient web applications. With a passion for coding and excellence, Im committed to surpassing client expectations. Whether its creating interactive sites with ReactJS, server-rendered pages with Next.js, managing data with SQL, or utilizing MongoDB for flexible databases, Im ready to turn your web development visions into reality with <strong className="font-bold text-red-500">cutting-edge solutions.</strong>
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
    </>
  );
}

export default LandingPage;
