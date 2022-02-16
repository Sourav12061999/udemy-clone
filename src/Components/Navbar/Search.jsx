import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import Autocomplete from "./Autocomplete";
import { useState } from "react";
function Search({ size, cont, searchOpen, setsearchOpen }) {
  const Searchbox = styled("div")(({ theme }) => ({
    position: "relative",
    border: "1px solid black",
    borderRadius: 20,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: size,
      },
    },
  }));
  return (
    <>
      <Searchbox>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder={cont ? cont : "Search for anything"}
          inputProps={{ "aria-label": "search" }}
          onChange={() => {}}
          onInput={() => {
            if (!searchOpen) setsearchOpen(true);
          }}
        />
      </Searchbox>
    </>
  );
}

export default Search;
