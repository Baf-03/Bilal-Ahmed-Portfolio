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

import "./Navbar.css";

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
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [darkMode, setDarkMode] = React.useState(dm);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page: string) => {
    setAnchorElNav(null);
    if (page) {
      const targetId = page.replace(/\s+/g, "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const toggleDarkMode = () => {
    s_dm(!dm);
    setDarkMode(!darkMode);
    localStorage.setItem("darkmode", JSON.stringify(!dm));
  };

  return (
    <AppBar
      className={darkMode ? "bg-gray-800" : "white"}
      position="static"
      sx={{ background: "transparent", color: darkMode ? "#fff" : "black" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Typography
            variant="h6"
            noWrap
            component="a"
            // href="#app-bar-with-responsive-menu"
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
            <span className="absolute text-[0.8rem]">
              &lt; <strong>Mern Stack developer</strong> /&gt;
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
                        to={page?.nav_id}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => handleCloseNavMenu(page?.name)}
                      >
                        <div className="linktag navbar__link">{page?.name}</div>
                      </ScrollLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </Box>
          <IconButton color="inherit" onClick={toggleDarkMode}>
            <Brightness4Icon />
          </IconButton>

          <Typography
            variant="h5"
            noWrap
            component="a"
            // href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".0rem",
              color: darkMode ? "#fff" : "inherit", // Adjust text color based on dark mode state
              textDecoration: "none",
            }}
          >
            <span className="text-[0.8rem] text-center m-auto">
              &lt; <strong>Mern Stack dev</strong> /&gt;{" "}
            </span>
          </Typography>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
              onClose={() => handleCloseNavMenu("")}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={() => handleCloseNavMenu(page?.name)}>
                  <ScrollLink
                        activeClass="active"
                        to={page?.nav_id}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => handleCloseNavMenu(page?.name)}
                      >
                  {page?.name}
                  </ScrollLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;