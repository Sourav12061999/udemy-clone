import React from "react";
import { Box, Typography, Rating } from "@mui/material";
import { blackBox } from "../Styles/course";
function Blackbox({ heading, subheading, rating, students, image }) {
  console.log(rating);
  return (
    <Box sx={blackBox.box}>
      <Box sx={blackBox.textBox}>
        <Typography variant="h4">{heading}</Typography>
        <Typography variant="h7">{subheading}</Typography>
        <Box sx={blackBox.rating}>
          <Typography sx={blackBox.ratingText}>{rating}</Typography>
          <Rating value={rating} readOnly precision={0.5} />
          <Typography>( {students} students)</Typography>
        </Box>
      </Box>
      <Box sx={blackBox.image}>
        <img style={{ width: "100%" }} src={image} alt="" />
      </Box>
    </Box>
  );
}

export default Blackbox;
