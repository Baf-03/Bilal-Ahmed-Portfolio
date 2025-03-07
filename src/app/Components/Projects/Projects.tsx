"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Skeleton } from "../ui/skeleton";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  ProjectName: string;
  Description: string;
  img: string;
  linkCode?: string;
  linkSite?: string;
  id: string;
  category: string;
}

export default function FilteredProjects({ language }: any) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [viewMore, setViewMore] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null); // Ref for the whole section
  const lastProjectRef = useRef<HTMLDivElement>(null); // Ref for last visible project
  const containerRef = useRef<HTMLDivElement>(null); // Ref for the container

  const projects: Project[] = [
    {
      ProjectName: "Hubsite Social",
      Description: "Social media platform (Client's Project)",
      img: "/hubsite.png",
      linkSite: "https://hubsite-iteration3.vercel.app/",
      id: "1a",
      category: "clients",
    },
    {
      ProjectName: "Vero Specialize Service",
      Description: "(Client's Project)",
      img: "/vero.png",
      id: "1b",
      category: "clients",
    },
    {
      ProjectName: "Virtual Care",
      Description: "client's project",
      img: "/vc.png",
      id: "1c",
      category: "clients",
    },
    {
      ProjectName: "Scheduling Simulator",
      Description: "Simulate priority-based scheduling for efficient process handling",
      img: "/simulator2.png",
      linkSite: "https://simulatorabcd.vercel.app/",
      id: "5",
      category: "software",
    },
    {
      ProjectName: "Full Stack Ecommerce App",
      Description: "Built using React.js, Nest.js & Postgres SQL",
      img: "/shopCo.png",
      // linkSite: "https://shop-co-iiyx.vercel.app/",
      id: "4",
      category: "software",
    },
    {
      ProjectName: "AxisLang",
      Description: "Simplified Programming Language with Live Compiler",
      img: "/project.png",
      linkSite: "https://axis-lang-uqc4.vercel.app/",
      id: "2",
      category: "software",
    },
    {
      ProjectName: "Round Robin Scheduling Algorithm Simulator",
      Description: "Simulation of how round robin algorithm works!",
      img: "/round_robin.png",
      linkSite: "https://os-round-robin-scheduling-algorithm.vercel.app/",
      id: "3",
      category: "software",
    },
    
    {
      ProjectName: "flappyBird",
      Description: "using Reactjs",
      img: "/flappy_bird.png",
      linkSite: "https://flappybird-baf03.vercel.app/",
      id: "6",
      category: "games",
      
    },
    {
      ProjectName: "Memory Game",
      Description: "Made with React.js & TailwindCSS",
      img: "/MemoryGame.png",
      linkCode: "https://github.com/Baf-03/Memory-Game",
      linkSite: "https://memory-game-baf.netlify.app/",
      id: "8",
      category: "games",
    },
    {
      ProjectName: "Food Recipe Sharing App",
      Description: "MERN stack app with JWT auth & Cloudinary storage",
      img: "/recipe-sharing.png",
      linkCode: "https://github.com/Baf-03/FrontEnd-FoodRecipe",
      // linkSite: "https://foodrecipesharing.netlify.app/login",
      id: "7",
      category: "software",
    },
   
    {
      ProjectName: "My Course Hero WebApp",
      Description: "MERN stack project with JWT authentication & CRUD",
      img: "/mycoursehero.png",
      // linkCode: "https://github.com/Baf-03/MyCourses-clientSide",
      // linkSite: "https://mycoursehero.netlify.app/auth/login",
      id: "9",
      category: "software",
    },
    {
      ProjectName: "Encrypted Todo",
      Description: "saving all user todos in DB in encrypted form",
      img: "/encryptodo.png",
      linkSite: "https://encryptodo.netlify.app/auth/login",
      id: "10",
      category: "software",
    },
    // {
    //   ProjectName: "Attendance App",
    //   Description: "Attendance tracking system built with MERN stack",
    //   img: "/attendanceapp.png",
    //   id: "11",
    //   category: "software",
    // },
    // {
    //   ProjectName: "Github User Finder",
    //   Description: "Built with React.js, Material-UI, and TailwindCSS",
    //   img: "/githubuserfinder.png",
    //   linkCode: "https://github.com/Baf-03/Github-User-Finder",
    //   linkSite: "https://github-user-finder-baf.netlify.app/",
    //   id: "12",
    //   category: "software",
    // },
    // {
    //   ProjectName: "Weather App",
    //   Description: "React.js weather app using Axios & TailwindCSS",
    //   img: "/weatherappreact.png",
    //   linkCode: "https://github.com/Baf-03/weather-app-in-reactjs",
    //   linkSite: "https://weather-app-reactjs-baf.netlify.app/",
    //   id: "13",
    //   category: "software",
    // },
    // {
    //   ProjectName: "Tic Tac Toe",
    //   Description: "Classic Tic Tac Toe game built using HTML, CSS & JS",
    //   img: "/tictactoe.png",
    //   linkCode: "https://github.com/Baf-03/tic-tac-toe-using-html-css-js",
    //   linkSite: "https://baf-03.github.io/tic-tac-toe-using-html-css-js/",
    //   id: "14",
    //   category: "games",
    // },
  ];

  // Simulate loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // Filter projects when category or viewMore changes
  useEffect(() => {
    // Reset filtered projects to avoid any stale data
    let newFilteredProjects =
      selectedCategory === "all"
        ? projects
        : projects.filter((project) => project.category === selectedCategory);

    // Apply view more logic
    newFilteredProjects = viewMore ? newFilteredProjects : newFilteredProjects.slice(0, 6);
    setFilteredProjects(newFilteredProjects);
  }, [selectedCategory, viewMore]);

  // Handle scrolling for "View Less"
  useEffect(() => {
    if (!viewMore && filteredProjects.length > 0) {
      // Scroll to the top of the component when "View Less" is clicked
      if (containerRef.current) {
        const offsetTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
      // Scroll to the last visible project after collapsing
      if (lastProjectRef.current) {
        setTimeout(() => {
          lastProjectRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100); // Delay to allow animation to complete
      }
    }
  }, [viewMore, filteredProjects]);

  const categories = [
    { id: "all", label: language["all_projects"] },
    { id: "software", label: language["software"] },
    { id: "games", label: language["games"] },
    { id: "clients", label: language["client_projects"] },
  ];

  const totalProjectsInCategory =
    selectedCategory === "all"
      ? projects.length
      : projects.filter((project) => project.category === selectedCategory).length;

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-8">
          <Skeleton className="h-12 w-[300px] mx-auto" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-[400px] rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section ref={containerRef} className="container mx-auto px-4 py-16 z-50" id="Projects">
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            {language["portfolio"]}
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            {language["explore_projects_description"]}
          </p>
        </motion.div>

        <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-3 bg-transparent p-2 max-w-3xl mx-auto h-full">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="relative sm:px-6 sm:py-3 rounded-full text-sm font-medium transition-all duration-300 
                  text-gray-300 hover:text-white 
                  data-[state=active]:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-teal-500
                  hover:bg-gray-800/50
                  shadow-md hover:shadow-lg"
              >
                <span className="relative z-10">{category.label}</span>
                <motion.span
                  layoutId="tab-indicator"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 opacity-0 data-[state=active]:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id} // Unique key for each project
                ref={(!viewMore && index === 5) || (viewMore && index === filteredProjects.length - 1) ? lastProjectRef : null}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="group relative bg-card rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.ProjectName}
                    width={500}
                    height={300}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 flex gap-2">
                    {project.linkCode && (
                      <a
                        href={project.linkCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
                      >
                        <Github size={20} className="text-black" />
                      </a>
                    )}
                    {project.linkSite && (
                      <a
                        href={project.linkSite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
                      >
                        <ExternalLink size={20} className="text-black" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.ProjectName}</h3>
                  <p className="text-muted-foreground">{project.Description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {totalProjectsInCategory > 6 && (
          <div className="text-center">
            <Button
              onClick={() => setViewMore(!viewMore)}
              className="relative px-8 py-3 rounded-full text-white font-semibold text-base
                bg-gradient-to-r from-blue-600 to-teal-500
                hover:from-blue-700 hover:to-teal-600
                transition-all duration-300
                shadow-lg hover:shadow-xl
                min-w-[200px] overflow-hidden
                group"
            >
              <span className="relative z-10">
                {viewMore ? language["view_less"] : language["view_more"]}
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-700 to-teal-600 opacity-0 group-hover:opacity-100"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}