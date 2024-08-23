"use client";
import React, { useEffect, useState } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import { Button, ButtonBase, CircularProgress } from "@mui/material";
import Image from "next/image";

interface Project {
  ProjectName: string;
  Description: string;
  img: any;
  linkCode: string;
  linkSite: string;
  id: string;
  isshow: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      ProjectName: "Food Recipe Sharing App",
      Description: `This project harmonizes React/Redux with Express.js/MongoDB, following MVC
        architecture on the backend. It integrates JWT for authentication, Cloudinary for
        image uploads, and MongoDB for data storage, including a search query`,
      img: "/recipe-sharing.png",
      linkCode: "https://github.com/Baf-03/FrontEnd-FoodRecipe",
      linkSite: "https://foodrecipesharing.netlify.app/login",
      id: "1",
      isshow: "false",
    },
    {
      ProjectName: "Memory Game",
      Description: "This project is made by using Reactjs and TailwindCss.",
      img: "/MemoryGame.png",
      linkCode: "https://github.com/Baf-03/Memory-Game",
      linkSite: "https://memory-game-baf.netlify.app/",
      id: "1",
      isshow: "false",
    },
    {
      ProjectName: "My Course Hero WebApp",
      Description: `This project, developed using the MERN stack, features comprehensive CRUD operations, robust user authentication with JWT tokens, and well-defined public and private routing.`,
      img: "/mycoursehero.png",
      linkCode: "https://github.com/Baf-03/MyCourses-clientSide",
      linkSite: "https://mycoursehero.netlify.app/auth/login",
      id: "1",
      isshow: "false",
    },
    {
      ProjectName: "Encrypted Todo",
      Description: `This project is built on the MERN stack, featuring secure user authentication with JWT tokens and encrypted storage of todos to ensure data privacy.`,
      img: "/encryptodo.png",
      linkCode: "",
      linkSite: "https://encryptodo.netlify.app/auth/login",
      id: "1",
      isshow: "false",
    },
    {
      ProjectName: "Attendance App",
      Description: `This Project is made by using MERN STACK`,
      img: "/attendanceapp.png",
      linkCode: "",
      linkSite: "",
      id: "1",
      isshow: "false",
    },
    {
      ProjectName: "Github User Finder",
      Description:
        "This project is made by using Reactjs,MaterialUi and TailwindCss. ",
      img: "/githubuserfinder.png",
      linkCode: "https://github.com/Baf-03/Github-User-Finder",
      linkSite: "https://github-user-finder-baf.netlify.app/",
      id: "2",
      isshow: "false",
    },
    {
      ProjectName: "Weather App",
      Description:
        "this project is made by using Reactjs,Axios,Mui and TailwindCSS",
      img: "/weatherappreact.png",
      linkCode: "https://github.com/Baf-03/weather-app-in-reactjs",
      linkSite: "https://weather-app-reactjs-baf.netlify.app/",
      id: "1",
      isshow: "false",
    },
    {
      ProjectName: "Todo List ",
      Description:
        "This Project is made by using Reactjs ,Material Ui and TailwindCSS",
      img: "/todoreact.png",
      linkCode: "https://github.com/Baf-03/Todolist",
      linkSite: "https://todo-baf.netlify.app/",
      id: "2",
      isshow: "false",
    },
    {
      ProjectName: "Facebook Clone",
      Description: "This project is made by using Reactjs and Bootstrap",
      img: "/facebook.png",
      linkCode: "https://github.com/Baf-03/Facebook-Clone",
      linkSite: "",
      id: "1",
      isshow: "hidden",
    },
    {
      ProjectName: "Tic Tac Toe",
      Description: "it is what is ",
      img: "/tictactoe.png",
      linkCode: "https://github.com/Baf-03/tic-tac-toe-using-html-css-js",
      linkSite: "https://baf-03.github.io/tic-tac-toe-using-html-css-js/",
      id: "2",
      isshow: "",
    },
    {
      ProjectName: "Olx Clone",
      Description: "This project is made by using Reactjs and Bootstrap",
      img: "/olxclone.png",
      linkCode: "https://github.com/Baf-03/OLX-Clone-using-reactjs",
      linkSite: "https://olx-clone-baf03.netlify.app/",
      id: "2",
      isshow: "",
    },
    {
      ProjectName: "Ecommerce Website",
      Description: "it is what is Ecommerce Website",
      img: "/ecom.png",
      linkCode: "https://github.com/Baf-03/-Ecommerce-Website",
      linkSite: "https://baf-03.github.io/-Ecommerce-Website/",
      id: "1",
      isshow: "",
    },
    {
      ProjectName: "Upwork Clone",
      Description: "it is what is....Upwork Clone ",
      img: "/upwork-clone.png",
      linkCode: "https://github.com/Baf-03/upwork-clone",
      linkSite: "",
      id: "1",
      isshow: "",
    },
  ]);

  const [projectLimit, setProjectLimit] = useState<Project[]>([]);
  const [viewMore, setViewMore] = useState(false);

  const handleViewMore = () => {
    setViewMore(!viewMore);
  };

  useEffect(() => {
    if (viewMore) {
      setProjectLimit(projects.slice());
      return;
    }
    setProjectLimit(projects.slice(0, 5));
  }, [viewMore, projects]);

  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <div className="border w-[100%] flex justify-center items-center h-[80vh] text-[3rem] font-bold">
          Loading
          <div className="w-[5vw] ">
            <CircularProgress color="inherit" />
          </div>
        </div>
      ) : (
        <div
          id="Projects"
          className="w-[98vw] bgimg bg-fixed"
          style={{
            backgroundImage: `url(${"https://muhammad-ausaf-jamal.vercel.app/assets/h2_project_shape-RQDOSgKC.png"})`,
          }}
        >
          <div className="projects flex flex-col w-[90%] lg:gap-5 flex-wrap items-center lg:p-8 m-auto">
            <div className="text-center">
              <h2 className="backgroundimage text-[2rem] text-center md:text-[3rem] font-bold">
                Development Showcase
              </h2>
            </div>
            <div className="flex w-[100%] gap-5 lg:gap-[3rem] flex-wrap justify-center bg-fixed p-5 mt-5">
              {projectLimit.map((product: Project, index: number) => (
                <div
                  key={index}
                  className="w-[350px] md:w-[300px] lg:w-[300px] xl:w-[400px] rounded-lg transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                        src={product.img}
                        alt={product.img}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        // This is optional, used for preloading the image if it's important for the initial loading
                      />
                      <Image
                        alt={product.img}
                        src={product.img}
                        className="h-[15rem] rounded-lg object-cover hover:opacity-[0.6]"
                        width={200}
                        height={200}
                        objectFit="cover"
                        objectPosition="center"
                      />
                    <div className="glass-effect cardprojects absolute bottom-0 bg-[#3b82f6] bg-opacity-80 p-4 w-[100%] text-center text-white font-bold capitalize text-[1.5rem]">
                      {product.ProjectName}
                    </div>
                  </div>
                  <div className="md:min-h-[12vh] m-2 text-[0.9rem] text-center">
                    {product.Description}
                  </div>
                  <div className="flex gap-2 justify-center pb-3">
                    {product.linkCode && (
                      <a href={product.linkCode} target="_blank">
                        <Button
                          variant="contained"
                          className="bg-[#3b82f6] p-3 rounded-2xl hover:bg-[#285fbf] transition-colors duration-300"
                        >
                          View Code
                        </Button>
                      </a>
                    )}
                    {product.linkSite ? (
                      <a href={product.linkSite} target="_blank">
                        <Button
                          variant="contained"
                          className="bg-[#3b82f6] p-3 rounded-2xl hover:bg-[#285fbf] transition-colors duration-300"
                        >
                          View Site
                        </Button>
                      </a>
                    ) : (
                      <Button
                        variant="contained"
                        className="bg-gray-300 p-3 cursor-not-allowed rounded-2xl"
                        disabled
                      >
                        Site Not Available
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div onClick={handleViewMore}>
              <ButtonBase>
                {viewMore ? (
                  <div>View less</div>
                ) : (
                  <div>View more projects</div>
                )}
              </ButtonBase>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
