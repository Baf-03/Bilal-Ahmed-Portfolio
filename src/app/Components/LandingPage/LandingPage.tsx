import React from "react";
import "./LandingPage.css";
import TyperEffect from "./TyperEffect";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import SocialLinks from "./SocialLinks";
import Head from "next/head";
import coverimg from "../../../../public/coverimg.png";

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

      <div
        id="about"
        className="w-[100%] flex flex-wrap justify-center mt-[15%] sm:mt-[8%] md:mt-[5%] items-center border-gray-900 border-b-[1px] pb-[100px] min-h-[80vh] relative dark-theme-bg"
      >
        <div className="userSelect text-[10rem] fixed opacity-[0.1] text-gray-500 z-0">
          &#60;/&#62;
        </div>

        <div
          className="ps-2 textside w-[100%] md:text-start lg:w-[60%]"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h3 className="text-highlight">WELCOME TO MY WORLD</h3>
          <h1 className="font-bold mt-3 text-[1.8rem] lg:text-[2.5rem] xl:text-[3rem] text-highlight">
            <div className="flex text-[1.8rem] md:text-[2.5rem] lg:text-[2rem] xl:text-[2.5rem]">
              Hi,
            </div>{" "}
            <span className="imintro">I&#39;m </span>
            <span className="backgroundimage">
              <strong className="font-bold">Bilal Ahmed</strong>
            </span>
          </h1>
          <div className="flex font-bold text-[3rem] text-highlight">
            <TyperEffect />
          </div>
          <div className="w-[90%] text-[0.85rem] font-[20] pt-5 text-start md:pe-5 md:m-0 md:break-normal xl:text-[0.9rem] md:w-[90%] leading-6 text-highlight">
            Hello! I&#39;m <strong className="font-bold text-primary">Bilal</strong>
            , a certified{" "}
            <strong className="font-bold text-primary">Web Developer</strong>{" "}
            with over a year of experience and currently enhancing my skills at
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
            <div className="mt-5 flex gap-5">
              <div className="flex gap-2 items-center text-primary">
                <FaLocationDot />
                <strong className="font-bold text-highlight">Karachi, PK</strong>
              </div>
              <div className="flex gap-2 items-center text-primary">
                <FaCheck />
                <strong className="font-bold text-highlight">Available for jobs</strong>
              </div>
            </div>

            <div className="flex gap-6 mt-[15%] items-center text-[2rem] md:text-[3rem] lg:gap-11">
              <SocialLinks />
            </div>
          </div>
        </div>

        <div className="imageside w-[70%] mt-5 flex justify-center relative rounded-lg ml-[5%] lg:mt-0 sm:w-[50%] md:w-[40%] lg:w-[35%] lg:min-h-[25rem]">
          <div className="w-full h-[16rem]  rounded-lg overflow-hidden">
            <Image
              src={coverimg}
              alt="bilal portfolio"
              layout="fill"
              objectFit="cover"
              className="dark-theme-img"
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
