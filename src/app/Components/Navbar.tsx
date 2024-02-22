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
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { MdModeNight } from "react-icons/md";

import "./Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";

const pages = ["About me", "Projects", "My Skills", "Let's Connect"];
interface Props {
  s_dm: Function;
  dm: boolean;
}
function ResponsiveAppBar({ dm, s_dm }: Props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [darkMode, setDarkMode] = React.useState(dm); // State for dark mode
  React.useEffect(() => {
    setDarkMode(dm);
  }, [dm]);
  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const toggleDarkMode = () => {
    s_dm(!dm);
    setDarkMode(!darkMode);
    localStorage.setItem("darkmode", JSON.stringify(!dm));
  };
  React.useEffect(() => {
    console.log(darkMode);
  }, [darkMode]);

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
            href="#app-bar-with-responsive-menu"
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

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
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
            <span className="text-[0.8rem]">
              &lt; <strong>Mern Stack dev</strong> /&gt;{" "}
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
                  <li className="navbar__item">
                    <Link
                      activeClass="active"
                      to="landingPage"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <div className="linktag navbar__link">
                        <i data-feather="home"></i>
                        <span>About Me</span>{" "}
                      </div>
                    </Link>
                  </li>
                  <li className="navbar__item">
                    <div className="linktag navbar__link">
                      <i data-feather="folder"></i>
                      <span>Projects</span>
                    </div>
                  </li>
                  <li className="navbar__item">
                    <div className="linktag navbar__link">
                      <i data-feather="help-circle"></i>
                      <span>My Skills</span>
                    </div>
                  </li>
                  <li className="navbar__item">
                    <div className="linktag navbar__link">
                      <i data-feather="settings"></i>
                      <span>Lets connect</span>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </Box>
          <IconButton color="inherit" onClick={toggleDarkMode}>
            {" "}
            {/* Add IconButton for toggling dark mode */}
            <Brightness4Icon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
