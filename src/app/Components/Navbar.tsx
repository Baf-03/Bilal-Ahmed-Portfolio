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
  { name: "My Skills", nav_id: "skills" },
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
        background: "transparent",
        color: darkMode ? "#fff" : "black",
      }}
      className={`transition-colors duration-500 ${darkMode ? "bg-gray-800" : "bg-[#e7e5e4]"}`}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "flex", md: "none" }, position: "absolute", left: 0 }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleMenuToggle}
              className={`menu-icon ${isMenuOpen ? "open" : ""}`}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon style={{ color: darkMode ? "#fff" : "#3b82f6" }} />}
            </IconButton>
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

          <Box className={`navbar-drawer ${isMenuOpen ? "open" : ""}`} onClick={closeMenu}>
            <Box className="navbar-drawer-content" onClick={(e) => e.stopPropagation()}>
              <IconButton onClick={closeMenu} className="drawer-close-button">
                <CloseIcon />
              </IconButton>
              <ul>
                {pages.map((page, index) => (
                  <li key={index}>
                    <ScrollLink
                      activeClass="active"
                      to={page.nav_id}
                      spy
                      smooth
                      offset={-70}
                      duration={500}
                      onClick={closeMenu}
                      style={{ fontSize: "1.5rem", textAlign: "center", display: "block", margin: "20px 0" }}
                    >
                      {page.name}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;