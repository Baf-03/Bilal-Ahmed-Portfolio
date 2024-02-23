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
  return (
    <>
      {loading ? (
        <div className="w-100 h-[100vh] flex justify-center items-center">
          <div className="loader"></div>
        </div>
      ) : (
        <main className={darkmode ? "bg-gray-800 text-white" : ""}>
          <ResponsiveAppBar s_dm={setDarkMode} dm={darkmode} />
          <div className="w-[98%] md:w-[85%] m-auto flex flex-col gap-12 justify-center items-center  mt-2 ">
            <Introduction />
            <CreativeProcess />
            <NeedofSp />
            <TechUsed />
            <Skills />
            <ActivitiesTimeline />
            <ContactForm />
            <WhatsAppButton />
          </div>
        </main>
      )}
    </>
  );
}
