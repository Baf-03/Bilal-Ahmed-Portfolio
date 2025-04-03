"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import ResponsiveAppBar from "./Components/Navbar";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "./globals.css";
import { usePathname } from "next/navigation"; // Add usePathname

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkmode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const pathname = usePathname(); // Get current pathname

  useEffect(() => {
    // Retrieve the stored dark mode preference from local storage
    const storedDarkMode = localStorage.getItem("darkmode");
    if (storedDarkMode !== null) {
      setDarkMode(JSON.parse(storedDarkMode));
    }
    setLoading(false);

    // Function to update cursor position state
    const handleMouseMove = (event: any) => {
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
      </Head>
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
      <body
        className={`transition-colors duration-500 ${
          darkmode ? "bg-[#1c1e21] text-gray-300" : "bg-[#e7e5e4] text-gray-900"
        }`}
      >
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          {loading ? (
            <div className="w-100 h-[100vh] bg-gray-800 flex justify-center items-center">
              <div className="loader"></div>
            </div>
          ) : (
            <>
              {/* Conditionally render navbar only on "/" route */}
              {pathname === "/" && <ResponsiveAppBar s_dm={setDarkMode} dm={darkmode} />}
              <div className="hidden sm:flex userSelect w-0 h-0 text-[10rem] fixed top-[50%] left-[23%] sm:left-[35%] md:left-[45%] opacity-[0.1] text-gray-500 z-0">
                {/* This div seems incomplete - assuming it’s a placeholder */}
              </div>
              {children}
              <div
                style={{
                  position: "fixed",
                  left: cursorPos.x + "px",
                  top: cursorPos.y + "px",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  pointerEvents: "none",
                  transform: "translate(-50%, -50%)",
                }}
                className="bg-[#3b82f6] opacity-[0.8] hidden md:block"
              />
            </>
          )}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}