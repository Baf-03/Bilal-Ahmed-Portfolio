"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Skeleton } from "../ui/skeleton";
import { ExternalLink, Github, Flame } from "lucide-react";
import { usePerformance } from "@/contexts/PerformanceContext";

interface Project {
  ProjectName: string;
  Description: string;
  img: string;
  linkCode?: string;
  linkSite?: string;
  id: string;
  category: string;
  isNew?: boolean;
}

const projects: Project[] = [
  {
    ProjectName: "DocuFlow",
    Description: "Convert Images with Super Speed - Image to PDF, Docx & more",
    img: "/docuflow.png",
    linkCode: "https://github.com/Baf-03/DocuFlow",
    linkSite: "https://docu-flow-snowy.vercel.app/",
    id: "docuflow-1",
    category: "software",
    isNew: true,
  },
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
    ProjectName: "Hv Technologies",
    Description: "(Client's Project)",
    img: "/hvTech.png",
    linkSite: "https://hvtechnologies.app/",
    id: "1e",
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
  // Learning projects are now separated:
  {
    ProjectName: "My Course Hero WebApp",
    Description: "MERN stack project with JWT authentication & CRUD",
    img: "/mycoursehero.png",
    // linkCode: "https://github.com/Baf-03/MyCourses-clientSide",
    // linkSite: "https://mycoursehero.netlify.app/auth/login",
    id: "9",
    category: "learning",
  },
  {
    ProjectName: "Encrypted Todo",
    Description: "saving all user todos in DB in encrypted form",
    img: "/encryptodo.png",
    linkSite: "https://encryptodo.netlify.app/auth/login",
    id: "10",
    category: "learning",
  },
  {
    ProjectName: "Attendance App",
    Description: "Attendance tracking system built with MERN stack",
    img: "/attendanceapp.png",
    id: "11",
    category: "learning",
  },

  {
    ProjectName: "Tic Tac Toe",
    Description: "Classic Tic Tac Toe game built using HTML, CSS & JS",
    img: "/tictactoe.png",
    linkCode: "https://github.com/Baf-03/tic-tac-toe-using-html-css-js",
    linkSite: "https://baf-03.github.io/tic-tac-toe-using-html-css-js/",
    id: "14",
    category: "learning",

  },
];

export default function FilteredProjects({ language }: any) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [viewMore, setViewMore] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const sectionRef = useRef<HTMLDivElement>(null);
  const lastProjectRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { isLowPerformance } = usePerformance();



  // Simulate loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // Filter projects when category or viewMore changes
  useEffect(() => {
    let newFilteredProjects;
    if (selectedCategory === "all") {
      // "All" should show every project except learning ones.
      newFilteredProjects = projects.filter((project) => project.category !== "learning");
    } else {
      newFilteredProjects = projects.filter((project) => project.category === selectedCategory);
    }

    // Apply view more logic
    newFilteredProjects = viewMore ? newFilteredProjects : newFilteredProjects.slice(0, 6);
    setFilteredProjects(newFilteredProjects);
  }, [selectedCategory, viewMore]);

  // Handle scrolling for "View Less"
  useEffect(() => {
    if (!viewMore && filteredProjects.length > 0) {
      if (containerRef.current) {
        const offsetTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
      if (lastProjectRef.current) {
        setTimeout(() => {
          lastProjectRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }, [viewMore, filteredProjects]);

  const categories = [
    { id: "all", label: language["all_projects"] },
    { id: "software", label: language["software"] },
    { id: "games", label: language["games"] },
    { id: "clients", label: language["client_projects"] },
    { id: "learning", label: language["learning"] },
  ];

  const totalProjectsInCategory =
    selectedCategory === "all"
      ? projects.filter((project) => project.category !== "learning").length
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
    <section ref={containerRef} className="container mx-auto px-4 py-16 z-50 relative overflow-hidden" id="Projects">

      <div className="space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={isLowPerformance ? undefined : { opacity: 1, y: 0 }}
          animate={isLowPerformance ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-12 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            <span className="text-sm font-medium text-teal-600 dark:text-teal-400">
              {language["portfolio_badge"] || "Featured Work"}
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-teal-400">
              {language["portfolio"]}
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed">
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
                key={project.id}
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
                  {project.isNew && (
                    <div className="absolute top-2 left-2 z-10">
                      <div className={`relative flex items-center justify-center p-2 rounded-full bg-gradient-to-br from-orange-500 to-red-600 shadow-lg shadow-orange-500/30 overflow-hidden transform transition-all duration-300 ${!isLowPerformance && "hover:scale-110 group-hover:rotate-12"}`} title="New Project">
                        {/* Animated background glow - disabled on low spec */}
                        {!isLowPerformance && <div className="absolute inset-0 bg-white/20 animate-[spin_3s_linear_infinite] opacity-30" />}
                        <Flame size={20} className="text-white relative z-10 fill-orange-100" />
                      </div>
                    </div>
                  )}
                  <div className="absolute top-2 right-2 flex gap-2 transition-all duration-300 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
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
