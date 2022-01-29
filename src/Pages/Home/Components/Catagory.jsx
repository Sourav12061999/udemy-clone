import React from "react";
import { Typography, Box } from "@mui/material";
import CourseCard from "../../../Components/Course-Card/CourseCard";
function Catagory({ heading, data }) {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 600 }}>
        {heading}
      </Typography>
    </Box>
  );
}

export default Catagory;
