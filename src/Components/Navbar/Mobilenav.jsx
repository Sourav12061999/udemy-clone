import React from "react";
import { IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import styles from "./styles";
import { Button } from "@mui/material";
import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
function Mobilenav({ userData }) {
  const pages = ["Products", "Pricing", "Blog"];
  const { logo2 } = styles;
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton size="large" color="inherit">
          <MenuIcon />
        </IconButton>
      </Box>
      <Typography variant="h6" noWrap component="div" sx={logo2}>
        Udemy
      </Typography>
      {!userData ? (
        <></>
      ) : (
        <Box sx={{ flexGrow: 0, display: "flex" }}>
          <Link to={"/cart"}>
            <Button
              startIcon={<BsCart3 />}
              sx={{ color: "black", display: "block" }}
            ></Button>
          </Link>
          <IconButton sx={{ p: 0, ml: { xs: 1, md: 2 } }}>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>
              {userData?.name?.trim()[0]}
            </Avatar>
          </IconButton>
        </Box>
      )}
    </>
  );
}

export default Mobilenav;
