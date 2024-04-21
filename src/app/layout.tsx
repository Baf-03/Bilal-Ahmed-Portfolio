"use client";import { useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import ResponsiveAppBar from "./Components/Navbar";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkmode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Retrieve the stored dark mode preference from local storage
    const storedDarkMode = localStorage.getItem("darkmode");
    if (storedDarkMode !== null) {
      setDarkMode(JSON.parse(storedDarkMode));
    }
    setLoading(false);

    // Function to update cursor position state
    const handleMouseMove = (event:any) => {
      setCursorPos({ x: event.clientX, y: event.clientY });
    };

    // Attach mouse move event listener
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <html lang="en">
      <Head>
        <title>Bilal Ahmed - Web Developer | Karachi, PK</title>
        <meta name="description" content="Explore Bilal Ahmed's portfolio and services. Available for jobs in Karachi, Pakistan." />
        <meta name="keywords" content="Bilal Ahmed, web developer, Karachi, Pakistan, portfolio, services, jobs" />
      <meta name="google-site-verification" content="zRMU4cUsJk5Ltp6zoO6Ms3VngYPKOr1Tf0LZzYL5JSY" />
      </Head>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_G_TAG}`} strategy="afterInteractive" />
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
      <body className={`transition-colors duration-500 ${darkmode ? "bg-gray-800 text-white" : "bg-[#e7e5e4]"}`}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          {loading ? (
            <div className="w-100 h-[100vh] bg-gray-800 flex justify-center items-center">
              <div className="loader"></div>
            </div>
          ) : (
            <>
              <ResponsiveAppBar s_dm={setDarkMode} dm={darkmode} />
              {children}
              <div
                style={{
                  position: 'fixed',
                  left: cursorPos.x + 'px',
                  top: cursorPos.y + 'px',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  // backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  pointerEvents: 'none',
                  transform: 'translate(-50%, -50%)',
                  
                }}
                className="bg-red-500 opacity-[0.8]  hidden md:block"
              />
            </>
          )}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
