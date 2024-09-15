import React, { useEffect, useRef } from "react";
import Head from "next/head";
import "./tech.css";

const TechUsed = () => {
  const cardsData = [
    {
      name: "Programming Languages",
      para: "code .",
      option: ["Python","Java","Javascript","typescript"],
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
        "Redux Toolkit",
        "Next.js",
        "Tailwind CSS",
        "Particlejs",
        "AOS animation",
        "Material UI",
        "Bootstrap",
      ],
    },
    {
      name: "Back-End",
      para: "Server-side development and database management.",
      option: [
        "Node.js",
        "Express.js",
        "Nestjs",
        "MongoDB",
        "Sessions",
        "Passportjs",
        "OAuth2",
        "MySQL",
        "JWT",
        "Cloudinary",
        "AWS S3",
        "Firebase",
      ],
    },
    {
      name: "Tools",
      para: "Essential tools for development and collaboration.",
      option: [
        "Git & GitHub",
        "Google Analytics",
        "Google Tag Manager",
        "Postman",
        "VSCode",
        "ChatGPT",
      ],
    },
  ];

  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.title =
            "Technologies Used - Engineer | Bilal Ahmed | MERN Stack";
        } else {
          document.title =
            "Hey, Bilal! - Software Engineer - MERN Stack Developer";
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0,
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
          content="technologies used, web development technologies, UI/UX design, front-end development, back-end development, Figma, HTML5, CSS3, JavaScript, TypeScript, React, Redux Toolkit, Next.js, Express.js, MongoDB"
        />
      </Head>

      <div className="flex flex-col justify-center w-[96%] lg:w-full m-auto mb-9 gap-5">
        <h2 className="backgroundimage text-[2rem] text-center md:text-[3rem] font-bold">
          Technologies Used
        </h2>
        <p className="m-auto text-center border-l border-dotted border-[#3b82f6] pl-2 xl:w-[70%]">
          Each project has its needs, and{" "}
          <span className="text-[#3b82f6]">choosing the right tools</span> makes
          all the difference. As a communicator, web developer, and designer, I
          have listed below the main stacks that I usually use in each type of
          project.
        </p>

        <div
          ref={titleRef}
          className="mt-9 flex flex-wrap gap-12 justify-center"
        >
          {cardsData.map((element, index) => (
            <div
              key={index}
              className="Card w-[95%] sm:w-[60%] md:w-[45%] lg:w-[30%] p-4 shadow-lg rounded-2xl flex flex-col"
            >
              <div className="flex flex-col items-center w-full py-5">
                <h2 className="font-bold text-[1.5rem] text-[#3b82f6]">
                  {element.name}
                </h2>
                <p className="w-[85%] mx-auto text-center">{element.para}</p>
              </div>
              <div className="p-2 text-[0.9rem] flex flex-wrap gap-2 font-bold mt-2">
                {element.option.map((feature, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechUsed;
