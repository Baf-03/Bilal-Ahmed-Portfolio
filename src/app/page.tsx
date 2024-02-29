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
import ContactForm from "./Components/ContactForm";
import WhatsAppButton from "./Components/WhatsAppbtn";
import { useSearchParams } from 'next/navigation'

export default function Home() {
  const [darkmode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkmode");
    if (storedDarkMode !== null) {
      setDarkMode(JSON.parse(storedDarkMode));
    }
    setLoading(false);
  }, []);
  
  const searchParams = useSearchParams()
  const search = searchParams.get('element')
  useEffect(()=>{
    if(search){
      const targetElement = document.getElementById(search);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  },[search])
  return (
    <>
      {loading ? (
        <div className="w-100 h-[100vh] bg-gray-800 flex justify-center items-center">
          <div className="loader"></div>
        </div>
      ) : (
        <main className={`transition-colors duration-500 }`}>
          {/* <ResponsiveAppBar s_dm={setDarkMode} dm={darkmode} /> */}
          <div className="w-[98%] md:w-[85%] m-auto flex flex-col gap-12 justify-center items-center  mt-2 ">
            <Introduction />
            <CreativeProcess />
            <NeedofSp />
            <TechUsed />
            <Skills />
            <ActivitiesTimeline />
            <ContactForm />
            <WhatsAppButton />
            <div className="bg-red-500 w-[100%] text-center">Portfolio is currently in development phase<br/>Projects,Education Sections and Blogs page <br/>and many more features are coming soon</div>
          </div>
        </main>
      )}
    </>
  );
}
