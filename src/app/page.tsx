"use client";
import { useEffect, useState } from "react";
import Introduction from "@/app/Components/LandingPage/LandingPage";
import CreativeProcess from "./Components/CreativeProcess/CreativeProcess";
import NeedofSp from "./Components/NeedOfSalesPage.tsx/NeedofSp";
import TechUsed from "./Components/TechnologiesUsed";
import Skills from "./Components/Skills/Skills";
import ActivitiesTimeline from "./Components/TimeLine";
import ContactForm from "./Components/ContactForm";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import { useSearchParams, useRouter } from "next/navigation"; // Add useRouter
import TestimonialSlider from "./Components/TestimonialSlider";
import FeatureCarousel from "./Components/Chooseus";
import en from "./locales/en.json";
import es from "./locales/es.json";
import de from "./locales/de.json";
import FloatingButtons from "./Components/FloatingButton";
import Education from "./Components/Education";
import dynamic from "next/dynamic";

const BlogsPage = dynamic(() => import("./blogs/page"), { ssr: true });

export default function Home() {
  const [darkmode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState<any>(en);
  const searchParams = useSearchParams();
  const router = useRouter(); // Add router for URL manipulation
  const search = searchParams.get("element");

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkmode");
    const storedLanguage = localStorage.getItem("language");

    if (storedDarkMode !== null) {
      setDarkMode(JSON.parse(storedDarkMode));
    }

    if (storedLanguage === "es") {
      setLanguage(es);
    } else if (storedLanguage === "de") {
      setLanguage(de);
    } else {
      setLanguage(en);
      localStorage.setItem("language", "en");
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading && search) {
      console.log("Attempting to scroll to:", search);
      const targetElement = document.getElementById(search);
      if (targetElement) {
        console.log("Target element found:", targetElement);
        targetElement.scrollIntoView({ behavior: "smooth" });
        // Remove query parameter after scrolling
        setTimeout(() => {
          router.replace("/", { scroll: false }); // Replace URL with "/" without scrolling
          console.log("Query parameter removed from URL");
        }, 500); // Delay to ensure scroll completes
      } else {
        console.log("Target element not found for:", search);
        const timeout = setTimeout(() => {
          const retryElement = document.getElementById(search);
          if (retryElement) {
            console.log("Retry succeeded, scrolling to:", retryElement);
            retryElement.scrollIntoView({ behavior: "smooth" });
            // Remove query parameter after retry scroll
            setTimeout(() => {
              router.replace("/", { scroll: false });
              console.log("Query parameter removed from URL after retry");
            }, 500);
          }
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [search, loading, router]); // Add router to dependencies

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
              <Projects language={language} />
              <TestimonialSlider />
              <TechUsed />
              <Education />
              <div id="blogs-section">
                <BlogsPage />
              </div>
              <ContactForm language={language} />
            </div>
            <Footer language={language} />
            <div className="bg-[#3b82f6] w-[100%] text-center">
              {language["portfolio_message"]}
            </div>
          </main>
          <FloatingButtons />
        </>
      )}
    </>
  );
}