import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import design from "../../../../public/design3.png";
import { FaCheck, FaRocket, FaLightbulb, FaCode } from "react-icons/fa";

const CreativeProcess = ({ language }:any) => {
  const process = [
    {
      name: "process_planning", // Key for the name
      para: "process_planning_description", // Key for the description
      img: design,
    },
    {
      name: "process_prototyping",
      para: "process_prototyping_description",
      img: design,
    },
    {
      name: "process_design",
      para: "process_design_description",
      img: design,
    },
    {
      name: "process_development",
      para: "process_development_description",
      img: design,
    },
    {
      name: "process_seo_and_metrics",
      para: "process_seo_and_metrics_description",
      img: design,
    },
    {
      name: "process_launch",
      para: "process_launch_description",
      img: design,
    },
  ];

  return (
    <div className="relative p-2 w-[100%] md:w-[85%] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
          {language["creative_process"]} {/* Dynamic title */}
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          {language["creative_process_description"]} {/* Dynamic description */}
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  mt-9">
        {process.map((element, index) => {
          const isLastRow = index >= process.length - 3;
          const isLastCol = (index + 1) % 3 === 0;

          return (
            <div
              key={index}
              className={`relative flex 3xl:text-[1.5rem] items-center text-center p-4 md:border-dotted md:border-[#3b82f6] ${
                !isLastRow ? "md:border-b" : ""
              } ${!isLastCol ? "md:border-r" : ""}`}
            >
              <div className="flex flex-col items-center gap-2 w-full">
                <div className="w-[30%] sm:w-[20%] md:w-[50%] lg:w-[30%] m-auto">
                  <Image
                    src={element.img}
                    alt="My image description"
                    layout="responsive"
                    width={0}
                    height={0}
                    className="hover:-translate-y-2 transition-transform duration-200"
                  />
                </div>
                <h2 className="font-bold">{language[element.name]}</h2> {/* Dynamic name */}
                <p className="lg:w-[65%]">{language[element.para]}</p> {/* Dynamic description */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CreativeProcess;
