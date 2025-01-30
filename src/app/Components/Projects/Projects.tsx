"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "../ui/button"
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs"
import { Skeleton } from "../ui/skeleton"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  ProjectName: string
  Description: string
  img: string
  linkCode?: string
  linkSite?: string
  id: string
  category: string
}

export default function FilteredProjects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])
  const [viewMore, setViewMore] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const projects: Project[] = [
    {
      ProjectName: "AxisLang",
      Description: "Simplified Programming Language with Live Compiler",
      img: "/project.png",
      linkSite: "https://axis-lang-uqc4.vercel.app/",
      id: "1",
      category: "software",
    },
    {
      ProjectName: "Landing Pages using Gsap",
      Description: "GSAP REACT HTML CSS",
      img: "/gsap.png",
      id: "2",
      category: "marketing",
    },
    {
      ProjectName: "Full Stack Ecommerce App",
      Description: "Built using React.js, Nest.js & Postgres SQL",
      img: "/shopCo.png",
      linkSite: "https://shop-co-iiyx.vercel.app/",
      id: "3",
      category: "software",
    },
    {
      ProjectName: "Food Recipe Sharing App",
      Description: "MERN stack app with JWT auth & Cloudinary storage",
      img: "/recipe-sharing.png",
      linkCode: "https://github.com/Baf-03/FrontEnd-FoodRecipe",
      linkSite: "https://foodrecipesharing.netlify.app/login",
      id: "4",
      category: "software",
    },
    {
      ProjectName: "Memory Game",
      Description: "Made with React.js & TailwindCSS",
      img: "/MemoryGame.png",
      linkCode: "https://github.com/Baf-03/Memory-Game",
      linkSite: "https://memory-game-baf.netlify.app/",
      id: "5",
      category: "games",
    },
    {
      ProjectName: "My Course Hero WebApp",
      Description: "MERN stack project with JWT authentication & CRUD",
      img: "/mycoursehero.png",
      linkCode: "https://github.com/Baf-03/MyCourses-clientSide",
      linkSite: "https://mycoursehero.netlify.app/auth/login",
      id: "6",
      category: "software",
    },
    {
      ProjectName: "Encrypted Todo",
      Description: "MERN app with encrypted storage for enhanced security",
      img: "/encryptodo.png",
      linkSite: "https://encryptodo.netlify.app/auth/login",
      id: "7",
      category: "software",
    },
    {
      ProjectName: "Attendance App",
      Description: "Attendance tracking system built with MERN stack",
      img: "/attendanceapp.png",
      id: "8",
      category: "software",
    },
    {
      ProjectName: "Github User Finder",
      Description: "Built with React.js, Material-UI, and TailwindCSS",
      img: "/githubuserfinder.png",
      linkCode: "https://github.com/Baf-03/Github-User-Finder",
      linkSite: "https://github-user-finder-baf.netlify.app/",
      id: "9",
      category: "software",
    },
    {
      ProjectName: "Weather App",
      Description: "React.js weather app using Axios & TailwindCSS",
      img: "/weatherappreact.png",
      linkCode: "https://github.com/Baf-03/weather-app-in-reactjs",
      linkSite: "https://weather-app-reactjs-baf.netlify.app/",
      id: "10",
      category: "software",
    },
    {
      ProjectName: "Tic Tac Toe",
      Description: "Classic Tic Tac Toe game built using HTML, CSS & JS",
      img: "/tictactoe.png",
      linkCode: "https://github.com/Baf-03/tic-tac-toe-using-html-css-js",
      linkSite: "https://baf-03.github.io/tic-tac-toe-using-html-css-js/",
      id: "11",
      category: "games",
    },
  ]

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    const filtered =
      selectedCategory === "all"
        ? projects
        : projects.filter((project) => project.category === selectedCategory)

    setFilteredProjects(viewMore ? filtered : filtered.slice(0, 6))
  }, [selectedCategory, viewMore])

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "software", label: "Software" },
    { id: "games", label: "Games" },
    { id: "marketing", label: "Marketing" },
  ]

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
    )
  }

  return (
    <section className="container mx-auto px-4 py-16 z-50" id="Projects">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Development Showcase</h2>
          <p className="text-muted-foreground">Browse through our latest projects and innovations</p>
        </div>

        <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="group relative bg-card rounded-lg overflow-hidden shadow-lg"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.ProjectName}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.ProjectName}</h3>
                  <p className="text-muted-foreground">{project.Description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center">
          <Button variant="outline" onClick={() => setViewMore(!viewMore)} className="min-w-[200px]">
            {viewMore ? "View Less" : "View More"}
          </Button>
        </div>
      </div>
    </section>
  )
}
