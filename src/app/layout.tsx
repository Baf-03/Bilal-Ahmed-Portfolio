"use client";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Script from "next/script";
import ResponsiveAppBar from "./Components/Navbar";
import { useEffect, useState } from "react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const googleAnalyticsScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${process.env.NEXT_PUBLIC_G_TAG}', {
    page_path: window.location.pathname,
  });
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const G_TAG = process.env.NEXT_PUBLIC_G_TAG; // Access environment variable on the client-side

  console.log("G_TAG", process.env.NEXT_PUBLIC_G_TAG);

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
    <html lang="en">
      <Head>
        <title>Bilal Ahmed - Web Developer | Karachi, PK</title>
        <meta name="google-site-verification" content="zRMU4cUsJk5Ltp6zoO6Ms3VngYPKOr1Tf0LZzYL5JSY" />
        <meta
          name="description"
          content="Bilal Ahmed is a skilled web developer based in Karachi, Pakistan. Explore his portfolio and services. Available for jobs."
        />
        <meta
          name="keywords"
          content="Bilal Ahmed, web developer, Karachi, Pakistan, portfolio, services, jobs"
        />
      </Head>
   
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_G_TAG}`}
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
          darkmode ? "bg-gray-800 text-white" : "bg-[#e7e5e4]"
        }`}
      >
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          {loading ? (
            <div className="w-100 h-[100vh] bg-gray-800 flex justify-center items-center">
              <div className="loader"></div>
            </div>
          ) : (
            <>
              {<ResponsiveAppBar s_dm={setDarkMode} dm={darkmode} />}
              {children}
            </>
          )}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
