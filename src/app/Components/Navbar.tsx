"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { Link as ScrollLink } from "react-scroll";
import CloseIcon from "@mui/icons-material/Close";

import "./Navbar.css";
import Link from "next/link";

const pages = [
  { name: "About me", nav_id: "about" },
  { name: "Projects", nav_id: "Projects" },
  { name: "My Skills", nav_id: "skills" },
  { name: "Let's Connect", nav_id: "connect" },
];

interface Props {
  s_dm: Function;
  dm: boolean;
}

function ResponsiveAppBar({ dm, s_dm }: Props) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [darkMode, setDarkMode] = React.useState(dm);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
    setIsMenuOpen(true);
  };

  const handleCloseNavMenu = (page?: string) => {
    setAnchorElNav(null);
    if (page) {
      const targetId = page.replace(/\s+/g, "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    s_dm(!dm);
    setDarkMode(!darkMode);
    localStorage.setItem("darkmode", JSON.stringify(!dm));
  };

  return (
    <AppBar
      className={`transition-colors duration-500 sticky top-0 ${
        darkMode ? "bg-gray-800" : "bg-[#e7e5e4]"
      }`}
      position="sticky"
      sx={{ background: "transparent", color: darkMode ? "#fff" : "black" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".0rem",
              color: darkMode ? "#fff" : "inherit",
              textDecoration: "none",
            }}
          >
            <span className="absolute text-[1rem] text">
              &lt; <strong>Software Engineer</strong> /&gt;
            </span>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "center",
              },
            }}
          >
            <div className="header">
              <nav className="navbar">
                <ul
                  className="navbar__menu"
                  style={{ color: darkMode ? "#fff" : "inherit" }}
                >
                  {pages.map((page, index) => (
                    <li key={index} className="navbar__item">
                      <ScrollLink
                        activeClass="active"
                        to={page.nav_id}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        <div
                          className={`linktag navbar__link ${
                            darkMode ? "text-white" : "text-black"
                          }`}
                        >
                          {page?.name}
                        </div>
                      </ScrollLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </Box>

          <div className="toggle">
            <input
              type="checkbox"
              id="btn"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <label htmlFor="btn">
              <span className="thumb"></span>
            </label>
            <div className="light"></div>
          </div>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".0rem",
              color: darkMode ? "#fff" : "inherit",
              textDecoration: "none",
            }}
          >
            <span className="text-[0.9rem] text-center m-auto text">
              &lt; <strong>Software Engineer</strong> /&gt;
            </span>
          </Typography>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              className="menu-icon"
            >
              <MenuIcon style={{ color: darkMode ? "#fff" : "#3b82f6" }} />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={() => handleCloseNavMenu()}
              className={`${isMenuOpen ? "transparent-menu" : "opacity-0"} `}
            >
              <IconButton
                onClick={() => handleCloseNavMenu()}
                className="absolute top-3 right-3 text-white"
              >
                <CloseIcon />
              </IconButton>
              <div className="bg-transperent border mt-3 w-[80vw]">
                {pages.map((page, index) => (
                  <MenuItem
                    key={index}
                    className={` ${isMenuOpen ? "my_element" : ""}`}
                  >
                    <ScrollLink
                      activeClass="active"
                      to={page?.nav_id}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={() => handleCloseNavMenu(page?.name)}
                      className="w-[100%] flex items-center justify-center gap-2"
                    >
                      {page?.name}
                    </ScrollLink>
                  </MenuItem>
                ))}
              </div>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
