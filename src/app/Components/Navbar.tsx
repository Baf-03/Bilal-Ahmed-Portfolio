"use client";

import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link as ScrollLink } from "react-scroll";
import { FaMoon, FaSun } from "react-icons/fa";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown } from "lucide-react";
import "./Navbar.css";

const pages = [
  { name: "About me", nav_id: "about" },
  { name: "Projects", nav_id: "Projects" },
  { name: "Experience", route: "/experience" },
  { name: "Let's Connect", nav_id: "connect" },
];

const languageOptions = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'de', label: 'Deutsch' },
  { code: 'ar', label: 'العربية' },
  { code: 'ur', label: 'اردو' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'ja', label: '日本語' },
] as const;

interface Props {
  s_dm: (value: boolean) => void;
  dm: boolean;
}

const ResponsiveAppBar: React.FC<Props> = ({ dm, s_dm }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(dm);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = useState<string>(localStorage.getItem("language") || "en");

  useEffect(() => {
    // Set initial layout direction
    const savedLang = localStorage.getItem("language");
    if (savedLang === 'ar' || savedLang === 'ur') {
      document.documentElement.dir = 'rtl';
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    s_dm(!dm);
    setDarkMode(!darkMode);
    localStorage.setItem("darkmode", JSON.stringify(!dm));
  };

  const handleLanguageChange = (lang: 'en' | 'es' | 'de' | 'ar' | 'ur' | 'hi' | 'ja') => {
    localStorage.setItem("language", lang);
    setCurrentLang(lang);

    // Handle RTL layout direction for Arabic and Urdu
    document.documentElement.dir = (lang === 'ar' || lang === 'ur') ? 'rtl' : 'ltr';

    setIsDropdownOpen(false);
    window.location.reload(); // Hard refresh
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        top: showNavbar ? 0 : "-80px",
        transition: "top 0.3s ease-in-out",
        background: darkMode ? "#1c1e21" : "#e7e5e4",
        color: darkMode ? "#fff" : "black",
      }}
      className={`transition-colors duration-500`}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{
            display: { xs: "flex", md: "none" },
            position: "absolute",
            left: (currentLang === 'ar' || currentLang === 'ur') ? 'auto' : 0,
            right: (currentLang === 'ar' || currentLang === 'ur') ? 0 : 'auto'
          }}>
            <button
              aria-label="menu"
              onClick={handleMenuToggle}
              className={`hamburger-btn ${isMenuOpen ? "open" : ""}`}
            >
              {isMenuOpen ? (
                <CloseIcon className="hamburger-icon" />
              ) : (
                <MenuIcon className="hamburger-icon" />
              )}
            </button>
          </Box>

          <Typography component="div" className="text-center w-[75vw] md:w-[60vw] lg:w-fit cursor-pointer">
            <NextLink href="/">
              <span className="text text-[1rem] ">&lt; <strong>Dev</strong> /&gt;</span>
            </NextLink>
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              margin: "auto",
            }}
          >
            <nav className="header navbar py-6">
              <ul className="navbar__menu" style={{ color: darkMode ? "#fff" : "black" }}>
                {pages.map((page, index) => (
                  <li key={index} className="navbar__item">
                    {page.route ? (
                      <NextLink
                        href={page.route as string}
                        className={`linktag navbar__link ${darkMode ? "text-white" : "text-black"}`}
                      >
                        {page.name}
                      </NextLink>
                    ) : pathname === "/" ? (
                      <ScrollLink
                        activeClass="active"
                        to={page.nav_id || ""}
                        spy
                        smooth
                        offset={-70}
                        duration={500}
                        className={`linktag navbar__link ${darkMode ? "text-white" : "text-black"}`}
                      >
                        {page.name}
                      </ScrollLink>
                    ) : (
                      <NextLink
                        href={`/#${page.nav_id || ""}`}
                        className={`linktag navbar__link ${darkMode ? "text-white" : "text-black"}`}
                      >
                        {page.name}
                      </NextLink>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <div className="toggle">
              <input
                type="checkbox"
                className="checkbox"
                id="checkbox"
                checked={darkMode}
                onChange={toggleDarkMode}
              />
              <label htmlFor="checkbox" className="checkbox-label">
                <FaMoon color="#f1c40f" />
                <FaSun color="#f39c12" />
                <span className="ball"></span>
              </label>
            </div>

            {/* Enhanced Premium Language Dropdown */}
            <div className="relative lang-dropdown-container">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm transition-all duration-300 focus:outline-none glass-morphism ${darkMode
                  ? 'bg-gray-800/40 text-white border-white/10 hover:bg-gray-800/60'
                  : 'bg-white/40 text-gray-800 border-black/5 hover:bg-white/60'
                  }`}
              >
                <Globe className={`w-4 h-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <span className="text-sm font-semibold tracking-wide uppercase">
                  {currentLang}
                </span>
                <motion.div
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-4 h-4 opacity-60" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <>
                    {/* Invisible backdrop to close dropdown when clicking outside */}
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setIsDropdownOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className={`absolute right-0 mt-3 w-48 rounded-2xl shadow-2xl border z-20 overflow-hidden glass-morphism-heavy ${darkMode
                        ? 'bg-gray-900/90 border-white/10 text-gray-200'
                        : 'bg-white/90 border-black/5 text-gray-800'
                        }`}
                    >
                      <div className="py-2 px-1">
                        {languageOptions.map((lang) => (
                          <motion.button
                            key={lang.code}
                            whileHover={{ x: 4, backgroundColor: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)" }}
                            onClick={() => handleLanguageChange(lang.code as any)}
                            className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 ${currentLang === lang.code
                              ? (darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-50 text-blue-600')
                              : 'hover:text-blue-500'
                              }`}
                          >
                            <span>{lang.label}</span>
                            {currentLang === lang.code && (
                              <motion.div
                                layoutId="active-indicator"
                                className={`w-1.5 h-1.5 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}
                              />
                            )}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </Box>

          <div className={`drawer-overlay ${isMenuOpen ? "open" : ""}`} onClick={closeMenu}></div>

          {/* Mobile Drawer - Redesigned */}
          <div className={`mobile-drawer ${isMenuOpen ? "open" : ""}`}>
            {/* Drawer Header */}
            <div className="mobile-drawer-header">
              <div className="text-2xl font-bold cursor-pointer">
                <NextLink href="/" onClick={closeMenu}>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                    &lt; <strong>Dev</strong> /&gt;
                  </span>
                </NextLink>
              </div>
              <button
                onClick={closeMenu}
                className="mobile-drawer-close"
                aria-label="Close menu"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="mobile-drawer-nav">
              {pages.map((page, index) => (
                <div key={index} style={{ animationDelay: `${index * 0.1}s` }} className="mobile-drawer-link-container">
                  {page.route ? (
                    <NextLink
                      href={page.route as string}
                      onClick={closeMenu}
                      className="mobile-drawer-link"
                    >
                      <span className="mobile-drawer-link-text">{page.name}</span>
                      <svg className="mobile-drawer-link-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </NextLink>
                  ) : pathname === "/" ? (
                    <ScrollLink
                      activeClass="active"
                      to={page.nav_id || ""}
                      spy
                      smooth
                      offset={-70}
                      duration={500}
                      onClick={closeMenu}
                      className="mobile-drawer-link"
                    >
                      <span className="mobile-drawer-link-text">{page.name}</span>
                      <svg className="mobile-drawer-link-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </ScrollLink>
                  ) : (
                    <NextLink
                      href={`/#${page.nav_id || ""}`}
                      onClick={closeMenu}
                      className="mobile-drawer-link"
                    >
                      <span className="mobile-drawer-link-text">{page.name}</span>
                      <svg className="mobile-drawer-link-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </NextLink>
                  )}
                </div>
              ))}
            </nav>

            {/* Drawer Footer */}
            <div className="mobile-drawer-footer">
              {/* Theme Toggle */}
              <div className="mobile-drawer-setting">
                <span className="mobile-drawer-setting-label">Theme</span>
                <div className="toggle">
                  <input
                    type="checkbox"
                    className="checkbox"
                    id="checkbox-mobile"
                    checked={darkMode}
                    onChange={toggleDarkMode}
                  />
                  <label htmlFor="checkbox-mobile" className="checkbox-label">
                    <FaMoon color="#f1c40f" />
                    <FaSun color="#f39c12" />
                    <span className="ball"></span>
                  </label>
                </div>
              </div>

              {/* Language Selector */}
              <div className="mobile-drawer-setting">
                <span className="mobile-drawer-setting-label">Select Language</span>
                <div className="mobile-drawer-lang-grid">
                  {languageOptions.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code as any)}
                      className={`mobile-drawer-lang-btn-premium ${currentLang === lang.code ? 'active' : ''}`}
                    >
                      {lang.code.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default ResponsiveAppBar
