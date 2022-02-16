import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import React from "react";
import { useState } from "react";
function Search({ size, cont, searchOpen, setsearchOpen }) {
  const Searchbox = styled("div")(({ theme }) => ({
    position: "relative",
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
  const filter = createFilterOptions();
  const [value, setValue] = useState(null);
  return (
    <>
      <Searchbox>
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            if (typeof newValue === "string") {
              setValue({
                title: newValue,
              });
            } else if (newValue && newValue.inputValue) {
              // Create a new value from the user input
              setValue({
                title: newValue.inputValue,
              });
            } else {
              setValue(newValue);
            }
          }}
          // filterOptions={(options, params) => {
          //   const filtered = filter(options, params);

          //   const { inputValue } = params;
          //   // Suggest the creation of a new value
          //   const isExisting = options.some(
          //     (option) => inputValue === option.title
          //   );
          //   if (inputValue !== "" && !isExisting) {
          //     filtered.push({
          //       inputValue,
          //       title: `Add "${inputValue}"`,
          //     });
          //   }
          //   return filtered;
          // }}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          id="free-solo-with-text-demo"
          options={top100Films}
          getOptionLabel={(option) => {
            // // Value selected with enter, right from the input
            // if (typeof option === "string") {
            //   return option;
            // }
            // // Add "xxx" option created dynamically
            // if (option.inputValue) {
            //   return option.inputValue;
            // }
            // // Regular option
            return option.title;
          }}
          renderOption={(props, option) => <li {...props}>{option.title}</li>}
          sx={{ width: 300 }}
          freeSolo
          renderInput={(params) => (
            <TextField {...params} placeholder={"Search..."} />
          )}
        />
      </Searchbox>
    </>
  );
}

export default Search;
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
];
