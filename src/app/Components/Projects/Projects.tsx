"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { ExternalLink, Github, Flame } from "lucide-react";
import { usePerformance } from "@/contexts/PerformanceContext";

interface Project {
  ProjectName: string;
  ProjectNameKey: string;
  DescriptionKey: string;
  img: string;
  linkCode?: string;
  linkSite?: string;
  id: string;
  category: string;
  isNew?: boolean;
}

const projects: Project[] = [
  {
    ProjectName: "Mahfooz Safar",
    ProjectNameKey: "project_mahfooz_name",
    DescriptionKey: "project_mahfooz_desc",
    img: "/mahfooz-safar.png",
    id: "mahfooz-safar",
    category: "clients",
    isNew: true,
  },
  {
    ProjectName: "Hubsite Social",
    ProjectNameKey: "project_hubsite_name",
    DescriptionKey: "project_hubsite_desc",
    img: "/hubsite.png",
    linkSite: "https://hubsite-iteration3.vercel.app/",
    id: "1a",
    category: "clients",
  },
  {
    ProjectName: "Vero Specialize Service",
    ProjectNameKey: "project_vero_name",
    DescriptionKey: "project_vero_desc",
    img: "/vero.png",
    id: "1b",
    category: "clients",
  },
  {
    ProjectName: "Hv Technologies",
    ProjectNameKey: "project_hv_name",
    DescriptionKey: "project_hv_desc",
    img: "/hvTech.png",
    linkSite: "https://hvtechnologies.app/",
    id: "1e",
    category: "clients",
  },
  {
    ProjectName: "Virtual Care",
    ProjectNameKey: "project_virtual_care_name",
    DescriptionKey: "project_virtual_care_desc",
    img: "/vc.png",
    id: "1c",
    category: "clients",
  },
  {
    ProjectName: "DocuFlow",
    ProjectNameKey: "project_docuflow_name",
    DescriptionKey: "project_docuflow_desc",
    img: "/docuflow.png",
    linkCode: "https://github.com/Baf-03/DocuFlow",
    linkSite: "https://docu-flow-snowy.vercel.app/",
    id: "docuflow-1",
    category: "software",
    isNew: true,
  },
  {
    ProjectName: "Scheduling Simulator",
    ProjectNameKey: "project_scheduling_name",
    DescriptionKey: "project_scheduling_desc",
    img: "/simulator2.png",
    linkSite: "https://simulatorabcd.vercel.app/",
    id: "5",
    category: "software",
  },
  {
    ProjectName: "Full Stack Ecommerce App",
    ProjectNameKey: "project_ecommerce_name",
    DescriptionKey: "project_ecommerce_desc",
    img: "/shopCo.png",
    id: "4",
    category: "software",
  },
  {
    ProjectName: "AxisLang",
    ProjectNameKey: "project_axislang_name",
    DescriptionKey: "project_axislang_desc",
    img: "/project.png",
    linkSite: "https://axis-lang-uqc4.vercel.app/",
    id: "2",
    category: "software",
  },
  {
    ProjectName: "Round Robin Scheduling Algorithm Simulator",
    ProjectNameKey: "project_round_robin_name",
    DescriptionKey: "project_round_robin_desc",
    img: "/round_robin.png",
    linkSite: "https://os-round-robin-scheduling-algorithm.vercel.app/",
    id: "3",
    category: "software",
  },
  {
    ProjectName: "Food Recipe Sharing App",
    ProjectNameKey: "project_recipe_name",
    DescriptionKey: "project_recipe_desc",
    img: "/recipe-sharing.png",
    linkCode: "https://github.com/Baf-03/FrontEnd-FoodRecipe",
    id: "7",
    category: "software",
  },
];

export default function FilteredProjects({ language }: any) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [viewMore, setViewMore] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);
  const [isArabic, setIsArabic] = useState(false);

  useEffect(() => {
    const lang = localStorage.getItem("language");
    setIsEnglish(lang === "en" || !lang);
    setIsArabic(lang === "ar");
  }, [language]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const lastProjectRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { isLowPerformance } = usePerformance();

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



  const categories = [
    { id: "all", label: language["all_projects"] },
    { id: "software", label: language["software"] },
    // { id: "games", label: language["games"] },
    { id: "clients", label: language["client_projects"] },
    // { id: "learning", label: language["learning"] },
  ];

  const totalProjectsInCategory =
    selectedCategory === "all"
      ? projects.filter((project) => project.category !== "learning").length
      : projects.filter((project) => project.category === selectedCategory).length;

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
            <div className="w-2 h-2 rounded-full bg-teal-500" />
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
                className="relative overflow-hidden sm:px-6 py-2 sm:py-3 px-4 rounded-full text-sm font-medium transition-all duration-300 
                  text-gray-400 hover:text-white 
                  data-[state=active]:text-white 
                  hover:bg-gray-800/50
                  shadow-sm hover:shadow-md outline-none border-none ring-0 focus:ring-0 focus-visible:ring-0"
              >
                <span className="relative z-10">{category.label}</span>
                {selectedCategory === category.id && (
                  <motion.span
                    layoutId="active-category-tab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 shadow-lg z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                ref={(!viewMore && index === 5) || (viewMore && index === filteredProjects.length - 1) ? lastProjectRef : null}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative bg-white/60 dark:bg-gray-800/40 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="relative overflow-hidden aspect-[16/10]">
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                  <Image
                    src={project.img}
                    alt={project.ProjectName}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Refined New Badge */}
                  {project.isNew && (
                    <div className="absolute top-3 left-3 z-20">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-500/10 backdrop-blur-md border border-orange-500/30 text-orange-600 dark:text-orange-400 font-medium text-xs shadow-lg">
                        <Flame size={14} />
                        <span>New</span>
                      </div>
                    </div>
                  )}

                  {/* Frosted Action Orbs */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 z-20 transition-all duration-500 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    {project.linkCode && (
                      <a
                        href={project.linkCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-blue-600 backdrop-blur-md border border-white/30 text-white shadow-xl transition-all duration-300 hover:scale-110"
                        title="View Code"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.linkSite && (
                      <a
                        href={project.linkSite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-teal-500 backdrop-blur-md border border-white/30 text-white shadow-xl transition-all duration-300 hover:scale-110"
                        title="Live Site"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-500/10 rounded-md">
                      {language[project.category] || project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {isArabic && language[project.ProjectNameKey] !== project.ProjectName
                      ? `${project.ProjectName} (${language[project.ProjectNameKey]})`
                      : (language[project.ProjectNameKey] || project.ProjectName)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
                    {language[project.DescriptionKey] || project.DescriptionKey}
                  </p>
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
