"use client";
import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";

interface expInt {
  comp_name: string;
  designation: string;
  startDate?: any;
  present?: boolean; 
  imgurl: string;
  skills: string[];
}

export default function ActivitiesTimeline() {

  const experience = [
    {
      comp_name: "Solar Citizen",
      designation: "Full Stack Developer",
      startDate: new Date("March 2024"),
      present: true,
      imgurl:
        "https://media.licdn.com/dms/image/C4E0BAQGwp-6SYqgdmQ/company-logo_200_200/0/1676910205768/jarvis_tech_global_logo?e=2147483647&v=beta&t=9hfUf8yhUyoVVs1yrxojd-uaWU7Gw3bENdyDXVIegWY",
      skills: [
        "Reactjs",
        "TypeScript",
        "styled-components",
        "Tailwind CSS",
        "Amazon S3",
        "Express.js",
        "SQL",
      ],
    },
    {
      comp_name: "Rawts",
      designation: "Mern Stack Developer",
      startDate: "Nov 2023 - March 2024 4mos",
      present: false,
      imgurl:
        "https://www.rawts.com.pk/static/RAWTS-LOGO-2242aab9f87e5e3e8e46cb0666e0ae17.svg",
      skills: [
        "Reactjs",
        "Gatsby",
        "TypeScript",
        "styled-components",
        "Amazon S3",
        "Express.js",
        "MongoDb",
      ],
    },
    {
      comp_name: "CodSoft",
      designation: "Front End Developer",
      startDate: "Sep 2023 - Oct 2023 2mos",
      present: false,
      imgurl:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=608,fit=crop,q=95/Aq20eV79zLfpXV6b/logo-png-mnl7npnlXjHPl9KV.png",
      skills: ["Reactjs","TailwindCSS","MUI"],
    },
  ];

  const calculateDuration = (startDate: any) => {
    const currentDate = new Date();

    const monthsDiff =
      (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
      (currentDate.getMonth() - startDate.getMonth() + 1);

    const years = Math.floor(monthsDiff / 12);
    const remainingMonths = monthsDiff % 12;

    let durationString = "";

    if (years > 0) {
      durationString += `${years} ${years === 1 ? "year" : "years"}`;
    }

    if (remainingMonths > 0) {
      if (years > 0) {
        durationString += " and ";
      }
      durationString += `${remainingMonths} ${
        remainingMonths === 1 ? "month" : "months"
      }`;
    }

    return durationString;
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Come back! We miss you!";
      } else {
        document.title = "Hey,Bilal! - Software Engineer - Mern Stack -FrontEnd Developer-Backend Developer";
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
  
  const titleRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.title = "Experience Timeline - Web Developer-Software Engineer | Bilal Ahmed";
        } else {
          document.title = "Bilal Ahmed - Software Engineer -Mern Stack Developer - Karachi, PK"
        }
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: "0px", // No margin
        threshold: 0.2, // Trigger when at least half of the component is in view
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
    <div className="w-[100%] my-[5%]">
      <Head>
        <title>Experience Timeline - Web Developer | Bilal Ahmed</title>
        <meta
          name="description"
          content="Explore Bilal Ahmed's professional experience timeline as a web developer. Learn about his roles, skills, and achievements."
        />
        <meta
          name="keywords"
          content="experience timeline, professional experience, web developer, React, Next.js, Tailwind CSS, MUI, Express.js, MongoDB"
        />
        <link rel="icon" type="image/png" href="/public/favicon.png" />

      </Head>
      <h1 ref={titleRef} className="text-center backgroundimage text-[2rem] md:text-[3rem] font-bold mb-5"> Experience </h1>      <div className="flex flex-col items-center gap-10 text-black">
        {experience.map((exp: expInt, index) => (
          <div key={index} className="h-[100%] w-[100%]">
            <div className=" w-[90%] flex flex-col md:flex-row gap-5 md:items-center  px-3 py-10 sm:p-10 md:p-[30px] lg:p-[50px] rounded-xl border border-blue-gray-50 bg-[#dcdada] mx-auto">
              <div className="w-[35%] sm:w-[25%] md:w-[20%] lg:w-[15%] xl:w-[8%] mx-auto">
                <Image
                  src={exp.imgurl}
                  alt="bilal portfolio"
                  objectFit="responsive"
                  width={500}
                  height={200}
                />
              </div>
              <div className="flex flex-col gap-5 h-fit md:w-[90%]">
                <p className="text-[#3b82f6] font-bold">
                  <strong><em>{`${exp.comp_name}, ${exp.designation}`}</em></strong> 
                </p>
                {exp.present ? (
                  <p className="font-normal list-disc-red">
                    {`${exp?.startDate.toLocaleString("default", {
                      month: "short",
                      year: "numeric",
                    })} to present ${calculateDuration(exp?.startDate)}`}
                  </p>
                ) : (
                  <p className="list-disc-red">{exp?.startDate}</p>
                )}
                <h2 className="font-bold pt-3  text-[#3b82f6]">
                  <strong className="font-bold"><em> Skills And Technologies:</em></strong>
                </h2>
                <ul className="flex flex-wrap gap-5  ">
                  {exp?.skills?.map((ele: string, index: number) => (
                    <li key={index} className="ms-2 w-fit list-disc-red">
                      {ele}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
