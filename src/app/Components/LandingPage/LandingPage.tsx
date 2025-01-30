import React from "react";
import "./LandingPage.css";
import TyperEffect from "./TyperEffect";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import SocialLinks from "./SocialLinks";
import Head from "next/head";
import coverimg from "../../../../public/coverImgSvg.svg";

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
        className="flex flex-wrap overflow-x-hidden  lg:overflow-x-visible justify-center mt-[15%] sm:mt-[8%] md:mt-[5%] items-center border-gray-900 border-b-[1px] pb-[100px] min-h-[80vh] relative dark-theme-bg "
      >
        

        <div
          className="ps-2 textside w-[100%] md:text-start md:w-[100vw] lg:w-[50%] xl:w-[60%] z-30"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          
        >
          <h3 className="text-highlight 3xl:text-[1.2rem]">WELCOME TO MY WORLD</h3>
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
          <div className="w-[90%] text-[0.85rem] font-[20] pt-5 text-start md:pe-5 md:m-0 md:break-normal xl:text-[0.9rem] 3xl:text-[1.5rem] md:w-[90%] leading-6 3xl:leading-10 text-highlight 3xl:mt-3">
            Hello! I&#39;m <strong className="font-bold text-primary">Bilal</strong>
            , a certified{" "}
            <strong className="font-bold text-primary">Web Developer</strong>{" "}
            with over 2 years of experience and currently enhancing my skills at
            UBIT, Karachi University. My expertise includes{" "}
            <strong className="font-bold text-primary">
              ReactJS, Next.js, SQL, MongoDB, Expressjs, Nodejs, and many more
            </strong>{" "}
            enabling me to build responsive and efficient web applications. With
            a passion for coding and excellence, I&#39;m committed to surpassing
            client expectations. Whether it&#39;s creating interactive sites with
            ReactJS, server-rendered pages with Next.js, managing data with SQL,
            or utilizing MongoDB for flexible databases, I&#39;m ready to turn your
            web development visions into reality with{" "}
            <strong className="font-bold text-primary">
              cutting-edge solutions.
            </strong>
            <div className="mt-5 flex gap-5 ">
              <div className="flex gap-2 items-center text-primary">
                <FaLocationDot />
                <strong className="font-bold text-highlight">Karachi, PK</strong>
              </div>
              <div className="flex gap-2 items-center text-primary">
                <FaCheck />
                <strong className="font-bold text-highlight">Available for jobs</strong>
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
