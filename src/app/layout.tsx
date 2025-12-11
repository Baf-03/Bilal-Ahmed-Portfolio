"use client";
import { useEffect, useState } from "react";
import Script from "next/script";
import ResponsiveAppBar from "./Components/Navbar";
import "./globals.css";
import { usePathname } from "next/navigation";
import AnimatedBackground from "./Components/ui/AnimatedBackground";
import { PerformanceProvider } from "@/contexts/PerformanceContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkmode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkmode");
    if (storedDarkMode !== null) {
      setDarkMode(JSON.parse(storedDarkMode));
    }
    setLoading(false);
  }, []);

  return (
    <html lang="en" className={darkmode ? "dark" : ""}>
      <head>
        <title>
          Bilal Ahmed - Software Engineer - Mern Stack Developer - Karachi, PK
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Bilal Ahmed, software engineer, web developer, Karachi, Pakistan, portfolio, services, jobs"
        />
        <meta
          name="description"
          content="Bilal Ahmed, a certified MERN Stack Developer based in Karachi, PK. Experienced in full-stack development and web applications."
        />
        <meta
          name="google-site-verification"
          content="zRMU4cUsJk5Ltp6zoO6Ms3VngYPKOr1Tf0LZzYL5JSY"
        />
        <link rel="icon" type="image/png" href="/public/favicon.png" />
      </head>
      <body
        className={`transition-colors duration-500 ${darkmode ? "bg-[#1c1e21] text-gray-300" : "bg-[#e7e5e4] text-gray-900"
          }`}
      >
        <PerformanceProvider>
          <AnimatedBackground />
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_G_TAG}`}
            strategy="afterInteractive"
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_G_TAG}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        {loading ? (
          <div className="w-full h-screen bg-gray-800 flex justify-center items-center">
            <div className="loader"></div>
          </div>
        ) : (
          <>
            {pathname === "/" && (
              <ResponsiveAppBar s_dm={setDarkMode} dm={darkmode} />
            )}
            {children}
          </>
        )}
        </PerformanceProvider>
      </body>
    </html>
  );
}
