"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Introduction from "@/app/Components/LandingPage/LandingPage";
import TechUsed from "./Components/TechnologiesUsed";
const Projects = dynamic(() => import("./Components/Projects/Projects"), {
  loading: () => <div className="py-24 text-center">Loading projects...</div>,
  ssr: false,
});
const Footer = dynamic(() => import("./Components/Footer/Footer"), {
  loading: () => <div className="py-12 text-center">Loading footer...</div>,
  ssr: false,
});
const TestimonialSlider = dynamic(() => import("./Components/TestimonialSlider"), {
  loading: () => <div className="py-24 text-center">Loading testimonials...</div>,
  ssr: false,
});
const Blogs = dynamic(() => import("./Components/Blogs"), {
  loading: () => <div className="py-24 text-center">Loading blogs...</div>,
  ssr: false,
});
const FeatureCarousel = dynamic(() => import("./Components/Chooseus"), {
  loading: () => <div className="py-24 text-center">Loading features...</div>,
  ssr: false,
});
import { usePerformanceMonitor } from "@/hooks/usePerformanceMonitor";
import PerformancePopup from "./Components/PerformancePopup";
import ContactForm from "./Components/ContactForm";
import ActivitiesTimeline from "./Components/TimeLine";
import Education from "./Components/Education";
import en from "./locales/en.json";
import es from "./locales/es.json";
import de from "./locales/de.json";
import NeedofSp from "./Components/NeedOfSalesPage.tsx/NeedofSp";
import AnimatedBackground from "./Components/ui/AnimatedBackground";
import FloatingButtons from "./Components/FloatingButton";
import NpmPackage from "./Components/NpmPackage";

type LanguageData = {
  [key: string]: string;
};

export default function Home() {
  return (
    <Suspense fallback={<div className="loader-wrapper"><div className="loader"></div></div>}>
      <HomeContent />
    </Suspense>
  );
}

function HomeContent() {
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState<LanguageData>(en);
  const searchParams = useSearchParams();
  const { showPopup, setShowPopup } = usePerformanceMonitor();
  const router = useRouter();
  const search = searchParams.get("element");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");

    if (storedLanguage === "es") {
      setLanguage(es);
    } else if (storedLanguage === "de") {
      setLanguage(de);
    } else {
      setLanguage(en);
      if (storedLanguage !== "en") {
        localStorage.setItem("language", "en");
      }
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading && search) {
      const targetElement = document.getElementById(search);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        router.replace("/", { scroll: false });
      } else {
        // Retry once in case of render delay
        setTimeout(() => {
          const retryElement = document.getElementById(search);
          if (retryElement) {
            retryElement.scrollIntoView({ behavior: "smooth" });
            router.replace("/", { scroll: false });
          }
        }, 300);
      }
    }
  }, [search, loading, router]);

  if (loading) {
    return (
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div>
    )
  }

  return (
    <>
      <PerformancePopup show={showPopup} onClose={() => setShowPopup(false)} />
      <AnimatedBackground />
      <main className="transition-colors duration-500 ">
        <div className="w-[98%] lg:w-[94%] xl:w-[90vw] m-auto flex flex-col gap-12 justify-center items-center mt-2">
          <Introduction language={language} />
          <FeatureCarousel language={language} />
          <NeedofSp language={language} />
          <ActivitiesTimeline language={language} />
          <Projects language={language} />
          <TechUsed language={language} />
          <NpmPackage language={language} />
          <Education language={language} />
          <TestimonialSlider language={language} />
          <Blogs language={language} />
          <ContactForm language={language} />
        </div>
        <Footer language={language} />
        <FloatingButtons />
        {/* bottom portfolio message removed per request */}
      </main>
    </>
  );
}
