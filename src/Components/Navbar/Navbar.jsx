import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Search from "./Search";
import { BsCart3 } from "react-icons/bs";
import Mobilenav from "./Mobilenav";
// Importing styles
import styles from "./styles";
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = ({ signed }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  // Destructuring the styles
  const { appbar, logo, logo2, extraButtons, hoverPink } = styles;
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="inherit" sx={{ mb: 1 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div" sx={logo}>
            Udemy
          </Typography>
          <Mobilenav />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button sx={{ color: "black", fontSize: "12px", ...hoverPink }}>
              Catagories
            </Button>
            <Search size={"35ch"} />
            <Button
              sx={{
                color: "black",
                fontSize: "13px",
                ...extraButtons,
                ...hoverPink,
              }}
            >
              Udemy Business
            </Button>
            <Button
              sx={{
                color: "black",
                fontSize: "13px",
                ...extraButtons,
                ...hoverPink,
              }}
            >
              Tech on Udemy
            </Button>
            <Button startIcon={<BsCart3 />} sx={{ color: "black" }}></Button>
            {!signed ? (
              <Box>
                <Button
                  sx={{ color: "black", border: "1px solid black" }}
                  variant="outlined"
                >
                  Login
                </Button>
                <Button
                  sx={{
                    color: "white",
                    backgroundColor: "black",
                    ml: 2,
                    ":hover": {
                      backgroundColor: "#424242",
                    },
                  }}
                  variant="contained"
                >
                  Sign Up
                </Button>
              </Box>
            ) : (
              <></>
            )}
          </Box>
          {signed ? (
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
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <></>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
