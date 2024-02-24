import React from "react";
import Head from "next/head";
import "./tech.css";

const TechUsed = () => {
  let cardsData = [
    {
      name: "UI/UX Design",
      para: "Screens for websites and applications, interactive prototypes and mockups.",
      option: ["Figma"],
    },
    {
      name: "Front-End",
      para: "WebApps, specific features, maintenance and more.",
      option: [
        "HTML5",
        "CSS3",
        "JavaScript ES5",
        "TypeScript",
        "React+Redux",
        "NextJs",
      ],
    },
    {
      name: "BackEnd",
      para: "dark side XD",
      option: ["ExpressJs", "MongoDb"],
    },
  ];

  return (
    <>
      <Head>
        <title>Technologies Used - Web Developer | Bilal Ahmed</title>
        <meta
          name="description"
          content="Explore the technologies used by Bilal Ahmed, a skilled web developer. Learn about UI/UX design, front-end development, and back-end technologies."
        />
        <meta
          name="keywords"
          content="technologies used, web development technologies, UI/UX design, front-end development, back-end development, Figma, HTML5, CSS3, JavaScript, TypeScript, React, Redux, Next.js, Express.js, MongoDB"
        />
      </Head>

      <div className="flex flex-col justify-center w-[96%] lg:w-[85%] m-auto mb-9 gap-5">
        <h2 className="backgroundimage text-[2rem] text-center  md:text-[3rem] font-bold">
          03. Technologies used
        </h2>
        <p className="border-l border-dotted border-red-500 ps-2">
          Each project has its needs and{" "}
          <span className="text-red-500">choosing the right tools</span> makes
          all the difference. As a communicator, web developer and designer, I
          have listed below the main stacks that I usually use in each type of
          project.
        </p>

        <div className="mt-9 flex flex-wrap gap-12 justify-center md:justify-between">
          {cardsData?.map((element, index) => {
            return (
              <div
                key={index}
                className="Card w-[95%] sm:w-[60%] md:w-[45%] lg:w-[45%] xl:w-[25%] border-t-black border-t-4 border-l-4 border-l-black p-2"
              >
                <div className="flex flex-col items-center w-[100%] py-5 border-b border-dotted border-red-500">
                  <h2 className="font-bold text-[1.5rem] text-red-500">
                    {element.name}
                  </h2>
                  <p className="w-[85%] mx-auto text-center">
                    {element.para}
                  </p>
                </div>
                <div className="p-2 text-[0.8rem] sm:text-[0.9rem] flex flex-col gap-3 font-bold mt-2">
                  {element?.option?.map((feature, index) => {
                    return (
                      <div key={index}>
                        <span className="text-red-500 font-bold">&gt;</span>{" "}
                        {feature}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TechUsed;