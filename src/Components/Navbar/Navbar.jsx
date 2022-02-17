import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Search from "./Search";
import Mobilenav from "./Mobilenav";
import { Link } from "react-router-dom";
import url from "../../env";
import { UserdataContest } from "../../App";
import CatagoryBox from "./CatagoryBox";
// Importing styles
import styles from "./styles";
const Navbar = () => {
  const { userData } = useContext(UserdataContest);
  // Destructuring the styles
  const { logo, extraButtons, hoverPink } = styles;
  const [catagoryOpen, setCatagoryOpen] = useState(false);
  return (
    <>
      <AppBar position="static" color="inherit" sx={{ mb: 0.5 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ zIndex: 1001 }}>
            <Link to={"/"}>
              <Box>
                <Typography variant="h6" noWrap component="div" sx={logo}>
                  Udemy
                </Typography>
              </Box>
            </Link>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              <Button
                onClick={() => setCatagoryOpen(true)}
                sx={{ color: "black", fontSize: "12px", ...hoverPink }}
              >
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
              {!userData ? (
                <Box>
                  <a href={`${url}/userSignup/`}>
                    <Button
                      sx={{ color: "black", border: "1px solid black" }}
                      variant="outlined"
                    >
                      Login
                    </Button>
                  </a>
                  <a href={`${url}/userSignup/auth/google`}>
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
                  </a>
                </Box>
              ) : (
                <></>
              )}
            </Box>
            <Mobilenav userData={userData} />
          </Toolbar>
        </Container>
      </AppBar>
      <CatagoryBox setOpen={setCatagoryOpen} open={catagoryOpen} />
    </>
  );
};
export default Navbar;
