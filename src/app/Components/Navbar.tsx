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
import "./Navbar.css";

const pages = [
  { name: "About me", nav_id: "about" },
  { name: "Projects", nav_id: "Projects" },
  // { name: "My Skills", nav_id: "skills" },
  { name: "Let's Connect", nav_id: "connect" },
];

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
  const [currentLang, setCurrentLang] = useState<string>(localStorage.getItem("language") || "en");

  useEffect(() => {
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

  const handleLanguageChange = (lang: 'en' | 'es' | 'de') => {
    localStorage.setItem("language", lang);
    setCurrentLang(lang);
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
          <Box sx={{ display: { xs: "flex", md: "none" }, position: "absolute", left: 0 }}>
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

          <Typography component="div" className="text-center w-[90vw] lg:w-fit">
            <span className="text text-[1rem] ">&lt; <strong>Dev</strong> /&gt;</span>
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
                    <ScrollLink
                      activeClass="active"
                      to={page.nav_id}
                      spy
                      smooth
                      offset={-70}
                      duration={500}
                      className={`linktag navbar__link ${darkMode ? "text-white" : "text-black"}`}
                    >
                      {page.name}
                    </ScrollLink>
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

            {/* Enhanced Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center gap-2 px-3 py-2 rounded-full border ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-100 text-black border-gray-300'} hover:shadow-md transition-all duration-200 focus:outline-none`}
              >
                <span className="uppercase font-medium">{currentLang}</span>
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isDropdownOpen && (
                <div className={`absolute right-0 mt-2 w-24 rounded-lg shadow-xl ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} overflow-hidden z-10`}>
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`w-full text-left px-4 py-2 text-sm uppercase font-medium ${darkMode ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-100'} transition-colors duration-150 ${currentLang === 'en' ? 'bg-opacity-20 bg-gray-500' : ''}`}
                  >
                    en
                  </button>
                  <button
                    onClick={() => handleLanguageChange('es')}
                    className={`w-full text-left px-4 py-2 text-sm uppercase font-medium ${darkMode ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-100'} transition-colors duration-150 ${currentLang === 'es' ? 'bg-opacity-20 bg-gray-500' : ''}`}
                  >
                    es
                  </button>
                  <button
                    onClick={() => handleLanguageChange('de')}
                    className={`w-full text-left px-4 py-2 text-sm uppercase font-medium ${darkMode ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-100'} transition-colors duration-150 ${currentLang === 'de' ? 'bg-opacity-20 bg-gray-500' : ''}`}
                  >
                    de
                  </button>
                </div>
              )}
            </div>
          </Box>

          <div className={`drawer-overlay ${isMenuOpen ? "open" : ""}`} onClick={closeMenu}></div>

          {/* Mobile Drawer - Redesigned */}
          <div className={`mobile-drawer ${isMenuOpen ? "open" : ""}`}>
            {/* Drawer Header */}
            <div className="mobile-drawer-header">
              <div className="text-2xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                  &lt; <strong>Dev</strong> /&gt;
                </span>
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
                <ScrollLink
                  key={index}
                  activeClass="active"
                  to={page.nav_id}
                  spy
                  smooth
                  offset={-70}
                  duration={500}
                  onClick={closeMenu}
                  className="mobile-drawer-link"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="mobile-drawer-link-text">{page.name}</span>
                  <svg className="mobile-drawer-link-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </ScrollLink>
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
                <span className="mobile-drawer-setting-label">Language</span>
                <div className="mobile-drawer-lang-buttons">
                  {(['en', 'es', 'de'] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageChange(lang)}
                      className={`mobile-drawer-lang-btn ${currentLang === lang ? 'active' : ''}`}
                    >
                      {lang.toUpperCase()}
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
