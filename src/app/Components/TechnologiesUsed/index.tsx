import React, { useEffect, useRef } from "react";
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
        "JavaScript ES6",
        "TypeScript",
        "React",
        "Redux-Toolkit",
        "NextJs",
        "Tailwind CSS",
        "Material UI",
        "Bootstrap"
      ],
    },
    {
      name: "BackEnd",
      para: "dark side XD",
      option: ["Nodejs","ExpressJs", "MongoDb","My Sql","JWT","Cloudinary","aws","FireBase"],
    },
    {
      name:"Tools",
    para:"Essential tools for development and collaboration.",
     option: ["Git and Github","Google Analytics","Google Tag Manager","PostMan","VsCode","ChatGpt"]
    }
  ];
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.title = "Technologies Used - Web Developer | Bilal Ahmed";
        } else {
          document.title = "Hey,Bilal! - Mern Stack Developer";
        }
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: "0px", // No margin
        threshold: 0, // Trigger when at least half of the component is in view
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

      <div  className="flex flex-col justify-center w-[96%] lg:w-[85%] m-auto mb-9 gap-5">
        <h2 className="backgroundimage text-[2rem] text-center  md:text-[3rem] font-bold">
          Technologies used
        </h2>
        <p className="border-l border-dotted border-red-500 ps-2">
          Each project has its needs and{" "}
          <span className="text-red-500">choosing the right tools</span> makes
          all the difference. As a communicator, web developer and designer, I
          have listed below the main stacks that I usually use in each type of
          project.
        </p>

        <div ref={titleRef} className="mt-9 flex flex-wrap gap-12 justify-center md:justify-center">
          {cardsData?.map((element, index) => {
            return (
              <div
                key={index}
                className="Card w-[95%] sm:w-[60%] md:w-[45%] lg:w-[45%] xl:w-[25%]  p-2 shadow-lg"
              >
                <div className="flex flex-col items-center w-[100%] py-5 ">
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
