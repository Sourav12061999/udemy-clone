import React from "react";
import { IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import styles from "./styles";
import Search from "./Search";
import { Button } from "@mui/material";
import { BsCart3 } from "react-icons/bs";
function Mobilenav() {
  const pages = ["Products", "Pricing", "Blog"];
  const { logo2 } = styles;
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          /*onClick={handleOpenNavMenu}*/
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <Typography variant="h6" noWrap component="div" sx={logo2}>
        Udemy
      </Typography>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {/* <Search cont={"Search.."} size={"8ch"} /> */}
        <Button sx={{ color: "black" }} startIcon={<BsCart3 />}></Button>
      </Box>
    </>
  );
}

export default Mobilenav;
