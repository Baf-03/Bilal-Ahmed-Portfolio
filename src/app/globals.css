"use client";
import { useEffect, useRef, useState } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useRouter } from "next/router";
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

export default function Home() {
  const [darkmode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const search = searchParams.get("element");

  useEffect(() => {
    // Initialize dark mode from local storage
    const storedDarkMode = localStorage.getItem("darkmode");
    if (storedDarkMode !== null) {
      setDarkMode(JSON.parse(storedDarkMode));
    }
    setLoading(false); // Turn off loading after initial setup
  }, []);

  useEffect(() => {
    let scroll: any = null;

    const initializeLocomotiveScroll = async () => {
      if (typeof window !== "undefined" && window.innerWidth >= 768 && scrollContainerRef.current) {
        const LocomotiveScrollModule = await import("locomotive-scroll");
        scroll = new LocomotiveScrollModule.default({
          el: scrollContainerRef.current,
          smooth: true,
          multiplier: 0.8,
          getDirection: true,
          reloadOnContextChange: true,
        });

        setTimeout(() => {
          scroll?.update(); // Ensure scroll instance is updated
        }, 1000);
      }
    };

    const handleRouteChange = () => {
      if (scroll) {
        scroll.destroy(); // Destroy instance on route changes
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);
    initializeLocomotiveScroll();

    window.addEventListener("resize", initializeLocomotiveScroll);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      window.removeEventListener("resize", initializeLocomotiveScroll);
      if (scroll) scroll.destroy();
    };
  }, [router.events, loading]);

  useEffect(() => {
    // Scroll to specific element if "element" query param exists
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
          <main
            className="transition-colors duration-500"
            ref={scrollContainerRef}
            data-scroll-container
          >
            <div className="w-[98%] lg:w-[94%] xl:w-[90vw] m-auto flex flex-col gap-12 justify-center items-center mt-2">
              <Introduction />
              <CreativeProcess />
              <NeedofSp />
              <TechUsed />
              <Skills />
              <Projects />
              <ActivitiesTimeline />
              <Education />
              <ContactForm />
            </div>
            <Footer />
            <div className="bg-[#3b82f6] w-[100%] text-center">
              Portfolio is currently in development phase
              <br />
              Projects, Education Sections and Blogs page <br />
              and many more features are coming soon
            </div>
          </main>
          <WhatsAppButton />
        </>
      )}
    </>
  );
}
