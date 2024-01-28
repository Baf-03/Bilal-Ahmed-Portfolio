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
import AdbIcon from "@mui/icons-material/Adb";
// import { DialogWithForm } from '../../Pages/SigninModal';
// import { Link } from 'react-router-dom';
import "./Navbar.css";
// import { Link as ScrollLink, Element } from 'react-scroll';

import Link from "next/link";

const pages = ["About me", "Projects", "My Skills", "Let's Connect"];
const settings = ["<DialogWithForm/>"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event:any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event:any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogin = () => {
    // return <DialogWithForm/>
  };

  return (
    <AppBar
      position="static"
      sx={{ background: "transparent", color: "black" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
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
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
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
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
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
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            <div className="header">
              <nav className="navbar">
                <ul className="navbar__menu">
                  <li className="navbar__item">
                    {/* <ScrollLink to="aboutme" spy={true} smooth={true} duration={500}> */}
                    {/* <Link href="/"> */}

                    <a href="#" className="navbar__link">
                      <i data-feather="home"></i>
                      <span>About Me</span>{" "}
                    </a>
                    {/* </Link> */}
                    {/* </ScrollLink> */}
                  </li>
                  <li className="navbar__item">
                    <a href="#" className="navbar__link">
                      <i data-feather="folder"></i>
                      <span>Projects</span>
                    </a>
                  </li>
                  <li className="navbar__item">
                    <a href="#" className="navbar__link">
                      <i data-feather="help-circle"></i>
                      <span>My Skills</span>
                    </a>
                  </li>
                  <li className="navbar__item">
                    {/* <ScrollLink to="letsConnect" spy={true} smooth={true} duration={500}> */}
                    {/* <Link href="/"> */}
                    <a href="#" className="navbar__link">
                      <i data-feather="settings"></i>
                      <span>Lets connect</span>
                    </a>

                    {/* </Link> */}

                    {/* </ScrollLink> */}
                  </li>
                </ul>
              </nav>
            </div>
          </Box>
          {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' ,justifyContent:"center",gap:"10%"} }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block',background:"white" }}
              >
                {page}
              </Button>
            ))}
          </Box> */}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={handleLogin}>
                    <Link href={"/login"}>{setting}</Link>
                  </Typography>
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
