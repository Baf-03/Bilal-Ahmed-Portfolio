"use client";
import * as React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
} from "@material-tailwind/react";
import { BellIcon } from "@heroicons/react/24/solid";
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
      comp_name: "Rawts",
      designation: "Mern Stack Developer",
      startDate: new Date("Nov 2023"),
      present: true,
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

  return (
    <div className="w-[100%] my-[5%]">
      <h1 className="text-center backgroundimage text-[2rem] md:text-[3rem] font-bold mb-5">04. Experience </h1>
      <div className="flex flex-col items-center gap-10">
        {experience.map((exp: expInt, index) => (
          <div key={index} className="h-[100%] w-[100%]">
           
            <div className=" w-[90%] flex flex-col md:flex-row gap-5 md:items-center  px-3 py-10 sm:p-10 md:p-[30px] lg:p-[50px] rounded-xl border border-blue-gray-50 bg-white mx-auto">
             
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
                <p className="text-red-500 font-bold">
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
                <h2 className="font-bold pt-3  text-red-500">
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
