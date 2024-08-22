import React from "react";
import Image from "next/image";

const CreativeProcess = () => {
  const process = [
    {
      name: "01. Planning",
      para: "We study your idea to outline the best strategy and choose the most appropriate digital solutions.",
      img: "https://eiharold.com/wp-content/uploads/2022/02/icon-planejamento.png",
    },
    {
      name: "02. Prototyping",
      para: "We study your idea to outline the best strategy and choose the most appropriate digital solutions.",
      img: "https://eiharold.com/wp-content/uploads/2022/02/icon-prototipagem.png",
    },
    {
      name: "03. Design",
      para: "We study your idea to outline the best strategy and choose the most appropriate digital solutions.",
      img: "https://eiharold.com/wp-content/uploads/2022/02/icone-design-2.png",
    },
    {
      name: "04. Development",
      para: "We study your idea to outline the best strategy and choose the most appropriate digital solutions.",
      img: "https://eiharold.com/wp-content/uploads/2022/02/icone-desenvolvimento-2.png",
    },
    {
      name: "05. SEO and Metrics",
      para: "We study your idea to outline the best strategy and choose the most appropriate digital solutions.",
      img: "https://eiharold.com/wp-content/uploads/2022/02/icon-seo.png",
    },
    {
      name: "06. Launch",
      para: "We study your idea to outline the best strategy and choose the most appropriate digital solutions.",
      img: "https://eiharold.com/wp-content/uploads/2022/02/icon-lancamento-2.png",
    },
  ];
  return (
    <div className="relative p-2 w-[100%] md:w-[85%] mx-auto">
      <h2 className="backgroundimage text-[2rem] text-center md:text-[3rem] font-bold">
        Creative Process
      </h2>
      <p className="w-[90%] md:w-[85%] mt-9 md:border-l md:border-dotted md:border-[#3b82f6] ps-2">
        Creating a digital solution{" "}
        <span className="text-[#3b82f6] font-bold">
          is not as simple as it seems
        </span>
        . There are several steps, from conception to product launch. Below I
        highlight some of these steps in summary so that you can visualize the
        process.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  mt-9">
        {process.map((element, index) => {
          const isLastRow = index >= process.length - 3;
          const isLastCol = (index + 1) % 3 === 0;

          return (
            <div
              key={index}
              className={`relative flex items-center text-center p-4 md:border-dotted md:border-[#3b82f6] ${
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
                  />
                </div>
                <h2 className="font-bold">{element.name}</h2>
                <p className="lg:w-[65%]">{element.para}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CreativeProcess;
