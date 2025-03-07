"use client";
import { useEffect, useState } from "react";
import Introduction from "@/app/Components/LandingPage/LandingPage";
import CreativeProcess from "./Components/CreativeProcess/CreativeProcess";
import NeedofSp from "./Components/NeedOfSalesPage.tsx/NeedofSp";
import TechUsed from "./Components/TechnologiesUsed";
import Education from "./Components/Education";
import Skills from "./Components/Skills/Skills";
import ActivitiesTimeline from "./Components/TimeLine";
import ContactForm from "./Components/ContactForm";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import WhatsAppButton from "./Components/WhatsAppbtn";
import { useSearchParams } from "next/navigation";
import TestimonialSlider from "./Components/TestimonialSlider";
import FeatureCarousel from "./Components/Chooseus";
import en from './locales/en.json';
import es from "./locales/es.json";
import de from "./locales/de.json";
import ZapierChatbot from "./Components/Chatbox";
import FloatingButtons from "./Components/FloatingButton";

export default function Home() {
  const [darkmode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState<any>(en);
  const searchParams = useSearchParams();
  const search = searchParams.get("element");

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkmode");
    const storedLanguage = localStorage.getItem("language");

    if (storedDarkMode !== null) {
      setDarkMode(JSON.parse(storedDarkMode));
    }

    if (storedLanguage === 'es') {
      setLanguage(es);
    } else if (storedLanguage === 'de') {
      setLanguage(de);
    } else {
      setLanguage(en);
      localStorage.setItem("language", "en");
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    if (search) {
      const targetElement = document.getElementById(search);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [search]);

  return (
    <>
      {loading ? (
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <main className="transition-colors duration-500">
            <div className="w-[98%] lg:w-[94%] xl:w-[90vw] m-auto flex flex-col gap-12 justify-center items-center mt-2">
              <Introduction language={language} />
              <FeatureCarousel language={language} />
              <NeedofSp language={language} />
              <ActivitiesTimeline language={language} />
              <TestimonialSlider />
              <Projects language={language} />
              <TechUsed />
              <ContactForm language={language} />
            </div>
            <Footer language={language} />
            <div className="bg-[#3b82f6] w-[100%] text-center">
              {language["portfolio_message"]}
            </div>
          </main>
          <FloatingButtons/>
          
        </>
      )}
    </>
  );
}