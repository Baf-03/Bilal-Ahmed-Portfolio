"use client";
import React, { useEffect, useState } from "react";

import { Link as ScrollLink, Element } from "react-scroll";
import { Button, ButtonBase, CircularProgress } from "@mui/material";

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
        img: "/MemoryGame.png",
        linkCode: "https://github.com/Baf-03/Memory-Game",
        linkSite: "https://memory-game-baf.netlify.app/",
        id: "1",
        isshow: "false",
      },
      {
        ProjectName: "Attendance App",
        Description: `This Project is made by using MERN STACK`,
        img: "/MemoryGame.png",
        linkCode: "https://github.com/Baf-03/Memory-Game",
        linkSite: "https://memory-game-baf.netlify.app/",
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
      ProjectName: "Memory Game",
      Description: "This project is made by using Reactjs and TailwindCss.",
      img: "/MemoryGame.png",
      linkCode: "https://github.com/Baf-03/Memory-Game",
      linkSite: "https://memory-game-baf.netlify.app/",
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
      img: "/MemoryGame.png",
      linkCode: "https://github.com/Baf-03/Facebook-Clone",
      linkSite: "lol",
      id: "1",
      isshow: "hidden",
    },
    {
      ProjectName: "Olx Clone",
      Description: "This project is made by using Reactjs and Bootstrap",
      img: "/MemoryGame.png",
      linkCode: "https://github.com/Baf-03/OLX-Clone-using-reactjs",
      linkSite: "https://olx-clone-baf03.netlify.app/",
      id: "2",
      isshow: "",
    },
    {
      ProjectName: "Ecommerce Website",
      Description: "it is what is ",
      img: "/MemoryGame.png",
      linkCode: "http",
      linkSite: "lol",
      id: "1",
      isshow: "",
    },
    {
      ProjectName: "Nice ",
      Description: "it is what is ",
      img: "/MemoryGame.png",
      linkCode: "http",
      linkSite: "lol",
      id: "2",
      isshow: "",
    },
    {
      ProjectName: "hello world",
      Description: "it is what is ",
      img: "/MemoryGame.png",
      linkCode: "http",
      linkSite: "lol",
      id: "1",
      isshow: "",
    },
    {
      ProjectName: "Nice ",
      Description: "it is what is ",
      img: "/MemoryGame.png",
      linkCode: "http",
      linkSite: "lol",
      id: "2",
      isshow: "",
    },
    {
      ProjectName: "hello world",
      Description: "it is what is ",
      img: "/MemoryGame.png",
      linkCode: "http",
      linkSite: "lol",
      id: "1",
      isshow: "",
    },
    {
      ProjectName: "Nice ",
      Description: "it is what is ",
      img: "/MemoryGame.png",
      linkCode: "http",
      linkSite: "lol",
      id: "2",
      isshow: "",
    },
    {
      ProjectName: "hello world",
      Description: "it is what is ",
      img: "/MemoryGame.png",
      linkCode: "http",
      linkSite: "lol",
      id: "1",
      isshow: "",
    },
    {
      ProjectName: "Nice ",
      Description: "it is what is ",
      img: "/MemoryGame.png",
      linkCode: "http",
      linkSite: "lol",
      id: "2",
      isshow: "",
    },
    {
      ProjectName: "Nice ",
      Description: "it is what is ",
      img: "/MemoryGame.png",
      linkCode: "http",
      linkSite: "lol",
      id: "2",
      isshow: "",
    },
    {
      ProjectName: "Nice ",
      Description: "it is what is ",
      img: "/MemoryGame.png",
      linkCode: "http",
      linkSite: "lol",
      id: "2",
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
    setProjectLimit(projects.slice(0, 10));
  }, [viewMore, projects]);

  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <div className="w-[100%] flex justify-center items-center h-[80vh] text-[3rem] font-bold">
          Loading
          <div className="w-[5vw] ">
            <CircularProgress color="inherit" />
          </div>
        </div>
      ) : (
        <>
          <div
            className="projects flex flex-col w-[100%] lg:gap-5 flex-wrap items-center bg-fixed  lg:p-8 bg-cover"
            // style={{ backgroundImage: `url(${"/bgg.png"})` }}
          >
            <div
              className="text-center"
            
            >
              <h2 className="backgroundimage text-[2rem] text-center  md:text-[3rem] font-bold">
                My Portfolio
              </h2>
            </div>
            <div className="  flex  w-[100%] gap-5 lg:gap-[3rem] flex-wrap justify-center bg-fixed  p-5 mt-5">
              {projectLimit.map((product: Project, index: number) => (
                <div key={index} className="w-[350px] md:w-[300px] lg:w-[300px] xl:w-[400px] rounded-lg  border border-red-500">
                  <div>
                    <div className="relative">
                      <img src={product.img} className="h-[15rem] rounded-lg object-cover" />
                      <div className="cardprojects absolute bottom-0 bg-gray-500 bg-opacity-80 p-4 w-[100%] text-center text-black-900 text-bold capitalize text-[1.5rem]  ">
                        {product.ProjectName}
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="m-2 line-clamp-2"> {product.Description}</div>
                    <div className="flex gap-2 justify-center pb-3">
                      {" "}
                      <a href={product.linkCode} target="_blank">
                        <Button variant="contained" className="bg-red-500 p-3">
                          View Code
                        </Button>
                      </a>{" "}
                      <a href={product.linkSite} target="_blank">
                        <Button variant="contained" className="bg-red-500 p-3">
                          View Site
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {viewMore ? (
              <ScrollLink to="projects" spy={true} smooth={true} duration={500}>
                <div onClick={handleViewMore}>
                  <Button>
                    {viewMore ? (
                      <div>View less</div>
                    ) : (
                      <div>view more projects</div>
                    )}
                  </Button>
                </div>
              </ScrollLink>
            ) : (
              <div onClick={handleViewMore}>
                <ButtonBase>
                  {viewMore ? (
                    <div>View less</div>
                  ) : (
                    <div>view more projects</div>
                  )}
                </ButtonBase>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Projects;
