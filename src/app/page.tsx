"use client";
import Introduction from "@/app/Components/LandingPage/LandingPage";
import Image from "next/image";
import ResponsiveAppBar from "./Components/Navbar";
import CreativeProcess from "./Components/CreativeProcess/CreativeProcess";
import NeedofSp from "./Components/NeedOfSalesPage.tsx/NeedofSp";
import TechUsed from "./Components/TechnologiesUsed";
import Skills from "./Components/Skills/Skills";
import ActivitiesTimeline from "./Components/TimeLine";
import { useEffect, useState } from "react";

export default function Home() {
  const [darkmode, setDarkMode] = useState(false);
 // Function to toggle dark mode
 

  // Load dark mode preference from local storage on component mount
  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkmode');
    if (storedDarkMode !== null) {
      console.log("chala")
      setDarkMode(JSON.parse(storedDarkMode));
    }
  }, []);
  useEffect(()=>{
    console.log("dark",darkmode)
  },[darkmode])
  return (
    <main className={darkmode ? "bg-gray-800 text-white" : ""}>
      <ResponsiveAppBar s_dm={setDarkMode} dm={darkmode} />
      <div className="w-[98%] md:w-[85%] m-auto flex flex-col gap-12 justify-center items-center  mt-2 ">
        <Introduction />
        <CreativeProcess />
        <NeedofSp />
        <TechUsed />
        <Skills />
        <ActivitiesTimeline />
      </div>
    </main>
  );
}
